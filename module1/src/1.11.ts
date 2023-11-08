{
    // ternary operator || Optional operator || nullish coalescing operator

    const age:number = 25
        if(age >= 22){
            console.log("Adult");
        }else{
            console.log("not adult");
        }
  
//ternary operator 
const isAdult = age >= 22 ? "adult" : "not adult"
// console.log({isAdult});

//nullish coalescing operator
//null / undifiend --. decision making

const isAuthenticated = "";
const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";
// console.log({result1}, {result2});

// optional chaining
type User= {
    name:string;
    address :{
        city:string;
        road:string;
        presentAddress:string;
        permanentAddress?:string
    } 
    }
    const user : User = {
        name:"shagor",
        address:{
            city:"rajshahi",
            road:"road -07",
            presentAddress:"Mirpur"
        }
}
const permanentAddress = user?.address?.permanentAddress ?? "No permanent address";
console.log({permanentAddress});
    //
}
