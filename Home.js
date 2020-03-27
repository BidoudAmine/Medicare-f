import React from 'react';
import Sidebar from './Sidebar';
import Login from './Login';

import Mouradyya from "./mouradyya";


class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Login />
            </div>

        )
    }
}

export default Home