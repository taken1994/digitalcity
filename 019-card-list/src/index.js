import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';

class App extends React.Component {
  render(){
    return(
      <div>
        <List/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
