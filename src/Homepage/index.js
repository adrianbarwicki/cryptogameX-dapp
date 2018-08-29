import React, {Component} from 'react';
import Header from './Header';


class Homepage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
        <div>
          <Header/>
          <Content/>
        </div>
    );
  }
}

class Content extends Component {
  render() {
     return (
        <div>
           <h2>Content</h2>
           <p>The content text!!!</p>
        </div>
     );
  }
}


export default Homepage;
