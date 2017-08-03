import React, {Component} from 'react';

class TourPlayer extends Component{
	render() {
		const teams = this.props.player
		const self = this
		return(
			<div>
				{
				teams.map(function (element){
					return (
						<div onClick={self.props.handleClick} className='player'>{element}</div>
						)
				})
				}
			</div>
		)
	}	
}


export default TourPlayer;