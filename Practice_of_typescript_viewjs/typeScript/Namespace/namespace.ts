// namespacen in Typescript
//     what is namespace : it is block of code in this are inter releted code are existed
        // interreleted code existed in that
//     How to use it 
//     Example for namespace
//     for name space we need to run more command  tsc failpath --outfile out.js


/// <reference path = "app.ts" />
namespace UsersUtils
{
    export class Users extends Parent{
        getName(){
            return "Anil Sindhu"
        }
    }
}

let u1 = new UsersUtils.Users();
u1.setname("bruce")
console.log(u1.getName());




