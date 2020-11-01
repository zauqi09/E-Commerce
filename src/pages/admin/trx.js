import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
class Transaksi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <h5>Transaksi</h5>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th style={{width : "20px"}} scope="col">No</th>
                        <th scope="col">No Transaksi</th>
                        <th scope="col">Barang</th>
                        <th scope="col">Pembeli</th>
                        <th scope="col">Total Harga</th>
                        <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </Table>
            </>
         );
    }
}
 
export default Transaksi;