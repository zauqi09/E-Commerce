import React, { Component } from 'react';
class RowPembayaran extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <tr>
                <td>{this.props.judul}</td>
                <td>{this.props.kategori}</td>
                <td>{this.props.harga}</td>
            </tr>
         );
    }
}
 
export default RowPembayaran;