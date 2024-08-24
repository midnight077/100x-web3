// Uint8Array -> an array of bytes
// benefit -> Uint8Array takes less space and UInt8Array Enforces constraints - It makes sure every element doesn’t exceed 255

// let binaryRepresentation = new TextEncoder().encode("h");
// console.log(binaryRepresentation); 

// ENCODING

// Uint8Array array to Hex

// function arrayToHex(byteArray){
//     let hexString = '';
//     for(let i=0; i<byteArray.length; i++)
//         // str.toString(16) convert str to its hexa-decimal form 
//         // padStart(2,0) -> says that the length of final output will be 2, to do so if needed pad it with 0
//         // eg 00001010 will become "0c" 
//         hexString+= byteArray[i].toString(16).padStart(2,0);
//     return hexString;
// }
// const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const hexString = arrayToHex(byteArray);
// console.log(hexString); 


// array to base64
const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);