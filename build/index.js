"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
var routes_1 = require("./app/routes");
var app = express();
typeorm_1.createConnection();
app.use(cors());
app.use(bodyParser.json());
app.use(routes_1.default);
app.listen(3333, function () {
    console.log('API online!');
});
//# sourceMappingURL=index.js.map