import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, lightGreen500} from 'material-ui/styles/colors';
// 可以通过查看material-ui网站中的Customization的colors来设置具体颜色。


class FontIconExampleIcons extends React.Component {
  render(){
    let iconStyles = {
      marginRight: 24,
    };

    return(
      <div>
        <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
        <FontIcon className="material-icons" style={iconStyles} color={red500}>flight_takeoff</FontIcon>
        <FontIcon className="material-icons" style={iconStyles} color={yellow500}>cloud_download</FontIcon>
        <FontIcon className="material-icons" style={iconStyles} color={lightGreen500}>videogame_asset</FontIcon>
        <FontIcon className="material-icons" style={iconStyles} color={lightGreen500}>android</FontIcon>
      </div>
    )
  }
}
export default FontIconExampleIcons;
