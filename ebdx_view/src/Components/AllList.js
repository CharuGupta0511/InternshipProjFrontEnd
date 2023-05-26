import React, { useState,useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import OneList from "./OneList";
import "./tableContent.css";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";


function AllList(props) {

    /* useEffect(() => {
        const getAllListFromServer = () => {
            axios.get(`${base_url}/products`).then(
                (response) =>{
                   // console.log(response);
                   console.log(response.data);
                   setProducts(response.data);
                },
                (error) => {
                    console.log(error);
                }
            );
        };
        getAllListFromServer();
    }, []); */
         
    const localsitevalue = props.localsite1;
    const localsitepartnervalue = props.localsitepartner1;
    const documenttypevalue = props.documentType1;
    const fromdatevalue = props.fromdate1;
    const todatevalue = props.todate1;

    const [products, setProducts] = useState([]);

    console.log(localsitevalue);
    console.log(localsitepartnervalue);
    console.log(documenttypevalue);
    console.log(fromdatevalue);
    console.log(todatevalue);

         useEffect(() => {
              getAllSitesFromServer();
          },[]);
          

          const getAllSitesFromServer = () => {
            if(localsitevalue === "AFHOME") {
              axios.get(`/documents?localSiteName=AFHOME`).then(
                  (response) =>{
                     // console.log(response);
                     console.log(response.data);
                     setProducts(response.data.documents);
                     
                  },
                  (error) => {
                      console.log(error);
                  }
              );
                }
                else{
                    axios.get(`/documents?localSiteName=NPRO`).then(
                        (response) =>{
                           // console.log(response);
                           console.log(response.data);
                           setProducts(response.data.documents);
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
                }
          };

    return(
        <div>
            <section>
            <div>
                <div className="table-wrapper">
                <table>
                <thead>
                        <th>Date and Time</th>
                        <th>Type</th>
                        <th>Sender code</th>
                        <th>Reciver code</th>
                        <th>Partner</th>
                        <th>File name</th>
                        <th>Interchange Numnber</th>
                        <th>Nber of documnet</th>
                        <th>Doc Info</th>
                </thead>
                <tbody>
                    {
                    products.length > 0 && localsitepartnervalue === "All Partners" 
                    ? products.filter(item => {
                         if(documenttypevalue && fromdatevalue && todatevalue){
                            let setdateformat1 = item.dateLastModif.split(' ');
                            let setdateformat = setdateformat1[0].split('/');
                            let settodate = setdateformat[0];
                            let settomonth = setdateformat[1];
                            let settoyear = setdateformat[2];
                            let settodateformat = settoyear+""+settomonth+""+settodate;
                            if(item.type.toUpperCase().includes(documenttypevalue) && fromdatevalue <= settodateformat && todatevalue >= settodateformat){
                                console.log(settodateformat);
                                return(item.type && item.dateLastModif);
                            }
                        }
 
                        else if(documenttypevalue){
                            if(item.type.toUpperCase().includes(documenttypevalue))
                                return (item.type);
                        }

                        else if(fromdatevalue && todatevalue){
                            let setdateformat1 = item.dateLastModif.split(' ');
                            let setdateformat = setdateformat1[0].split('/');
                            let settodate = setdateformat[0];
                            let settomonth = setdateformat[1];
                            let settoyear = setdateformat[2];
                            let settodateformat = settoyear+""+settomonth+""+settodate;
                            if(fromdatevalue <= settodateformat && todatevalue >= settodateformat)
                            {
                                console.log("yess");
                                return(item.dateLastModif);
                            }
                            }
                            else
                            return(item.partner);
                        })
                    .map((item) => 
                        <OneList key={item.id} product={item} />)

                    : products.filter(item => {
                        if(documenttypevalue && fromdatevalue && todatevalue){
                            let setdateformat1 = item.dateLastModif.split(' ');
                            let setdateformat = setdateformat1[0].split('/');
                            let settodate = setdateformat[0];
                            let settomonth = setdateformat[1];
                            let settoyear = setdateformat[2];
                            let settodateformat = settoyear+""+settomonth+""+settodate;
                            if(item.type.toUpperCase().includes(documenttypevalue) && fromdatevalue <= settodateformat && todatevalue >= settodateformat){
                                console.log(settodateformat);
                                return(item.type && item.dateLastModif && item.partner === localsitepartnervalue);
                            }
                        }
                        else if(documenttypevalue){
                            if(item.type.toUpperCase().includes(documenttypevalue))
                                return (item.type && item.partner === localsitepartnervalue);
                        }

                        else if(fromdatevalue && todatevalue){
                            let setdateformat1 = item.dateLastModif.split(' ');
                            let setdateformat = setdateformat1[0].split('/');
                            let settodate = setdateformat[0];
                            let settomonth = setdateformat[1];
                            let settoyear = setdateformat[2];
                            let settodateformat = settoyear+""+settomonth+""+settodate;
                            if(fromdatevalue <= settodateformat && todatevalue >= settodateformat)
                            {
                                console.log("yess");
                                return(item.dateLastModif && item.partner === localsitepartnervalue);
                            }
                            }
                            else
                             return(item.partner === localsitepartnervalue)
                        })
                    .map((item) => 
                            <OneList key={item.id} product={item} />)
                    }
                </tbody>
            </table> 
                </div>
            </div>
        </section>
        </div>
    );
        }

export default AllList