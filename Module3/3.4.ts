

{
    //instanceof guard

class Animal {
    name:string;
    species:string;
    constructor(name:string, species:string){
        this.name = name;
        this.species = species
    }
    makeSound(){
        console.log(" I am makeSound");
    }
}

  class Dog extends Animal{
    constructor(name:string, species:string){
        super(name, species)
    }
    makeBark(){
        console.log(" I am Barking");
    }
  }

  class Cat extends Animal{
    constructor(name:string, species:string){
        super(name, species)
    }
    makeMeaw(){
        console.log(" I am Meaw");
    }
  }

  const isDog =(animal : Animal): animal is Dog=>{
    return animal instanceof Dog
  }
  const isCat =(animal : Animal): animal is Cat=>{
    return animal instanceof Cat
  }

  const getAnimal =(animal:Animal)=>{
    if(isDog(animal)) {
      animal.makeBark()
    }
    else if(isCat(animal)){
        animal.makeMeaw()
    }
    else{
     animal.makeSound()
    }
  }

  const dog = new Dog("Japani dog", "dog")
  const cat = new Dog("bangladeshi cat", "cat")
  getAnimal(dog)
    //
}