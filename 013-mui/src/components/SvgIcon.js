import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
//详情请查看https://design.google.com/icons/
import ActionAlarm from 'material-ui/svg-icons/action/alarm-add';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';



class SvgIconExampleIcons extends React.Component {
  render(){
    let iconStyles = {
      marginRight: 24,
    };

    return(
      <div>
        <ActionHome style={iconStyles} />
        <ActionFlightTakeoff style={iconStyles} color={red500} />
        <ActionAlarm style={iconStyles} color={red500} />
        <FileCloudDownload style={iconStyles} color={yellow500} />
        <HardwareVideogameAsset style={iconStyles} color={blue500} />
      </div>
    )
  }
}

export default SvgIconExampleIcons;
