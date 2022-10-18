"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const Product_1 = require("./entity/Product");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "orm",
    synchronize: true,
    logging: true,
    entities: [Product_1.Product],
    subscribers: [],
    migrations: [],
});
exports.AppDataSource.initialize()
    .then(() => {
    // here you can start to work with your database
    console.log("Data Source has been initialized!");
})
    .catch((error) => console.log(error));
