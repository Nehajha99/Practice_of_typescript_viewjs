export {}
class App{
    name: string;  //// store the value
    constructor(name:string){
        this.name=name;
        
    }
    getName():string{
        ///// NOTE : function type only working when you return somthing
        // console.log(this.name);
        return this.name
        
    }
}
let a1 = new App("anil");
console.log(a1.getName());