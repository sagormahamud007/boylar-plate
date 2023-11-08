// spread operator
// rest operator
//destructuring

{
//spread operator array
const bros1: string[] = ["Motiur", "alamin", "Munna", "Firoz"]
const bros2: string[] = ["Raju", "Sojol", "Arafat", "Masum"]

bros1.push(...bros2)
console.log(bros1);


// spread operator object
const gfList1:string[]=["sarmin" , "bristy", "sorifa", "erani"]
const gfList2:string[]=["mila" , "jannat", "jemi", "madhuri"]
// const resultList = {
// ...gfList1,
// ... gfList2
// }
// console.log(gfList1.push(...gfList2));


//learn rest operator
const greetFriends =(...friends:string[])=>{
    // return console.log(`Hi ${friend1} ${friend2} ${friend3} ${friend4}`)
    friends.forEach((friend:string) => console.log(`Hi ${friend}`));
}

 greetFriends("sagor", "ridoy", "jiban", "mahamud")




}