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


    render() { 
        const buku = this.props.listProduct
        const { kategori } = this.state

        return ( 
            <Container>
                <hr/>
                <h3>Katalog</h3>
                <hr/>
                <Row>
                    <Col sm={3} >
                        <h4>Pencarian</h4>
                        <Form>
                            <FormControl type="text" placeholder="Nama Buku" className="formcontrol" name="cari" onChange={this.onChangeInput}></FormControl>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Kategori</Form.Label>
                                <FormControl as="select" name="kategori" onChange={this.onChangeInput}>
                                    <option value="All">--</option>
                                    <option value="Novel">Novel</option>
                                    <option value="Sains">Sains</option>
                                    <option value="Motivasi">Motivasi</option>
                                    <option value="Bisnis">Bisnis</option>
                                    <option value="Anak">Anak</option>
                                </FormControl>
                                <br></br>
                            </Form.Group>       
                        </Form>
                    </Col>
                    <Col  style={{display:'flex', flexWrap:'wrap'}}>
                        <>
                        {
                        kategori === "All" ? (
                            buku.filter(book =>{
                                if (book.judul.toLowerCase().includes(this.state.cari.toLowerCase())){
                                    return book
                                }
                            }).map((book, idx) => {
                                return <Card key={idx} style={{ width: '9rem', marginBottom: '15px', marginRight: '15px' }}>
                                            <div className="imageHover">
                                                <Card.Img variant="top" style={{ height: '15rem'}} src={book.cover} />
                                                <div className="cardHover">
                                                    <div className="hoverContent">{book.judul}</div>
                                                </div>
                                            </div>
                                            <Card.Body>
                                            <Card.Title>{book.judul}</Card.Title>
                                                <div className="author">{book.penulis}</div>
                                                <div className="price">Rp. {book.harga}</div>
                                            </Card.Body>
                                        </Card>
                            })
                        ) :
                        (
                            buku.filter(book =>{
                                if (book.kategori === this.state.kategori ) {
                                    return book
                                }
                            }).filter(book =>{
                                if (book.judul.toLowerCase().includes(this.state.cari.toLowerCase())){
                                    return book
                                }
                            }).map((book, idx) => {
                                return  <Card key={idx} style={{ width: '9rem', marginBottom: '15px', marginRight: '15px' }}>
                                            <div className="imageHover">
                                                <Card.Img variant="top" style={{ height: '15rem'}} src={book.cover} />
                                                <div className="cardHover">
                                                    <div className="hoverContent">{book.judul}</div>
                                                </div>
                                            </div>
                                            <Card.Body>
                                            <Card.Title>{book.judul}</Card.Title>
                                                <div className="author">{book.penulis}</div>
                                                <div className="price">Rp. {book.harga}</div>
                                            </Card.Body>
                                        </Card>
                                    })
                        )
                        }
                        </>
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