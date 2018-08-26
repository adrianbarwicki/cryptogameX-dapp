import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import times from 'async/times';
import Web3 from "web3";
import abi from "../abi";
import * as cardbaseInstance from "../cardbaseInstance";

class MyDeck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noOfCards: 0,
      cards: []
    };
  }

  setupGameCreatedEvent(fromBlock) {
    cardbaseInstance.get().events.GameCreated({
        filter: { _from: cardbaseInstance.getDefaultAddress() }, // Using an array means OR: e.g. 20 or 23
        /**fromBlock*/
    }, (error, event) => {
        console.log(error, event);

        // debugger;


        // this.props.history.push('/game/1');
    });
  }

  startGame() {
    this.setState({
      isStartingGame: true
    });

    cardbaseInstance.get()
    .methods
    .startGame()
    .send({
      from: cardbaseInstance.getDefaultAddress()
    })
    .then((res) => {
      console.log(res);

      this.props.history.push('/game/1')
    });
  }

  countCards() {
      cardbaseInstance.get()
      .methods.countCards().call({
        from: cardbaseInstance.getDefaultAddress()
      }).then((res) => {
        this.setState({
          noOfCards: Number(res.toString())
        })
      });
  }

  loadMyCards() {
    let cards = [];
    let noOfMyCards = 0;

    this.setupGameCreatedEvent();

    cardbaseInstance.get()
    .methods.countCards().call({
      from: cardbaseInstance.getDefaultAddress()
    })
    .then((res) => {
      const length = Number(res.toString());
      
      times(length, (index, cb) => {
        const promise = cardbaseInstance.get()
        .methods.cardIndexToOwner(index).call({
          from: cardbaseInstance.getDefaultAddress()
        });

        promise.then((ethAddress) => {
            if (cardbaseInstance.getDefaultAddress() !== ethAddress) {
              return cb();
            }
            
            noOfMyCards++;

            cardbaseInstance.get()
            .methods
            .cards(index)
            .call({
              from: cardbaseInstance.getDefaultAddress()
            })
            .then(cardDetails => {
              cards.push(cardDetails);
  
              cb();
            });
        }, err => {
          console.error(err);
          return cb(err);
        })
      }, () => {
        this.setState({
          cards,
          noOfMyCards
        })
      });
    });
  }

  componentDidMount() {
    this.loadMyCards()
  }

  render() {
    return (
      <div>
        
        {this.state.isStartingGame && <h2>The Game is Starting!</h2>}
        {this.state.isLoading && <h2>Loading!</h2>}

        <button onClick={() => this.props.history.push('/game/1')}>GO TO GAME 1</button>
        <button onClick={() => this.props.history.push('/')}>GO TO DECK</button>

        <button onClick={() => this.startGame()}>START GAME</button>

        {this.state.noOfCards}

        <button onClick={() => {
          
        }}>
          show card index owner
        </button>

        <button onClick={() => {
          this.setState({
            isLoading: true
          });

          cardbaseInstance.get().methods.createNewCard().send(defaultTx)
          .then(res => {
              console.log(res);

              this.setState({
                isLoading: false
              });
          }, e => {
            console.log(e);

            this.setState({
              isLoading: false
            });

            alert("Error!");
          });
        }}>Create new button</button>

        <button onClick={() => this.countCards()}>Show card 0</button>

        <div style={{
          padding: "10px"
        }}>
          <h1>Your deck: {this.state.noOfMyCards} cards</h1>

          {this.state.cards.map(card => {
            console.log(card);

            return <div style={{
              display: "inline-block",
              marginRight: "5px"
            }}>
              <img
                style={{
                  height: "200px",
                  width: "100px"
                }}
                src={`/figures/${String(card.dna).charAt(0)}.jpg`}
              />
              <div>Level: {card.power.toString()}</div>
              <div>DNA: {card.dna.toString()}</div>
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default MyDeck;
