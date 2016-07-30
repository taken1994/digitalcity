class Person {
  constructor(name,old){
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

class Man extends Person {
  // Man继承了Person父类的所有属性和方法（数据和函数，包括构造函数）
  sayHooooo(){
    console.log('Hooooo');
  }
}
let mike = new Man('Mike',' 17岁');
mike.sayHooooo();
mike.sayOld();
