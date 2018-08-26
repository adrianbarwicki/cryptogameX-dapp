import React, {Component} from 'react';
import times from 'async/times';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as cardbaseInstance from "../cardbaseInstance";

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
    cardbaseInstance.get()
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
    cardbaseInstance.get()
    .methods
    .useCardInGameOrJoinGame(this.state.gameId, cardId)
    .send({
        from: cardbaseInstance.getDefaultAddress()
    })
    .then((game) => {
        const playedCards = this.state.playedCards;

        // get all the card details with image
        playedCards.push(cardId);

        this.setState({
            playedCards
        });
    });
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
 
          <p>PlayerA: {this.state.game.playerA}</p>
          <p>PlayerB: {this.state.game.playerB}</p>
          <p>Last player: {this.state.game.lastPlayer}</p>
          <p>round 1 player A points: {this.state.game.round1PlayerAPoints}</p>
          <p>round 2 player A points:  {this.state.game.round2PlayerAPoints}</p>
          <p>round 3 player A points:  {this.state.game.round3PlayerAPoints}</p>
          <p>round 1 player B points: {this.state.game.round1PlayerBPoints}</p>
          <p>round 2 player B points: {this.state.game.round2PlayerBPoints}</p>
          <p>round 3 player B points: {this.state.game.round2PlayerBPoints}</p>

           <button onClick={() => this.playCard(0)}>Use the first card with index 0</button>
        </div>
      </div>
    );
  }
}

export default GameBoard;
