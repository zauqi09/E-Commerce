import React, { Component } from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {NavLink} from '../../components'
import { connect } from "react-redux"
import './style.css'
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    change = () =>{
        this.props.doLogout()
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
                                            {/* <div className="troley">
                                                <div className="count">{this.props.order}</div>
                                                <NavLink link="/keranjang"><img alt="" src="https://www.flaticon.com/svg/static/icons/svg/833/833314.svg" width="17" /></NavLink>
                                            </div> */}
                                            <NavLink link="/admin">Admin</NavLink>
                                            <li className="nav-item">
                                                <div className="nav-link" onClick={this.change}>Keluar</div>
                                            </li >
                                            <div className="troley">
                                                <div className="count">{this.props.order}</div>
                                                <NavLink link="/keranjang"><img alt="" src="https://www.flaticon.com/svg/static/icons/svg/833/833314.svg" width="17" /></NavLink>
                                            </div>
                                        </Nav>
                                        :
                                        <Nav className="mr-right">
                                            <div className="troley">
                                                <div className="count">{this.props.order}</div>
                                                <NavLink link="/keranjang"><img alt="" src="https://www.flaticon.com/svg/static/icons/svg/833/833314.svg" width="17" /></NavLink>
                                            </div>
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
        order: state.cart.order,
        bestSeller : state.product.bestSeller,
        newArrival : state.product.newArrival,
        discountItem : state.product.discountItem,
        dataProduct : state.product.dataProduct,
        dataLogin : state.auth.dataLogin
    }
    
}
const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch({ type: "LOGOUT" }),
})

export default connect(mapStateToProps,mapDispatchToProps)(Navigation)
