import React, { Component } from 'react';
import {Modal,Button, FormControl, FormLabel,} from 'react-bootstrap'
import { connect } from "react-redux"

class DetailUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setShow : false,
            show : false
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

    render(){
        const usr = this.props.userList
        const index = this.props.indexProd
        return(
            <>
            <Button variant="secondary" onClick={this.handleShow}>
                Detail
            </Button>
            <br/>
            <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detail User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormLabel>Username</FormLabel>
                        <FormControl name="username" type="text" value={usr[index].username} readOnly></FormControl>
                        <FormLabel>Email</FormLabel>
                        <FormControl name="email" type="text" value={usr[index].email} readOnly></FormControl>
                        <FormLabel>Name</FormLabel>
                        <FormControl name="name" type="text" value={usr[index].name} readOnly></FormControl>
                        <FormLabel>Jenis Kelamin</FormLabel>
                        <FormControl name="name" type="text" value={usr[index].jeniskelamin} readOnly></FormControl>
                        <FormLabel>Telepon</FormLabel>
                        <FormControl name="name" type="text" value={usr[index].telepon} readOnly></FormControl>
                        <FormLabel>Alamat</FormLabel>
                        <FormControl name="name" type="text" value={usr[index].alamat} readOnly></FormControl>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>        
                </Modal.Footer>
            </Modal>
        </>
        ) 
    }
      
}

const mapStateToProps = (state) => {
    return {
        userList: state.auth.userListFromApp,
    }
    
}
export default connect(mapStateToProps)(DetailUser)