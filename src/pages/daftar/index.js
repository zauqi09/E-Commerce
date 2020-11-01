import React, { Component } from 'react';
import { Button, Col, Container, Form, FormControl,Row } from 'react-bootstrap';
import './style.css'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom';
class Daftar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username :"",
            passwordConfirm : "",
            email :"",
            password : "",
            name :"",
            alamat : "",
            telepon : "",
            jeniskelamin : "",
            type :2,
         }
    }
    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
        console.log(e.target.name);
    }
    onRegist =  ()=> {
        const {username,email,password,name,passwordConfirm,type,jeniskelamin,alamat,telepon} = this.state
        const UserList = this.props.userList.find(user => (user.username === username))
        if (username && password){   
            if (UserList){
                window.alert('Username sudah digunakan!');
            }else{
                if (password === passwordConfirm){ 
                    window.alert('Berhasil Daftar, anda akan berada dihalaman utama')
                    this.props.doRegist({username,email,password,name,type,jeniskelamin,alamat,telepon},
                        {username,password,type})
                }   
                else {
                    window.alert('Password tidak sama!'); 
                }
            }
        }
        else {
            window.alert("Username dan Password tidak boleh kosong!")
        }
      }
    render() { 
        if (this.props.statusLogin){
            return <Redirect to='/'/>
        }
        return ( 
            <Container>
                <Form>
                    <Row>
                        <Col sm={4}/>
                        <Col>
                            <div className="formgroupdaftar">
                                <h4>Daftar</h4>
                                <FormControl type="text" onChange={this.onChangeInput} placeholder="Username" name="username" className="formcontroldaftar"></FormControl>
                                <FormControl type="text" onChange={this.onChangeInput} placeholder="Nama" name="name" className="formcontroldaftar"></FormControl>
                                <FormControl type="email" onChange={this.onChangeInput} placeholder="Email" name="email" className="formcontroldaftar"></FormControl>
                                <FormControl type="password" onChange={this.onChangeInput} placeholder="Password" name="password" className="formcontroldaftar"></FormControl>
                                <FormControl type="password" onChange={this.onChangeInput} placeholder="Confirm Password" name="passwordConfirm" className="formcontroldaftar"></FormControl>
                                <Button className="btnLogin" onClick={this.onRegist} variant="btn btn-primary btn-block">Login</Button>
                            </div>
                        </Col>
                        <Col sm={4}/>
                    </Row>
                </Form>
                
            </Container>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        userList : state.auth.userListFromApp,
        statusLogin : state.auth.isLoggedIn,
        listProduct: state.product.listProduct,
        dataLogin : state.auth.dataLogin,
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    doRegist: (dataRegister,dataLogin) => dispatch({ type: "REGISTER", payload: {dataRegister,dataLogin}}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Daftar)