import { DataSource } from "typeorm"
import "reflect-metadata"
import { Product } from "./entity/Product"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "orm",
    synchronize: true,
    entities: [Product],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log("Data Source has been initialized!")
    })
    .catch((error) => console.log(error))