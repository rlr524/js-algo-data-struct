/*
// O(n) linear time; the time grows in direct proportion to the number of elements (n)
// because the number of operations is dependent on n
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i += 1) {
    total += i;
  }
  return total;
}

function factorial(n) {
  let total = n;
  for (let i = n - 1; i > 0; i -= 1) {
    total *= i;
  }
  return total;
}

console.log(factorial(4));

// shorter version of addUpTo using common math proof, no iteration
// O(1) (constant time) the algorithm will take the same amount of time no matter how many
// elements (n) are involved, n could be 10 or 10 million, it will process at a constant time
// because all the operations are independent of n
function addUpToNew(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
console.log(addUpTo(5000));
let t2 = performance.now();
console.log(`Time elapsed: ${t2 - t1} ms`);

let t3 = performance.now();
console.log(addUpToNew(10000));
let t4 = performance.now();
console.log(`Time elapsed: ${t4 - t3} ms`);

// another example of O(n), linear time...even though there are multiple interations
// going on we, only care about the one worst case example; each iteration is O(n) as each
// iteration is dependent on n
function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 1; i <= n; i += 1) {
    console.log(i);
  }
  console.log("At the top\nGoing down...");
  for (let j = n; j >= 1; j -= 1) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}
countUpAndDown(100);

// side note, per airbnb style guide, not using unary increments or decrements (++, --) instead
// using statements to mutate values which is more expressive; also eslint will auto-insert a semi
// on unary increments and decrements that are not immediately closed with ) which can result in
// silent errors
// this O(n^2) (quadratic time) here; it is O(n) on each loop but because there is a nested loop, an O(n)
// operation inside an O(n) operation, we n * n for O(n^2); the time complexity is dependent upon n
// but being looped within a loop
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
printAllPairs(5);

// example of an O(n) with a constant of 5; so we might think this is O(n + 5) but we don't care about
// the constant, if n is one billion, five is meaniningless
function logAtLeastFive(n) {
  for (let i = 1; i <= Math.max(5, n); i += 1) {
    console.log(i);
  }
}
logAtLeastFive(10);

// if we do the same basic algorithm but do a min instead of a max, it is O(1) because it's only printing
// the constant no matter what n is, and we don't care if the constant is 5 or one billion, the time will stay
// the same regardless of what n is; it's constant because it's independent of n
function logAtMostFive(n) {
  for (let i = 1; i <= Math.min(5, n); i += 1) {
    console.log(i);
  }
}
logAtMostFive(100);

// example of an array where we're pulling out elements based on a defined index (only elements with an even index)
// this is an O(n) where n represents the number of elements in the array; the operation to return the newArray will
// be dependent upon how many elements are assessed to add to the new array
function onlyElementsAtEvenIndex(array) {
  let newArray = Array(Math.ceil(array.length / 2));
  for (let i = 0; i < array.length; i += 1) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
console.log(
  onlyElementsAtEvenIndex([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16
  ])
);

// SPACE COMPLEXITY - We're worryong only about AUXILIARY SPACE COMPLEXITY meaning the space taken up only
// by the algorithm, regardless of the number of inputs (length of arr). Here the space complexity is O(1) because
// the algo only has two elements that take in a consant value and it doesn't change in space dependent upon those
// constants, the constants being total = 0 and i = 0
function sumOfArrayElements(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total;
}
console.log(sumOfArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// this is a space complexity example of O(n); we are creating a new array for which the length is dependent upon the
// size of arr
function doubleArrayElements(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
console.log(doubleArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
*/

// Write a function which takes in a string and returns counts of each character in the string
// Cases: What if input is null? What about numbers? Does case matter? What about spaces? Punctuation? Are we going to return the whole
// alphabet or just the chars with a count of 1+? What do we want to return? An object? An array?
// Decided we only want to care about alphanumeric chars and lowercase only
// function charCounter(str) {
//   // If the char is not alphanumeric, don't do anything
//   // Create an object to return at the end
//   let output = {};
//   // Set all elements in the string to lower case
//   let lower = str.toLowerCase();
//   // Loop over the string for each char
//   for (let i = 0; i < lower.length; i++) {
//     let char = lower[i];
//     // If the char is a number / letter && a key in our object already, add one to the count
//     if (output[char] > 0) {
//       output[char]++;
//       // If it is a number / letter && not in the object, create the key and set it to 1
//     } else {
//       output[char] = 1;
//     }
//   }
//   // Return the object at the end
//   return output;
// }

// function charCounter(str) {
//   let output = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (output[char] > 0) {
//         output[char]++;
//       } else {
//         output[char] = 1;
//       }
//     } else {
//       output[char] = "x";
//     }
//   }
//   return output;
// }

//// Refactor into a for of loop
// function charCounter(str) {
//   let output = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     // if (/[a-z0-9]/.test(char)) {
//     if (isAlphaNum(char)) {
//       output[char] > 0 ? output[char]++ : (output[char] = 1);
//     } else {
//       output[char] = "x";
//     }
//   }
//   return output;
// }

// function isAlphaNum(char) {
//   let code = char.charCodeAt(0);
//   if (
//     !(code > 47 && code < 58) &&
//     !(code > 64 && code < 91) &&
//     !(code > 96 && code < 123)
//   ) {
//     return false;
//   }
//   return true;
// }

// let result = charCounter("Hello, Rila. You are cute and you are 31.");
// let other = charCounter("Madison");
// console.log(result);
// console.log(other);

//// Frequency counters: Uses objects to collect values / frequency of values; Usually O(n) time and avoids
//// nested loops or O(n^2) operations with arrays / strings

//// Write a function called "same", which accepts two arrays. The function should return true if every value in the
//// first array has its corresponding value squared in the second array. The frequency of values must be the same.
//// same([1, 2, 3], [4, 1, 9]) // true because it has the same frequency of squares even if not in the same order
//// same([1, 2, 3], [1, 9]) // false as it only has two of them, not the square for 2
//// same([1, 2, 1], [4, 4, 1]) // false as it does have the squares of 1 and 2 but should have the same frequency, so the quare of 1 twice

// function same(arrOne, arrTwo) {
//   const map = arrOne.map((n) => n * n);
//   if (map.length === arrTwo.length && map.values === arrTwo.values) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(same([1, 2, 1], [4, 4, 3]));

//// A naive solution (is 0(n^2))
function sameNaive(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    let correctIndex = arrTwo.indexOf(arrOne[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arrTwo);
    arrTwo.splice(correctIndex, 1);
  }
  return true;
}
console.log(sameNaive([1, 2, 3, 2], [9, 1, 4, 4]));

//// A refactored solution using frequency counter pattern
function sameFreq(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  console.log(freqCounter1);
  console.log(freqCounter2);
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFreq([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));
