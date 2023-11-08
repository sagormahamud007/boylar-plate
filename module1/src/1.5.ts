//Reference Type --Object
const user:{
    firstName:string;
    middleName?:string; //Optional Type
    lastName:string;
    isMarried:boolean;
    company:string; //literal types
} = {
    firstName:"jhankar",
    lastName:"mahabub",
    isMarried:true,
    company:"Programming Hero"
}

user.company="Bdevs Software company"
console.log(user);
