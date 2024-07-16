import * as express from 'express';
import * as cors from 'cors';
import { MySqlDataSource } from '../ormconfig'
import mapProductEndpoints from '../src/controllers/product'

MySqlDataSource.initialize().then((db) => {
    const app = express();

    app.use(cors({
        origin: ['localhost:3000']
    }))
        .use(express.json());

    mapProductEndpoints(app, db)

    app.listen(8000);
})

