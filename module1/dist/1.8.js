"use strict";
// object destructuring
{
    const user = {
        contactNo: "01751473051",
        name: {
            fristName: "Sagor",
            middleName: "jiban",
            lastName: "mahamud"
        },
        address: "mirpur"
    };
    const { address, name: { fristName } } = user;
    // console.log(address, fristName);
    // arr destructuring
    const myFriends = ["Motiur", "alamin", "ridoy", "Tanzil", "jamman", "jinna", "mahamud"];
    const [, , c, ...rest] = myFriends;
    console.log(c, rest);
}
