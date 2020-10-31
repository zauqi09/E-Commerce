import React, { Component } from 'react';
import {Container, Row, Button, Navbar} from 'react-bootstrap'
import { connect } from "react-redux"
import './style.css'
import {SixCol} from '../../components'


class Home extends Component {
    state = {  }
    render() { 

        return ( 
            <>
                <div expand="lg">
                    <Container className="typeContainer">
                        <Button variant="outline-info" size="sm" className="bookType">Novel</Button>{' '}
                        <Button variant="outline-info" size="sm" className="bookType">Motivasi</Button>{' '}
                        <Button variant="outline-info" size="sm" className="bookType">Anak-anak</Button>{' '}
                        <Button variant="outline-info" size="sm" className="bookType">Komik</Button>{' '}
                        <Button variant="outline-info" size="sm" className="bookType">Sains</Button>{' '}
                    </Container>
                </div>

                {/* container best seller */}
                <Navbar bg="light" expand="lg">
                    <Container><h4 className="header4">Best Seller</h4></Container>
                </Navbar>
                <Container>
                    <Row>
                        <SixCol dataCard={this.props.bestSeller}/>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                </Container>

                {/* container new arrival */}
                <Navbar bg="light" expand="lg">
                    <Container><h4 className="header4">New Arrival</h4></Container>
                </Navbar>
                <Container>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <SixCol dataCard={this.props.newArrival}/>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                </Container>

                {/* container discount */}
                <Navbar bg="light" expand="lg">
                    <Container><h4 className="header4">Discount items</h4></Container>
                </Navbar>
                <Container>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <SixCol dataCard={this.props.discountItem}/>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                </Container>
            </>
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

export default connect(mapStateToProps)(Home)