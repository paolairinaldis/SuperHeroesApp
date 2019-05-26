import React, {Component} from 'react';
import {connect} from 'react-redux';
import SuperHeroItem from './SuperHeroItem';
import {setSelectSuperHero} from '../actions/superHeroActions';


class SuperHeroesList extends Component {
	constructor(props){
		super(props);
		this.listData = this.props.superheroes;
		this.loading = true;
	}
	
	setListData(){
		if(!this.listData){
			this.listData = this.props.superheroes;
		}
	}
	selectSuperHero(e,superhero){
		if(this.currentlySelectSuperHero){
			this.currentlySelectSuperHero.style = 'background-color: #FFFFFF;';
		}
		this.currentlySelectSuperHero = e.target.closest('li');
		this.currentlySelectSuperHero.style = 'background-color: #000;color: #FFF';	
		this.props.setSelectSuperHero(superhero);
	}
	componentWillReceiveProps(){
		this.setListData();
	}
	checkData(){
		if(this.props.superheroes && (!this.listData)) {
			this.setListData();
		}
	}
	checkLoading(){
		this.loading = false;
		if(!this.props.superheroes || !this.listData ){
            this.loading = true;
            this.listData = this.props.superheroes
		}
	}
	render() {
		this.checkData();
		this.checkLoading();
		return( 
			<div className="characterWrapper">
				<h3>SuperHeroes</h3>
					
					<div className="tab-content clearfix">
						<div className="tab-pane active" id="1a">
							<div className="card-wrapper">
								<div>
									<ul className="list-group scroll-characters">
                                        {
                                            this.listData && !this.loading ?    
                                                this.listData.map(item => {
                                                    return(
                                                        <li 
                                                            key={item.id} 
                                                            data-id={item.id}
                                                            className="list-group-item"
                                                            onClick={(e) => this.selectSuperHero(e,item)}
                                                        >
                                                            <SuperHeroItem
                                                                key={item.id}
                                                                item={item}
                                                            />
                                                        </li>
                                                    );
                                                })
                                                :
                                                <li className="list-group-item">loading...</li>
                                        }
                                    </ul>
								</div>
							</div>
						</div>
					</div>
				
					<ul className="list-item-references">
						<li><span className="list-item-circ list-item-comics"></span> Appears in comics</li>
						<li><span className="list-item-circ list-item-series"></span> Appears in series</li>
						<li><span className="list-item-circ list-item-events"></span> Appears in events</li>
						<li><span className="list-item-circ list-item-stories"></span> Appears in stories</li>
					</ul>

			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		superheroes: state.superHeroReducer.superheroes
	};
}
export default connect(mapStateToProps, {setSelectSuperHero})(SuperHeroesList);