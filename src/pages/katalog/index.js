import React, { Component } from 'react';
import { Container,Col,Row,Card, Button, Form ,FormControl} from 'react-bootstrap';
import carousel1 from '../../img/carousel1.jpg'
import carousel2 from '../../img/carousel2.jpg'
import carousel3 from '../../img/carousel3.jpg'

class Katalog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>
                <hr/>
                <h3>Katalog</h3>
                <hr/>
                <Row>
                    <Col sm={4}>
                        <h4>Filter</h4>
                        <Form>
                            <FormControl type="text" placeholder="Nama Buku" className="formcontrol"></FormControl>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Kategori</Form.Label>
                                <Form.Control as="select">
                                <option>Komputer</option>
                                <option>Olahraga</option>
                                <option>Sejarah</option>
                                <option>Psikologi</option>
                                <option>Novel</option>
                                </Form.Control>
                            </Form.Group>
                                
                            <Button className="btnLogin" variant="btn btn-primary btn-block">Filter</Button>
                        </Form>
                    </Col>
                    <Col sm={2}>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 60.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px'}}>
                                <Card.Img variant="top" src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 60.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px'}}>
                                <Card.Img variant="top" src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 60.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px'}}>
                                <Card.Img variant="top" src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 60.000</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col sm={2}>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col sm={2}>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 66.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col sm={2}>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 66.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '9rem', marginBottom: '15px' }}>
                                <Card.Img variant="top" src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Button variant="primary btn-block">Rp. 70.000</Button>
                                </Card.Body>
                            </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default Katalog;