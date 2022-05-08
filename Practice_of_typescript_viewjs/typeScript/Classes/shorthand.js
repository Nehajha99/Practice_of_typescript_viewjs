var Users = /** @class */ (function () {
    function Users(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Users.prototype.displayval = function () {
        console.log(this.name, this.age, this.email);
    };
    return Users;
}());
var u1 = new Users("neha", 20, "neha20@navuruku.org");
u1.displayval();
