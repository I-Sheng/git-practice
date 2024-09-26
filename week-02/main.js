// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack(100);
console.assert(stack.isEmpty(), "The init stack is not empty, there must be something wrong."); //First, check whether the stack is empty
stack.print();
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    stack.push(randomNumber);
} //Add 10 random number for testing
stack.print();
console.log(stack.peek());
console.log(`This pop() output must be the same as the previous one: ${stack.pop()}`); //Check the peek and pop function work well
console.log(`The size of stack is ${stack.size()}`); //The size here must be 9
stack.clear();
console.assert(stack.isEmpty(), "Something went wrong, it executed clear function just now!");
stack.print()

let stack2 = new Stack(10);
for (let i = 0; i < 12; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    stack2.push(randomNumber);
} //There must two warning alert that the elements in stack exceed the maximum size
console.log('The size of the stack is ', stack2.size())

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
