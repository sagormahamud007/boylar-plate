"use strict";
var _a, _b;
{
    // ternary operator || Optional operator || nullish coalescing operator
    const age = 25;
    if (age >= 22) {
        console.log("Adult");
    }
    else {
        console.log("not adult");
    }
    //ternary operator 
    const isAdult = age >= 22 ? "adult" : "not adult";
    // console.log({isAdult});
    //nullish coalescing operator
    //null / undifiend --. decision making
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    const user = {
        name: "shagor",
        address: {
            city: "rajshahi",
            road: "road -07",
            presentAddress: "Mirpur"
        }
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent address";
    console.log({ permanentAddress });
    //
}
