import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import {Container, Row} from 'react-bootstrap'
import "./style.css"
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom';
import { FormProfileEdit } from '../../components';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    render() { 
        if (!this.props.statusLogin){
            return <Redirect to='/masuk'/>
        }
        
        
        return ( 
            
            <>
            <Container className="profilHeader">
                <Form.Group as={Row}>
                    <Form.Label column sm={10}><h4>Pengaturan</h4></Form.Label>
                </Form.Group>
            </Container>
            <Container>
                {
                    this.props.userList.filter(user=> user.username===this.props.dataLogin.username).map((user,idx) =>{
                        return <FormProfileEdit key={idx} user={user} index={idx}/>
                    })
                }
            </Container>
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

export default connect(mapStateToProps)(Profil)