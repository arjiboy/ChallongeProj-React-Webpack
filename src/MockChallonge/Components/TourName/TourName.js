import React, {Component} from 'react';

class TourName extends Component{
	render() {
		return (
			<h2 className='matchTitle'>
				{this.props.matchTitle}{this.props.temp}
			</h2>
		)
	}
}
export default TourName;