import React, {Component} from 'react';

class ResetBtn extends Component{
	render() {
		return(
			<button onClick={this.props.handleClick}>
				Reset
			</button>
		)
	}
}


export default ResetBtn