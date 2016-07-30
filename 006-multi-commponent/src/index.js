import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/button.js';
import Input from './components/input.js';


class App extends Component {
  render(){
    return(
      <div><Input/>
      <Button /></div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
