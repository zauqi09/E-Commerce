import React, { Component } from 'react';
import {Col, Card} from 'react-bootstrap'
class SixCol extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const dataCard= this.props.dataCard
        return ( 
            <>
            {dataCard.map((product, idx) => {  
                return <Col key={idx} sm={2}>
                            <Card style={{ width: '11rem' }}>
                                <div className="imageHover">
                                    <Card.Img variant="top" style={{ height: '15rem'}} src={product.cover} />
                                    <div className="cardHover">
                                        <div className="hoverContent">{product.judul}</div>
                                    </div>
                                </div>
                                <Card.Body>
                                <Card.Title>{product.judul}</Card.Title>
                                    <div className="author">{product.penulis}</div>
                                    <div className="price">Rp. {product.harga}</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
            
            </>
         );
    }
}
 
export default SixCol;