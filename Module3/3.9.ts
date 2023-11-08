{
// Abstraction: 1. interface 2. abstract
//Idea
 interface Vehicle{
    startEngine(): void;
    stopEngine(): void;
    move():void;
 }
//Real Implementation
  class Car1 implements Vehicle{
   startEngine(): void {
       console.log(` I am starting the car engine`);
   }
   stopEngine(): void {
       console.log(`I am stop the car engine`);
   }
   move(): void {
        console.log(`I am moving the car`);
   }
   test(){
    console.log(`I am just testing`);
   }
  }

  const toytaCar = new Car1()
  toytaCar.startEngine()

  //abstract class 
abstract class Car2{
   abstract startEngine(): void ;
   abstract stopEngine(): void;
   abstract move(): void ;
    test(){
     console.log(`I am just testing`);
    }
}

 class ToyotaCar extends Car2{
    startEngine(): void {
        console.log('i am starting the car engine');
    }
    stopEngine(): void {
        console.log(`i am stopping the car engine`);
    }
    move(): void {
        console.log(`I am moving the car`);
    }
}

//

}