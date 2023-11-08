{
    // type assertion
    let anyThing :any;
    anyThing="Next Level web development";
    anyThing = 222;
    // (anyThing as number)

const kgtoGm =(value:string | number): string | number | undefined=>{
 if(typeof value === "string"){
    const convertedValue = parseFloat(value)*1000;
    return `the converted value is ${convertedValue}`;
 }
 if(typeof value === "number"){
    return  value * 1000;
 }
}

const result1 = kgtoGm("1000") as string
const result2 = kgtoGm(2000) as number;
console.log(result1, result2);


    //
}