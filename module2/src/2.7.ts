{
// ganeric and contraint with keyof operator
type vehicle={
   bike:string;
   car:string;
   ship:string
}

type Owner = "bike" | "car" | "ship"; //manualy
type Owner2 = keyof vehicle


const getPropertyValue =<T, Y extends keyof T >(obj:T, key:Y)=>{
return obj[key]
}
const user={
    name:"shagor", 
    age:25,
    address:'mirpur'
}
const car={
   model:"Toyota 100",
   year:2022
}
const result1 = getPropertyValue(car, "model")
//
}