"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var ormconfig_1 = require("../ormconfig");
var product_1 = require("../src/controllers/product");
ormconfig_1.MySqlDataSource.initialize().then(function (db) {
    var app = express();
    app.use(cors({
        origin: ['localhost:3000']
    }))
        .use(express.json());
    (0, product_1.default)(app, db);
    app.listen(8000);
});
