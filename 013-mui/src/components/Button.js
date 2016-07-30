import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Button extends React.Component {

  render () {

    const style = {
      margin: '12px',
    };

    return(
      <div>
        <RaisedButton label="你好" style={style} />
        <RaisedButton label="傻瓜" primary={true} style={style} />
        <RaisedButton label="欢迎" secondary={true} style={style} />
        <RaisedButton label="脑残" disabled={true} style={style} />
       </div>
    )
  }
}

export default Button;
