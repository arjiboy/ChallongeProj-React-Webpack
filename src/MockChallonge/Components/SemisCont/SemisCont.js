import React,{Component} from 'react';

class SemisCont extends Component{
	render(){
		const self = this
		const semisTeams = this.props.player
		return (
			<div className='col'>
				{
					semisTeams.map(function(element,i){
						if (i%2 == 0){
							return (
								<div>
									<div className="semis-none">|</div>
									<div className="item" name={element} onMouseOver={self.props.handleHover}
										onMouseOut={self.props.handleHoverOut}>
										{element}
									</div>
								</div>					
							)
						}
						else{
							return (
								<div>
									<div className="item" name={element} onMouseOver={self.props.handleHover}
										onMouseOut={self.props.handleHoverOut}>
										{element}
									</div>
									<div className="semis-none">|</div>
								</div>
							)
						}
					})
				}
			</div>
		)
	}
}

export default SemisCont;