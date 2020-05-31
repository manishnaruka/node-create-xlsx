/**
 * app.js
 * node-create-xlsx
 * Created by Manish Naruka (developer.manishnaruka@gmail.com)
 * Created on 31 May 2020
 * Copyright © 2020 Work-Space All Right Reserved.
 */

const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createXlsx = require("./api/create-xlsx");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/create-xlsx", createXlsx.create);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
