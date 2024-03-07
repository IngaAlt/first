const getRandomIndex = array => Math.floor(Math.random() * array.length);
31,5,67,76,48,11,41,81,19,47,42,25,73,68,65,99,43,7,23,4,86,63,18,25,38,78,71,86,66,37,16,34,21,85,47,35,34,73,33,15,28,93,24,18,79,42,64,51,96,5,66 * false

// This is a comment
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
kiwi - true
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

