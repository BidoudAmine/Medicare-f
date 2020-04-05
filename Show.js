import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Show.css' ;
import me from './me.jpg'
import avatar from './avatar.png' ;



class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/fiches/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <center>
              <br/>
              <h1 class="panel-title">Fiche detaillée</h1>
            </center>

          </div>
          <div class="panel-body">
            <h7><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>Retour à la liste des patients</Link></h7>
            
            <center>
            <dl>
              
              <center>
                <dd>
                  <img src={this.state.fiche.pic}   className='pic' />
                </dd>
              </center>
{/*–––––––––––– Informations personnelles –––––––––––*/}<br/><h3>Informations personnelles</h3><hr className="style16" /><br/>
              <dt>— Nom —</dt>
              <dd>{this.state.fiche.nom}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— Prenom —</dt>
              <dd className="prenom">{this.state.fiche.prenom}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— Date de naissance —</dt>
              <dd>{this.state.fiche.date_n}</dd>
              <br/><hr class="style4" /><br/>
              <dt>— Lieu de naissance —</dt>
              <dd>{this.state.fiche.lieu_n}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— Adresse —</dt>
              <dd>{this.state.fiche.adresse}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— E-mail —</dt>
              <dd>{this.state.fiche.mail}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— Telephone —</dt>
              <dd>{this.state.fiche.tel}</dd>
                    <br/><hr class="style4" /><br/>


{/*––––––––––– Biometrie  ––––––––––––*/}<br/><h3>Biométrie</h3><hr className="style16" /><br/>
              <dt>— Taille —</dt>
              <dd>{this.state.fiche.taille}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— Poids —</dt>
              <dd>{this.state.fiche.poids}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— Groupe sanguin —</dt>
              <dd>{this.state.fiche.grpsanguin}</dd>
                    <br/><hr class="style4" /><br/>

{/*––––––––––– Informations medicales ––––––––––––*/}<br/><h3>Informations medicales</h3><hr className="style16" /><br/>

              <dt>— Taux de glycemie —</dt>
              <dd>{this.state.fiche.glycemie}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— Hyper tension arter —</dt>
              <dd>{this.state.fiche.hyper_tension_arter}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— Taux de cholesterol —</dt>
              <dd>{this.state.fiche.cholesterol}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— Taux de triglyceride —</dt>
              <dd>{this.state.fiche.triglyceride}</dd>
                    <br/><hr class="style4" /><br/>
              <dt>— Taux de transaminases —</dt>
              <dd>{this.state.fiche.transaminases}</dd>
                    <br/><hr class="style4" /><br/>

            </dl>

            </center>
            <br/><br/>
            <center>
              <Link to={`/edit/${this.state.fiche.id}`} className="btn btn-success">Editer</Link>&nbsp;
              <button onClick={this.delete.bind(this, this.state.fiche.id)} className="btn btn-danger">Supprimer</button>
            </center>


            <br/><br/><br/><br/>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;