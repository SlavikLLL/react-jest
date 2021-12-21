


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
    //expect(stack.pop()).toEqual('one');
//});

import  arrayMethods from '../src/index.js';
//indexOf
test('find index',() =>{
  
  const method1 = new arrayMethods();
  const arr = [1,2,3,5,11,25];
  method1.indexof(arr,25);
  expect(method1.indexof(arr,25)).toEqual(5)
});
test('not empty',()=>{
  const arr = [1,2,3,5,11,25];
  expect(arr.length).not.toEqual(0);
});
test("index not founded",()=>{
  const method1 = new arrayMethods();
   const arr = [1,2,3,5,11,25];
   method1.indexof(arr,15);
   expect(method1.indexof(arr,15)).toEqual(-1);

})
//includes
test("include",()=>{
  const method2 = new arrayMethods();
  const arr = [1,3,4,5,6,7];
  method2.include(arr,5);
  expect(method2.include(arr,5)).toEqual(true)
})


