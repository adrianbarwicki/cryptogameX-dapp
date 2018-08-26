import React, {Component} from 'react';
import Web3 from "web3";
import './index.css';
import abi from "./abi";
import times from 'async/times';

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

var contractAddress = "0x8ebfc1ad2bc144dfe8a38344b75dc35fb42c450e";
var cardbaseInstance = new web3.eth.Contract(abi, contractAddress);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noOfCards: 0,
      cards: []
    };
  }

  loadMyCards = () => {
    let cards = [];
    let noOfMyCards = 0;

    cardbaseInstance.methods.countCards().call()
    .then((res) => {
      const length = Number(res.toString());
      
      times(length, (index, cb) => {
        const promise = cardbaseInstance.methods.cardIndexToOwner(index).call();

        promise.then((ethAddress) => {
            if (defaultAddress !== ethAddress) {
              return cb();
            }
            
            noOfMyCards++;

            cardbaseInstance
            .methods
            .cards(index)
            .call()
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
        Web3 Demo

        {this.state.noOfCards}

        <button onClick={() => {
          
        }}>
          show card index owner
        </button>

        <button onClick={() => {
          cardbaseInstance.methods.createNewCard().send({
            from: defaultAddress
          }, function (e, res) {
            console.log(e, res);
          });
        }}>Create new button</button>

        <button onClick={() => {
          cardbaseInstance.methods.countCards().call({
            from: defaultAddress
          }).then((res) => {
            this.setState({
              noOfCards: Number(res.toString())
            })
          });
        }}>Show card 0</button>

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
                src={`/figures/${card.dna}.jpg`}
              />
              <div>{card.power.toString()}</div>
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
