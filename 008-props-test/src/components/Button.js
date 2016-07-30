import React, { Component } from 'react';

class Button extends Component {
  getStyles(){
    return{
      button:{
        color:"#fff",
        backgroundColor:this.props.bg,
        padding:'10px'
      }
    }
  }
  render(){
    const styles=this.getStyles();
    return(
      <button style={styles.button}>{this.props.title}</button>
    )
  }
}

Button.defaultProps = {
  title:'我是默认标题',
  bg:'red'
};
// 默认样式

Button.propTypes = {
  title:React.PropTypes.string.isRequired,
  bg:React.PropTypes.string.isRequired
};
// 设置类型，不是该类型会发生警告。可设置类型为number, string, element or array

export default Button;
