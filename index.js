#!/usr/bin/env node

const fs = require("fs");

const [,, ...args] = process.argv;
if(args[0] === "create-controller" || args[0]=== "controller-generator"){
  console.log("The command has been changed to 'controller-generate'");
}



let pathExists = `./Controllers`;


  try {
    if (!fs.existsSync(pathExists)) {
      fs.mkdirSync(pathExists);
    }
  } catch (err) {
    console.error(err);
  }

  args.map(function(res) {
    fs.writeFile(`./Controllers/${res}Controller.js`, "", function(
      err
    ) {
      if (err) throw err;
    });

    fs.copyFile(
      `${__dirname}/controllerHolder.js`,
      `./Controllers/${res}Controller.js`,

      function(err) {
        if (err) throw err;
      }
    );
  });
  let fileCount = args.length > 1 ? "Files" : "File";
  console.log(`${args.length} ${fileCount} created successfully.`);