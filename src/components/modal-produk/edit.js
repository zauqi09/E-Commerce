import React, { Component } from 'react';
import {Modal,Button, FormControl, FormLabel,} from 'react-bootstrap'
import { connect } from "react-redux"

class EditProduk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setShow : false,
            show : false
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
    handleEdit=()=>{
        
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
                        <FormControl onChange={this.onChangeInput} name="judul" type="text" value={prod[index].judul} ></FormControl>
                        <FormLabel>Kategori</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="kategori" type="text" value={prod[index].kategori} ></FormControl>
                        <FormLabel>Harga</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="harga" type="number" value={prod[index].harga} ></FormControl>
                        <FormLabel>Penulis</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="penulis" type="text" value={prod[index].penulis} ></FormControl>
                        <FormLabel>Penerbit</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="penerbit" type="text" value={prod[index].penerbit} ></FormControl>
                        <FormLabel>Negara</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="negara" type="text" value={prod[index].negara} ></FormControl>
                        <FormLabel>Bahasa</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="bahasa" type="text" value={prod[index].bahasa} ></FormControl>
                        <FormLabel>Jumlah Halaman</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="jumlahhal" type="number" value={prod[index].jumlahhal} ></FormControl>
                        <FormLabel>Cover</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="cover" type="text" value={prod[index].cover} ></FormControl>
                        <FormLabel>Deskripsi</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="deskripsi" type="text" value={prod[index].deskripsi} ></FormControl>
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
        listProduct: state.product.listProduct,
    }
    
}
export default connect(mapStateToProps)(EditProduk)