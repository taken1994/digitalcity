import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Button from './components/Button';
import AutoCompleteExampleSimple from './components/AutoComplete';
import SvgIconExampleIcons from './components/SvgIcon';
import FontIconExampleIcons from './components/FontIcon';
import DrawerSimpleExample from './components/Drawer';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
//主题包
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {a,b} from './components/importExport练习';
console.log(a,b);



import {purple600} from 'material-ui/styles/colors';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let myTheme={
  palette:{
    primary1Color: purple600,
  }
}
//修改默认主题，可以通过查看material-ui网站中的Customization中的Themes来设置具体颜色
class Root extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(myTheme)};
    // darkBaseTheme为黑色主题，不传默认为白色主题
  }

  render(){
    return(
      <div>
        <App />
        <Button />
        <AutoCompleteExampleSimple />
        <DrawerSimpleExample />
        <SvgIconExampleIcons />
        <FontIconExampleIcons />
      </div>
    )
  }
}
Root.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


ReactDOM.render(<Root />, document.getElementById('root'));
