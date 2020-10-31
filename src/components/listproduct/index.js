import React, { Component } from 'react';
import { connect } from "react-redux"
import {ModalDetail} from '../../components'
class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    

    render() { 
        const prod = this.props.listProduct
        return (
            
            <>
            {prod.map((product, idx) => {  
                return <tr key={idx}>
                            <th scope="row" >{idx+1}</th>
                            <td>{product.judul}</td>
                            <td>{product.penulis}</td>
                            <td>{product.harga}</td>
                            <td>
                                        <button className='btn btn-warning sizefix'> Edit</button>
                                        <button className='btn btn-danger sizefix'>Delete</button>   
                                        <ModalDetail indexProd={idx}/>
                                                  
                            </td>
                        </tr>
                    })}
                    
            </>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
        listProduct: state.product.listProduct,
        bestSeller : state.product.bestSeller,
        newArrival : state.product.newArrival,
        discountItem : state.product.discountItem,
        dataProduct : state.product.dataProduct,
        dataLogin : state.auth.dataLogin
    }
    
}
  

export default connect(mapStateToProps)(ListProduct)
  