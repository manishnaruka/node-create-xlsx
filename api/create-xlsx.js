/**
 * create-xlsx.js
 * node-create-xlsx
 * Created by Manish Naruka (developer.manishnaruka@gmail.com)
 * Created on 31 May 2020
 * Copyright © 2020 Work-Space All Right Reserved.
 */

const nodeXlsx = require("node-xlsx");
const fs = require("fs");

const data = [
  ["sn", "name"],
  ["1", "Goku"],
  ["2", "Gohan"],
  ["3", "Goteng"],
];

exports.create = (request, response, next) => {
  const buffer = nodeXlsx.build([{ name: "demo_sheet", data: data }]);
  fs.writeFile("demo.xlsx", buffer, (err) => {
    if (err) throw err;
    console.log("Done...");
    response.status(200).json({ msg: "done" });
  });
};
