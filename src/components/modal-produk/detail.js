import React, { Component } from 'react';
import {Modal,Button, FormControl, FormLabel,} from 'react-bootstrap'
import { connect } from "react-redux"
import './style.css'
class ModalDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            setShow : false,
            show : false,
         }
    }
    handleClose = () => {
        this.setState({
            setShow : false,
            show : false
        })
    }

    handleShow = () => {
        this.setState({
            setShow : true,
            show : true
        })
    }   
    render() { 
        const prod = this.props.listProduct
        const index = this.props.indexProd
        return ( 
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Detail
                </Button>
                <br/>
                <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Detail</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormLabel>Judul</FormLabel>
                            <FormControl placeholder={prod[index].judul} readOnly></FormControl>
                            <FormLabel>Harga</FormLabel>
                            <FormControl placeholder={prod[index].harga} readOnly></FormControl>
                            <FormLabel>Penulis</FormLabel>
                            <FormControl placeholder={prod[index].penulis} readOnly></FormControl>
                            <FormLabel>Penerbit</FormLabel>
                            <FormControl placeholder={prod[index].penerbit} readOnly></FormControl>
                            <FormLabel>Negara</FormLabel>
                            <FormControl placeholder={prod[index].negara} readOnly></FormControl>
                            <FormLabel>Bahasa</FormLabel>
                            <FormControl placeholder={prod[index].bahasa} readOnly></FormControl>
                            <FormLabel>Jumlah Halaman</FormLabel>
                            <FormControl placeholder={prod[index].jumlahhal} readOnly></FormControl>
                            <FormLabel>Cover</FormLabel>
                            <br/>
                            <img className="coverBook" src={prod[index].cover} alt="cover"/>
                            <br/>
                            <FormLabel>Deskripsi</FormLabel>
                            <FormControl placeholder={prod[index].deskripsi} readOnly></FormControl>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            
                    </Modal.Footer>
                </Modal>
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

export default connect(mapStateToProps,mapDispatchToProps)(ModalDetail)