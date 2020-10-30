import React, { Component } from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {NavLink} from '../../components'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            
            <Navbar bg="light" expand="lg">
                <Container>
                            <Navbar.Brand link="/">E-Commerce</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavLink link="/">Home</NavLink>
                                    <NavLink link="/katalog">Catalog</NavLink>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-md-2" />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                                <Nav className="mr-right">
                                    <NavLink link="/masuk">Masuk</NavLink>
                                    <NavLink link="/daftar">Daftar</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
         );
    }
}
 
export default Navigation;