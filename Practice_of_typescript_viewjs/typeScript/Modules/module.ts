// module in typescript
// What is module
// make 2 file and make module 
// use them in single file
//  compalining all file in one time use "tsc *.ts -w"

import slogin from "./student"
import tlogin from "./teacher"

let teacher = new tlogin();
console.log(teacher.data)

let student = new slogin();
console.log(student.data)