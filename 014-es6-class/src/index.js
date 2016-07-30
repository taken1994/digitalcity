class Person {
//定义一个类，类名为Person,类一般为数据和函数（也可称行为）
  constructor(name,old){
//constructor中文意思是构建的意思，它是一个构造函数。
//构造函数不调用就可以执行。
    this.myName = name;
    this.myOld = old;
  }
  sayHello() {
    console.log('hello ' + this.myName);
  }
  sayOld() {
    console.log('今年 ' + this.myOld);
  }
}

let mike = new Person('Mike',' 17岁');
let amy = new Person('Amy',' 20岁');
//new为面向编程的实例化的关键字，实现类到对象的转换。
// 将mike实例成Person中的一个对象。
mike.sayHello();
mike.sayOld();
amy.sayHello();
amy.sayOld();
