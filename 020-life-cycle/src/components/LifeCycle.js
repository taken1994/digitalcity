import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(){
    super();
    this.state={
      num:0
    }
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps',nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('1shouldComponentUpdate',nextProps,nextState);
    if (nextState.num>5) {
      return false;
    }else {
      return true;
    }
  }

  componentWillUpdate(nextProps,nextState){
    console.log('2componentWillUpdate',nextProps,nextState);
  }

  render() {
    console.log('3render');
    return (
      <div>
        <p>state数字为：{this.state.num}</p>
        <p>props值为：{this.props.value}</p>
      </div>
    )
  }

  componentDidMount() {
    console.log('4componentDidMount');
    // this.interval = setInterval( this.tick.bind(this), 1000 );
  }
  tick(){
    this.setState({
      num:this.state.num+1,
    })
  }
  componentDidUpdate(prevProps,prevState) {
    console.log('4componentDidUpdate',prevProps,prevState);
  }

  componentWillUnmount(prevProps,prevState) {
    console.log('componentWillUnmount',prevProps,prevState);
  }
}
LifeCycle.defaultProps={
  value:0
}
export default LifeCycle;
