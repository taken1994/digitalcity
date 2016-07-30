import React from 'react';

class App extends React.Component {

  render () {
    let xxx=this.props.children;
    // 可以用xxx代替this.props.children
    return(
      <div>

        {this.props.name}
        {this.props.children}
        {/* 普通输出this.props.children*/}
        <ol>
        {
          React.Children.map(this.props.children, function (c) {
            return <li>{c}</li>;
          })
        }
        </ol>
        {/* 列表中输出this.props.children*/}
        <span>有多少个children</span>{React.Children.count(this.props.children)}
        {/* 输出this.props.children的个数*/}
        <br/><span>普通children</span>{xxx}
      </div>
    )
  }
}

export default App;
