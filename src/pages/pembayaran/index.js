import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import {Container, Row, Col, Button} from 'react-bootstrap'
import "./style.css"
import {RowPembayaran} from '../../components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Pembayaran extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const trx= this.props.listTrx 
        if (!this.props.statusLogin){
            return <Redirect to='/masuk'/>
        }
        return ( 
            <>
            <Container>
                <div className="detailBeli">
                    <h4>Detail Pembelian</h4>
                </div>                

                <table className="tablePayment">
                    <tr style={{backgroundColor:"#6693ff"}}>
                        <th>Items</th>
                        <th>Kategori</th>
                        <th>Harga</th>
                    </tr>
                    {
                        trx.filter((trx) => trx.trx.dataLogin.username===this.props.dataLogin.username&&trx).map((trx) => {
                            return <>
                                <RowPembayaran judul={trx.trx.detailProduct.judul} kategori={trx.trx.detailProduct.kategori} harga={trx.trx.detailProduct.harga}/>
                                                    <hr/>
                                                </>
                                        }) 
                    }            
                    
                </table>
                {
                    trx.filter((trx) => trx.trx.dataLogin.username===this.props.dataLogin.username&&trx).map((trx) => {
                        return <><div className="tagihan">
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={3}>Jumlah Tagihan</Form.Label>
                                        <Col sm={7}>
                                            <h6>{trx.trx.detailProduct.harga}</h6>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={3}>Kode Pembayaran</Form.Label>
                                        <Col sm={7}>
                                            <h6>{trx.ID}</h6>
                                        </Col>
                                    </Form.Group>
                                </div>
                                </>
                    })
                }
                
                <div>
                    <p>Silahkan transfer ke salah satu bank berikut ini:</p>
                </div>
                <div className="transfer">
                    <img className="imageLogo" alt="" src="https://1.bp.blogspot.com/-3XPNdKYXi00/XgrxpiEhjWI/AAAAAAAABQc/HBiFrWKAcMgGMqbe82dY3m-Wj_9kSda1ACLcBGAsYHQ/s1600/bni-syariah.png" />
                    <p>No. Rekening:</p>
                    <p>90423152</p>
                    <p>Atas nama:</p>
                    <p>E-commerce Bookstore</p>
                </div>
                <div className="transfer">
                    <img className="imageLogo" alt=""  src="https://4.bp.blogspot.com/-mPnSuuDuz1k/W92SlBinpBI/AAAAAAAAATg/Hd7CY--oa6MckNO8o4F1qJeIfp7MK4E8QCLcBGAs/s1600/Lowongan%2BKerja%2BTerbaru%2BPT%2BBank%2BBRI%2BSyariah.jpg" />
                    <p>No. Rekening:</p>
                    <p>74232001232</p>
                    <p>Atas nama:</p>
                    <p>E-commerce Bookstore</p>
                </div>
                <div className="transfer">
                    <img className="imageLogo" alt=""  src="https://1.bp.blogspot.com/-LOG22fyGGOo/WransnAeOlI/AAAAAAAABiA/RnFHp0YAHuIcmzMDZNnHFFz-M2sqUEPFQCKgBGAs/s1600/logo-bca.jpg" />
                    <p>No. Rekening:</p>
                    <p>1294382313</p>
                    <p>Atas nama:</p>
                    <p>E-commerce Bookstore</p>
                </div>
                <div className="buttonBayar">
                    <Button variant="primary">Konfirmasi Pembayaran</Button>{' '}
                </div>
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
        dataLogin : state.auth.dataLogin,
        order: state.cart.order,
        listTrx: state.trx.listTrx,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateHarga: (dataTrx) => dispatch({ type: 'UPDATEHARGA', payload : dataTrx}),
        Bayar: (dataTrx) => dispatch({ type: 'ADDTRX', payload : dataTrx}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Pembayaran);