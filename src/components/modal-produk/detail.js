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

    onAddToBestSeller=()=>{
        if ( this.props.bestSeller.length <= 5){
            this.props.addToBestSeller(this.props.listProduct[this.props.indexProd])
            
        } else {
            window.alert("Max 6 item terdaftar, silahkan hapus salah satu untuk menambahkan item")
        }
        this.handleClose()
    }
    onAddToIemDiscount=()=>{
        if (this.props.discountItem.length <=5){
            this.props.addToItemDiscount(this.props.listProduct[this.props.indexProd])
        } else {
            window.alert("Max 6 item terdaftar, silahkan hapus salah satu untuk menambahkan item")
        }
        this.handleClose()
    }
    onAddToNewArrival=()=>{
        if (this.props.newArrival.length <=5){
            this.props.addToNewArrival(this.props.listProduct[this.props.indexProd])
            
        } else {
            window.alert("Max 6 item terdaftar, silahkan hapus salah satu untuk menambahkan item")
        }
        this.handleClose()
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
                            <FormLabel>Kategori</FormLabel>
                            <FormControl placeholder={prod[index].kategori} readOnly></FormControl>
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
                            <Button variant="secondary" onClick={this.onAddToBestSeller}>
                                Best Seller
                            </Button>
                            <Button variant="secondary" onClick={this.onAddToIemDiscount}>
                                Discount Item
                            </Button>
                            <Button variant="secondary" onClick={this.onAddToNewArrival}>
                                New Arrival
                            </Button>
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
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
        listProduct: state.product.listProduct,
        bestSeller : state.product.bestSeller,
        newArrival : state.product.newArrival,
        discountItem : state.product.discountItem,
        dataProduct : state.product.dataProduct,
        dataLogin : state.auth.dataLogin
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    addToBestSeller: (dataProduct) => dispatch({ 
        type: "ADDTOBESTSELLER", 
        payload: {dataProduct}}),
    addToItemDiscount: (dataProduct) => dispatch({ 
        type: "ADDTOBESTDISCOUNTITEM", 
        payload: {dataProduct}}),
    addToNewArrival: (dataProduct) => dispatch({ 
        type: "ADDTONEWARRIVAL", 
        payload: {dataProduct}}),
})

export default connect(mapStateToProps,mapDispatchToProps)(ModalDetail)