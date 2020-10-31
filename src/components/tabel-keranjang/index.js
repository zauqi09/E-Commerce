import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
class RowKeranjang extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    OnhandlePlus = () => {
        this.props.handlePlus()
    }
    OnhandleMinus = () => {
        this.props.handleMinus()
    }
    render() { 
        const {trx} = this.props
        return ( 
            <tr>
                <td>
                <Card style={{ width: '9rem' }}>
                    <Card.Img variant="top" src={trx.detailProduct.cover} />
                </Card>
                </td>
                <td>
                <Card.Body>
                    <Card.Title>{trx.detailProduct.judul}</Card.Title>
                </Card.Body>
                </td>
                <td><p>{trx.detailProduct.harga}</p></td>
                <td>
                    <div>
                        <Button onClick={this.OnhandleMinus} >-</Button>
                        <input type="text" value={this.props.order} style={{textAlign: 'center'}} />
                        <Button onClick={this.OnhandlePlus} >+</Button>
                    </div>
                </td>
                <td><p>{trx.detailProduct.harga*this.props.order}</p></td>
            </tr>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
        listProduct: state.product.listProduct,
        order: state.cart.order,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({ type: 'PLUS_ORDER'}),
        handleMinus: () => dispatch({ type: 'MINUS_ORDER'}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(RowKeranjang);