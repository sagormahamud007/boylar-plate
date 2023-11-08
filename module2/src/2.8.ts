{
    //asyncronus = basic promise
interface TodoType{
    userId:number;
    id:number;
    title:string;
    completed:boolean
}


    const getTodo = async():Promise<TodoType>=>{
       const response= await fetch("https://jsonplaceholder.typicode.com/todos/1");
       const data = await response.json()
        return data
    //    console.log(data);
    }
   console.log( getTodo());

 //promise 
 const createPromise=():Promise<string>=>{
    return new Promise<string>((resolve, reject)=>{
        const data:string = "I Love country";
        if(data){
            resolve(data)
        }else{
            reject("failed to load data")
        }
    })
 }

 //calling create promise function
 const showData= async () =>{
    const data:string = await createPromise()
    return data
    // console.log(data);
 }
 showData()
    //
}