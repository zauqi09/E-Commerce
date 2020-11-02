import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import { connect } from 'react-redux'
import {RowKeranjang} from '../../components'
import { Redirect } from 'react-router-dom';
class Keranjang extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                    trx.filter(trx =>trx.dataLogin.username===this.props.dataLogin.username&&trx).map((trx, idx) => {
                                            return <>
                                                    <RowKeranjang key={idx} trx={trx} idx={idx}/>
                                                    <hr/>
                                                </>    
                                        }) 
                                }             
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
 
export default connect(mapStateToProps)(Keranjang);