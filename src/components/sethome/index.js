import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import {ModalDetail} from '../../components'
class SetHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                    <button className='btn btn-danger sizefix'>Delete</button>  
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
 
export default SetHome;