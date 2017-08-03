import React, {Component} from 'react';

class FinalsScore extends Component{
	render() {
	const arr = this.props.score
		return (
			<div className='col'>
				{
					arr.map(function(element,i){
						if(i%2 == 0){
							return (
									<div>
										<div className='finals-none'>|</div>
										<div className='score'>&#x021A3;</div>
									</div>
								)
						}
						else {
							return (
									<div className='score'>&#x021A3;</div>
								)
						}
					})
				}
			</div>
		)
	}
}

export default FinalsScore; 