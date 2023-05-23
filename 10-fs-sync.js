const { readFileSync, writeFileSync } = require('fs');
// reading the file
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// creates file.
// And if same file exists, it will overwrite it
// if we use options object = { flag: 'a' } it will be
// appending data to file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);

console.log('done with the task');
console.log('starting the next one');
