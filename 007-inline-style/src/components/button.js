import React, { Component } from 'react';

class Button extends Component {
  getStyles(){
    return{
      button:{
        color:"#fff",
        backgroundColor:'#2db7f5',
        padding:'4px 15px'
      }
    }
  }

  render(){
    const styles=this.getStyles();
    return (

      <button style={styles.button}>click</button>
    );
  }
}

export default Button;
