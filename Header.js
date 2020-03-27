import React from 'react';
import { Button, Col,Row,Container,Grid } from 'react-bootstrap';
import './Header.css';


class Header extends React.Component{
    constructor(){
        super() ;
    }
    render(){
        return(
            
            <Container className='ctr'>
                <Row>
                    <Col>
                        <Col md lg={1}>
                        <h1 className="medicare" ><b className="medi">MEDI</b>CARE</h1>
                        </Col>    
                    </Col>

                    <Col>
                        <ol>
                            <li><Button variant = "light" className='btn'>Accueil</Button></li>
                            <li><Button className='btn'>Presentation</Button></li>
                            <li><Button className='btn'>Fonctionnalités</Button></li>
                            <li><Button className='btn'>FAQ</Button></li>
                            <li><Button className='btn'>TEL</Button></li>
                        </ol>
                    </Col>
                </Row>


            </Container>
        )
    }
}

export default Header


//  https://www.medic.ma/index.php#software-features