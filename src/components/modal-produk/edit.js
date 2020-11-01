import React, { Component } from 'react';
import {Modal,Button, FormControl, FormLabel,} from 'react-bootstrap'
import { connect } from "react-redux"

class EditProduk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setShow : false,
            show : false,
        }
    }
    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
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
    handleEdit = () =>{
        const prod = this.props.listProduct
        const index = this.props.indexProd
        const { judul,kategori,harga, bahasa, penulis,penerbit,negara,jumlahhal,deskripsi,cover } = this.state

        this.props.updateProduct({judul,kategori, harga, bahasa,penulis,penerbit,negara,jumlahhal,deskripsi,cover})
        this.handleClose()
    }

    render(){
        const prod = this.props.listProduct
        const index = this.props.indexProd
        return(
            <>
            <Button variant="primary" onClick={this.handleShow}>
                Edit
            </Button>
            <br/>
            <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Produk</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormLabel>Judul</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="judul" type="text" defaultValue={prod[index].judul} ></FormControl>
                        <FormLabel>Kategori</FormLabel>
                        <FormControl name="kategori" as="select" onChange={this.onChangeInput} defaultValue={prod[index].kategori}>
                            <option >--</option>
                            <option value="Novel">Novel</option>
                            <option value="Sains">Sains</option>
                            <option value="Motivasi">Motivasi</option>
                            <option value="Bisnis">Bisnis</option>
                            <option value="Anak">Anak</option>
                        </FormControl>
                        <FormLabel>Harga</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="harga" type="number" defaultValue={prod[index].harga} ></FormControl>
                        <FormLabel>Penulis</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="penulis" type="text" defaultValue={prod[index].penulis} ></FormControl>
                        <FormLabel>Penerbit</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="penerbit" type="text" defaultValue={prod[index].penerbit} ></FormControl>
                        <FormLabel>Negara</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="negara" type="text" defaultValue={prod[index].negara} ></FormControl>
                        <FormLabel>Bahasa</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="bahasa" type="text" defaultValue={prod[index].bahasa} ></FormControl>
                        <FormLabel>Jumlah Halaman</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="jumlahhal" type="number" defaultValue={prod[index].jumlahhal} ></FormControl>
                        <FormLabel>Cover</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="cover" type="text" defaultValue={prod[index].cover} ></FormControl>
                        <FormLabel>Deskripsi</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="deskripsi" type="text" defaultValue={prod[index].deskripsi} ></FormControl>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleEdit}>
                            Save
                        </Button>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cancel
                        </Button>        
                </Modal.Footer>
            </Modal>
        </>
        ) 
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
    updateProduct: (dataProd) => dispatch({ type: "UPDATEPRODUCT", payload: {dataProd}}),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProduk)