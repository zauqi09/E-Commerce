import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import {Container, Row, Col, Button, Navbar} from 'react-bootstrap'
import "./style.css"


class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <Container className="profilHeader">
                <Form.Group as={Row} controlId="formHorizontalUsername">
                    <Form.Label column sm={10}><h4>Pengaturan</h4></Form.Label>
                    <Col sm={2}>
                        <Button variant="danger">Edit Profile</Button>
                    </Col>
                </Form.Group>
            </Container>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Container><h5 className="header4">Informasi Umum</h5></Container>
                </Navbar>
                <Form className="formProfil">
                    <Form.Group as={Row} controlId="formHorizontalUsername">
                        <Form.Label column sm={3}>Username</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="text" placeholder="Username" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={3}>Nama</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="text" placeholder="Nama" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalGender">
                        <Form.Label column sm={3}>Jenis Kelamin</Form.Label>
                        <Col sm={7}>
                        <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                            <option value="0">Choose...</option>
                            <option value="1">Laki-laki</option>
                            <option value="2">Perempuan</option>
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={3}>Password</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
                <Navbar bg="light" expand="lg">
                    <Container><h5 className="header4">Kontak</h5></Container>
                </Navbar>
                <Form className="formProfil">
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={3}>Email</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={3}>Telepon</Form.Label>
                        <Col sm={7}>
                            <Form.Control type="text" placeholder="No. Telepon" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalAlamat">
                        <Form.Label column sm={3}>Alamat</Form.Label>
                        <Col sm={7}>
                            <Form.Control as="textarea" rows={3} />
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
            </>
         );
    }
}
 
export default Profil;