import React, { useState,useEffect } from "react";
import "./selectmenu.css";
import { Card, CardBody, CardHeader, FormGroup, Label, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import AllList from "./AllList";


function SelectionMenu() {

    //  useEffect(() => {
    //      const getAllSitesFromServer = () => {
    //          axios.get(`https://ebx-services.com/ebdviewretail/documents?localSiteName=AFHOME`).then(
    //              (response) =>{
    //                 // console.log(response);
    //                 console.log(response.data);
    //                 setSites(response.data);
    //              },
    //              (error) => {
    //                  console.log(error);
    //              }
    //          );
    
    //      };
    //      getAllSitesFromServer();
    //  }, []);

    //const [sites, setSites] = useState([]);
    const [selectedsite, setselectedsite] = useState([]);
    
    const [SitePartners, setSitePartners] = useState([]);
    const [selectedpartner, setselectedpartner] = useState('')

    // const sites = ['AFHOME','NPRO','SPTD']
        // const SitePartners = {
        //     'AFHOME': ['All Partner','A', 'F', 'H', 'O', 'M', 'E'],
        //     'NPRO': ['All Partner','N', 'P', 'R', 'O'],
        // }

    const sites = [
        {
            name: "AFHOME",
            partner: ['All Partners', 'Samsung', 'Lg','Sony','Hyundai','Nike']
        },
        {
            name: "NPRO",
            partner: ['All Partners', 'Dell', 'Iphone','Toyota']
        },
    ];

         const handletextSite=(event)=> {
            const selectedsite= event.target.value;
             setselectedsite(selectedsite);
             setSitePartners(sites.find(site => site.name === selectedsite).partner);
         }

         const handletextPartner=(event)=> {
            const selectedpartner= event.target.value;
            setselectedpartner(selectedpartner);
         }

         const handlesubmit = event =>
         {
            event.preventDefault();

            if(fromdateformat > todatefromat)
            {
                alert("Start date can't bigger than from End date");
            }
            else{
                console.log('Success');
            }
           // getProductWithSitenParter(selectedsite,selectedpartner);
            
            <AllList Selectsite={selectedsite} Selectpartner={selectedpartner} />
    
         }
         const getProductWithSitenParter = () => {
            axios.get(`${base_url}/products/${selectedsite}/${selectedpartner}`).then(
                (response) =>{
                   // console.log(response);
                   console.log(response.data);
                   //setProducts(response.data);
                },
                (error) => {
                    console.log(error);
                }
            );
       };

       const [disable, setDisable] = useState(true);
       const [todate, setTodate] = useState([]);
       const [fromdate, setFromdate] = useState([]);

       const [todatefromat, setTodateformat] = useState('');
    const [fromdateformat, setFromdateformat] = useState('');

    const handlefromdate = (e) => {
        const getfromdatevalue = e.target.value;
        const setfromformat = getfromdatevalue.split('-');
        const setfromyear = setfromformat[0];
        const setfrommonth = setfromformat[1];
        const setfromdate = setfromformat[2];
        const setfromdateformat = setfromyear+""+setfrommonth+""+setfromdate;
        const setfromdateformatshow = setfromdate+"/"+setfrommonth+"/"+setfromyear;
        setFromdate(getfromdatevalue);
        setFromdateformat(setfromdateformat);
        setDisable(false);
        console.log(getfromdatevalue);
        console.log(setfromdateformat);
        console.log(setfromdateformatshow);
    }

    const handletodate = (e) =>{
        const gettodatevalue = e.target.value;
        const setdateformat = gettodatevalue.split('-');
        const settoyear = setdateformat[0];
        const settomonth = setdateformat[1];
        const settodate = setdateformat[2];
        const settodateformat = settoyear+""+settomonth+""+settodate;
        const settodateformatshow = settodate+"/"+settomonth+"/"+settoyear;
        setTodate(gettodatevalue);
        setTodateformat(settodateformat);
        
        console.log(gettodatevalue);
        console.log(settodateformat);
        console.log(settodateformatshow);
    }
        
         

         const [checkedboxvalue, setcheckedbox]=useState('');
         const handleCheckbox1 = (e) => {
            const checkedbox = e.target.checked;
            setcheckedbox(checkedbox);
            console.log(checkedbox);
         }

         const [handleCheckboxArchiveValue, sethandleCheckboxArchive]= useState('');
         const handleCheckboxArchive = (e) => {
            const archivecheck = e.target;
            sethandleCheckboxArchive(archivecheck);
            const archivevalue = archivecheck.value;
            console.log(archivevalue);
         }


    return (

        <React.Fragment>
            <section>
                <Card style={{height: '970px', borderBlockEndColor: 'black', width: '350px'}}>
                    <Card style={{height: '200px', borderBlockEndColor: 'black'}}>
                    <CardHeader style={{fontWeight:'bold',backgroundColor: 'lightgreen', height: '30px'}}><h10>Partners</h10>
                        </CardHeader>
                    <CardBody>
                        

                <form style={{height: '80px', backgroundColor: 'white'}}>
                    <FormGroup>
                        <div>
                            <Label style={{fontWeight:'bold', fontSize: '15px', color: 'blue'}}>Select local site</Label>
                                <div className="dropdown">
                                    <div className="dropdown-content">   
                                        <select name="site" className="dropdown-item" placeholder="Select here" onChange={(e)=>handletextSite(e)}>
                                
                                            {
                                                sites.map(site => (
                                                    <option value={site.name}>{site.name}</option>
                                                ))
                                            }
                                            console.log(e.target.key);
                                        </select>
                                    </div>
                                </div>
                        </div>
                    </FormGroup>
                    </form>
                    <form>
                    <FormGroup>
                        <div>
                    <Label style={{fontWeight:'bold', fontSize: '15px', color: 'blue'}}>Select Partner</Label>
                    <div className="dropdown">
                    <div className="dropdown-content">   
                        <select name="partner" placeholder="select here" className="dropdown-item" onChange={(e)=>handletextPartner(e)}>
                        
                            {
                                SitePartners.map(partner => (
                                    <option value={partner}>{partner}</option>
                                ))
                            } 
                        </select>
                    </div>
                </div>
                    </div>
                    </FormGroup>
                    </form>
                    </CardBody>
                    </Card>

                    <Card style={{height: '260px', borderBlockEndColor: 'black'}}>
                        <CardHeader style={{fontWeight:'bold',backgroundColor: 'lightgreen', height: '30px'}}><h10>Period</h10>
                        </CardHeader>
                    <CardBody>
                    <form style={{height: '90px', backgroundColor: 'white'}} onSubmit={handlesubmit}>
                    <FormGroup>
                        <div>
                            <label style={{fontWeight:'bold', fontSize: '15px', color: 'blue'}}>Last{' '}
                            <input style={{width: '50px', paddingLeft: '10px'}} type="text" id="days" disabled value="1"></input>
                            {' '}days</label>
                            </div>          
                            </FormGroup>
                            <FormGroup check>
                                <Input name="checkbox1" value="Custom" type="checkbox" onChange={handleCheckbox1} /> {' '}
                                <Label check>Custom</Label>
                             </FormGroup>
                             <FormGroup>
                             <Label check>Start date</Label>
                                <Input name="date1" type="date" disabled={!checkedboxvalue} placeholder="dd/mm/yyyy" onChange={(e)=>handlefromdate(e)} />
                                
                             </FormGroup>
                             <FormGroup>
                             <Label check>End date</Label>
                                <Input name="date2" type="date" disabled= {disable} placeholder="dd/mm/yyyy" onChange={(e)=>handletodate(e)} />
                                
                             </FormGroup>
                            </form>
                    </CardBody>
                    </Card>

                    <Card style={{height: '90px', borderBlockEndColor: 'black'}}>
                        <CardHeader style={{fontWeight:'bold',backgroundColor: 'lightgreen', height: '30px'}}><h10>Document Type</h10>
                        </CardHeader>
                    <CardBody>
                    <form style={{height: '30px', backgroundColor: 'white'}}>
                    <FormGroup>
                        <div>
                            <input style={{width: '300px', paddingLeft: '10px'}} type="text" id="Documenttype"></input>
                            </div>          
                            </FormGroup>
                            </form>
                            </CardBody>
                            </Card>
                            <Card style={{height: '90px', borderBlockEndColor: 'black'}}>
                        <CardHeader style={{fontWeight:'bold',backgroundColor: 'lightgreen', height: '30px'}}><h10>Text</h10>
                        </CardHeader>
                    <CardBody>
                    <form style={{height: '30px', backgroundColor: 'white'}}>
                    <FormGroup>
                        <div>
                            <input style={{width: '300px', paddingLeft: '10px'}} type="text" id="Texttype"></input>
                            </div>          
                            </FormGroup>
                            </form>
                            </CardBody>
                            </Card>
                            <Card style={{height: '250px', borderBlockEndColor: 'black'}}>
                        <CardHeader style={{fontWeight:'bold',backgroundColor: 'lightgreen', height: '30px'}}><h10>Document archive</h10>
                        </CardHeader>
                    <CardBody>
                    <form style={{height: '90px', backgroundColor: 'white'}}>
                    <FormGroup>
                            <label style={{fontWeight:'bold', fontSize: '13px', color: 'blue'}}>Reception {handleCheckboxArchiveValue.value}</label>
                                      
                            </FormGroup>
                            <FormGroup check>
                                <Input name="ReceptionBeforeTranslation" value="ReceptionBeforeTranslation" type="checkbox" onChange={handleCheckboxArchive} /> {' '}
                                <Label check>Before Translation</Label>
                             </FormGroup>
                             <FormGroup>
                             <Input name="ReceptionAfterTranslation" value="ReceptionAfterTranslation" type="checkbox" onChange={handleCheckboxArchive} /> {' '}
                                <Label check>After Translation</Label>
                             </FormGroup>
                             <FormGroup>
                            <label style={{fontWeight:'bold', fontSize: '13px', color: 'blue'}}>Sending</label>
                                      
                            </FormGroup>
                            <FormGroup check>
                                <Input name="SendingBeforeTranslation" value="SendingBeforeTranslation" type="checkbox" onChange={handleCheckboxArchive} /> {' '}
                                <Label check>Before Translation</Label>
                             </FormGroup>
                             <FormGroup>
                             <Input name="SendingAfterTranslation" value="SendingAfterTranslation" type="checkbox" onChange={handleCheckboxArchive} /> {' '}
                                <Label check>After Translation</Label>
                             </FormGroup>
                            </form>
                    </CardBody>
                    </Card>
                    <card style={{height: '50px', borderBlockEndColor: 'black'}}>
                        <CardBody>
                            <form onSubmit={handlesubmit} style={{height: '50px', backgroundColor: 'white'}}>
                                <FormGroup>
                                <button type="submit" style={{background: 'green', color: 'white', width: '150px'}}>Search</button>
                                </FormGroup>
                            </form>
                        </CardBody>
                    </card>
                    </Card>
            </section>
        </React.Fragment>
    );
}

export default SelectionMenu