/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}
/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) / Math.abs(queen.y - king.y) === 1
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (
    (a === b && a > 0 && c > 0 && c < a + b) ||
    (a === c && a > 0 && b > 0 && b < a + b) ||
    (b === c && a > 0 && b > 0 && a < c + b)
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const dictionary = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
  };
  if (num <= 10 || num % 10 === 0) {
    return dictionary[num];
  }
  return dictionary[num - (num % 10)] + dictionary[num % 10];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */

function convertNumberToString(numberStr) {
  function getChar(ch) {
    switch (ch) {
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      case '0':
        return 'zero';
      case '.':
        return 'point';
      case '-':
        return 'minus';
      case ',':
        return 'point';
      default:
        return '';
    }
  }

  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i === numberStr.length - 1) {
      result += getChar(numberStr[i]);
    } else {
      result += `${getChar(numberStr[i])} `;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }
  return str === newStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = String(num);
  for (let i = 0; i < str.length; i += 1) {
    if (Number(str[i]) === digit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length === 0) {
    return -1;
  }
  let leftSide = 0;
  let rightSide = 0;
  for (let a = 1; a < arr.length - 1; a += 1) {
    for (let i = 0; i < arr.length; i += 1) {
      if (i < a) {
        leftSide += arr[i];
      }
      if (i > a) {
        rightSide += arr[i];
      }
    }
    if (rightSide === leftSide) {
      return a;
    }
    leftSide = 0;
    rightSide = 0;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const res = [];
  let startRow = 0;
  let startCol = 0;
  let finishRow = size - 1;
  let finishCol = size - 1;
  let number = 1;

  for (let i = 0; i < size; i += 1) {
    res[i] = [];
  }

  while (startCol <= finishCol && startRow <= finishRow) {
    for (let i = startCol; i <= finishCol; i += 1) {
      res[startRow][i] = number;
      number += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= finishRow; i += 1) {
      res[i][finishCol] = number;
      number += 1;
    }
    finishCol -= 1;

    for (let i = finishCol; i >= startCol; i -= 1) {
      res[finishRow][i] = number;
      number += 1;
    }
    finishRow -= 1;

    for (let i = finishRow; i >= startRow; i -= 1) {
      res[i][startCol] = number;
      number += 1;
    }
    startCol += 1;
  }

  return res;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = [];
  for (let i = 0; i < matrix.length; i += 1) {
    arr[i] = [];
  }
  const copyMatrix = matrix;
  let y = 0;
  let a = 0;
  let b = 0;
  while (y < matrix.length) {
    for (let i = copyMatrix.length - 1; i >= 0; i -= 1) {
      arr[a][b] = copyMatrix[i][y];
      b += 1;
    }
    a += 1;
    b = 0;
    y += 1;
  }
  for (let i = 0; i < copyMatrix.length; i += 1) {
    for (let j = 0; j < copyMatrix[0].length; j += 1) {
      copyMatrix[i][j] = arr[i][j];
    }
  }
  return copyMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function swap(arr, i, j) {
  const a = arr;
  [a[i], a[j]] = [a[j], a[i]];
}

function partition(arr, l, r) {
  const pivot = l + Math.floor(Math.random() * (r - l + 1));
  swap(arr, pivot, r);
  let j = l;
  for (let i = l; i < r; i += 1) {
    if (arr[i] < arr[r]) {
      swap(arr, i, j);
      j += 1;
    }
  }
  swap(arr, j, r);
  return j;
}

function quickSort(arr, l = 0, r = arr.length - 1) {
  if (l >= r) {
    return;
  }
  const pivot = partition(arr, l, r);
  quickSort(arr, l, pivot - 1);
  quickSort(arr, pivot + 1, r);
}
function sortByAsc(arr) {
  quickSort(arr);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let newStr = str;
  let start = '';
  let end = '';
  let a = iterations;
  while (a > 0) {
    for (let i = 0; i < newStr.length; i += 1) {
      if ((i + 1) % 2 === 0) {
        end += newStr[i];
      } else {
        start += newStr[i];
      }
    }
    newStr = start + end;
    start = '';
    end = '';
    a -= 1;
    if (newStr === str) {
      return shuffleChar(str, iterations % (iterations - a));
    }
  }
  return newStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let str = `${number}`;
  const arr = new Array(str.length);
  for (let i = 0; i < str.length; i += 1) {
    arr[i] = Number(str[i]);
  }

  let i = arr.length - 2;
  for (; i >= 0; i -= 1) {
    if (arr[i] < arr[i + 1]) {
      break;
    }
  }
  if (i === -1) {
    return number;
  }

  let min;
  for (let j = i + 1; j < arr.length; j += 1) {
    if (arr[j] > arr[i]) {
      if (min === undefined) {
        min = j;
      } else if (arr[j] < arr[min]) {
        min = j;
      }
    }
  }

  swap(arr, min, i);

  quickSort(arr, i + 1, arr.length - 1);

  str = '';
  for (let k = 0; k < arr.length; k += 1) {
    str += arr[k];
  }
  return Number(str);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
