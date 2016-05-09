// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//





//I have no idea

'use strict';

const fs = require('fs');

const sumLines = (filename, (error, data)) => {
  let num;
  let sum;
  if (error){
    console.log(error.stack);
    return;
  }

    data.forEach(num => {
      if (Number.isInteger(num)) {
        sum += num;
      }
  });


  console.log(sum);
};


// fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
//   let names;
//   if (error){
//     console.log(error.stack);
//     return;
//   }
//
// // prints a list of names with Hello before-hand
//   names = data.split('\n');
//
//     names.forEach(name => {
//       if (name) {
//         console.log(`Hello, ${name}!`);
//       }
//   });
//
//
//   console.log(data);
// });
//



module.exports = {
  sumLines,
};
