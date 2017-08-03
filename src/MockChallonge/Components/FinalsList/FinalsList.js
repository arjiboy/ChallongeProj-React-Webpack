import React,{Component} from 'react';

class FinalsList extends Component{
	render(){
		const self = this
		const finalsTeams = this.props.player

		return (
			<div className='col'>
				{
					finalsTeams.map(function(element,i){
						if (i%2 == 0){
							return (
								<div>
									<div className='finals-none'>|</div>
									<div className='item' name={element} onMouseOver={self.props.handleHover}
										onMouseOut={self.props.handleHoverOut}>
										{element}
									</div>
								</div>
							)
						}
						else {
							return (
								<div className='item' name={element} onMouseOver={self.props.handleHover}
								onMouseOut={self.props.handleHoverOut}>
										{element}
								</div>
							)
						}		
					})
				}
			</div>
		)
	}
}

export default FinalsList;