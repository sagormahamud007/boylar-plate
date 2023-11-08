"use strict";
// spread operator
// rest operator
//destructuring
{
    //spread operator array
    const bros1 = ["Motiur", "alamin", "Munna", "Firoz"];
    const bros2 = ["Raju", "Sojol", "Arafat", "Masum"];
    bros1.push(...bros2);
    console.log(bros1);
    // spread operator object
    const gfList1 = ["sarmin", "bristy", "sorifa", "erani"];
    const gfList2 = ["mila", "jannat", "jemi", "madhuri"];
    // const resultList = {
    // ...gfList1,
    // ... gfList2
    // }
    // console.log(gfList1.push(...gfList2));
    //learn rest operator
    const greetFriends = (...friends) => {
        // return console.log(`Hi ${friend1} ${friend2} ${friend3} ${friend4}`)
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("sagor", "ridoy", "jiban", "mahamud");
}
