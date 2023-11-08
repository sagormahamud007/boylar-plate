{
    //generic type
    type genericType<T> = Array<T>

    //  const rollNumber : number[]= [1, 2, 3, 4];
    //  const rollNumber : Array<number>= [1, 2, 3, 4];
    //  const rollNumber : genericType= [1, 2, 3, 4];
     const rollNumber : genericType<number>= [1, 2, 3, 4];
     const nameList : genericType<string>=["shagor", "masud", "ridoy", "akash"];
     const boolArry : genericType<boolean> = [true, false, true ]
 



    //
}