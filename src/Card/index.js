import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: props.card
    };
  }

  componentDidMount() {
    
  }

  render() {
    const card = this.state.card;

    return (
            <div style={{
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
            </div>
    );
  }
}

export default Card;
