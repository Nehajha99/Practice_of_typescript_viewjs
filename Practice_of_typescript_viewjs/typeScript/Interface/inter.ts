// Interface in typescript
//     why use interface
//     how to use interface
//     Interface example with object

// syntex
//     interface interface_name{
//         property_type: data_type,
//         property_type: data_type
//     }

//// Interface : for difineing one class and object propertyes we make 
//// templates that we call interface.

interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);