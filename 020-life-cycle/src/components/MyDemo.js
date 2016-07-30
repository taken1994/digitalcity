import React, { Component } from 'react';

class MyDemo extends Component {
  constructor(){
    super();
    this.state={
      opacity:1,
    }
    console.log("1先执行constructor");
  }
  render(){
    console.log("3执行rander");
    return(
      <div>
        <h1>demo</h1>
        <div style={this.state}>hello world</div>
      </div>
    )
  }
  componentDidMount(){
    console.log('4componentDidMount');
    this.interval=setInterval(this.change.bind(this),100);
    // 他在最后输出是因为要等100毫秒
  }
  componentWillMount(){
    console.log('2componentWillMount');
  }
  change(){
    console.log("change");
    this.setState({
      opacity:this.state.opacity>0?this.state.opacity-0.1:1,
    })
  }
}

export default MyDemo;
