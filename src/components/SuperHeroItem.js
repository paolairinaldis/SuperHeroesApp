import React, {Component} from 'react';

class SuperHeroItem extends Component {
	
	render() {
		const {item} = this.props;
		return(
			<div>
				<img className="list-item-img" 
									src={item.thumbnail.path + 
											'.' + item.thumbnail.extension}
									alt='Marvel Superhero' />
				<span className="list-item-name">{item.name}</span>
				<p className="list-item-refs">
					{item.comics.available > 0 && <span className="list-item-circ list-item-comics"></span>}
					{item.series.available > 0 && <span className="list-item-circ list-item-series"></span>}
					{item.events.available > 0 && <span className="list-item-circ list-item-events"></span>}
					{item.stories.available > 0 && <span className="list-item-circ list-item-stories"></span>}
				</p>
			</div>		
		);
	}
}
export default SuperHeroItem;