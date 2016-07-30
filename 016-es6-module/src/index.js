import {firstName,lastName,Man} from './components/profile'
import ChengShi from './components/about'
import Person from './components/hello'
console.log(firstName,lastName);
console.log(ChengShi);

let peter = new Man();
peter.sayHello();

let mike = new Person('Mike',' 17岁');
mike.sayOld();
