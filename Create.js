import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Create.css' ;
import me from './me.jpg' ;
import avatar from './avatar.png' ;

class Create extends Component {

  constructor() {
    super();
    this.state = {
      nom: '',
      prenom: '',
      date_n: '' ,
      lieu_n:'' ,
      adresse:'' ,
      mail: '' ,
      tel: '' ,

      taille:'' , 
      poids:'' , 

      grpsanguin:'' ,
      glycemie:'' ,
      hyper_tension_arter:'' ,
      cholesterol:'' ,
      triglyceride:'' ,
      transaminases:'' ,
      pic:'' ,
    };
  }

// O N    C H A N G E S  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
onChange = (e) => {
  const state = this.state
  state[e.target.name] = e.target.value;
  this.setState(state);
}
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  onSubmit = (e) => {
    e.preventDefault();

    const {nom , prenom , mail , tel ,  taille ,  poids , grpsanguin , glycemie , date_n , lieu_n , adresse , hyper_tension_arter , cholesterol , triglyceride , transaminases , pic} = this.state;

    axios.post('/fiches', {nom , prenom ,  mail , tel ,  taille ,  poids, grpsanguin , glycemie , date_n , lieu_n , adresse , hyper_tension_arter , cholesterol , triglyceride , transaminases , pic })
      .then((result) => {
        this.props.history.push("/")
      });
  }

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  alert1 = (e) => {
      
      if(this.state.prenom == "") {
          e.preventDefault() ;
          alert("Prenom is required") ;
      }
  }
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

  render() {
    const { nom , prenom , mail , tel ,  taille ,  poids , grpsanguin , glycemie , date_n , lieu_n , adresse , hyper_tension_arter , cholesterol , triglyceride , transaminases  , pic} = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">

              <center><br/>
                <h2 class="panel-title">
                  Ajout d'un patient
                </h2>
              </center> 

          </div>
          <div className="panel-body ">
            <h7><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Retour à la liste des patients</Link></h7>
            <center>

{/*––––––––––––––––F  O   R   M–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––*/}
              <form onSubmit={this.onSubmit} >

                  <div class="form-group">
                    <label >Photo de profile</label>
                    <input type="text" className="form-control" name="pic" value={pic} onChange={this.onChange} placeholder="pic" />
                  </div>

{/*–––––––––––––––––––––––*/}<br/><h3>Informations personnelles</h3> <br/>
                <div className = "infoperso">
                  <br/>
    {/*––Nom––*/}
                  <div class="form-group">
                    <label for="isbn">Nom</label>
                    <input type="text" className="form-control" name="nom" value={nom} onChange={this.onChange} placeholder="Nom" required/>
                  </div>
    {/*––Prenom––*/}
                  <div class="form-group">
                    <label for="title">Prénom</label>
                    <input type="text" class="form-control" name="prenom" value={prenom} onChange={this.onChange} placeholder="Prenom" required/>
                  </div>
    {/*——Date de naissance––*/}
                  <div class="form-group">
                    <label for="title">Date de naissance</label>
                    <input type="date" class="form-control" name="date_n" value={date_n} onChange={this.onChange} placeholder="date_n" required/>
                  </div>
    {/*Lieu de naissance––*/}
                  <div class="form-group">
                    <label for="title">Lieu de naissance</label>
                    <input type="text" class="form-control" name="lieu_n" value={lieu_n} onChange={this.onChange} placeholder="Lieu de naissance" />
                  </div>
    {/* Adresse */}
                  <div class="form-group">
                    <label for="title">Adresse</label>
                    <input type="text" class="form-control" name="adresse" value={adresse} onChange={this.onChange} placeholder="Adresse" />
                  </div>
    {/*––Mail––*/}
                  <div class="form-group">
                    <label for="isbn">E-mail</label>
                    <input type="text" class="form-control" name="mail" value={mail} onChange={this.onChange} placeholder="E-mail" />
                  </div>
    {/*––Tel––*/}
                  <div class="form-group">
                    <label for="title">Téléphone</label>
                    <input type="text" class="form-control" name="tel" value={tel} onChange={this.onChange} placeholder="Telephone" />
                  </div>
                  <br/>
                </div>

{/*–––––––––––––––––––––––*/}<br/><h3>Biométrie</h3> <br/>
<div className = "infoperso">
                  <br/>
    {/*Taille*/}
                  <div class="form-group">
                    <label for="isbn">Taille</label>
                    <input type="text" className="form-control" name="taille" value={taille} onChange={this.onChange} placeholder="Taille" />
                  </div>
    {/*Poids*/}
                  <div class="form-group">
                    <label for="title">Poids</label>
                    <input type="text" class="form-control" name="poids" value={poids} onChange={this.onChange} placeholder="Poids" />
                  </div>
    {/*––Grope sanguin––*/}
                    <div class="form-group">
                      <label for="isbn">Groupe sanguin</label>
                      <select className="form-control" name="grpsanguin" value={grpsanguin} onChange={this.onChange} placeholder="Groupe sanguin">
                        <option value=" A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div><br/>
</div>
{/*–––––––––––––––––––––––*/}<br/><h3>Informations medicales</h3> <br/>
                <div className = "infoperso">
                                  <br/>

    {/*–– Glycemie ––*/}
                  <div class="form-group">
                    <label for="title">Taux de glycemie</label>
                    <input type="text" class="form-control" name="glycemie" value={glycemie} onChange={this.onChange} placeholder="Taux de glycémie" />
                  </div>
    {/*–– hyper_tension_arter ––*/}
                  <div class="form-group">
                    <label for="title">Hyper Tension Arter</label>
                    <input type="text" class="form-control" name="hyper_tension_arter" value={hyper_tension_arter} onChange={this.onChange} placeholder="Taux de Hyper tension arter" />
                  </div>
    {/*–– Cholesterol ––*/}
                  <div class="form-group">
                    <label for="title">Taux de cholesterol</label>
                    <input type="text" class="form-control" name="cholesterol" value={cholesterol} onChange={this.onChange} placeholder="Taux de cholesterol" />
                  </div>
    {/*–– Triglyceride ––*/}
                  <div class="form-group">
                    <label for="title">Taux de triglyceride</label>
                    <input type="text" class="form-control" name="triglyceride" value={triglyceride} onChange={this.onChange} placeholder="Taux de triglyceride" />
                  </div>
    {/*–– Transaminases ––*/}
                  <div class="form-group">
                    <label for="title">Taux de transaminases</label>
                    <input type="text" class="form-control" name="transaminases" value={transaminases} onChange={this.onChange} placeholder="Taux de transaminases" />
                  </div>

                  <br/>
                </div>


  
                <button type="submit" class="btn btn-default" onClick={(e)=>this.alert1(e)}> Ajouter </button>
              </form>
            </center>


          </div>
        </div>
      </div>
    );
  }
}

export default Create;