
//Learning function
// Normal Function
// Arrow Function

// Normal Function
function add(num1:number, num2:number):number{
  return num1 + num2
}

const result = add(2, 6)
console.log(result);
// Arrow Function
 let addArrow =(num4:number, num5:number):number => num4 + num5
console.log(addArrow(70, 20));

//Object --> function --> method
const poorUser = {
    name:"Shagor",
    balance:0,
    addBalance(balance:number):number{
      return this.balance + balance
    }
}

const arr: number [] =[1, 4, 10]
const  newArrey:number[] = arr.map((elem:number):number => elem * elem)