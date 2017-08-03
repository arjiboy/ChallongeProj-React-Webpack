import React, {Component} from 'react';

class TourNameInput extends Component{
	render() {
		return(
			<div>
				<p>Tournament Name:</p>
				<input 
					value={this.props.val} 
					onChange={this.props.handleChange}
					maxLength="45">
				</input>
			</div>
		)
	}
}


export default TourNameInput; 