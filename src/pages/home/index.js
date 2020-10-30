import React, { Component } from 'react';
import {Container, Row, Col, Card, Button,Navbar} from 'react-bootstrap'
import carousel1 from '../../img/carousel1.jpg'
import carousel2 from '../../img/carousel2.jpg'
import carousel3 from '../../img/carousel3.jpg'
import './style.css'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Navbar bg="light" expand="lg">
                    <Container><h4 className="header4">Best Seller</h4></Container>
                </Navbar>
                <Container>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <Card style={{ width: '9rem' }}>
                                <Card.Img variant="top" src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 60.000</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '9rem' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '9rem' }}>
                                <Card.Img variant="top" src={carousel3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 66.000</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '9rem' }}>
                                <Card.Img variant="top" src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 56.000</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '9rem' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 86.000</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '9rem' }}>
                                <Card.Img variant="top" src={carousel3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 86.000</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                </Container>
            </>
         );
    }
}
 
export default Home;