"use strict";
{
    // nullable types
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("there is nothing to search");
        }
    };
    searchName(null);
    //unknown type
    const getSpeedMeterPerSecond = (value) => {
        if (typeof value === "number") {
            const converterSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${converterSpeed} ms^ -1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const converterSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`the speed is ${converterSpeed} ms^ -1`);
        }
        else {
            console.log("Wrong Input");
        }
    };
    getSpeedMeterPerSecond(null);
    //
}
