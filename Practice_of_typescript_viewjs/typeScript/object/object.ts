// Typed Object
//     default typed object
//     update property
//     add new proprty
//     define a custom type for object
//     use any with object ///// any except all the data type


///// Default Type : it take default type can't update other data type
///// value
// let user={
//     name:"neha",
//     age:"22",
//     address:"india"
// }
// console.log(user);



//// define a custom type for object
// interface usersTyped{
//     name: string,
//     age: number,
//     address: string,
// }
// let users:usersTyped={
//     name:"neha",
//     age: 22,
//     address: "india"
// }
// console.log(users)


// use any with object ///// any except all the data type
// interface usersTyped{
//     name: string,
//     age: number,
//     address: any,
// }
// let users:usersTyped={
//     name:"neha",
//     age: 22,
//     address: 100
// }
// console.log(users)


// example 2
let user: any ={
        name:"neha",
        age:"22",
        address:4
    }
user.name=12
console.log(user);



