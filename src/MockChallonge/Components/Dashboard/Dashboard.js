import React, {Component} from 'react';
import TourNameInput from '../TourNameInput/TourNameInput'
import TourTeamsInput from '../TourTeamsInput/TourTeamsInput'
import TourPlayer from '../TourPlayer/TourPlayer'
import GenerateBtn from '../GenerateBtn/GenerateBtn'
import RandomizeBtn from '../RandomizeBtn/RandomizeBtn'
import ResetBtn from '../ResetBtn/ResetBtn'

class Dashboard extends Component{
	render() {
		return(
			<div className='col dashb'>
				<TourNameInput val={this.props.value}
								handleChange={this.props.title}/>
				<TourTeamsInput num={this.props.number}
								handlePress={this.props.press}
								handleChange={this.props.teams}
								inputVal={this.props.teamVal}
								length={this.props.len}/>
				<TourPlayer player={this.props.players}
							handleClick={this.props.cancel}/>
				<div className='buttons'>
					<GenerateBtn handleClick={this.props.clickGen}/>
					<RandomizeBtn handleClick={this.props.clickRandom}/>
					<ResetBtn handleClick={this.props.clickReset}/>
				</div>
			</div>
		)
	}
}


export default Dashboard;