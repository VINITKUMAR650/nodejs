// let person={
//     name:"Alice",
//     age:30,
//     isStudent:false
// };

// console.log(person.name)


// let a = "2" + "2" - "5";
// console.log(a);
// console.log(typeof a);



//------------------------------setTimeout Function

// const delayedFunction = () => {
//     console.log('Delayed function executed!');

// };
// setTimeout(delayedFunction,2000);



//------------------------------setInterval Function

// const repeatFunction = () => {
 //     console.log('Repeated function executed!');

// };
// const interValId = setinterval(repeatedFunction,1000);



//-------------------------Interval Stopped
// function repeatedFunction(){
//     console.log('Executing repeated function...');}
//     const intervalId = setInterval(repeatedFunction,1000);
//     setTimeout(() => {
//         clearInterval(intervalId);
//         console.log(interval stopped);
//     }, 5000);



//------------------------- Synchonous Callbacks Function

// function parentFunction(name, callback){
//     callback();
//     console.log("Heey" +name);
// }
// function randomFunction(){
//     console.log("Hey I am callbackfunction");
// }
// parentFunction("Random string",randomfunction);



//------------------------Asynchronous callback function

// function parentFunction(name, callback){
//     setTimeout(callback,1000);
//     console.log("Hey" +name);
// }
// parentFunction("Random string",function randomFunction(){
//     console.log("Hey I am callbackfunction");
// });






















