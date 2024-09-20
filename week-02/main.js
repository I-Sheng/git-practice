// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
console.assert(stack.isEmpty(), "The init stack is not empty, there must be something wrong."); //First, check whether the stack is empty
stack.print(); //Print out the empty stack for checking
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    stack.push(randomNumber);
} //Add 10 random number for testing
stack.print(); //Print out stack
console.log(stack.peek()); //Peek the last one
console.log(`This pop() output must be the same as the previous one: ${stack.pop()}`); //Check the peek and pop function work well
console.log(`The size of stack is ${stack.size()}`); //The size here must be 9
stack.clear();
console.assert(stack.isEmpty(), "Something went wrong, it executed clear function just now!"); // Check clear function works well
stack.print() //Finally print the empty stack out

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
