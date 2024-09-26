// ary: number array
function sum(ary) {
    let total = 0;
    ary.forEach((element) => total += element);
    return total;
}

function sum_reduce(ary){
    return ary.reduce(((prev, next) => prev + next), 0);
}


console.log(sum([1, 5, 3, 2])); // 11
console.log(sum_reduce([1, 5, 3, 2])); // 11
console.log(sum_reduce([100, 5, 3, 0])); // 108

//Q: How many approch to solve the problem?
//A: If not using loop, I can write with forEach and reduce (without AI)
//Q: Which one is better?
//A: I will choose forEach, because it is more intuitive, you can know it with a few background of programming
//Q: the same question but the input is n and need to return 1 + 2 + 3 ... + n
//We can solve through recursive function
//I will call this function addSum

function addSum(n){
    if(n == 1){
        return 1;
    }
    return addSum(n-1) + n;
}


console.log(addSum(10)); // 55
console.log(addSum(4)); // 10
console.log(addSum(100)); // 5050
