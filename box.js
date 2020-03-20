import React from 'react';
import './box.css';
import { render } from '@testing-library/react';

class Box extends React.Component{
    constructor(){
        super() ;
    }
    render(){
        return(
            <div className='container'>
                <header id='header' />
                <div className="all b1" >Box 1</div>
                <div className="all b2" >Box 2</div>
                <div className="all b3" >Box 3</div>
                <div className="all b4" >Box 4</div>
                <div className="clf" />                
            </div>
        )
    }
}

export default Box