// const fs = require("fs");
// console.log("Hello from Hitesh");

// fs.writeFile("message.txt", "Hello from Node !!", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("file written successfully .");
//   }
// });

// fs.readFile("message.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// import superheroes from "superheroes";
// var superhero = superheroes.random();

// console.log(`I am ${superhero}`);

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter the url : ",
      name: "Url",
    },
  ])
  .then((answers) => {
    console.log(answers.Url);
    var qr_svg = qr.image(answers.Url);
    qr_svg.pipe(fs.createWriteStream("qr_png.png"));
    // fs.writeFile("QR.png", qr_svg, (err) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log("file written successfully .");
    //   }
    // });

    var svg_string = qr.imageSync(answers.Url, { type: "png" });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
