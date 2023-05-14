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
    const documenttypevalue = props.documenttype1;
    const [products, setProducts] = useState([]);

    console.log(localsitevalue);
    console.log(localsitepartnervalue);

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
                    ? products.map((item, idx) => 
                        <OneList key={item.id} product={item} />)

                    : products.filter(item => {
                        return (item.partner === localsitepartnervalue);
                        })
                    .map((item, idx) => 
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