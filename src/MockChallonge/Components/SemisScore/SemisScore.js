import React, {Component} from 'react';

class SemisScore extends Component{
	render() {
	const self = this
	const arr = this.props.score
		return (
			<div className='col'>
				{
					arr.map(function(element,i){
						if(i%2 == 0){
							return (
									<div>
										<div className='semis-none'>|</div>
										<div className='score' data-name={element} id={i} 
												onClick={self.props.handleClick}>&#x021A3;</div>
									</div>
								)
						}
						else {
							return (
									<div>
										<div className='score' data-name={element} id={i} 
												onClick={self.props.handleClick}>&#x021A3;</div>
										<div className='semis-none'>|</div>
									</div>
								)
						}
					})
				}
			</div>
			)
	}
}

export default SemisScore; 