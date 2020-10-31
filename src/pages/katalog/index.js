import React, { Component } from 'react';
import { connect } from "react-redux"
import { Container,Col,Row,Card, Button, Form ,FormControl} from 'react-bootstrap'

class Katalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cari: "",
            kategori: ""
        }
    }

    onChangeInput = e => {
        this.setState({        
            [e.target.name]:e.target.value
        })
    }

    // onSearch = () => {
    //     const { cari, kategori } = this.state

    //     const hasilCari = this.props.listProduct.filter(book =>{
    //         if (kategori === "All" && cari === "" ) {
    //             return book
    //         } else if (book.judul.toLowerCase().includes(cari.toLowerCase()) || book.kategori === kategori) {
    //             return book
    //         }
    //     })
    // }

    render() { 
        const buku = this.props.listProduct
        const { cari, kategori } = this.state

        return ( 
            <Container>
                <hr/>
                <h3>Katalog</h3>
                <hr/>
                <Row>
                    <Col sm={4} >
                        <h4>Pencarian</h4>
                        <Form>
                            <FormControl type="text" placeholder="Nama Buku" className="formcontrol" name="cari" onChange={this.onChangeInput}></FormControl>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Kategori</Form.Label>
                                <Form.Control as="select" name="kategori" onChange={this.onChangeInput}>
                                    <option value="Novel">Novel</option>
                                    <option value="Sains">Sains</option>
                                    <option value="Motivasi">Motivasi</option>
                                    <option value="Bisnis">Bisnis</option>
                                    <option value="Anak">Anak</option>
                                </Form.Control>
                                <br></br>
                                <Button variant="btn btn-primary btn-block">Filter</Button>
                            </Form.Group>       
                        </Form>
                    </Col>
                    <Col sm={8} style={{display:'flex', flexWrap:'wrap'}}>
                        {
                        buku.filter(book =>{
                            if (kategori === "All" && cari === "" ) {
                                return book
                            } else if (book.judul.toLowerCase().includes(cari.toLowerCase()) || book.kategori === kategori) {
                                return book
                            }
                        }).map((book, idx) => {
                            return  <Card key={idx} style={{ width: '9rem', marginBottom: '15px', marginRight: '15px' }}>
                                        <Card.Img variant="top" src={book.cover} />
                                        <Card.Body>
                                            <Card.Title>{book.judul}</Card.Title>
                                            <Button variant="primary btn-block">Rp {book.harga}</Button>
                                        </Card.Body>
                                    </Card>
                        })
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listProduct: state.product.listProduct,
    }
    
}
 
export default connect(mapStateToProps)(Katalog);