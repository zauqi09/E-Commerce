import React, { Component } from 'react';
import { connect } from "react-redux"
import {ModalDetail,EditProduk} from '../../components'
class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    
    Delete = (idx) => {
        const hapus = this.props.listProduct.slice(0,idx)
        console.log(hapus);
        this.props.HapusProduct(hapus)
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
                                        <EditProduk indexProd={idx}/>  
                                        <button className='btn btn-danger sizefix' onClick={() => { if (window.confirm('Apakah Data Ingin Dihapus?')) this.Delete({idx}) } }>Delete</button>   
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
    }
}

const mapDispatchToProps = (dispatch) => ({
    HapusProduct: (hapusproduct) => dispatch({ type: "DELETEPRODUK", payload: {hapusproduct}}),
})
  

export default connect(mapStateToProps,mapDispatchToProps)(ListProduct)
  