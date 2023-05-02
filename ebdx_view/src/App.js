import React, { useState } from 'react';
import {Row,Col, Container, Card, DropdownItem} from "reactstrap";
import { BrowserRouter,Route,Routes,NavLink, Router } from 'react-router-dom';
import { Nav, NavDropdown, NavItem } from 'react-bootstrap';
import Home from './Components/Home';
import About from './Components/About';
import Language from './Components/Language';
import logo from './image/logo.jpg';
import { ToastContainer } from 'react-toastify';
import SelectionMenu from './Components/SelectionMenu';
import AllList from './Components/AllList';

function App() {

    function closeTab(){
        console.log("You clicked on exit");
        const confirmbox = window.confirm("Do you want to close this window?")
        if(confirmbox === true){
            window.close();
        }     
    }

  return (
    <>
        <BrowserRouter>
            <div style={{
                display: "flex",
                background: 'lightblue',
                padding: '5px 0 5px 5px',
                fontSize: '20px',
            }}>
                <div style={{ margin: '10px' }}>
                    <Nav>
                        <NavDropdown title = "Home">
                            <NavDropdown.Item onClick={closeTab}>Exit</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <NavLink to="/" style={({ isActive }) => ({ 
                        color: isActive ? 'green' : 'white' })}>
                        Home
                        <DropdownItem>Exit</DropdownItem>
                    </NavLink> */}
                </div>
                <div style={{ margin: '10px' }}>
                    <NavLink to="/Language" style={({ isActive }) => ({ 
                        color: isActive ? 'green' : 'white' })}>
                        Language
                    </NavLink>
                </div>
                <div style={{ margin: '10px' }}>
                    <NavLink to="/About" style={({ isActive }) => ({ 
                        color: isActive ? 'green' : 'white' })}>
                        About
                    </NavLink>
                </div>
            </div>
            <div>
            <ToastContainer />
            <Container>
                <Row>
                    <Col md={4}>
                        <React.Fragment>
                            <SelectionMenu />
                        </React.Fragment>    
                    </Col>
                    <Col md={8}>
                        <div style={{height: '150px', width: '950px', margin: '5px'}}>
                            <label style={{color: 'green'}}>Interchange Number</label>{' '}
                        <input name="SearchTextbox" type="textbox"/> {' '}
                                <button style={{background: 'green', color: 'white'}}>Go</button>
                        <div className='logo' style={{float : 'right', margin : '10px'}}>
                <img src={logo} height={100} width={200} /> 
            </div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Language" element={<Language />} />
                <Route exact path="/About" element={<About />} />
            </Routes>
            </div>
            <AllList />
        </Col>
        </Row>
        </Container>
            </div>
        </BrowserRouter>
        
    </>
);
}

export default App;
