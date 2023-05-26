import React, { useState,useEffect } from "react";
import "./selectmenu.css";
import { useNavigate } from "react-router-dom";
import { Row,Col, Card, CardBody, CardHeader, FormGroup, Label, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import AllList from "./AllList";
import logo from './image/logo.jpg';
import App from "../App";
import SearchButtonPopup from "./SearchButtonPopup";
import DatePopup from "./DatePopup";


function SelectionMenu() {

     

    //const [sites, setSites] = useState([]);
    const [selectedsite, setselectedsite] = useState('AFHOME');
    
    const [SitePartners, setSitePartners] = useState([]);
    const [selectedpartner, setselectedpartner] = useState('All Partners')
    const navigate = useNavigate();

    // const sites = ['AFHOME','NPRO','SPTD']
        // const SitePartners = {
        //     'AFHOME': ['All Partner','A', 'F', 'H', 'O', 'M', 'E'],
        //     'NPRO': ['All Partner','N', 'P', 'R', 'O'],
        // }

    const sites = [
        {
            name: "AFHOME",
            partner: ['All Partners', 'LEROY_MER_VENDIN', 'CASTO']
        },
        {
            name: "NPRO",
            partner: ['All Partners', 'BRICO PLAN-IT', 'CASTO','LEROY_MER_POR']
        },
    ];

    useEffect(() => {
        const getFirstTimePartner = () => {
          setSitePartners(sites.find(site => site.name === selectedsite).partner);
          setsuccessbutton(false);
        };
        getFirstTimePartner();
    }, [selectedsite]);

         const handletextSite=(event)=> {
            const selectedsite= event.target.value;
             setselectedsite(selectedsite);
             setselectedpartner([]);
             setSitePartners(sites.find(site => site.name === selectedsite).partner);
             setselectedpartner("All Partners");
             setsuccesspartnerbutton(false);
             setDocumentTypeboxValue('');
             setsuccessbutton(false);

             setTodate('');
            setFromdate('');
            setcheckedbox('');
            setTodateformat('');
            setFromdateformat('');
            setDisable(true);
            setsearchboxValue('');
         }

         const [successpartnerbutton, setsuccesspartnerbutton] = useState(false);
         const handletextPartner=(event)=> {
            const selectedpartner= event.target.value;
            setselectedpartner(selectedpartner);
            setsuccessbutton(false);
            setsuccesspartnerbutton(true);
            setDocumentTypeboxValue('');
            setsearchboxValue('');
            
         }

         const [DocumentTypeboxValue, setDocumentTypeboxValue]=useState('');
         function handleDocumentTypeTextbox(e){
            e.preventDefault();
            const docTypebox = e.target.value;
            setDocumentTypeboxValue(docTypebox);
            console.log(docTypebox);
            setsuccessbutton(false);
         }

         const [searchboxValue, setsearchboxValue]=useState('');
         const handleSearchTextbox = (e) => {
            e.preventDefault();
            const searchbox = e.target.value;
            setsearchboxValue(searchbox);
            console.log(searchbox);
         }

         const [searchbutton, setsearchbutton] = useState(false);
         const handlesubmitSearch = event =>
         {
            event.preventDefault();
            setsearchbutton(true);
            

         }

         const handlesubmitSearchClear = event =>
         {
            event.preventDefault();
            setsearchboxValue('');
            
         }

         const[showmodalCalender, setshowmodalCalender] = useState(false);
        const [successbutton, setsuccessbutton] = useState(false);
         function handlesubmit(event)
         {
            event.preventDefault();
            if (fromdateformat)
            {
                if(todate)
                {
                    if(fromdateformat > todatefromat)
                    {
                        setshowmodalCalender(true);
                  //  alert("Start date can't be later than End date");
                        setsuccessbutton(false);
                    }
                    else{
                        console.log('Success');
                setsuccessbutton(true);
                setsearchboxValue('');
                setsuccesspartnerbutton(false);
                    }
                }
                else
                {
                    setshowmodalCalender(true);
                  //  alert("Start date can't be later than End date");
                        setsuccessbutton(false);
                }
            }
            
            else{
                console.log('Success');
                setsuccessbutton(true);
                setsuccesspartnerbutton(false);
                setsearchboxValue('');
            }

            
           // getProductWithSitenParter(selectedsite,selectedpartner);
    
         }
         /* const getProductWithSitenParter = () => {
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
       }; */

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
        setsuccessbutton(false);
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
        setsuccessbutton(false);
    }
        
         

         const [checkedboxvalue, setcheckedbox]=useState('');
         const handleCheckbox1 = (e) => {
            const checkedbox = e.target.checked;
            setcheckedbox(checkedbox);
            if(!checkedbox){  
            setTodate('');
            setFromdate('');
            setTodateformat('');
            setFromdateformat('');
            setDisable(true);
            }
            console.log(checkedbox);
         }

         const [handleCheckboxArchiveValue, sethandleCheckboxArchive]= useState('');
         const handleCheckboxArchive = (e) => {
            const archivecheck = e.target;
            sethandleCheckboxArchive(archivecheck);
            const archivevalue = archivecheck.value;
            console.log(archivevalue);
            const mycheckbox = document.getElementsByName("mycheckbox");
            Array.prototype.forEach.call(mycheckbox,function(e1){
                e1.checked = false;
            });
            e.target.checked = true;
         }


    return (
        <Row>
                    <Col md={4}>
                    <React.Fragment>
            <section>
                <Card style={{height: '950px',border: '2px solid green', borderBlockEndColor: 'black', width: '350px', right: '70px'}}>
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
                    <form style={{height: '90px', backgroundColor: 'white'}}>
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
                                <Input name="date1" type="date" value={fromdate} disabled={!checkedboxvalue} placeholder="dd/mm/yyyy" onChange={(e)=>handlefromdate(e)} />
                                
                             </FormGroup>
                             <FormGroup>
                             <Label check>End date</Label>
                                <Input name="date2" type="date" value={todate} disabled= {disable} placeholder="dd/mm/yyyy" onChange={(e)=>handletodate(e)} />
                                
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
                            <input style={{width: '300px', paddingLeft: '10px'}} type="text" onChange={handleDocumentTypeTextbox} value={DocumentTypeboxValue}></input>
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
                            <label style={{fontWeight:'bold', fontSize: '13px', color: 'blue'}}>Reception</label>
                                      
                            </FormGroup>
                            <FormGroup check>
                                <Input name="mycheckbox" value="ReceptionBeforeTranslation" type="checkbox" onChange={handleCheckboxArchive} /> {' '}
                                <Label check>Before Translation</Label>
                             </FormGroup>
                             <FormGroup>
                             <Input name="mycheckbox" value="ReceptionAfterTranslation" type="checkbox" onChange={handleCheckboxArchive} /> {' '}
                                <Label check>After Translation</Label>
                             </FormGroup>
                             <FormGroup>
                            <label style={{fontWeight:'bold', fontSize: '13px', color: 'blue'}}>Sending</label>
                                      
                            </FormGroup>
                            <FormGroup check>
                                <Input name="mycheckbox" value="SendingBeforeTranslation" type="checkbox" onChange={handleCheckboxArchive} /> {' '}
                                <Label check>Before Translation</Label>
                             </FormGroup>
                             <FormGroup>
                             <Input name="mycheckbox" value="SendingAfterTranslation" type="checkbox" onChange={handleCheckboxArchive} /> {' '}
                                <Label check>After Translation</Label>
                             </FormGroup>
                            </form>
                    </CardBody>
                    </Card>
                    <card style={{height: '50px', borderBlockEndColor: 'black'}}>
                        <CardBody>
                            <form style={{height: '4px', backgroundColor: 'white'}}>
                                <FormGroup>
                                <button type="submit" onClick={handlesubmit} style={{background: 'green', color: 'white', width: '150px'}}>Search</button>
                                </FormGroup>
                            </form>
                        </CardBody>
                    </card>
                    </Card>
            </section>
        </React.Fragment>
                    </Col>
                    <Col md={8}>
                    <Card style={{height: '950px',border: '2px solid green', borderBlockEndColor: 'black', width: '1100px', right: '160px'}}>
                    <Card style={{height: '150px', borderBlockEndColor: 'black'}}>
                    <CardBody>
                    <form style={{height: '80px', backgroundColor: 'white'}}>
                    <FormGroup>
                        <div style={{height: '150px', width: '1000px', margin: '5px'}}>
                            <label style={{color: 'green'}}>Interchange Number</label>{' '}
                        <input name="SearchTextbox" type="textbox" disabled={!successbutton} onChange={handleSearchTextbox} value={searchboxValue} /> {' '}
                                <button  disabled={!successbutton} style={{background: 'green', color: 'white', width: '60px', boxShadow: '0 2px 10px #999'}} onClick={handlesubmitSearch }>Go</button>{' '}
                                <button  disabled={!successbutton} style={{background: 'blue', color: 'white', width: '60px', boxShadow: '0 2px 10px #999'}} onClick={handlesubmitSearchClear }>Clear</button>
                        <div className='logo' style={{float : 'right', margin : '10px'}}>
                <img src={logo} height={100} width={200} /> 
            </div>
            </div>
            </FormGroup>
            </form>
            <div>
            <Card style={{height: '400px', borderBlockEndColor: 'black',  width: '1090px', right: '12px', top: "10px"}}>
            <CardBody>
                    <form style={{height: '80px', backgroundColor: 'white'}}>
            {successbutton && <AllList localsite1={selectedsite} localsitepartner1={selectedpartner} documentType1={DocumentTypeboxValue} todate1={todatefromat} fromdate1={fromdateformat} />}
            {searchbutton && <SearchButtonPopup trigger={searchbutton} setTrigger={setsearchbutton} localsite1={selectedsite} localsitepartner1={selectedpartner} searchTextboxValue1={searchboxValue} />}
            {showmodalCalender && <DatePopup trigger={showmodalCalender} setTrigger={setshowmodalCalender} />}
            {successpartnerbutton && <AllList localsite1={selectedsite} localsitepartner1={selectedpartner} documentType1={DocumentTypeboxValue} todate1={todatefromat} fromdate1={fromdateformat} />}
            
            </form>
            </CardBody>
            </Card>
            </div>
            </CardBody>
            </Card>
            </Card>
                    </Col>
                    </Row>

        
    );
}

export default SelectionMenu