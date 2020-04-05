import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Create.css' ;


class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fiche: {}
    };
  }

  componentDidMount() {
    axios.get('/fiches/'+this.props.match.params.id)
      .then(res => {
        this.setState({ fiche: res.data });
        console.log(this.state.fiche);
      });
  }

// O N    C H A N G E S  ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
onChange = (e) => {
  const state = this.state.fiche
  state[e.target.name] = e.target.value;
  this.setState({fiche:state});
}
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  onSubmit = (e) => {
    e.preventDefault();

    const { nom , prenom , mail , tel , taille ,  poids , grpsanguin , glycemie , date_n , hyper_tension_arter , cholesterol , triglyceride , transaminases , pic} = this.state.fiche;

    axios.put('/fiches/'+this.props.match.params.id, { nom , prenom , mail , tel , taille ,  poids , grpsanguin , glycemie , date_n , hyper_tension_arter , cholesterol , triglyceride , transaminases , pic})
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDITER LA FICHE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.fiche.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>Liste des patients </Link></h4>

{/*––––––––––––––––F  O   R   M–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––*/}    
          <center>
          <form onSubmit={this.onSubmit}>
          
            <div class="form-group">
              <label >Photo de profile</label>
              <input type="text" className="form-control" name="pic" value={this.state.fiche.pic} onChange={this.onChange} placeholder="pic" />
            </div>

{/*–––––––––––––––––––––––*/}<br/><h3>Informations personnelles</h3> <br/>
            <div className = "infoperso">

  {/*–– NOM ––*/}
              <div class="form-group">
              <label for="nom">Nom:</label>
              <input type="text" class="form-control" name="nom" value={this.state.fiche.nom} onChange={this.onChange} placeholder="Nom" />
              </div>
  {/*––PRENOM––*/}
              <div class="form-group">
              <label for="title">Prenom:</label>
              <input type="text" class="form-control" name="prenom" value={this.state.fiche.prenom} onChange={this.onChange} placeholder="Prenom" />
              </div>
  {/*——Date de naissance––*/}
              <div class="form-group">
              <label for="title">Date de naissance</label>
              <input type="date" class="form-control" name="date_n" value={this.state.fiche.date_n} onChange={this.onChange} placeholder="date_n" />
              </div>

  {/*MAIL*/}
              <div class="form-group">
              <label for="nom">Adresse mail:</label>
              <input type="text" class="form-control" name="mail" value={this.state.fiche.mail} onChange={this.onChange} placeholder="mail" />
              </div>
  {/*––Tel––*/}
              <div class="form-group">
              <label for="title">Telephone:</label>
              <input type="text" class="form-control" name="tel" value={this.state.fiche.tel} onChange={this.onChange} placeholder="tel" />
              </div>
              <br/>
            </div>
{/*–––––––––––––––––––––––*/}<br/><h3>Biométrie</h3> <br/>
            <div className = "infoperso">
            <br/>
{/*Taille*/}
            <div class="form-group">
              <label for="isbn">Taille</label>
              <input type="text" className="form-control" name="taille" value={this.state.fiche.taille} onChange={this.onChange} placeholder="Taille" />
            </div>
{/*Poids*/}
            <div class="form-group">
              <label for="title">Poids</label>
              <input type="text" class="form-control" name="poids" value={this.state.fiche.poids} onChange={this.onChange} placeholder="Poids" />
            </div>
{/*––Grope sanguin––*/}
              <div class="form-group">
                <label for="isbn">Groupe sanguin</label>
                <select className="form-control" name="grpsanguin" value={this.state.fiche.grpsanguin} onChange={this.onChange} placeholder="Groupe sanguin">
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
{/*––Grope sanguin––*/}
            <div class="form-group">
            <label for="isbn">Groupe sanguin:</label>
            <select className="form-control" name="grpsanguin" value={this.state.fiche.grpsanguin} onChange={this.onChange} placeholder="Groupe sanguin">
              <option value=" A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            </div>
{/*Glycemie*/}
            <div class="form-group">
            <label for="title">Taux de glycemie</label>
            <input type="text" class="form-control" name="glycemie" value={this.state.fiche.glycemie} onChange={this.onChange} placeholder="Prenom" />
            </div>
{/*–– hyper_tension_arter ––*/}
            <div class="form-group">
            <label for="title">Hyper Tension Arter</label>
            <input type="text" class="form-control" name="hyper_tension_arter" value={this.state.fiche.hyper_tension_arter} onChange={this.onChange} placeholder="Taux de Hyper tension arter" />
            </div>
{/*–– Cholesterol ––*/}
            <div class="form-group">
            <label for="title">Taux de cholesterol</label>
            <input type="text" class="form-control" name="cholesterol" value={this.state.fiche.cholesterol} onChange={this.onChange} placeholder="Taux de cholesterol" />
            </div>
{/*–– Triglyceride ––*/}
            <div class="form-group">
            <label for="title">Taux de triglyceride</label>
            <input type="text" class="form-control" name="triglyceride" value={this.state.fiche.triglyceride} onChange={this.onChange} placeholder="Taux de triglyceride" />
            </div>
{/*–– Transaminases ––*/}
            <div class="form-group">
            <label for="title">Taux de triglyceride</label>
            <input type="text" class="form-control" name="transaminases" value={this.state.fiche.transaminases} onChange={this.onChange} placeholder="Taux de transaminases" />
            </div>
            <br/>
            </div>

            <button type="submit" class="btn btn-default">Metre à jour</button>
            </form>
          </center>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;