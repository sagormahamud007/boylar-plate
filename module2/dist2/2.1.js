"use strict";
{
    // type assertion
    let anyThing;
    anyThing = "Next Level web development";
    anyThing = 222;
    // (anyThing as number)
    const kgtoGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgtoGm("1000");
    const result2 = kgtoGm(2000);
    console.log(result1, result2);
    //
}
