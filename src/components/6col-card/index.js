import React, { Component } from 'react';
import {Col} from 'react-bootstrap'
import {ProdCard} from '../../components'

class SixCol extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const dataCard= this.props.dataCard
        return ( 
            <>
            {dataCard.map((product, idx) => {  
                return <Col key={idx} sm={2}>
                            <ProdCard book={product} idx={idx}/>
                        </Col>
                    })}
            
            </>
         );
    }
}
 
export default SixCol;