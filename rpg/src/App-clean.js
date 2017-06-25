import React, { Component } from 'react';
import './styles/App.css';

// import {getEnemies} from './services/getEnemies';
// import {getTroops} from './services/getTroops';
// import {postTroop} from './services/postTroop';
// import {patchMinion} from './services/patchMinion';
// import {deleteArmy} from './services/deleteArmy';

class App extends Component {

  // constructor() {
    // super()

    // this.state = {
    //   armiesArray: [],
    //   defensesArray: [],
    //   newRecruit: "",
    //   victoryMessage: ""
    // }

    // this.seeEnemies = this.seeEnemies.bind(this)
    // this.callTroops = this.callTroops.bind(this)
    // this.recruitTroop = this.recruitTroop.bind(this)
    // this.transformMinion = this.transformMinion.bind(this)
    // this.slayLeader = this.slayLeader.bind(this)
  // }

  seeEnemies() {
  //   getEnemies().then(apiObj => {
  //     this.setState({
  //       armiesArray: apiObj
  //     })
  //   })
  }
  //
  callTroops() {
  //   getTroops().then(apiArray => {
  //     this.setState({
  //       defensesArray: apiArray
  //     })
  //   })
  }
  //
  recruitTroop(event, recruit) {
  //   event.preventDefault()
  //   const paperwork = document.getElementById('paperwork')
  //   if (recruit) {
  //     postTroop(recruit).then(apiData => {
  //       this.callTroops();
  //       paperwork.value = ''
  //     })
  //   }
  }
  //
  // handleInput(event) {
  //   event.preventDefault();
  //   this.setState({
  //     newRecruit: event.target.value
  //   })
  // }
  //
  transformMinion(armyIndex, minionIndex, minionId) {
  //   patchMinion(minionId).then(apiData => {
  //     this.state.armiesArray[armyIndex].minions.splice(minionIndex, 1, apiData)
  //     this.setState({
  //       armiesArray: this.state.armiesArray
  //     })
  //   })
  }
  //
  slayLeader(shortname, id) {
  //   deleteArmy(shortname, id).then(apiData => {
  //     this.seeEnemies();
  //   })
  }
  //
  // componentDidMount() {
  //   this.callTroops();
  // }

  render() {
    // const armies = this.state.armiesArray.map((army, armyIndex) => (
    //   <ul key={armyIndex} className="army"><h3>Enemy Army #{army.id}: {army.name}</h3>
    //     <div className="leader" onClick={() => this.slayLeader(army.shortname, army.id)}>{army.leader}</div>
    //     <ul className="minions">
          {/* {army.minions.map((minion, minionIndex) => ( */}
            {/* give below to them */}
            {/* <li key={minionIndex} className="minion" onClick={() => this.transformMinion(armyIndex, minionIndex, minion.id)}>{minion.type}</li> */}
          {/* ))} */}
        // </ul>
      // </ul>
    // ))

    // const troops = this.state.defensesArray.map((troop, i) => (
      // <ul key={i} className="troops">
      //   <li className="troop">{troop.recruit}</li>
      // </ul>
    // ))

    return (
      <div className="App">

        {/* Main Defenses */}
        <div className="App-header">
          <h1>Enemies at our gate!</h1>
          <h2>Prepare our defenses!</h2>
          <div className="defenses">
            {/* use below */}
            {/*onClick={this.seeEnemies}*/}
            <div className="defense" id="sentry" >Sentry<span className="instructions">Click here to see approaching enemies!</span></div>
            <div className="defense" id="captain">Captain<span className="instructions">Fill out paperwork below to recruit new troop!</span></div>
            <div className="defense" id="wizard">Wizard<span className="instructions">Click directly on a minion to cast a spell!</span></div>
            <div className="defense" id="ballista">Ballista<span className="instructions">Blast enemy leader to disperse army!</span></div>
          </div>
        </div>


        {/* Reinforcements */}
        <div className="reinforcements">
          <form type="submit">
            Form NR-1 (New Recruit Request Form):
            {/* onChange={(e) => this.handleInput(e)} */}
            <input  id="paperwork" placeholder="Please indicate requested recruit"/>
            {/* onClick={(e) => this.recruitTroop(e, this.state.newRecruit)} */}
            <button >Enlist!</button>
          </form>
          {/* {troops} */}
          {/* <p>{this.state.victoryMessage}</p> */}
          <div id="wall">
            <span></span><span id="gate">GATE</span><span></span>
          </div>
        </div>


        {/* Enemies Armies */}
        <div className="enemies">
            {/* {armies} */}
        </div>
      </div>
    );
  }
}

export default App;
