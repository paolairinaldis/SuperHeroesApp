import React, {Component} from 'react';
import SuperHeroesList from './SuperHeroesList';
import SuperHero from './SuperHero';
import 'bootstrap/dist/css/bootstrap.css';
import Styles from '../styles/styles.css'
import {connect} from 'react-redux';

class App extends Component {

  render(){
    return (
      <div className="App col-md-12">
				<h1 className="app-title">
          Marvel SuperHeroes
        </h1>	
				<div className="col-md-4 well well-sm">
					{this.props.superHeroReducer.superheroes && <SuperHeroesList />}
				</div>
				<div className="col-md-1"></div>
				<div className="col-md-7 well well-sm biography">
        {this.props.selectSuperHeroReducer.superhero && <SuperHero />}
				</div>
			</div>
    )
  }

}

function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps, null)(App);
