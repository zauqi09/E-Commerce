import React, { Component } from 'react';
import { connect } from "react-redux"
class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
                                        <button className='btn btn sizefix'>Detail</button>
                                        <button className='btn btn-warning sizefix'> Edit</button>
                                        <button className='btn btn-danger sizefix'>Delete</button>             
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
  
  
  
export default connect(mapStateToProps)(ListUser)