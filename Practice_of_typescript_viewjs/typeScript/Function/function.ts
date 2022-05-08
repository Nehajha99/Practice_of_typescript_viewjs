// function cals(a:number, b:number):number
// {
//     return a+b
// }
// console.log(cals(100,50));



///// option perameter
// function cals(a:number, b?:number):number{
//     return b?a+b:a
// }console.log(cals(100));

// Ex-2
// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 0);
//   }console.log(add(2,5))



///// Void : The type void can be used to indicate a function doesn't return any value.
// function printHello(): void {
//     console.log('Hello!');
// }
// printHello();



//// Default Parameters : For parameters with default values, the default value goes after the type annotation.
// function pow(value: number, exponent: number = 1) {
//     return value ** exponent;
// }console.log(pow(10));



//// Named Parameters: Typing named parameters follows the same pattern as typing normal parameters.
// function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
//     return dividend / divisor;
// }
// console.log(divide({dividend: 10, divisor: 2}));



///// Rest Parameters : Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
// function add(a: number, b: number, ...rest: number[]) {
//     return a + b + rest.reduce((p, c) => p + c, 0);
// }
// console.log(add(10,10,10,10,10));




///// Type Alias: Function types can be specified separately from functions with type aliases.
type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(10));

