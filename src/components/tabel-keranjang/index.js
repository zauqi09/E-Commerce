import React, { Component } from 'react';
import { Card, Button, Row, Col, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux'
class RowKeranjang extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jumlah : 1,
            subtotal :0,
         }
    }

    onClickBayar=()=>{

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
                        <Button onClick={this.onClickBayar}>Bayar Sekarang</Button>
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
        Bayar: (dataTrx) => dispatch({ type: 'ADDTOTRX', payload : dataTrx}),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(RowKeranjang);