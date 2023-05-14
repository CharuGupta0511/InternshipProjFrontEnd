import './SearchButtonPopup.css';
import React, { useState,useEffect } from "react";
import axios from "axios";
import OneList from "./OneList";
import "./tableContent.css";

function SearchButtonPopup(props){

    const localsitevalue = props.localsite1;
    const localsitepartnervalue = props.localsitepartner1;
    const searchtextboxValue = props.searchTextboxValue1;
    const [products, setProducts] = useState([]);

    console.log(localsitevalue);
    console.log(localsitepartnervalue);
    console.log(searchtextboxValue);

         useEffect(() => {
              getAllSitesFromServer();
              document.body.style.overflowY = "hidden";
              return () => {
                document.body.style.overflowY = "scroll";
              };
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

    return (props.trigger) ? (
        <div className="popup1">
            <div className="popup-inner1">
                <div className="modal_close1" onClick={() => props.setTrigger(false)}>&times;</div>
                <div className="modal_title1">eBDView v 1.0.1</div>
                <div className="modal_content1">
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
                    ? 
                    products.filter(item => {
                        return (item.docNumber === searchtextboxValue);
                        })
                    .map((item, idx) => 
                        <OneList key={item.id} product={item} />)

                    : products.filter(item => {
                        return (item.partner === localsitepartnervalue && item.docNumber === searchtextboxValue);
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
                </div>
                
                <div className="modal_footer1">
                <button className="close-btn1" onClick={() => props.setTrigger(false)}>close</button>
                </div>
                
                {props.children}
            </div>
        </div>
    ) : "";
}

export default SearchButtonPopup