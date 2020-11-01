import React, { Component } from 'react';
import { connect } from "react-redux"
import {EditUser} from '../../components'
class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    Delete = (idx) => {
       const hapus = this.props.userList.slice(0,idx)
       console.log(hapus);
       this.props.HapusUser(hapus)
    }

    render() { 
        const user = this.props.userList
        return (
            
            <>
            {user.map((user, idx) => {  
                return <tr key={idx}>
                            <th scope="row" >{idx+1}</th>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>
                                        <EditUser indexProd={idx}/>  
                                        <button className='btn btn-danger sizefix' onClick={() => { if (window.confirm('Apakah Data Ingin Dihapus?')) this.Delete({idx}) } }>Delete</button>             
                            </td>
                        </tr>
                    })}
                    
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn,
    userList: state.auth.userListFromApp,
  })
  
const mapDispatchToProps = (dispatch) => ({
    HapusUser: (hapususer) => dispatch({ type: "DELETEUSER", payload: {hapususer}}),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(ListUser)