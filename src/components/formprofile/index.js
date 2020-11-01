import React, { Component } from 'react';
import {Container, Row, Col, Button, Navbar,Form} from 'react-bootstrap'
import { connect } from "react-redux"

class FormProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username :"",
            passwordConfirm : "",
            email :"",
            password : "",
            name :"",
            jeniskelamin : "",
            alamat : "",
            telepon : "",
            type : 2,
         }
        }
    componentDidMount = () =>{
        this.setState({
            username : this.props.user.username,
            email : this.props.user.email,
            name : this.props.user.name,
            password : this.props.user.password,
            jeniskelamin : this.props.user.jeniskelamin,
            alamat : this.props.user.alamat,
            telepon : this.props.user.telepon,
            type : this.props.user.type
        })
    }
    
    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
        console.log(e.target.value);
    }
    
    onSaveProfileButton=()=>{
        const {username,name,email,password,passwordConfirm,jeniskelamin,alamat,telepon,type} = this.state
        if (password === passwordConfirm){
            this.props.editProfil({username,name,email,password,passwordConfirm,jeniskelamin,alamat,telepon,type},this.props.index)
            window.alert("Data telah tersimpan")
        } else {
            window.alert("Password tidak sama")
        }
        

    }
    render() { 
        const {user} = this.props
        const {name,password,jeniskelamin,alamat,telepon} = this.state
        return ( 
            <>  
                <Navbar bg="light" expand="lg">
                    <Container><h5 className="header4">Informasi Umum</h5></Container>
                </Navbar>
                <Form className="formProfil">
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Username</Form.Label>
                        <Col sm={7}>
                            <Form.Control onChange={this.onChangeInput} type="text" name="username" value={user.username} disabled/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Nama</Form.Label>
                        <Col sm={7}>
                            <Form.Control onChange={this.onChangeInput} type="text" name="name" value={name} placeholder="Nama"/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Jenis Kelamin</Form.Label>
                        <Col sm={7}>
                        <Form.Control onChange={this.onChangeInput} value={jeniskelamin} as="select" name="jeniskelamin" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                            <option value="">Choose...</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Password</Form.Label>
                        <Col sm={7}>
                            <Form.Control onChange={this.onChangeInput} value={password} name="password" type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Password</Form.Label>
                        <Col sm={7}>
                            <Form.Control onChange={this.onChangeInput}  name="passwordConfirm" type="password" placeholder="Konfirmasi Password" />
                        </Col>
                    </Form.Group>
                </Form>
                <Navbar bg="light" expand="lg">
                    <Container><h5 className="header4">Kontak</h5></Container>
                </Navbar>
                <Form className="formProfil">
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Email</Form.Label>
                        <Col sm={7}>
                            <Form.Control onChange={this.onChangeInput} name="email" value={user.email} type="email" placeholder="Email" disabled/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Telepon</Form.Label>
                        <Col sm={7}>
                            <Form.Control onChange={this.onChangeInput} name="telepon" value={telepon} type="text" placeholder="Telepon" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Alamat</Form.Label>
                        <Col sm={7}>
                            <Form.Control onChange={this.onChangeInput} name="alamat" value={alamat }placeholder="Alamat" as="textarea" rows={3} />
                        </Col>
                    </Form.Group>
                </Form>
                <Form.Group as={Row}>
                    <Col sm={5}></Col>
                    <Col sm={4}>
                        <Button onClick={this.onSaveProfileButton}variant="danger">Edit Profile</Button>
                    </Col>
                </Form.Group>
                
            </>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        dataLogin: state.auth.dataLogin,
        userList : state.auth.userListFromApp,
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    editProfil: (userList,index) => dispatch({type: "EDITPROFIL", payload: {userList,index}})
})

export default connect(mapStateToProps,mapDispatchToProps)(FormProfileEdit)