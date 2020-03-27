import React from 'react';
import { Card } from 'react-bootstrap';
import { Button, Form ,Row,Container,Grid } from 'react-bootstrap';
import avatar from './avatar.png' ;
import './Fiche.css';
import Message from './Message' ;


class Fiche extends React.Component{
    constructor(){
        super() ;
    }
    render(){
        const { params } = this.props.match


        return(
            <div>
                <h1>Bienvenue {params.id} !</h1>
                <div className="creation">
                    <p>Créé le : 05/09/1995. Mis à jour le : 09/08/2012 à 11:22:48</p>
                    <p>Dernière consultation : 03/11/2008</p>
                </div>
                <Message />
                <div>
                    <img src={avatar}  className='imgid' />
                </div>
                <Container className='fiche'>
                        <br />
                        <br />
                        <p><b>— Nom et prénom : </b> Bidoud AMINE</p>
                        <p><b>— Date de naissance: </b> 10 / 01 /1999</p>
                        <p><b>— Numéro de Telephone : </b> 06 54 13 54 35</p>
                        <p><b>— Groupe sanguin:</b> {params.gs} </p>
                        <p><b>— Lieu de naissance</b></p>
                        <p><b>— Situation familiale : </b>Célibtaire</p>
                        <p><b>— Profession : </b> Etudiant </p>
                        <p><b>— N° Séc. sociale</b></p>
                        <p><b>— Caisse : </b></p>
                        <p><b>— Assuré :</b></p>
                        <p><b>— Particularités :</b></p>
                        <p><b>— Médecin traitant :</b></p>
                        <p><b>— Correspondants :</b></p>
                        <p><b>— Mots clés :</b></p>                        
                        <p><b>— d</b></p>  
                        <p><b>— Antécédents familiaux: </b> Bidoud AMINE</p>
                        <p><b>— Antécédents chirurgicaux et obstétricaux : </b> 10 / 01 /1999</p>
                        <p><b>— Antécédents médicaux et facteurs de risque : </b> 06 54 13 54 35</p>
                        <p><b>— Groupe sanguin :</b> O+ </p>
                        <p><b>— Lieu de naissance :</b></p>
                        <p><b>— Situation familiale : </b>Célibtaire</p>
                        <p><b>— Profession : </b> Etudiant </p>
                        <p><b>— N° Séc. sociale :</b></p>
                        <p><b>— Caisse : </b></p>
                        <p><b>— Assuré</b></p>
                        <p><b>— Particularités</b></p>
                        <p><b>— Médecin traitant</b></p>
                        <p><b>— Correspondants</b></p>
                        <p><b>— Mots clés</b></p>                        
                        <p><b>— d</b></p>  
                                              

                </Container>

            </div>



        )
    }
}

export default Fiche