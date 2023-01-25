import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import NavDropdown from 'react-bootstrap/NavDropdown';
const topHeader = {
    backgroundColor: '#0b0a0a',

}
const topHeadersub = {
    backgroundColor: '#0b0a0a',
    display: 'flex',
    justifyContent: ' space-between',
    minHeight: '20px',
    color: ' #fff',
    padding: '0px 0px 2px 0px'
}
const navBarstyle = {
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 0px 0px 0px, rgb(0 0 0 / 14%) 0px 0px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 4px 0px',
}
export default function Header() {
    return (
        <div >
            <div style={topHeader}> <Container><div style={topHeadersub}><div><PhoneIcon fontSize="small"/>+910000000000</div><div><MailIcon fontSize="small"/>info@dotsoftsolutions.com</div></div></Container></div>
            <Navbar collapseOnSelect expand="lg" bg="#fff" style={navBarstyle}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="assets/img/5.png" width="100" alt="visa App logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Dubai Visa </Nav.Link>                            
                            <Nav.Link href="/">Type of visa</Nav.Link>
                            <Nav.Link href="/">Documents Required</Nav.Link>
                            <Nav.Link href="/">How To Apply</Nav.Link>
                            <Nav.Link href="/Registration" > Apply Now</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>

                        
                        <Nav>
                            {/* <Nav.Link href="#deets">Profile</Nav.Link> */}
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}