import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button.js';
import Card from './components/Card.js';

let btnProps ={
  title:'来自外部变量',
  bg:'green'
}
let btnProps2 ={
  title:'传递多个属性值',
  bg:'deeppink'
}

class App extends Component {
  render(){
    {/* 可将let部分写在这里，但不可以写在class中*/}

    let btns=[
      <Button key="1" />,<Button key="2" />,<Button key="3" />,<Button key="4" />
    ]
    {/* 声明的是数组，所以用[]中括号*/}
    return(
      <div>
        <Button title="propsclick" bg="#2db7f5"/>
        {/* 传数值或布尔值需要用到{}*/}
        <Button />
        <Button title={btnProps.title} bg={btnProps.bg}/>
        <Button {...btnProps2}/>
        <p>输出多个按钮</p>
        {btns}
        <p>输出多个信息列表</p>
        <Card />
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'));
