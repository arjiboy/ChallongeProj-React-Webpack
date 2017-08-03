import React, {Component} from 'react';

class RandomizeBtn extends Component{
	render() {
		return(
			<button id='random' onClick={this.props.handleClick}>
				Random Arrange Elims
			</button>
		)
	}
}


export default RandomizeBtn