{
    //
//    extends keyword
interface User2{
    name:string;
    age:number
}

interface UserWithRole extends User2{
roll:number
}

const user:UserWithRole ={
    name:"shagor",
    age:25,
    roll:901233
}

//js --> object, array -> object, function --> object
type Roll2=number[]
interface Roll{
    [index:number]:number
}
const rollNumber:Roll2=[1, 2, 3]

type Add = (num1:number, num2:number)=>number;
interface Add2 {
    (num1:number, num2:number):number
}

const add : Add2 =(num1, num2)=>num1+num2

    //
}