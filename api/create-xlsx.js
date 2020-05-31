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
  ["col_heading1", "col_heading2", "col_heading3"],
  ["row1_val1", "row1_val2", "row1_val3"],
  ["row2_val1", "row2_val2", "row2_val3"],
  ["row3_val1", "row3_val2", "row3_val3"],
];

exports.create = (request, response, next) => {
  const buffer = nodeXlsx.build([{ name: "demo_sheet", data: data }]);
  fs.writeFile("demo.xlsx", buffer, (err) => {
    if (err) throw err;
    console.log("Done...");
    response.status(200).json({ msg: "done" });
  });
};
