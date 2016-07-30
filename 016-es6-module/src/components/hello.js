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

export default Person;
//导出
