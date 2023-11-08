{
    //oop - class
    class Animal{
    //    public name:string; 
    //    public species:string;
    //    public sound:string;

       //Use this parameter property code simplify
        constructor(public name:string, public species:string, public sound:string){
        //  this.name = name;
        //  this.species = species;
        //  this.sound = sound
        }
        makeSound() {
            console.log(`The ${this.name} Says ${this.sound}`);
        }
    }

    const dog = new Animal("Bangladeshi Shepard bhai", "dog", "Gheu Gheu")
    const cat = new Animal("Nayem bahi", "cat", "Meaw Meaw")
    dog.makeSound()
    //
}