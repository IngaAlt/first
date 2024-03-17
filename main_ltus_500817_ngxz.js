const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
72,61,22,1,80,85,23,86,46,28,21,34 - true
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
orange

const capitalizeString = str => str.toUpperCase();
let array = getRandomArray(); array.forEach(item => console.log(item));

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const removeDuplicates = array => Array.from(new Set(array));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
orange

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const filterEvenNumbers = numbers => numbers.filter(isEven);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const reverseWords = str => str.split(" ").reverse().join(" ");
const greet = name => `Hello, ${name}!`;
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
banana / orange
let result = performOperation(getRandomNumber(), getRandomNumber());
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
banana

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
orange

const getRandomElement = array => array[getRandomIndex(array)];
orange


const randomNumber = getRandomNumber();
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
1 / 3
const multiply = (a, b) => a * b;
42 / 48
const formatDate = date => new Date(date).toLocaleDateString();
8,1,40,54,47,44,58,86,72,5,25,92,76,15,80,8,64,28,79,1,83,21,1,85,43,10,63,55,91,57,90,6,56,56,28,61,0,45,48,68,85,93,45,38,47,96,91,77,97,82,24,31,46,32,32,66,10,27,66,75,37,5,2,42,18,81,68,88,93,52,49,98,79,0,91,30,14,88,73,22,12,24,14,42,6,77,3,52,42,12,80 + 78
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
18 / grape
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
84,68,3,70,96,15,58,44,98,79,65,42,54,31,44,82,80,12,27,59,12,63,43,99,81,13,25,44,35,17,77,43,35,94,93,63,25,25,79,71,67,82,60,1,82,81,97,4,41,58,55,66,66 + banana

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const filterEvenNumbers = numbers => numbers.filter(isEven);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

apple

const getRandomElement = array => array[getRandomIndex(array)];
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
grape

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomIndex = array => Math.floor(Math.random() * array.length);

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const isPalindrome = str => str === str.split("").reverse().join("");
banana


const getRandomSubset = (array, size) => array.slice(0, size);

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
apple - false

const filterEvenNumbers = numbers => numbers.filter(isEven);

console.log(getRandomString());
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

function addNumbers(a, b) { return a + b; }
const squareRoot = num => Math.sqrt(num);
false / true
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const squareRoot = num => Math.sqrt(num);
false + 25
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
64 - 34
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const randomNumber = getRandomNumber();
