import React, { Component } from 'react';
import { Container, Row, Col, FormControl, FormLabel } from 'react-bootstrap';
import { connect } from "react-redux"

class Pembayaran extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const prod = this.props.listProduct
        return ( 
            <>
            <Container>
                <h4>Pembayaran</h4>
                <Row>
                    <Col>
                    <FormLabel>Judul</FormLabel>
                        <FormControl placeholder={prod[2].judul} readOnly></FormControl>
                        <FormLabel>Kategori</FormLabel>
                        <FormControl placeholder={prod[2].kategori} readOnly></FormControl>
                        <FormLabel>Harga</FormLabel>
                        <FormControl placeholder={prod[2].harga} readOnly></FormControl>
                        <FormLabel>Penulis</FormLabel>
                        <FormControl placeholder={prod[2].penulis} readOnly></FormControl>
                        <FormLabel>Penerbit</FormLabel>
                        <FormControl placeholder={prod[2].penerbit} readOnly></FormControl>
                        <FormLabel>Negara</FormLabel>
                        <FormControl placeholder={prod[2].negara} readOnly></FormControl>
                        <FormLabel>Bahasa</FormLabel>
                        <FormControl placeholder={prod[2].bahasa} readOnly></FormControl>
                        <FormLabel>Jumlah Halaman</FormLabel>
                        <FormControl placeholder={prod[2].jumlahhal} readOnly></FormControl>
                        <FormLabel>Cover</FormLabel>
                        <br/>
                        <img className="coverBook" src={prod[2].cover} alt="cover"/>
                        <br/>
                        <FormLabel>Deskripsi</FormLabel>
                        <FormControl placeholder={prod[2].deskripsi} readOnly></FormControl>
                    </Col>
                    <Col>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
            </>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        listProduct: state.product.listProduct,
        userList : state.auth.userListFromApp,
        dataLogin : state.auth.dataLogin,
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (listProduct,userList,dataLogin) => dispatch({ type: "ADDPRODUCT", payload: {listProduct,userList,dataLogin}}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Pembayaran)