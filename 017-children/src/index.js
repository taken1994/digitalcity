import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Img from './components/Img';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boot from './components/Boot';


class Root extends React.Component {
  render(){
    return(
      <div>
        <App name="app">
          <p>123</p>
          <p>adfa</p>
          <p>2312</p>
        </App>
        <Img />
        <Boot />
      </div>
    )
  }
}

ReactDOM.render( <Root/>, document.getElementById('root'));
// 最简单的this.props.children应用
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class Root extends React.Component {
//   render(){
//     return(
//       <div>
//
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <Root>
//     <p>123</p>
//     <p>adfa</p>
//     <p>2312</p>
//   </Root>,
// document.getElementById('root'));
