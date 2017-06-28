import React, { Component } from 'react';
import './styles/App.css';

import {getEnemies} from './services/getEnemies';
import {getTroops} from './services/getTroops';
import {postTroop} from './services/postTroop';
import {patchMinion} from './services/patchMinion';
import {deleteArmy} from './services/deleteArmy';

class App extends Component {

  constructor() {
    super()

    this.state = {
      armiesArray: []
      ,defensesArray: []
      ,newRecruit: ""
    }

    this.seeEnemies = this.seeEnemies.bind(this)
    this.recruitTroop = this.recruitTroop.bind(this)
  }

  seeEnemies() {
    getEnemies().then(apiData => {
      this.setState({
        armiesArray: apiData
      })
    })
  }
  //
  callTroops() {
    getTroops().then(apiData => {
      this.setState({
        defensesArray: apiData
      })
    })
  }

  recruitTroop(event, recruit) {
    event.preventDefault()
    const paperwork = document.getElementById('paperwork')
    if (recruit) {
      postTroop(recruit).then(() => {
        this.callTroops();
        paperwork.value = ''
      })
    }
  }

  handleInput(event) {
    this.setState({
      newRecruit: event.target.value
    })
  }

  transformMinion(armyShortname, minionId) {
    patchMinion(armyShortname, minionId).then(() => {
      this.seeEnemies();
    })
  }

  slayLeader(shortname, id) {
    deleteArmy(shortname, id).then(() => {
      this.seeEnemies();
    })
  }

  componentDidMount() {
    this.callTroops();
  }

  render() {
    const armies = this.state.armiesArray.map((army, armyIndex) => (
      <ul key={armyIndex} className="army">
        <h3>Enemy Army #{army.id}: {army.name}</h3>
        <div className="leader" onClick={() => this.slayLeader(army.shortname, army.id)}>{army.leader}</div>
        <ul className="minions">
          {army.minions.map((minion, minionIndex) => (
            <li key={minionIndex} className="minion" onClick={() => this.transformMinion(army.shortname, minion.id)}>{minion.type}</li>
          ))}
        </ul>
      </ul>
    ))

    const troops = this.state.defensesArray.map((troop, troopIndex) => (
      <li key={troopIndex} className="troop">{troop.recruit}</li>
    ))

    const message = this.state.armiesArray.length < 1 ? "ALL CLEAR" : "";

    return (
      <div className="App">

        {/* Main Defenses */}
        <div className="App-header">
          <h1>Enemies at our gate!</h1>
          <h2>Prepare our defenses!</h2>
          <div className="defenses">
            <div className="defense" id="sentry" onClick={this.seeEnemies}>Sentry<span className="instructions">Click here to see approaching enemies!</span></div>
            <div className="defense" id="captain">Captain<span className="instructions">Fill out Request Form below to recruit new troop!</span></div>
            <div className="defense" id="wizard">Wizard<span className="instructions">Click directly on a minion to cast a spell!</span></div>
            <div className="defense" id="ballista">Ballista<span className="instructions">Blast enemy leader to disperse army!</span></div>
          </div>
        </div>


        {/* Reinforcements */}
        <div className="reinforcements">
          <form type="submit">
            New Recruit Request Form:
            <input onChange={(e) => this.handleInput(e)} id="paperwork" placeholder="Please indicate requested recruit"/>
            <button onClick={(e) => this.recruitTroop(e, this.state.newRecruit)}>Enlist!</button>
          </form>

          <ul className="troops">
            {troops}
          </ul>

          <div id="wall">
            <span></span><span id="gate"></span><span></span>
          </div>
        </div>

        <h1 id="message">{message}</h1>

        {/* Enemy Armies */}
        <div className="enemies">
            {armies}
        </div>
      </div>
    );
  }
}

export default App;
