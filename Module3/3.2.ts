{
    // OOP - Inheritance
//Parent
class Person{
    name:string;
    age:number;
    address:string;
    constructor(name:string, age:number, address:string){
        this.name = name;
        this.age = age;
        this.address = address
    }
    getSleep(numOfHours: number){
        console.log(`${this.name} Will sleep for ${numOfHours}`);
    }
}
   //Child
    class Student extends Person {
        constructor(name:string, age:number, address:string){
         super(name, age, address)
        }
    }

    const student = new Student("shagor", 25, "Mirpur");
  student.getSleep(5) // আমরা এইখানে student ডট দিলেই আমাকে প্রপারটি গুলো suggest করবে
    //

    class Teacher extends Person {
        desination:string;
        constructor(name:string, age:number, address:string , desination:string){
           super(name, age, address)
            this.desination = desination
        }
        takeClass(numOfClass:number){
            console.log(`${this.name} Class Time for ${numOfClass}`);
        }
    }
    
    const teacher = new Teacher("Sfayet", 45, "Natore", "Profesor")
    teacher.takeClass(8) // আমরা এইখানে teacher ডট দিলেই আমাকে প্রপারটি গুলো suggest করবে
}