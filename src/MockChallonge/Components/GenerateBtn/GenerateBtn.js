import React, {Component} from 'react';

class GenerateBtn extends Component{
	render() {
		return(
			<button onClick={this.props.handleClick}>
				Generate Matches
			</button>	
		)
	}
}

export default GenerateBtn