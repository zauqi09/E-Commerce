import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer className="footer bg-light">
                      <div className="container">
                      <div className="row">
                          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                          <ul className="list-inline mb-2">
                              <li className="list-inline-item">
                              <a href="about-us.html">Tentang</a>
                              </li>
                              <li className="list-inline-item">&sdot;</li>
                              <li className="list-inline-item">
                              <a href="/">Hubungi Kami</a>
                              </li>
                              <li className="list-inline-item">&sdot;</li>
                              <li className="list-inline-item">
                              <a href="index.html">Beranda</a>
                              </li>
                          </ul>
                          <p className="text-muted small mb-4 mb-lg-0"> E-Commerce &copy; 2020  All Rights Reserved</p>
                          </div>
                          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                          <ul className="list-inline mb-0">
                              <li className="list-inline-item mr-3">
                              <a href="/">
                                  <i className="fa fa-facebook fa-2x fa-fw"></i>
                              </a>
                              </li>
                              <li className="list-inline-item mr-3">
                              <a href="/">
                                  <i className="fa fa-twitter-square fa-2x fa-fw"></i>
                              </a>
                              </li>
                              <li className="list-inline-item">
                              <a href="/">
                                  <i className="fa fa-instagram fa-2x fa-fw"></i>
                              </a>
                              </li>
                          </ul>
                          </div>
                      </div>
                      </div>
            </footer>
         );
    }
}
 
export default Footer;