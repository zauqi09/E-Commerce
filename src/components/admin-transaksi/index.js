import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux"
class TransaksiAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const prod = this.props.listTrx
        return (
            
            <>
            {prod.map((trx, idx) => {  
                return <tr key={idx}>
                            <th scope="row" >{idx+1}</th>
                            <td>{trx.ID}</td>
                            <td>{trx.trx.detailProduct.judul}</td>
                            <td>{trx.trx.dataLogin.username}</td>
                            <td>{trx.trx.detailProduct.harga}</td>
                            <td>        
                                {/* <EditProduk indexProd={idx}/>  
                                <button className='btn btn-danger sizefix' onClick={() => { if (window.confirm('Apakah Data Ingin Dihapus?')) this.Delete(idx) } }>Delete</button>   
                                <ModalDetail indexProd={idx}/> */}
                                <Button>Validasi</Button>
                                                  
                            </td>
                        </tr>
                    })}
                    
            </>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
        listProduct: state.product.listProduct,
        dataLogin : state.auth.dataLogin,
        order: state.cart.order,
        listTrx: state.trx.listTrx,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateHarga: (dataTrx) => dispatch({ type: 'UPDATEHARGA', payload : dataTrx}),
        Bayar: (dataTrx) => dispatch({ type: 'ADDTRX', payload : dataTrx}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TransaksiAdmin);