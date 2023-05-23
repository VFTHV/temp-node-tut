const path = require('path');

// delimiter character (could be different for diff environments)
const separator = path.sep;
// normalizes the path and removes any slashes in the names
// of folders/files
const filePath = path.join('content', 'subfolder', 'test.txt');
// console.log(filePath);

// only gives trailing file name
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, 'conten', 'subfolder', 'test.txt');
console.log(absolute);
