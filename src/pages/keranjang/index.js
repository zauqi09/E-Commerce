import React, { Component } from 'react';
import { Container, Table, Button, } from 'react-bootstrap';
import { connect } from 'react-redux'
import {RowKeranjang} from '../../components'

class Keranjang extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        const trx = this.props.listCart
        return ( 
            <>
                <Container>
                    <hr/>
                    <h3>Keranjang Belanja Anda</h3>
                    <hr/>
                </Container>
                <Container>
                    <Table>
                                {
                                    trx.filter(trx =>{
                                            if (trx.dataLogin.username===this.props.dataLogin.username){
                                                return trx
                                            } 
                                        }).map((trx, idx) => {
                                            return <>
                                                <RowKeranjang trx={trx} idx={idx}/>
                                                <tr>
                                                    <td/>
                                                    <td/>
                                                    <td/>
                                                    <td/>
                                                    <td>
                                                        <Button style={{margin : 0}}>Bayar Sekarang</Button>
                                                    </td>
                                                </tr>
                                            </>
                                        })  
                                }    
                    </Table>
                    
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