import React from 'react';
import axios from 'axios';
import './App.css';

import Navbar from "./components/Navbar";

// import PlayersList from './components/PlayersList.js';
// import DarkModeToggleButton from './components/DarkModeToggleButton.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }  

  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`)
    .then(res => {
      // console.log(res)
      this.setState({ players: res.data })
    })
    .catch(err => console.log('Error: ', err));
  }

  render() {
    return (
      <div className="container">
         <Navbar />
         <div className="card-container">
         {this.state.players.map((player, index) => (
           <div className="card" key={index}>
           <p>Name: {player.name}</p>
           <p>Country: {player.country}</p>
           <p>Searches: {player.searches}</p>
           </div>
         ))}
         </div>
      </div>
    );
  };
}

export default App;