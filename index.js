const fs = require("fs");
let pathExists = `${__dirname}/Controllers`;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Enter controller name(s): `, names => {
  fileNames = names.split(" ");

  try {
    if (!fs.existsSync(pathExists)) {
      fs.mkdirSync(pathExists);
    }
  } catch (err) {
    console.error(err);
  }

  fileNames.map(function(res, i) {
    fs.writeFile(`${__dirname}/Controllers/${res}Controller.js`, "", function(
      err
    ) {
      if (err) throw err;
    });

    fs.copyFile(
      "controllerHolder.js",
      `${__dirname}/Controllers/${res}Controller.js`,

      function(err) {
        if (err) throw err;
      }
    );
  });
  let fileCount = fileNames.length > 1 ? "Files" : "File";
  console.log(`${fileNames.length} ${fileCount} created successfully.`);

  readline.close();
});
