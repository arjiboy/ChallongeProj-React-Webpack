import React, { Component } from 'react';
import './App.css';
import TourName from './Components/TourName/TourName'
import Dashboard from './Components/Dashboard/Dashboard'
import ElimsCont from './Components/ElimsCont/ElimsCont'
import SemisCont from './Components/SemisCont/SemisCont'
import FinalsList from './Components/FinalsList/FinalsList'
import ElimsScore from './Components/ElimsScore/ElimsScore'
import SemisScore from './Components/SemisScore/SemisScore'
import FinalsScore from './Components/FinalsScore/FinalsScore'
import ElimLines from './Components/ElimLines/ElimLines'
import FinalLine from './Components/FinalLine/FinalLine'


class Container extends Component{
	constructor(props) {
		super(props);
		this.state = {
			titleVal: "",
			tourTitle: "",
			teamList: [],
			inpVal: "",
			elimsList: ["arjiboy.ix","babiDy","Crazee-9","DynaMight","elg33",
						"f0x1898","gundamWin!","hollyBee"],
			semisList: ["arjiboy.ix","DynaMight","elg33","gundamWin!"],
			finalsList: ["arjiboy.ix","elg33"],
		}
		this.teamName = this.teamName.bind(this)
		this.generateInfo = this.generateInfo.bind(this)
		this.inputName = this.inputName.bind(this)
		this.inputTeam = this.inputTeam.bind(this)
		this.cancel = this.cancel.bind(this)
		this.highlightSame = this.highlightSame.bind(this)
		this.unhighlightSame = this.unhighlightSame.bind(this)
		this.score = this.score.bind(this)
		this.scoreFinals = this.scoreFinals.bind(this)
		this.random = this.random.bind(this)
	}
	teamName(event){
		this.setState({
			tourTitle: "",
			titleVal: event.target.value
		})
	}
	generateInfo(event){
		if (this.state.teamList.length == 8){
			this.setState({
				tourTitle: this.state.titleVal,
				titleVal: "",
				elimsList: this.state.teamList,
				teamList: [],
				semisList: ["waiting","waiting","waiting","waiting"],
				finalsList: ["waiting","waiting"]
			})
			document.getElementById('random').disabled = false
		}
		else{
			alert('C\'mon! Give me something to work on!\nPlease provide 8 player/team names to create bracket')
		}	
	}
	inputName(event){
		const list = this.state.teamList
		if (event.key == 'Enter' && event.target.value != "" && list.length < 8){
			list.push(event.target.value)
			this.setState({
				teamList: list,
				inpVal: ""
			})
		}
	}
	inputTeam(event){
		this.setState({
			inpVal: event.target.value
		})
	}
	cancel(event){
		const list = this.state.teamList
		const newList = list.filter(function(element){
				return element != event.target.innerHTML
			})
		this.setState({
			teamList: newList
		})
	}
	reset(event){
		location.reload();
	}
	highlightSame(event){
		const name = event.target.innerHTML
		const collection = document.getElementsByName(name)
		Array.prototype.map.call(collection,function(element){
			element.classList.add('change')
		})
	}
	unhighlightSame(event){
		const name = event.target.innerHTML
		const collection = document.getElementsByName(name)
		Array.prototype.map.call(collection,function(element){
			element.classList.remove('change')
		})
	}
	score(event){
		const i = event.target.id
		const ind = i%2 == 0 ? i/2 : Math.floor(i/2)
		const temp = this.state.semisList
		temp[ind] = event.target.dataset.name
		this.setState({
			semisList: temp
		})
		document.getElementById('random').disabled = true
	}
	scoreFinals(event){
		const i = event.target.id
		const ind = i%2 == 0 ? i/2 : Math.floor(i/2)
		const temp = this.state.finalsList
		temp[ind] = event.target.dataset.name
		this.setState({
			finalsList: temp
		})
	}
	random(event){
		var list = [];
		const teams = this.state.elimsList
		while (list.length != 8){
			var randNum = Math.floor(Math.random()*teams.length);
			var choice = teams[randNum];
			if (!list.includes(choice)){
				list.push(choice);
			}
		}
		this.setState({
			elimsList: list
		})
	}

	render() {
		return(
			<div>
				<h1>Tournament Bracket Generator</h1>
				<div className='container'>
					<TourName matchTitle={this.state.tourTitle}
								temp={this.state.titleVal}/>
					<div className='col-container'>
						<Dashboard value={this.state.titleVal}
									title={this.teamName}
									number={8 - this.state.teamList.length}
									press={this.inputName}
									teams={this.inputTeam}
									teamVal={this.state.inpVal}
									len={this.state.teamList.length}
									players={this.state.teamList}
									cancel={this.cancel}
									clickGen={this.generateInfo}
									clickRandom={this.random}
									clickReset={this.reset}/>
						<ElimsCont  player={this.state.elimsList}
									handleHover={this.highlightSame}
									handleHoverOut={this.unhighlightSame}/>
						<ElimsScore score={this.state.elimsList} handleClick={this.score}/>
						<ElimLines />
						<SemisCont  player={this.state.semisList}
									handleHover={this.highlightSame}
									handleHoverOut={this.unhighlightSame}/>
						<SemisScore score={this.state.semisList}
									handleClick={this.scoreFinals}/>
						<FinalLine />
						<FinalsList player={this.state.finalsList}
									handleHover={this.highlightSame}
									handleHoverOut={this.unhighlightSame}/>
						<FinalsScore score={this.state.finalsList}/>
					</div>
				</div>
				<footer><small><i>~rg</i></small></footer>
			</div>
		)
	}
}
export default Container;



/*
css
note flexbox

winner
effects*/
