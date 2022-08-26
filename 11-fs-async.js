const { readFile, writeFile } = require("fs");
console.log('start')
readFile("./content/subfolder/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first);
  readFile("./content/subfolder/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(second);
    writeFile(
      "./content/subfolder/result-async.txt",
      `Here is the result :${first},${second}`,
      "utf-8",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting the next task')

