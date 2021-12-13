


//import makeStack from '../src/index.js';

//test("stack's main flow", () => {
    //const stack =  new makeStack();
    //stack.push('one');
    //stack.push('two');
  //  expect(stack.pop()).toEqual('two');
//});

//test("stack's main flow", () => {
    //const stack = new makeStack();
    //stack.push('one');
    //stack.push('two');
    //stack.pop();
  //  expect(stack.pop()).toEqual('one');
//});

import  arrayMethods from '../src/index.js';
//const arr = [1,2,3,5,11,25];
test('find index',() =>{
  const arr = [1,2,3,5,11,25];
  const method1 = new arrayMethods();
  method1.indexof(arr,25);
  expect(method1.indexof(arr,25)).toEqual(5)
})

//import reverse from "../src/index.js";
//test("1",()=>{
  //expect(reverse('hello')).toEqual("olleh");
//})