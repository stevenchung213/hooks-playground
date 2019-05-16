/*
Your previous Plain Text content is preserved below:

Hello Neeraj
 */


// for (var i = 0; i <= 10; i++) {
//   (function(i){
//     setTimeout(function() {
//     console.log(i);
//   }, 10);
//   })(i)
// }

// Array -> even()

Array.prototype.even = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if ( this[i] % 2 === 0 ) {
      result.push(this[i]);
    }
  }
  return result;
}

// console.log([1,2,3,4].even());

// console.log(sum(2)(3)(4)(7)(7)(9)..);

// function sum(x) {
//   return function(y) {
//     return function (z) {
//       return function (a) {
//         return x+y+z+a;
//       }
//     }
//   }
// }
// GENERATORS to solve n amounts of invocations


class XYZ {
  constructor(input) {
    this.input = input;
  }
  
  
  //prints length of string
  length () {
    console.log(this.input.length)
    return this;
  }

//   Prints trimmed string
  customTrim() {
    console.log(this.input.trim())
    return this;
  }
}

const xyz = new XYZ('    ABCD    ');
// console.log(xyz.length().customTrim().length()); // 15 // ABCD // 15

// XYB.proto..
// XYB.some

class Logger {
  
  static log(...args) {
    // console.log( Object.values(args));
    let str = ''
    let allKeys = Object.keys(args); //[0,1,2,3]
    for (let key in args){
      if (allKeys.includes(key)){
        str += args[key] + ' '
      }
    }
    // console.log(str)
    console.log(`APP_LOGGER_[TIMESTAMP] -- log -- ${str}`)
  }
  
}

// Logger.warning(1,23,4,5); // APP_LOGGER_[TIMESTAMP] -- warn -- 1 23 4 5
Logger.log(1,23,4,5); // APP_LOGGER_[TIMESTAMP] -- log -- 1 23 4 5

// console.log(1,2,3,4,5); // n arguments