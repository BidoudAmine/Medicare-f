import React from 'react';
import insta from './insta.png' ;
import fb from './fb.png' ;
import google from './google.png' ;


class Botnav extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
                <div className = "botnav" >
                    <a href="#" target="blank" className='googlepadding'><img src={google} alt="Google" /></a>
                    <a href="https://www.facebook.com/bidoud.amine" target="blank" className='fbpadding'><img src={fb} /></a>
                    <a href="https://www.instagram.com/3d_natives/" target="blank" className='instapadding'><img src={insta} /></a>

                    <a href="#home">Our offer</a>
                    <a href="#news">Partners</a>
                    <a href="#contact">Terms and Conditions</a>
                    <a href="about.html">Advertising</a>
                    <a href="#search">Links</a>
                </div>
            )
        }      
}

export default Botnav 
