import React from 'react';
import { Button, Form ,Row,Container,Grid } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css' ;
import man from './man.png' ;
import avatar from './avatar.png' ;
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'





class Login extends React.Component{
    constructor(){
        super() ; 
    }

    state = {
        email: "",
        password: "",
    }

    onChangeEmail = (e) => {
        this.setState({email: e.value});
    }

    onChangePassword = (e) => {
        this.setState({password: e.value});
    }

    alert1 = (e) => {
        
        if(this.state.email !== "" && this.state.password !== "") {
            e.preventDefault() ;
            alert("Want us to save your password ?") ;
        }
    }
    render(){
        return(
            <Container className='loginctr'>
            <Form className='frm'>
            <div>
            <img src={avatar}  className='avatar' />
            </div>
            {/*Email address*/}
                <Form.Group  controlId="formBasicEmail" >
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control className='email'type="email" placeholder="Enter email" onChange={this.onChangeEmail} required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            {/*Password*/}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label><b>Password</b></Form.Label>
                    <Form.Control className='pswd' type="password" placeholder="Password" onChange={this.onChangePassword} required/>
                </Form.Group>
            {/*Check me out*/}
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" className="text-muted" />
                </Form.Group>
            {/*Submit*/}
            <center>
                <Link to="/fiche">
                    <Button variant="primary" type="submit" className='submit' onClick={(e)=>this.alert1(e)}>Submit</Button>
                </Link>
            </center>
            {/*Vous n'avez pas un compte ?  */}
            <center  className='reg'>
                <Link to="/register"  className='reglink'>Vous n'avez pas un compte ? </Link>
            </center>
            </Form>


            </Container>


        )
    }
}


export default Login