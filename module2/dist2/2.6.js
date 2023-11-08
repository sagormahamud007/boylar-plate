"use strict";
{
    // type script er  constaints
    const addCourseToStudent = (student) => {
        const course = "Next lavel web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 2232,
        name: "shagor",
        email: "s@gmail.com",
        devType: "NLWD"
    });
    const student2 = addCourseToStudent({
        id: 444,
        name: "Nayem vai",
        email: "n@gmail.com",
        hasWatch: "Apple Watch"
    });
    //
}
