import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './button.js';


class App extends Component {
  render(){
    return(
      <div><Button /></div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
