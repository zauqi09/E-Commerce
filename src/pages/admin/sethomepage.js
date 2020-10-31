import React, { Component } from 'react';
import {SetHome} from '../../components'
import { connect } from "react-redux"
class SetHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }
    
    render() { 
        const { bestSeller,newArrival,discountItem} = this.props
        return ( 
            <>
            <h5>Best Seller</h5>
            <SetHome dataTabel={bestSeller}/>
            <h5>New Arrival</h5>
            <SetHome dataTabel={newArrival}/>
            <h5>Discount Item</h5>
            <SetHome dataTabel={discountItem}/>
            </>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        statusLogin: state.auth.isLoggedIn,
        userList : state.auth.userListFromApp,
        listProduct: state.product.listProduct,
        bestSeller : state.product.bestSeller,
        newArrival : state.product.newArrival,
        discountItem : state.product.discountItem,
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    doLogin: (dataLogin,userlist,listProduct,bestSeller,discountItem,newArrival) => dispatch({ type: "LOGIN", payload: {dataLogin,userlist,listProduct,bestSeller,discountItem,newArrival}}),
})

export default connect(mapStateToProps,mapDispatchToProps)(SetHomePage)