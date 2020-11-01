import React, { Component } from 'react';
import { connect } from "react-redux"
import {EditUser,DetailUser} from '../../components'
class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    Delete = (idx) => {
       this.props.HapusUser(idx)
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
                                        <button className='btn btn-danger sizefix' onClick={() => { if (window.confirm('Apakah Data Ingin Dihapus?')) this.Delete(idx) } }>Delete</button> 
                                        <DetailUser indexProd={idx}/>              
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
    HapusUser: (index) => dispatch({ type: "DELETEUSER", payload: index}),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(ListUser)