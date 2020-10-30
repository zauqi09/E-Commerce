import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
//import './style.css'
import {Container, Row, Col} from 'react-bootstrap'
import carousel1 from '../../img/carousel1.jpg'
import carousel2 from '../../img/carousel2.jpg'
import carousel3 from '../../img/carousel3.jpg'

class CarouselHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>
                <Row>
                    <hr/>
                </Row>
                <Row>
                    <Col sm={2}/>
                    <Col sm={8}>
                    <Carousel>
                        <Carousel.Item>
                        <img
                            className="d-block w-100 img-carousel"
                            src={carousel1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>New Arrival</h3>
                            <p>Produk baru telah tiba!.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100 img-carousel"
                            src={carousel2}
                            alt="Third slide"
                        />
                    
                        <Carousel.Caption>
                            <h3>Cinta Membaca</h3>
                            <p>Belanja sekarang! Produk baru kami sudah hadir!.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100 img-carousel"
                            src={carousel3}
                            alt="Third slide"
                        />
                    
                        <Carousel.Caption>
                            <h3>Order Now!</h3>
                            <p>Belanja sekarang! Produk baru kami sudah hadir!.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                    <Col sm={2}/>
                </Row>
                <Row>
                    <hr/>
                </Row>
            </Container>
         );
    }
}
 
export default CarouselHome ;