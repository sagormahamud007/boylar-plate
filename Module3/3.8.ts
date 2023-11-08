{
    //Polymorphisom
    class Person{
        getSleep(){
            console.log("I am slepping for 8 hour's per day");
        }
    }
    class student{
        getSleep(){
            console.log("I am slepping for 7 hour's per day");
        }
    }
    class Developer{
        getSleep(){
            console.log("I am slepping for 5 hour's per day");
        }
    }

const getSleepingHours=(param:Person)=>{
    param.getSleep()
}

    const person1 = new Person()
    const person2= new student()
    const person3 = new Developer()
    getSleepingHours(person3)


    //Same Example
    class Shape{
        getArea():number{
           return 0
        }
    }
    // pi* r* r
    class Circle extends Shape{
        redius:number;
        constructor(redius:number){
            super()
            this.redius = redius
        }
        getArea(): number {
            return Math.PI * this.redius * this.redius
        }
    }
    // Rectangle
    class Rectangle extends Shape{
        height:number;
        width:number;
        constructor(height:number, width: number){
            super();
           this.height = height;
           this.width = width
        }
        getArea(): number {
            return  this.height * this.width
        }
    }

    const getShapeArea = (param: Shape) =>{
    console.log(param.getArea());
    }

    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 =new Rectangle(10, 20)
    getShapeArea(shape3)
}