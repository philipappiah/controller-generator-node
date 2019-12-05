#!/usr/bin/env node

const fs = require("fs");

const [,, ...args] = process.argv;



let pathExists = `${__dirname}/Controllers`;

  try {
    if (!fs.existsSync(pathExists)) {
      fs.mkdirSync(pathExists);
    }
  } catch (err) {
    console.error(err);
  }

  args.map(function(res) {
    fs.writeFile(`${__dirname}/Controllers/${res}Controller.js`, "", function(
      err
    ) {
      if (err) throw err;
    });

    fs.copyFile(
      "./controllerHolder.js",
      `${__dirname}/Controllers/${res}Controller.js`,

      function(err) {
        if (err) throw err;
      }
    );
  });
  let fileCount = args.length > 1 ? "Files" : "File";
  console.log(`${args.length} ${fileCount} created successfully.`);