class Users{
    constructor(public name, public age, public email){

    }
    displayval(){
        console.log(this.name,this.age,this.email);
    }
}
const u1 = new Users("neha",20,"neha20@navuruku.org")
u1.displayval();