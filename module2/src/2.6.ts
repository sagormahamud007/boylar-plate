{
    // type script er  constaints
    const addCourseToStudent = <T extends 
    {id:number, name:string, email:string}>(student:T) =>{
  const course = "Next lavel web development";
  return{
      ...student,
          course
  }
    }


    const student1 = addCourseToStudent<{
        id:number;
        name: string;
        email: string;
        devType: string;
    }>({
        id:2232,
        name:"shagor",
        email:"s@gmail.com",
        devType:"NLWD"
    })

    const student2 = addCourseToStudent<{
        id:number;
        name: string;
        email: string;
        hasWatch: string;
    }
    >({
        id:444,
        name:"Nayem vai",
        email:"n@gmail.com",
        hasWatch:"Apple Watch"
    })





    //
}