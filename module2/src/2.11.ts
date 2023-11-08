{
    //
    type Person={
        name:string;
        age:number;
        email?:string;
        contactNo:string
    }
    type nameContact = Pick<Person, "name" | "contactNo">
    //omit type ulta ta asbe omit type e
    type ContctInfo = Omit<Person, "email" | "contactNo">

//required type 
type PersonRequired = Required<Person>
const user:PersonRequired={
    name:"shagor",
    age:24,
    email:"s@gmail.com",
    contactNo: "01751473051",
}

//Partial
type PersonPertial = Partial<Person>

//ReadOnly
type PersonReadonly = Readonly<Person>
}