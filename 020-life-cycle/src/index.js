import React from 'react';
import ReactDOM from 'react-dom';
import MyDemo from './components/MyDemo';
import DestroyComponent from './components/DestroyComponent';

class App extends React.Component {
  render(){
    return(
      <div>
        <DestroyComponent/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
