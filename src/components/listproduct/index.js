import React, { Component } from 'react';
import { connect } from "react-redux"
import {ModalDetail} from '../../components'
class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                        <ModalDetail indexProd={idx}/>
                                        <button className='btn btn-warning sizefix'> Edit</button>
                                        <button className='btn btn-danger sizefix'>Delete</button>             
                            </td>
                        </tr>
                    })}
                    
            </>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        listProduct: state.product.listProduct,
    }
    
}
  
  
  
export default connect(mapStateToProps)(ListProduct)