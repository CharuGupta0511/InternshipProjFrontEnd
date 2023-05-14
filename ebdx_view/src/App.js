import React, { useState } from 'react';
import {Row,Col, Container, CardBody, Card, FormGroup, DropdownItem} from "reactstrap";
import { BrowserRouter,NavLink } from 'react-router-dom';
import { Nav, NavDropdown, NavItem } from 'react-bootstrap';
import About from './Components/About';
import { ToastContainer } from 'react-toastify';
import SelectionMenu from './Components/SelectionMenu';
import Language from './Components/Language';
import ExitApp from './Components/ExitApp';

function App() {

   /*  function closeTab(){
        console.log("You clicked on exit");
        const confirmbox = window.confirm("Do you want to exit this page?")
        if(confirmbox === true){
            window.close();
        }     
    } */

    const [showModal, setShowModal] = useState(false);
    const [showModalLanguage, setShowModalLanguage] = useState(false);
    const [showModalExit, setShowModalExit] = useState(false);

  return (
    <>
        <BrowserRouter>
            <div style={{
                display: "flex",
                background: 'lightgreen',
                padding: '5px 0 5px 5px',
                fontSize: '20px',
                height: '70px',
                border: '2px solid green',
            }}>
                <div style={{ margin: '10px', width: '80px' }}>
                    <Nav>
                        <NavDropdown title = "Home">
                            <NavDropdown.Item style={{background: 'lightgreen',color: 'blue'}} onClick={() => setShowModalExit(true)}>Exit</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <NavLink to="/" style={({ isActive }) => ({ 
                        color: isActive ? 'green' : 'white' })}>
                        Home
                        <DropdownItem>Exit</DropdownItem>
                    </NavLink> */}
                </div>
                <div style={{ margin: '10px', width: '120px' }}>
                    <Nav>
                <NavDropdown title = "Language">
                            <NavDropdown.Item style={{background: 'lightgreen',color: 'blue'}} onClick={() => setShowModalLanguage(true)}>Franch</NavDropdown.Item>
                            
                        </NavDropdown>
                        </Nav>
                </div>
                <div style={{ margin: '10px', width: '100px' }}>
                <Nav>
                        <NavDropdown title = "Help">
                            <NavDropdown.Item style={{background: 'lightgreen',color: 'blue'}} onClick={() => setShowModal(true)}>About eBDView</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                </div>
            </div>
            <div>
            <ToastContainer />
            
            <Container>
            <SelectionMenu />
                {showModal && <About trigger={showModal} setTrigger={setShowModal} />}
                {showModalLanguage && <Language trigger={showModalLanguage} setTrigger={setShowModalLanguage} />}
                {showModalExit && <ExitApp trigger={showModalExit} setTrigger={setShowModalExit} />}
        </Container>
            </div>
        </BrowserRouter>
        
    </>
);
}

export default App;
