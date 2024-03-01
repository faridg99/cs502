let arr2 = [
    { name: 'test', key: 1 },
    { name: 'task', key: 2 },
    { name: 'tanqo', key: 3 },
    { name: 'like', key: 4 },
    { name: 'task', key: 5 },
    { name: 'trust', key: 6 },
    { name: 'test', key: 7 },
    { name: 'last', key: 8 },
    { name: 'tanqo', key: 9 },
    { name: 'elephant', key: 10 },
    { name: 'love', key: 11 },
    { name: 'small', key: 12 },
    { name: 'little', key: 13 },
];

let startWithT = arr2.filter(obj => obj.name.startsWith('t'));

let countStartEndWithT = arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t')).length;

let sumKeysStartEndWithT = arr2.filter(obj => obj.name.startsWith('t') && obj.name.endsWith('t'))
                                 .reduce((sum, obj) => sum + obj.key, 0);

let replaceEndWithE = arr2.map(obj => obj.name.endsWith('e') ? { ...obj, name: 'SuperDev' } : obj);

let longestNameKey = arr2.reduce((a, b) => a.name.length > b.name.length ? a : b).key;

let indexSquareOfLongestName = Math.pow(arr2.findIndex(obj => obj.name.length === Math.max(...arr2.map(o => o.name.length))), 2);

let namesLength4 = arr2.filter(obj => obj.name.length === 4);

let highestKeyName = arr2.reduce((a, b) => a.key > b.key ? a : b).name;

let indicesWithTwoLs = arr2.map((obj, index) => obj.name.toLowerCase().split('l').length - 1 === 2 ? index : -1).filter(index => index !== -1);

let keysWithTwoTs = arr2.filter(obj => (obj.name.match(/t/g) || []).length === 2).map(obj => obj.key);

console.log({ startWithT, countStartEndWithT, sumKeysStartEndWithT, replaceEndWithE, longestNameKey, indexSquareOfLongestName, namesLength4, highestKeyName, indicesWithTwoLs, keysWithTwoTs });
