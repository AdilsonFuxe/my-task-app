import * as express from 'express';
import * as cors from 'cors';
import routes from './routes';
import { createConnection } from 'typeorm';
import config from './config/database';


class App {
    public express: express.Application;

    public constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
        this.database();
    }

    private middlewares(): void{
        this.express.use(express.json());
        this.express.use(cors());
    }

    private routes(): void{
        this.express.use(routes);
    }

    private database(): void {
        createConnection(config);
    }
}

export default new App().express;