import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Button from './Button';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class Root extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render(){
    return(
      <div>
        <App />
        <Button />
      </div>
    )
  }
}
Root.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


render(<Root />, document.getElementById('root'));
