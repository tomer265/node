"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.MySqlDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    password: "1234567asd",
    port: 3306,
    username: "root",
    database: "yt_node_admin",
    entities: [
        "src/models/*.js"
    ],
    logging: true,
    synchronize: true
});
exports.default = null;
