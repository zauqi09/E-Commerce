import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
class NavLink extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let link = this.props.link
        let active = withRouter === link ? "active" : ""
        return ( 
            <li className={`nav-item  ${active}`}>
                <Link className="nav-link" to={link}>
                    {this.props.children}
                </Link>
            </li>
         );
    }
}
 
export default NavLink;