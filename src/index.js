export default  class arrayMethods{
    constructor(arr,elem){
        this.arr = arr;
        this.elem = elem;
    }
    indexof(arr,elem){
        this.arr = arr;
        this.elem = elem;
        for(let i = 0;i<=arr.length;i++){
            if(arr[i] == elem){
                return console.log(`Index = ${i}`);
            }
        }
        return console.log(-1);
    }
}
const arr = [1,2,3,5,11,25];
const indexofMethod = new arrayMethods();
indexofMethod.indexof(arr,25);
indexofMethod.indexof(arr,1);
indexofMethod.indexof(arr,5);
console.log(indexofMethod)
//export default str => str.split().str.reverse().str.join();
//indexofMethod.indexof(arr,5);
//indexofMethod.indexof(arr,15);
//export default class MakeStack {
  //  constructor() {
    //    this._data = [];
    //}

    //push(el) {
      //  return this._data.push(el);
    //}

    //pop() {
      //  if(this._data.length) {
        //    return this._data.pop();
        //}

        //throw new Error('Error cannot pop() in empty stack');
    //}

    //isEmpty() {
      //  return !this._data.length
    //}
//}
