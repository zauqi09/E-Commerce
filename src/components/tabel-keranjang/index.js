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
    componentDidMount=()=>{
        const {trx} = this.props
        this.setState({
            jumlah : trx.jumlah,
            subtotal : trx.detailProduct.harga*trx.jumlah
        })
    }

    OnhandlePlus = async() => {
        const {jumlah} = this.state
        await this.setState({
            jumlah : this.state.jumlah + 1,
        })
        this.props.UpdateJumlah(jumlah,this.props.idx)
    }
    OnhandleMinus = async() => {
        const {jumlah} = this.state
        await this.setState({
            jumlah : this.state.jumlah - 1,
        })
        this.props.UpdateJumlah(jumlah,this.props.idx)
    }

    render() { 
        const {trx,idx} = this.props
        return ( 
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
                <Col sm={3}><p>Harga Satuan : Rp. {trx.detailProduct.harga}</p></Col>
                <Col sm={2}>
                    <Button className="btn-block" onClick={this.OnhandlePlus} >+</Button>
                    <FormControl type="text"  value={this.state.jumlah} style={{textAlign: 'center'}} />
                    <Button className="btn-block" onClick={this.OnhandleMinus} >-</Button>
                </Col>
                <Col><FormControl type="text" name="subtotal" value={trx.detailProduct.harga*this.state.jumlah} style={{textAlign: 'center'}} /></Col>
            </Row>
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
        UpdateJumlah: (dataCart,index) => dispatch({ type: 'UPDATEJUMLAH', payload : {dataCart,index}}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RowKeranjang);