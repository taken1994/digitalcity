import React from 'react';
import BlogCard from './BlogCard'
import map from 'lodash/fp/map'

let blogs = [
  {index:'1',title:'first day',date:'2016.7.19'},
  {index:'2',title:'second day',date:'2016.7.20'},
  {index:'3',title:'third day',date:'2016.7.21'}
]


class List extends React.Component {
  render () {
    let blogCards=[]
    map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>
                  );
                },
        blogs
    );
    return(
      <div>
        {blogCards}
      </div>
    )
  }
}

export default List;
