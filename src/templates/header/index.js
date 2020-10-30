import React, { Component } from 'react';
import './style.css'
import {CarouselHome} from '../../components'
import { Switch, Route } from "react-router-dom"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    showHeader = () => {
        //const { statusLogin } = this.props
        return (
            <Switch>
                <Route exact path="/" component ={() => <CarouselHome />}/>
                <Route path="/katalog" />
                <Route path="/admin" />
                <Route path="/keranjang"/>
                <Route path="/pembayaran"/>
                <Route path="/masuk" />
                <Route path="/daftar" />
            </Switch>
        )
    }
    render() { 
        return ( 
            <>
                {
                    this.showHeader()
                }
            </>
        
          );
    }
}
 
export default Header;