 export default class arrayMethods{
    constructor(arr,elem){
        this.arr = arr;
        this.elem = elem;
    }
    indexof(arr,elem){
        this.arr = arr;
        this.elem = elem;
        for(let i = 0;i<=arr.length;i++){
            if(arr[i] == elem){
               return i;
            }
        }
         return -1
         
    }
   include(arr,elem){
     this.arr = arr;
     this.elem = elem;
     for(let i = 0; i<=arr.length;i++){
       if(arr[i] == elem){
         return true
       }
     }
     return false
   }
   
 }
    
    

const arr = [1,2,3,5,11,25];
const indexofMethod = new arrayMethods();





