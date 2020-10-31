import React, { Component } from 'react';
import { Container, Row, Col, Form, Table, Card, Button } from 'react-bootstrap';
import carousel1 from '../../img/carousel1.jpg'
import { connect } from 'react-redux'

class Keranjang extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <Container>
                    <hr/>
                    <h3>Keranjang Belanja Anda</h3>
                    <hr/>
                </Container>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Form>
                                <div>
                                    <Table>
                                        <tr>
                                            <td>
                                            <Card style={{ width: '9rem' }}>
                                                <Card.Img variant="top" src={carousel1} />
                                            </Card>
                                            </td>
                                            <td>
                                            <Card.Body>
                                                <Card.Title>Book Title</Card.Title>
                                            </Card.Body>
                                            </td>
                                            <td><p>Rp. 60.000</p></td>
                                            <td>
                                                <div>
                                                    <Button onClick={this.props.handleMinus} >-</Button>
                                                    <input type="text" value={this.props.order} style={{textAlign: 'center'}} />
                                                    <Button onClick={this.props.handlePlus} >+</Button>
                                                </div>
                                            </td>
                                            <td><p>Rp. 60.000</p></td>
                                        </tr>
                                    </Table>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.cart.order,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch('PLUS_ORDER'),
        handleMinus: () => dispatch('MINUS_ORDER'),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Keranjang);