import React, { useState,useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import OneList from "./OneList";
import "./tableContent.css";
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";



const AllList = () => {

  /*   const getAllListFromServer = () => {
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
    }; */

        //getAllListFromServer();

    const [products, setProducts] = useState([]);

    useEffect(() => {
              const getAllSitesFromServer = () => {
                  axios.get(`/documents?localSiteName=AFHOME`).then(
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
              getAllSitesFromServer();
          }, []);
    

    return(
        <div>
            <section>
            <Card className="App">
         <CardBody>
        <table className="fixed_header">
                <thead>
                    <tr>
                        <th>Issue Date</th>
                        <th>Product Name</th>
                        <th>Prize</th>
                        <th>Site Name</th>
                        <th>Partner Name</th>
                        <th>Interchange Number</th>
                    </tr>
                </thead>
                <tbody>
                 {products.length > 0
                    ? products.map((item) => <OneList key={item.id} product={item} />)
                    : "No Product"
            } 
                </tbody>
            </table> 
        </CardBody>
        </Card>
        </section>
        </div>
    );
        }

export default AllList