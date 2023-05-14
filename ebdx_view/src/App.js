import React, { useState } from 'react';
import {Row,Col, Container, CardBody, Card, FormGroup, DropdownItem} from "reactstrap";
import { BrowserRouter,Route,Routes,NavLink, Router } from 'react-router-dom';
import { Nav, NavDropdown, NavItem } from 'react-bootstrap';
import Home from './Components/Home';
import About from './Components/About';
import Language from './Components/Language';
import logo from './image/logo.jpg';
import { ToastContainer } from 'react-toastify';
import SelectionMenu from './Components/SelectionMenu';
import AllList from './Components/AllList';
import { ReactDialogBox } from 'react-js-dialog-box'

function App() {

    function closeTab(){
        console.log("You clicked on exit");
        const confirmbox = window.confirm("Do you want to exit this page?")
        if(confirmbox === true){
            window.close();
        }     
    }

    const [showModal, setShowModal] = useState(false);

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
                <div style={{ margin: '10px', width: '100px' }}>
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
                        color: isActive ? 'green' : 'blue' })}>
                        Language
                    </NavLink>
                </div>
                <div style={{ margin: '10px' }}>
                <Nav>
                        <NavDropdown title = "Help">
                            <NavDropdown.Item onClick={() => setShowModal(true)}>About eBDView</NavDropdown.Item>
                            {showModal && <About />}
                        </NavDropdown>
                    </Nav>
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
                    <Card style={{height: '900px', borderBlockEndColor: 'black', width: '1100px', right: '160px'}}>
                    <Card style={{height: '150px', borderBlockEndColor: 'black'}}>
                    <CardBody>
                    <form style={{height: '80px', backgroundColor: 'white'}}>
                    <FormGroup>
                        <div style={{height: '150px', width: '1000px', margin: '5px'}}>
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
            </FormGroup>
            </form>
            </CardBody>
            </Card>
            <Card style={{height: '400px', borderBlockEndColor: 'black'}}>
                <CardBody>
                <form style={{height: '380px', backgroundColor: 'white'}}>
                    <FormGroup>
                        <AllList />
                </FormGroup>
            </form>
                </CardBody>
            </Card>
            </Card>
        </Col>
        </Row>
        </Container>
            </div>
        </BrowserRouter>
        
    </>
);
}

export default App;
