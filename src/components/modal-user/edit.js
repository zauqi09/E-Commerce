import React, { Component } from 'react';
import {Modal,Button, FormControl, FormLabel,} from 'react-bootstrap'
import { connect } from "react-redux"

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username :"",
            email : "",
            name : "",
            password : "",
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
        const usr = this.props.userList
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
                        <FormLabel>Username</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="username" type="text" value={usr[index].username} ></FormControl>
                        <FormLabel>Email</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="email" type="text" value={usr[index].email} ></FormControl>
                        <FormLabel>Name</FormLabel>
                        <FormControl onChange={this.onChangeInput} name="name" type="text" value={usr[index].name} ></FormControl>
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
        userList: state.auth.userListFromApp,
    }
    
}
export default connect(mapStateToProps)(EditUser)