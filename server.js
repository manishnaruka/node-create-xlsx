/**
 * server.js
 * node-create-xlsx
 * Created by Manish Naruka (developer.manishnaruka@gmail.com)
 * Created on 31 May 2020
 * Copyright © 2020 Work-Space All Right Reserved.
 */

const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);
