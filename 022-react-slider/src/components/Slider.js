import React from 'react';


class Slider extends React.Component{
  constructor(){
    super();
    this.state={
      nowLocal:0
    }
  }
  turn(){
    if (this.state.nowLocal<this.props.items.length-1) {
      this.setState({
        nowLocal:this.state.nowLocal+1
      })
    }else{
      this.setState({
        nowLocal:0
      })
    }
  }
  componentDidMount(){
    this.interval=setInterval(this.turn.bind(this), 1000);
  }
  pausePlay(){
    clearInterval(this.interval);
  }
  scroll(option){
    this.pausePlay();
    let x = this.state.nowLocal + option;
    if (x < 0) {
      x = this.props.items.length-1
    }
    if (x > this.props.items.length-1){
      x = 0
    }
    this.setState({
      nowLocal:x
    })
  }
  render(){
    let styles={
      root:{
        width:'100vw',
        height:'100vh',
        overflow:'hidden',
        position:'relative'
      },
      ul:{
        width:this.props.items.length*100 + '%',
        position:'relative',
        left: -100 * this.state.nowLocal + "%",
      },
      li:{
        width:100/this.props.items.length + '%',
      }
    }
    let imgNode=this.props.items.map(function (item,index) {
      return <li key={index} style={styles.li}><img src={item} key={index} /></li>
    })
    return(
      <div className="box">
        <ul
          style={styles.ul}
          onMouseOver={this.pausePlay.bind(this)}
          onMouseOut={this.componentDidMount.bind(this)}>
          {imgNode}
        </ul>
        <div>
          <span className="arrow left"
            onClick={this.scroll.bind(this,-1)}>&lt;</span>
          <span className="arrow right"
            onClick={this.scroll.bind(this,1)}>&gt;</span>
        </div>
      </div>
    )
  }
}
export default Slider;
