{
    //Gatter and Setter
 class BankAcount{
    public readonly id:number;
    public name:string;
    protected _balance:number; //private only access class er moddhe kora jabe
     constructor(id:number, name:string, _balance:number){
     this.id = id;
     this.name = name;
     this._balance = _balance;
     }
     set deposit(amount: number){
         this._balance = this._balance + amount
     }
    get balance(){
        return this._balance
    }
  
  }
 const goribManusherAccount = new BankAcount(111, "Jolimuddin", 20)
 goribManusherAccount.deposit = 80;
 console.log(goribManusherAccount.balance);
 //
}