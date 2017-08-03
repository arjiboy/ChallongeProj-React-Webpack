import React, {Component} from 'react'

class TourTeamsInput extends Component{
	render() {
		const num = "input " + this.props.num + " more name/s";
		return (
			<div>
				<p>Input Name:</p>
				<input onKeyPress={this.props.handlePress}
						onChange={this.props.handleChange}
						value={this.props.inputVal}
						placeholder={num}
						maxLength="12">						
				</input>
				<p>Teams/Players: 
					<strong>
						{this.props.length}
					</strong>
				</p>
			</div>
		)
	}
}


export default TourTeamsInput;