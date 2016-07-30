let firstName='tian';
let lastName='kang';

class Man{
  sayHello(){
    console.log('hello ');
  }
}
export {firstName,lastName,Man};
//当只导出变量时，需要用大括号{}将变量名括起来。
//导出类，两种方法都可以
