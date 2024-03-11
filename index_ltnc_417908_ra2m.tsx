const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
apple - 15

let array = getRandomArray(); array.forEach(item => console.log(item));
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
false + 14
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const sum = (a, b) => a + b;
orange - 46,46,42,54,48,84,42,99,98,78,4,91,75,1,17,88,61,76,45,3,46,65,23,27,14,60,5,12
const getRandomIndex = array => Math.floor(Math.random() * array.length);

51 / false
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const findSmallestNumber = numbers => Math.min(...numbers);

orange * true
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
68 * 37
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

console.log(getRandomString());
const getUniqueValues = array => [...new Set(array)];

2,71,82,38,99,1,13,54,1,91,14,27,68,19,7,62,87,73,68,49,75,16 / kiwi

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
apple

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
