import React from 'react';
import Pic from '../images/timg.jpg';
import Pic2 from '../images/timo.jpg';


class  Img extends React.Component {
  render () {
    let styles={
      width:'220px',
      height:'220px',
      backgroundImage:'url('+Pic2+')'
    }
    return(
      <div>
        <img src={Pic} />
        <div style={styles}>行内样式</div>
      </div>
    )
  }
}

export default Img;
