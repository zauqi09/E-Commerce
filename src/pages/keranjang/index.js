import React, { Component } from 'react';
import { Container, Col, Button, Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import {RowKeranjang} from '../../components'
import { Redirect } from 'react-router-dom';
class Keranjang extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onClickBayar=()=>{

    }
    render() { 
        const trx = this.props.listCart
        if (!this.props.statusLogin){
            return <Redirect to='/masuk'/>
        }
        return ( 
            <>
                <Container>
                    <hr/>
                    <h3>Keranjang Belanja Anda</h3>
                    <hr/>
                </Container>
                <Container>
                                {
                                    trx.filter(trx =>{
                                            if (trx.dataLogin.username===this.props.dataLogin.username){
                                                return trx
                                            } 
                                        }).map((trx, idx) => {
                                            return <>
                                                    <RowKeranjang trx={trx} idx={idx}/>
                                                    <hr/>
                                                </>    
                                        }) 
                                }             
                                <Row>
                                    <Col sm={6}/>
                                    <Col sm={4}>Total Belanja : </Col>
                                    <Col sm={2}>
                                        <Button onClick={this.onClickBayar} style={{margin : 0}}>Bayar Sekarang</Button>
                                    </Col>
                                    
                                </Row>      
                    <br/>
                </Container>
            </>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        dataLogin : state.auth.dataLogin,
        detailProduct : state.product.detailProduct,
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
        listProduct: state.product.listProduct,
        order: state.cart.order,
        listCart: state.cart.listCart,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Bayar: (dataTrx) => dispatch({ type: 'ADDTOTRX', payload : dataTrx}),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Keranjang);