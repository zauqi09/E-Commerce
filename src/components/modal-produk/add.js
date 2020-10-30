import React, { Component } from 'react';
import {Form,Modal,Button,FormControl} from 'react-bootstrap'
import { connect } from "react-redux"

class AddProduk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setShow : false,
            show : false,
            judul : "",
            penulis : "",
            penerbit : "",
            negara : "",
            bahasa : "",
            jumlahhal : "",
            deskripsi : "",
            cover : "",
            harga : "",
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
    handleAdd=()=>{
        const { judul,harga, bahasa, penulis,penerbit,negara,jumlahhal,deskripsi,cover } = this.state
        this.props.addProduct({judul, harga, bahasa,penulis,penerbit,negara,jumlahhal,deskripsi,cover},this.props.userList,this.props.dataLogin,this.props.listProduct)
        this.handleClose()
    }

    render(){
        return(
        <>
            <Button variant="primary" onClick={this.handleShow}>
              Tambah
            </Button>
            <br/>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Tambah Produk</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <Form>
                        <FormControl onChange={this.onChangeInput} name="judul" type="text" placeholder="Judul" className="formcontrol"/>
                        <FormControl onChange={this.onChangeInput} name="harga" type="number" placeholder="Harga" className="formcontrol"/>
                        <FormControl onChange={this.onChangeInput} name="penulis" type="text" placeholder="Penulis" className="formcontrol"/>
                        <FormControl onChange={this.onChangeInput} name="penerbit" type="text" placeholder="Penerbit" className="formcontrol"/>
                        <FormControl onChange={this.onChangeInput} name="negara" type="text" placeholder="Negara" className="formcontrol"/>
                        <FormControl onChange={this.onChangeInput} name="bahasa" type="text" placeholder="Bahasa" className="formcontrol"/>
                        <FormControl onChange={this.onChangeInput} name="jumlahhal" type="number" placeholder="Jumlah Halaman" className="formcontrol"/>
                        <FormControl onChange={this.onChangeInput} name="deskripsi" type="text" placeholder="Deskripsi" className="formcontrol"/>
                        <FormControl onChange={this.onChangeInput} name="cover" type="text" placeholder="Url Gambar Cover" className="formcontrol"/>
                    </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleAdd}>
                  Add Product
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
        userList : state.auth.userListFromApp,
        dataLogin : state.auth.dataLogin,
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (dataProd,userList,dataLogin,listProduct) => dispatch({ type: "ADDPRODUCT", payload: {dataProd,userList,dataLogin,listProduct}}),
})

export default connect(mapStateToProps,mapDispatchToProps)(AddProduk)