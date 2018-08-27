import React, {Component} from 'react';
import times from 'async/times';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import GameBoard from '../GameBoard';
import MyDeck from '../MyDeck';
import Homepage from '../Homepage';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div>
          
          Web3 Demo
          <Route exact path="/" component={MyDeck}/>
          <Route exact path="/game/:gameId" component={GameBoard}/>
          <Route exact path="/homepage" component={Homepage}/>
        </div>
      </Router>
    );
  }
}

export default App;
