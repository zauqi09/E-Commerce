import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import {ListUser} from '../../components'

class UserAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <>
        <h5>User</h5>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th style={{width : "20px"}} scope="col">No</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <ListUser/>
                </tbody>
            </Table>
        </>
         );
    }
}
 
export default UserAdmin;