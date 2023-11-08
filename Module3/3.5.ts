{
    //access modifiers
 class BankAcount{
   public readonly id:number;
   public name:string;
   protected _balance:number; //private only access class er moddhe kora jabe
    constructor(id:number, name:string, balance:number){
    this.id = id;
    this.name = name;
    this._balance = balance;
    }
    public addMoney(amount:number){
     return  this._balance = this._balance + amount
    }
    public getMoney(){
        return this._balance
    }
 }
 class StudentAccount extends BankAcount{ //child class
  Test(){
    this._balance
  }
 }
const goribManusherBank = new BankAcount(111, "Jolimuddin", 20)
goribManusherBank.addMoney(80)
const myBalance = goribManusherBank.getMoney()
console.log(myBalance);
    //
}