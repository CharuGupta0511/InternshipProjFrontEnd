import React, { useState,useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import OneList from "./OneList";
import "./tableContent.css";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";



const AllList = () => {

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
         

    const [products, setProducts] = useState([]);

         useEffect(() => {
              const getAllSitesFromServer = () => {
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
        
              };
              getAllSitesFromServer();
          }, []);
    

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
                 {products.length > 0
                    ? products.map((item, idx) => <OneList key={item.id} product={item} />)
                    : "No Product"
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