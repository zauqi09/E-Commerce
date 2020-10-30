import React, { Component } from 'react';
import { Table} from 'react-bootstrap'
import {AddProduk,ListProduct} from '../../components'
class ProdukAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }


    render() { 
        return ( 
            <>
                <h5>Produk</h5>
                <br/>

                <AddProduk/>
                
                <br/>
                <Table striped bordered hover size="sm">
                    <thead>
                        <th style={{width : "20px"}} scope="col">No</th>
                        <th scope="col">Judul</th>
                        <th scope="col">Penulis</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Aksi</th>
                    </thead>
                    <tbody>
                        <ListProduct/>
                    </tbody>
                </Table>
            </>
         );
    }
}
 
export default ProdukAdmin;