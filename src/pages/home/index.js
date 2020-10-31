import React, { Component } from 'react';
import {Container, Row, Col, Card, Button, Navbar} from 'react-bootstrap'
import carousel1 from '../../img/carousel1.jpg'
import carousel2 from '../../img/carousel2.jpg'
import carousel3 from '../../img/carousel3.jpg'
import rich_dad_poor_dad from '../../img/rich-dad-poor-dad.jpg'
import The_Intelligent_Investor from '../../img/The_Intelligent_Investor.jpg'
import './style.css'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div expand="lg">
                    <Container className="typeContainer">
                        <Button variant="outline-info" size="sm" className="bookType">Novel</Button>{' '}
                        <Button variant="outline-info" size="sm" className="bookType">Motivasi</Button>{' '}
                        <Button variant="outline-info" size="sm" className="bookType">Anak-anak</Button>{' '}
                        <Button variant="outline-info" size="sm" className="bookType">Komik</Button>{' '}
                        <Button variant="outline-info" size="sm" className="bookType">Sains</Button>{' '}
                    </Container>
                </div>

                {/* container best seller */}
                <div bg="light" expand="lg">
                    <Container><h4 className="header4">Best Seller</h4></Container>
                </div>
                <Container>
                    <Row>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <div className="imageHover">
                                    <Card.Img variant="top" style={{ height: '15rem'}} src={rich_dad_poor_dad} />
                                    <div className="cardHover">
                                        <div className="hoverContent">Hover style</div>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>Rich Dad Poor Dad</Card.Title>
                                    <div className="author">Robert T. Kiyosaki</div>
                                    <div className="price">Rp. 68.000</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <div className="imageHover">
                                    <Card.Img variant="top" style={{ height: '15rem'}} src={The_Intelligent_Investor} />
                                    <div className="cardHover">
                                        <div className="hoverContent">Hover style</div>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>The Intelligent Investor</Card.Title>
                                    <div className="author">Benjamin Graham</div>
                                    <div className="price">Rp. 99.000</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                </Container>

                {/* container new arrival */}
                <Navbar bg="light" expand="lg">
                    <Container><h4 className="header4">New Arrival</h4></Container>
                </Navbar>
                <Container>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <div className="imageHover">
                                    <Card.Img variant="top" style={{ height: '15rem'}} src={carousel3} />
                                    <div className="cardHover">
                                        <div className="hoverContent">Hover style</div>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <hr/>
                    </Row>
                </Container>

                {/* container discount */}
                <Navbar bg="light" expand="lg">
                    <Container><h4 className="header4">Discount items</h4></Container>
                </Navbar>
                <Container>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <Card.Img variant="top" style={{ height: '15rem'}} src={carousel3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <div className="author">Author</div>
                                    <div className="price">Rp. Price</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <hr/>
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