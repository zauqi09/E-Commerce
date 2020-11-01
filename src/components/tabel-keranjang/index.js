import React, { Component } from 'react';
import { Card, Button, Row, Col, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
class RowKeranjang extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jumlah : 1,
            subtotal :0,
         }
    }

    onClickBayar=()=>{
        const trx = this.props.trx
        const ID = 'BOOK_TRX-' + Math.random().toString(36).substr(2, 9)
        this.props.Bayar({trx,ID})
        window.alert("Silahkan melakukan pembayaran")
    }

    render() { 
        const {trx,idx} = this.props
        return ( 
            <>
                <Row>
                    <Col>
                        <Card style={{ width: '9rem' }}>
                            <Card.Img variant="top" src={trx.detailProduct.cover} />
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card.Body>
                            <Card.Title>{trx.detailProduct.judul}</Card.Title>
                        </Card.Body>
                    </Col >
                    <Col><p>Harga : </p><FormControl type="text" name="subtotal" value={trx.detailProduct.harga} style={{textAlign: 'center'}} /></Col>
                </Row>
                <Row>
                    <Col sm={6}/>
                    <Col sm={4}></Col>
                    <Col sm={2}>
                        <Link className="btn btn-primary" to="/pembayaran" onClick={this.onClickBayar}>Bayar Sekarang</Link>
                    </Col>
                    
                </Row>  
            </>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
        listProduct: state.product.listProduct,
        order: state.cart.order,
        listCart: state.cart.listCart,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateHarga: (dataTrx) => dispatch({ type: 'UPDATEHARGA', payload : dataTrx}),
        Bayar: (dataTrx) => dispatch({ type: 'ADDTRX', payload : dataTrx}),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(RowKeranjang);