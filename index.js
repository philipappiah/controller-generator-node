#!/usr/bin/env node

const fs = require("fs");

const [,, ...args] = process.argv;
if(args[0] === "create-controller" || args[0]=== "controller-generator"){
  console.log("The command has been changed to 'controller-generate'");
}

const pathExists = `./Controllers`;
let filesCreated = 0;
let rejectedFiles = 0;

  try {
    if (!fs.existsSync(pathExists)) {
      fs.mkdirSync(pathExists);
    }
  } catch (err) {
    console.error(err);
  }

  args.map(function(res) {
    // check if the file name does not already exist
    if(fs.existsSync(`./Controllers/${res}Controller.js`)) {
      rejectedFiles++;
    } else {
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
      filesCreated++;
    }
  });

  // show the user the number of files created
  if(rejectedFiles > 0) {
    rejectedFiles === 1 ? console.log(`${rejectedFiles} FILE NOT CREATED : The file you are trying to create already exists`) 
      : console.log(`${rejectedFiles} FILES NOT CREATED : The files you are trying to create already exist`);
    
  }

  if(filesCreated > 0) {
    if(filesCreated > 0) {
      filesCreated === 1 ?  console.log(`${filesCreated} file created successfully.`) 
        : console.log(`${args.length} ${filesCreated} files created successfully.`);
    }
  }
  