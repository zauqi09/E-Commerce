import React, { Component } from 'react';
import {Image,Container,Row,Col,Card,Button} from "react-bootstrap"
import { connect } from 'react-redux'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return ( 
            <>
                <Container fluid>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10} style={{marginTop: 15}}>
                        <h4>{this.props.detailProduct.judul}</h4>
                    </Col>
                    <Col sm={1}></Col>
                </Row>

                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <h6>Oleh {this.props.detailProduct.penulis}</h6>
                    </Col>
                    <Col sm={1}></Col>
                </Row>

                <Row>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <hr></hr>
                    </Col>
                    <Col sm={1}></Col>
                </Row>

                <Row>
                    <Col sm={1}></Col>
                    <Col sm={3}>
                        <Image style={{width:300, height:400}}src={this.props.detailProduct.cover} />
                    </Col>
                    <Col sm={7}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Detail</Card.Title>
                            
                            <table>
                                <tbody>
                                <tr>
                                    <td colSpan="3">Bahasa</td>
                                    <td>:</td>
                                    <td> </td>
                                    <td>{this.props.detailProduct.bahasa}</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Negara</td>
                                    <td>:</td>
                                    <td> </td>
                                    <td>{this.props.detailProduct.negara}</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Penerbit</td>
                                    <td>:</td>
                                    <td> </td>
                                    <td>{this.props.detailProduct.penerbit}</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Penulis</td>
                                    <td>:</td>
                                    <td> </td>
                                    <td>{this.props.detailProduct.penulis}</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Kategori</td>
                                    <td>:</td>
                                    <td> </td>
                                    <td>{this.props.detailProduct.kategori}</td>
                                </tr>
                                <tr>
                                    <td colSpan="3">Jumlah halaman</td>
                                    <td>:</td>
                                    <td> </td>
                                    <td>{this.props.detailProduct.jumlahhal}</td>
                                </tr>
                                </tbody>
                            </table><p></p>

                            <Card.Title>Deskripsi</Card.Title>
                            <Card.Text style={{textAlign: 'justify'}}> 
                                {this.props.detailProduct.deskripsi}
                            </Card.Text>
                            <h3>Harga : Rp. {this.props.detailProduct.harga}
                            <Button variant="success" style={{marginLeft: 400}}>Tambah Ke Keranjang</Button></h3>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={1}></Col>
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
        order: state.cart.order,
        bestSeller : state.product.bestSeller,
        newArrival : state.product.newArrival,
        discountItem : state.product.discountItem,
        dataProduct : state.product.dataProduct,
        dataLogin : state.auth.dataLogin,
        detailProduct : state.product.detailProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ViewDetail: (dataLogin,userList,listProduct,bestSeller,discountItem,newArrival,detailProduct) => dispatch({ type: 'VIEWDETAIL', payload : {dataLogin,userList,listProduct,bestSeller,discountItem,newArrival,detailProduct}}),
    
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Detail);