{

    // Type guards


     //typeof --> type guard
     type AlphaNeumaric = number | string;
      
         const add = (param1 : AlphaNeumaric, param2 : AlphaNeumaric) : AlphaNeumaric =>{
            if( typeof param1 === "number" && param2 === "number"){
             return param1 + param2
            } else{
               return param1.toString() + param2.toString()
            }
         }
            const result= add(5, 50)
            console.log(result);



            //in guard
            type NormalUser ={
             name:string;
            }
            type AdminUser ={
             name:string;
             role:"admin"
            }

            const getUser=(user:NormalUser | AdminUser)=>{
              if("role" in user){
                console.log(`My name is ${user.name} and my role is ${user.role}`);
              }else{
                console.log(`My name is ${user.name}`)
              }
            }
        const normalUser: NormalUser ={
            name:"Mr. Sagor mahamud"
        } 
        const adminUser:AdminUser ={
            name:"Shagor ali",
            role:'admin'
        }
        const result2 = getUser(adminUser)
        console.log(result2);
            //

}