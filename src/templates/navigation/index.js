import React, { Component } from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {NavLink} from '../../components'
import { connect } from "react-redux"

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    change = () =>{
        this.props.doLogout(this.props.userList,
            this.props.listProduct,
            this.props.bestSeller,
            this.props.discountItem,
            this.props.newArrival,
            )
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
                                {this.props.statusLogin?
                                <>
                                    {
                                        this.props.dataLogin.type===1?
                                        <Nav className="mr-right">
                                            <NavLink link="/keranjang">Keranjang</NavLink>
                                            <NavLink link="/admin">Admin</NavLink>
                                            <li className="nav-item">
                                                <div className="nav-link" onClick={this.change}>Keluar</div>
                                            </li >
                                        </Nav>
                                        :
                                        <Nav className="mr-right">
                                            <NavLink link="/keranjang">Keranjang</NavLink>
                                            <li className="nav-item">
                                                <div className="nav-link" onClick={this.change}>Keluar</div>
                                            </li >
                                        </Nav>
                                    }
                                    
                                </>
                                :
                                <>
                                    <Nav className="mr-right">
                                        <NavLink link="/masuk">Masuk</NavLink>
                                        <NavLink link="/daftar">Daftar</NavLink>
                                    </Nav>
                                </>
                                }
                            </Navbar.Collapse>
                </Container>
            </Navbar>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
        listProduct: state.product.listProduct,
        bestSeller : state.product.bestSeller,
        newArrival : state.product.newArrival,
        discountItem : state.product.discountItem,
        dataProduct : state.product.dataProduct,
        dataLogin : state.auth.dataLogin
    }
    
}
const mapDispatchToProps = (dispatch) => ({
    doLogout: (userList,listProduct,bestSeller,discountItem,newArrival) => dispatch({ type: "LOGOUT", payload: {userList,listProduct,bestSeller,discountItem,newArrival} }),
})

export default connect(mapStateToProps,mapDispatchToProps)(Navigation)
