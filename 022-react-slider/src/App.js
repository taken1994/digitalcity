import React from 'react';


import Slider from './components/Slider.js';

import Img1 from './images/pic1.jpg';
import Img2 from './images/pic2.jpg';
import Img3 from './images/pic3.jpg';
import Img4 from './images/pic4.jpg';
import Img5 from './images/pic4.jpg';
let imgData=[Img1,Img2,Img3,Img4,Img];

class App extends React.Component {
  render () {
    return(
      <div>
        <Slider items={imgData}/>
      </div>
    )
  }
}

export default App;
