import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class SuperHero extends Component {
	render() {
		if(this.props.superhero){
			this.current = this.props.superhero;
		}
		return(
			<div>
				
				<h3>{this.current.name}</h3>
				{
					this.current.name?
						<div className="biowrapper bioDetails">
							<div className="col-md-6 portrait">
								<img className="item-img" 
									src={this.current.thumbnail.path + 
											'.' + this.current.thumbnail.extension}
									alt='Marvel superhero portrait' />
							</div>
							<div className="col-md-6 bioDescription">
								<p className="">{this.current.description}</p>
								<ul className="bioDetails-urls">
									{
										this.current.urls && this.current.urls.length > 0 &&	
											this.current.urls.map(item => {
												return(
													<li 
														key={item.type}
														className=""
													>
													<a href={ item.url } target="_blank" rel="noopener noreferrer" title={ item.url }>
													{ item.url }
													</a>
													</li>
												);
											})
									}
								</ul>
								<ul className="list-item-references">
									{this.current.comics.available > 0 && <li><span className="list-item-circ list-item-comics"></span> Appear in {this.current.comics.available} comics</li>}
									{this.current.series.available > 0 && <li><span className="list-item-circ list-item-series"></span> Appear in {this.current.series.available} series</li>}
									{this.current.events.available > 0 && <li><span className="list-item-circ list-item-events"></span> Appear in {this.current.events.available} events</li>}
									{this.current.stories.available > 0 && <li><span className="list-item-circ list-item-stories"></span> Appear in {this.current.stories.available} stories</li>}
								</ul>	
							</div>
						</div>
						:
						<h4>Select a Superhero...</h4>
				}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		superhero: state.selectSuperHeroReducer.superhero
	};
}
export default connect(mapStateToProps, null)(SuperHero);