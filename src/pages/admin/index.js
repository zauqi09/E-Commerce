import React, { Component } from 'react';
import ProdukAdmin from './produk'
import UserAdmin from './user'
import SetHomePage from './sethomepage'
import Transaksi from './trx'
import { Switch, Route } from "react-router-dom"
import { Col, Container, Row ,Navbar,Nav} from 'react-bootstrap';
import './style.css'
import {NavAdmin} from '../../components'
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    showPageAdmin = () => {
        //const { statusLogin } = this.props
        return (
            <Switch>
                <Route exact path="/admin" component ={() => <ProdukAdmin />}/>
                <Route path="/admin/user" component ={() => <UserAdmin />}/>
                <Route path="/admin/sethomepage" component ={() => <SetHomePage />}/>
                <Route path="/admin/transaksi" component ={() => <Transaksi />}/>
            </Switch>
        )
    }
    render() { 
        if (!this.props.statusLogin && this.props.dataLogin.type!==1){
            return <Redirect to='/masuk'/>
        }
        return ( 
            <>
                
                <Container>
                    <br/>
                    <h4>Hi Admin!</h4>
                    <br/>
                    <Row>
                        <Navbar bg="light" expand="lg">
                            <Nav className="mr-auto">
                                <NavAdmin link="/admin">Produk</NavAdmin>
                                <NavAdmin link="/admin/user">User</NavAdmin>
                                <NavAdmin link="/admin/sethomepage">Home Page</NavAdmin>
                                <NavAdmin link="/admin/transaksi">Transaksi</NavAdmin>
                            </Nav>
                        </Navbar>
                    </Row>
                    <Row>
                        <Col className="fixheight">
                        {
                            this.showPageAdmin()
                        }
                        </Col>
                    </Row>
                </Container>
                
            </>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        listProduct: state.product.listProduct,
        userList : state.auth.userListFromApp,
        dataLogin : state.auth.dataLogin,
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (listProduct,userList,dataLogin) => dispatch({ type: "ADDPRODUCT", payload: {listProduct,userList,dataLogin}}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Admin)