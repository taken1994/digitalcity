import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class App extends React.Component {
  handleTouchTap() {
    alert('点我干啥');
  }
  handleClick() {
    alert('是不是有病');
  }

  render () {

    return(
      <div>
        <AppBar
          title="Title"
          onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)}
           onTitleTouchTap={this.handleClick.bind(this)} 
           iconElementRight={<FlatButton label="Save" />}
        />
      </div>
    )
  }
}

export default App;
