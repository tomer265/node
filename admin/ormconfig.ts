import { DataSource } from "typeorm"

export const MySqlDataSource = new DataSource({
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
})

export default null; 
