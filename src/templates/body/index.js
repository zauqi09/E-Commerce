import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import {Daftar, Home,Masuk,Katalog,Pembayaran,Admin,Keranjang} from '../../pages'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    showPage = () => {
        //const { statusLogin } = this.props
        return (
            <Switch>
                <Route exact path="/" component ={() => <Home />}/>
                <Route path="/katalog" component ={() => <Katalog />}/>
                <Route path="/admin" component ={() => <Admin />}/>
                <Route path="/keranjang" component ={() => <Keranjang />}/>
                <Route path="/pembayaran" component ={() => <Pembayaran />}/>
                <Route path="/masuk" component ={() => <Masuk />}/>
                <Route path="/daftar" component ={() => <Daftar />}/>
            </Switch>
        )
    }
    render() { 
        return ( 
            <>
                {
                    this.showPage()
                }
            </>
         );
    }
}
 
export default Body;