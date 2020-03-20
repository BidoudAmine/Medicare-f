import React from 'react';
import Login from './Login' ;
import Botnav from './Botnav';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Slogan from './Slogan';
import Side from './side' ;
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



class Home extends React.Component{
    constructor(props){
        super() ;
    }
    render(){
        return(
            <div>
                <Navbar />
                <Login />
                <div>
                    <Side />
                </div>

            </div>

        )
    }

}

export default Home