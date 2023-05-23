const { readFile, writeFile } = require('fs');
// asynchronously reading the file
// CALLBACK HELL
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Async readfile result: ${first} & ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
