import React, { Component } from 'react'
import {Navigation,Body,Footer,Header} from './templates'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <Navigation/>
        <Header/>
        <Body/>
        <Footer/>
      </>
     );
  }
}
 
export default App;