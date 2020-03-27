import React from 'react';
import Header from './Header' ;
import Text1 from './Text1' ;
import Socialmed from './Socialmed' ;
import './Header.css';
import Rate from './Rate' ;
import Team from './Team';


class Homepage extends React.Component{
    constructor(){
        super() ;
    }
    render(){
        return(
            <div>
                <Header />
                <Text1 />
                <Team />
                <Socialmed />
                <div className="box">

                </div>
            </div>
        )
    }
}

export default Homepage