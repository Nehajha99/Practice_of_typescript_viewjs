"use strict";
// module in typescript
// What is module
// make 2 file and make module 
// use them in single file
//  compalining all file in one time use "tsc *.ts -w"
exports.__esModule = true;
var student_1 = require("./student");
var teacher_1 = require("./teacher");
var teacher = new teacher_1["default"]();
console.log(teacher.data);
var student = new student_1["default"]();
console.log(student.data);
