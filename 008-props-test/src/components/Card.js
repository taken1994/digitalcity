import React, { Component } from 'react';
import CardList from './CardList.js';


let content = [
  {title:'first day',data:'2016.7.19'},
  {title:'second day',data:'2016.7.20'},
  {title:'third day',data:'2016.7.21'}
]

class Card extends Component {
  render(){

    let Cards=[]
      for(let i=0;i<content.length;i++){
        let j=i+1;
        Cards.push(
          <CardList title={content[i].title} data={content[i].data} index={content[i].data} key={i} index={i} />
        )
      }

    return(
      <div>
        {Cards}
      </div>
    )
  }
}
export default Card;
