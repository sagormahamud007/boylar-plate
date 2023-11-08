{
    //mapped types
    const arrayOfNumber: number[]= [1, 2, 3, 4];
    const arrayOfString :string[] = arrayOfNumber.map((number)=>number.toString());
    console.log(arrayOfString);


    //lookup 
    type numberOfType = {
     height:string;
     width:number
    }
type Height =numberOfType["height"]

    //loping variable
    type areaNumber ={
        height:number;
        width:string;
        depth:string
    }
    type AreaString <T>={
        [key in keyof T]:T[key]
    }

    const result1: AreaString <{height : string; width:number}> = {
        height:"100",
        width:50
    }
}