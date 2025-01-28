"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ARROW FUNCTION 
/*let sum =(num1: number) => {
    console.log(num1)
}

// CALL BACK FUNCTION

function makeBreakfast(callback:() => void){
    console.log("making breakfast");
    callback()
}

function eatBreakfast() {
    console.log("eat your breakfast");
}
makeBreakfast(eatBreakfast);*/
// SYNCHRONUS & ASYNCHRONUS
console.log("first");
setTimeout(function () {
    console.log("second");
}, 100);
console.log("third");
//promise
/*let promise = new Promise((resolve, reject)=> {
  setTimeout(()=>{
    let mood = "angry";
    if(mood === "fresh"){
    resolve("chalo");}
    else{
        reject("phir kbhi")
    }
  },1000);
});

promise.then((data)=>{
  console.log(data);
});
.catch((err)=> {
    console.log(err)
})*/ 
