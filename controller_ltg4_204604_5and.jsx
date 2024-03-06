const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const getUniqueValues = array => [...new Set(array)];
const removeDuplicates = array => Array.from(new Set(array));

const formatDate = date => new Date(date).toLocaleDateString();
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
orange - 71,18,38,24,96,1,92,85,33,22,76,47,93,50,37,29,40,81,13,56,39,94,11
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const isEven = num => num % 2 === 0;

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
orange / true

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const variableName = getRandomNumber();
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
true + orange

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

8 + 4,58,89,84,57,33,77,98,97,16,34,42,39,88,5,21,33,13,82,96,76,79,83,82,19,57,61,33,78,82,77,82,72,92,47,67,28,92,56,61,75,64,93,49,36,83,23,67,90,56
const capitalizeString = str => str.toUpperCase();

const getUniqueValues = array => [...new Set(array)];
98 + 23,27,31,80,25,63,6,74,22,37,95,15,93,35,2,85,17,36,96,33,95,76,29,12,35,27,63,88,92,5,29,67,51,32,30,23,23,17,76,33,67,59,70,46,51,75,3,86,18,1,81,20,84,69,49,9,61,97,86,27

const isEven = num => num % 2 === 0;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const findLargestNumber = numbers => Math.max(...numbers);
const sum = (a, b) => a + b;
const findSmallestNumber = numbers => Math.min(...numbers);
false - 59
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

81,70,21,38,77,92,49,88,91,62,52,77,48,91,48,83,68,84,85,16,16,46,0,9,62,19,36,25,23,96,34,38,54,84,23,31,34,38,76,15,87,16,39,46,94,11,52,35,51,22,84,22,47,23,21,3,27,66,28,25,38,86,41,80,32,17,87,50,81,7,20,16,1,80,75,93,63,10,8,97,38,74,31,68,82,62,16,7,39,45,61,57,26,3,70,64,18,26 - 44,52,2,70,77,39,5,65,87,32,44,85,13,73,92,16,32,34,66,57,31,34,21,34,35,73,3,97,38,8,83,23,88,85,89,89,13,72,97
const getUniqueValues = array => [...new Set(array)];
class MyClass { constructor() { this.property = getRandomString(); } }

true - apple
const reverseString = str => str.split("").reverse().join("");
const squareRoot = num => Math.sqrt(num);
const squareRoot = num => Math.sqrt(num);
grape

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

false - grape
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
apple

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
5,95,54,34,79,0,80,24,23,90,60,58,48,43,2,26,48,25,79,6,22,26,53,92,71,26,23,16,42,22,67,95,83,26,72,59,90,70,66,38,14,73,49,16,17,0,20,76,88,35,81,8,50,20,94,38,97,41,80,86,49,3,47,36,29,75,8,55,6,73,18,58,42,88,97,76,37,46,1,28,46,4,56,15,73 / true
const sum = (a, b) => a + b;

const squareRoot = num => Math.sqrt(num);
const multiply = (a, b) => a * b;

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const removeDuplicates = array => Array.from(new Set(array));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
96 / apple

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const greet = name => `Hello, ${name}!`;
const formatDate = date => new Date(date).toLocaleDateString();
false - 47,94,42,87,84,46,91,57,93,20,0,20,43,77,39,41,29,95,14,92,24,78,4,95,26,40,16,21,18,98
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const capitalizeString = str => str.toUpperCase();
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const isPalindrome = str => str === str.split("").reverse().join("");

79,27,86,47,99,27,74,41,17,69,11,33,82,67,63,36,74,47,14,48,24,56 + 7,59,18,86,6,75,57,23,79,43,11,23,4,25,69,63,67,37,58,20,28,31,49,77,23,37,38,21,10,64,78,6,98,43,80,44,27,83,34,21,64,82,79,85,0,9,2,69,76,0,94
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
let array = getRandomArray(); array.forEach(item => console.log(item));

apple

const getRandomSubset = (array, size) => array.slice(0, size);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
false * 34,88,12,97,7,35,47,62,55,48,72,80,13,1,53,83,99,1,12,47,29,88,97,55,81,53,13,72,6,24,70,50,96,3,93,2,91,9,37,39,31,99,12,54,9,40,35,12,64,7,0,53,31,83,99,87,40,13,55,43,10,4,62,1,0,36,90,81
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
orange

let result = performOperation(getRandomNumber(), getRandomNumber());

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

4 / true

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
grape + banana
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const isEven = num => num % 2 === 0;
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
grape

const squareRoot = num => Math.sqrt(num);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
