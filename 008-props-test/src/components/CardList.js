import React, { Component } from 'react';

class CardList extends Component {
  render(){
    let styles={
      root:{
        width:'80%',
        height:'100px',
        backgroundColor:'rgba(0,0,0,0.5)',
        margin:'20px auto',
        border:'3px solid #2db7f5',
        borderRadius:'10px',
        boxShadow:'5px 5px 10px 5px rgba(0,0,0,0.2)'
      },
      index:{
        width:'20%',
        height:'100px',
        lineHeight:'100px',
        color:'#fff',
        backgroundColor:'#2db7f5',
        textAlign:'center',
        float:'left'
      },
      content:{
        width:'80%',
        height:'100px',
        float:'left'
      }

    }

    return(
      <div style={styles.root}>
        <div style={styles.index}>{this.props.index}</div>
        <div style={styles.content}>
          <h3>{this.props.title}</h3>
          <p>{this.props.data}</p>
        </div>
      </div>
    )
  }
}

CardList.defaultProps = {
  title:'请输入标题',
  index:1,
  data:'2016.7.19'
};
// 默认样式

CardList.propTypes = {
  title:React.PropTypes.string.isRequired,
  index:React.PropTypes.number.isRequired,
  data:React.PropTypes.string.isRequired
};
// 设置类型，不是该类型会发生警告。可设置类型为number, string, element or array

export default CardList;
