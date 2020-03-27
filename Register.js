import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form ,Row,Container,Grid,Col } from 'react-bootstrap';
import './Register.css';
import avatar from './avatar.png' ;


class Register extends React.Component{
    constructor(){
        super() ;
    }
    render(){
        return(
            <center>
            <Form className="fr" >
                    <div>
                    <img src={avatar}  className='avatar' />
                    </div>
                <Form.Row>
                    <Form.Group as={Col}  controlId="formGridEmail">
                    <Form.Label >Nom</Form.Label>
                    <Form.Control type="text" placeholder="Saisir Nom" className="inp"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control type="text" placeholder="Saisir Prénom" className="inp"/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}  controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="inp"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Password" className="inp"/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}  controlId="formGridEmail">
                    <Form.Label >Date de naissance</Form.Label>
                    <Form.Control type="date" placeholder="Saisir Nom" className="inp"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Numéro de telephone</Form.Label>
                    <Form.Control type="text" placeholder="Saisir Prénom" className="inp"/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" className="inp"/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ville</Form.Label>
                    <Form.Control className="inp"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" value="Choose..." className="opt" >
                        <option >Male</option>
                        <option>Female</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control className="inp"/>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" className="submit">
                    Valider
                </Button>


                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>


            </Form>
            </center>
        )
    }
}

export default Register