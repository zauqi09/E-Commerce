import React, { Component } from 'react';
import { connect } from "react-redux"
import { Container,Col,Row,Form ,FormControl} from 'react-bootstrap'
import {ProdCard} from '../../components'
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
                                    <option value="All">Semua</option>
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
                                return <ProdCard book={book} idx={idx}/>
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
                                return  <ProdCard book={book} idx={idx}/>
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