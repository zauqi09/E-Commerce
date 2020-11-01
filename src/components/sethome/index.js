import React, { Component } from 'react';
import { connect } from "react-redux"
import {Table} from 'react-bootstrap'
import {ModalDetail} from '../../components'
class SetHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    RemoveBestSeller = (idx) => {
        this.props.HapusBestSeller(idx)
    }
    RemoveNewArrival = (idx) => {
        this.props.HapusNewArrival(idx)
    }
    RemoveDiscountItem = (idx) => {
        this.props.HapusDiscountItem(idx)
    }

    render() { 
        const {dataTabel} = this.props
        return ( 
            <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th style={{width : "20px"}} scope="col">No</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Penulis</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                {dataTabel.map((product, idx) => {  
                    return <tr key={idx}>
                                <th scope="row" >{idx+1}</th>
                                <td>{product.judul}</td>
                                <td>{product.penulis}</td>
                                <td>{product.harga}</td>
                                <td>
                                    {
                                        dataTabel === this.props.listNewArrival ?
                                            <>
                                                <button className='btn btn-danger sizefix' onClick={() => { if (window.confirm('Apakah Data Ingin Dihapus?')) this.RemoveNewArrival(idx) } }>Delete</button>
                                            </>
                                        : dataTabel === this.props.listBestSeller ?
                                            <>
                                                <button className='btn btn-danger sizefix' onClick={() => { if (window.confirm('Apakah Data Ingin Dihapus?')) this.RemoveBestSeller(idx) } }>Delete</button>
                                            </>
                                        :
                                            <>
                                                <button className='btn btn-danger sizefix' onClick={() => { if (window.confirm('Apakah Data Ingin Dihapus?')) this.RemoveDiscountItem(idx) } }>Delete</button>
                                            </>
                                    }   
                                      
                                    <ModalDetail indexProd={idx}/>                   
                                </td>
                            </tr>
                        })}
                        
                </tbody>
            </Table>
            </>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
        listNewArrival: state.product.newArrival,
        listBestSeller: state.product.bestSeller,
        listDiscountItem: state.product.discountItem,
    }
}

const mapDispatchToProps = (dispatch) => ({
    HapusBestSeller: (index) => dispatch({ type: "REMOVEBESTSELLER", payload: index}),
    HapusNewArrival: (index) => dispatch({ type: "REMOVENEWARRIVAL", payload: index}),
    HapusDiscountItem: (index) => dispatch({ type: "REMOVEDISCOUNTITEM", payload: index}),
})
 
export default connect(mapStateToProps,mapDispatchToProps)(SetHome);