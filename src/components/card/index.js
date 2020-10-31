import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
class ProdCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    OnhandleViewDetail = () => {
        this.props.ViewDetail(this.props.book)
    }
    render() { 
        const {book,idx} = this.props
        return ( 
            <Card key={idx} style={{ width: '9rem', marginBottom: '15px', marginRight: '15px' }}>
                <div className="imageHover">
                    <Card.Img variant="top" style={{ height: '15rem'}} src={book.cover} />
                    <div className="cardHover">
                        <div className="hoverContent">
                            <Link onClick={this.OnhandleViewDetail} className="btn btn-secondary" to="/detail">
                                <img alt="" src="https://img.icons8.com/material-rounded/24/000000/view-details.png" width="17"/>
                            </Link>        
                        </div>
                    </div>
                </div>
                <Card.Body>
                    <Card.Title>{book.judul}</Card.Title>
                    <div className="author">{book.penulis}</div>
                    <div className="price">Rp. {book.harga}</div>
                </Card.Body>
            </Card>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
        listProduct: state.product.listProduct,
        order: state.cart.order,
        bestSeller : state.product.bestSeller,
        newArrival : state.product.newArrival,
        discountItem : state.product.discountItem,
        dataProduct : state.product.dataProduct,
        dataLogin : state.auth.dataLogin,
        detailProduct : state.product.detailProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ViewDetail: (detailProduct) => dispatch({ type: 'VIEWDETAIL', payload : {detailProduct}}),
    
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ProdCard);