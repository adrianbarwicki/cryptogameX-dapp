import React, {Component} from 'react';
import Web3 from "web3";
import times from 'async/times';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import abi from "../abi";

let web3;

if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

let defaultAddress;

web3.eth.getAccounts().then((res) => {
  defaultAddress = res[0];
})

var contractAddress = "0x68dcda77c236dbf2eb31a5c5cc9991c148a1ae37";
var cardbaseInstance = new web3.eth.Contract(abi, contractAddress);

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        game: {},
        gameId: props.match.params.gameId,
        playedCards: []
    };
  }

  loadGame() {
    cardbaseInstance
    .methods
    .games(this.state.gameId)
    .call()
    .then((game) => {
        this.setState({
            game
        });
    });
  }

  playCard(cardId) {
    /**
    cardbaseInstance
    .methods
    .useCard(this.state.gameId, cardId)
    .send()
    .then((game) => {
        const playedCards = this.state.playedCards;

        // get all the card details with image
        playedCards.push(cardId);

        this.setState({
            playedCards
        });
    });
     */
  }

  componentDidMount() {
    this.loadGame()
  }
  
  render() {
    return (
      <div>
        <div style={{
          padding: "10px"
        }}>
          <h1>Game:</h1>
 
          {this.state.game.lastPlayer}
          {this.state.game.playerA}
          {this.state.game.playerB}
          {this.state.game.round1PlayerAPoints}
          {this.state.game.round2PlayerAPoints}
          {this.state.game.round3PlayerAPoints}
          {this.state.game.round1PlayerBPoints}
          {this.state.game.round2PlayerBPoints}
          {this.state.game.round2PlayerBPoints}

           <button onClick={() => this.playCard(0)}>Use the first card with index 0</button>

        </div>
      </div>
    );
  }
}

export default GameBoard;
