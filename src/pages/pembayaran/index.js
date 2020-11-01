import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import {Container, Row, Col, Button, Navbar} from 'react-bootstrap'
import "./style.css"

class Pembayaran extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            {/* <Container>
                <Navbar bg="light" expand="lg">
                    <Container><p className="header4">Detail Pembelian</p></Container>
                </Navbar>
                <Navbar bg="light" expand="lg">
                    <Container><p className="header4"></p></Container>
                </Navbar>
                <Navbar bg="light" expand="lg">
                    <Container><p className="header4">Kode Pembayaran</p></Container>
                    <Container><p className="header4">FTRQ00011123412</p></Container>
                </Navbar>
            </Container> */}
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
                    <tr>
                        <td>Rich Dad Poor Dad</td>
                        <td>Bisnis</td>
                        <td>Rp. 62.000</td>
                    </tr>
                    <tr>
                        <td>The Intelligent Investor</td>
                        <td>Bisnis</td>
                        <td>Rp. 120.000</td>
                    </tr>
                </table>
                <div className="tagihan">
                    <Form.Group as={Row} controlId="formHorizontalUsername">
                        <Form.Label column sm={3}>Jumlah Tagihan</Form.Label>
                        <Col sm={7}>
                            <h6>Rp. 275.000</h6>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalUsername">
                        <Form.Label column sm={3}>Kode Pembayaran</Form.Label>
                        <Col sm={7}>
                            <h6>TRJ00122731</h6>
                        </Col>
                    </Form.Group>
                </div>
                <div>
                    <p>Silahkan transfer ke salah satu bank berikut ini:</p>
                </div>
                <div className="transfer">
                    <img className="imageLogo" src="https://1.bp.blogspot.com/-3XPNdKYXi00/XgrxpiEhjWI/AAAAAAAABQc/HBiFrWKAcMgGMqbe82dY3m-Wj_9kSda1ACLcBGAsYHQ/s1600/bni-syariah.png" />
                    <p>No. Rekening:</p>
                    <p>90423152</p>
                    <p>Atas nama:</p>
                    <p>E-commerce Bookstore</p>
                </div>
                <div className="transfer">
                    <img className="imageLogo" src="https://4.bp.blogspot.com/-mPnSuuDuz1k/W92SlBinpBI/AAAAAAAAATg/Hd7CY--oa6MckNO8o4F1qJeIfp7MK4E8QCLcBGAs/s1600/Lowongan%2BKerja%2BTerbaru%2BPT%2BBank%2BBRI%2BSyariah.jpg" />
                    <p>No. Rekening:</p>
                    <p>74232001232</p>
                    <p>Atas nama:</p>
                    <p>E-commerce Bookstore</p>
                </div>
                <div className="transfer">
                    <img className="imageLogo" src="https://1.bp.blogspot.com/-LOG22fyGGOo/WransnAeOlI/AAAAAAAABiA/RnFHp0YAHuIcmzMDZNnHFFz-M2sqUEPFQCKgBGAs/s1600/logo-bca.jpg" />
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
 
export default Pembayaran;