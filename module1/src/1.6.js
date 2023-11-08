"use strict";
//Learning function
// Normal Function
// Arrow Function
// Normal Function
function add(num1, num2) {
    return num1 + num2;
}
const result = add(2, 6);
console.log(result);
// Arrow Function
let addArrow = (num4, num5) => num4 + num5;
console.log(addArrow(70, 20));
//Object --> function --> method
const poorUser = {
    name: "Shagor",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const arr = [1, 4, 10];
const newArrey = arr.map((elem) => elem * elem);
