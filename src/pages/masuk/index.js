import React, { Component } from 'react';
import { Button, Col, Container, Form, FormControl,Row } from 'react-bootstrap';
import './style.css'
import { connect } from "react-redux"

class Masuk extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username :"",
            password :""
         }
    }
    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
        console.log(e.target.name);
    }
    onLogin = () => {
        const { username, password } = this.state
        if (username && password){    
            let statusLogin = this.props.userList.find(user => (user.username === username && user.password === password))
            if (statusLogin){
                window.alert('Berhasil Login!')
                let type = statusLogin.type
                this.props.doLogin({username,password,type},this.props.userList)      
            }else {
                window.alert('Password atau Username Tidak Sesuai')
            }
          }
          else {
              window.alert("Username dan Password tidak boleh kosong!")
          }
        }

    render() { 
        return ( 
            <Container>
                <Row>
                    <Col sm={4}/>
                    <Col>
                        <Form className="formgroup">
                                <h4>Masuk</h4>
                                <FormControl onChange={this.onChangeInput} name="username" type="text" placeholder="Username" className="formcontrol"></FormControl>
                                <FormControl onChange={this.onChangeInput} name="password" type="password" placeholder="Password" className="formcontrol"></FormControl>
                                <Button onClick={this.onLogin} className="btnLogin" variant="btn btn-primary btn-block">Login</Button>
                        </Form>
                    </Col>
                    <Col sm={4}/>
                </Row>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    doLogin: (dataLogin,userlist) => dispatch({ type: "LOGIN", payload: {dataLogin,userlist}}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Masuk)