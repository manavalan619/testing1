import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import * as cors from 'cors';
import { MongoConfig } from './config/MongoConfig'
import { WinstonLogger } from './config/WinstonLogger';
import { SharedService } from './config/SharedService';
import * as mongoose from "mongoose";

const PORT = 3014;

class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    public logger: WinstonLogger = new WinstonLogger();
    public apiUrl : SharedService = new SharedService();
    public mongoUrl: String = process.env.mongoUrl;

    // public mongoUrl: string = 'mongodb://127.0.0.1/GeppettoStage';


    constructor() {
        this.logger.setupLogger();
        this.logger.configureWinston(this.app);
        this.initializeMiddlewares();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
        this.app.use(cors({ credentials: true, origin: true }))
    }

    private mongoSetup(): void {
        // mongoose.Promise = global.Promise;
        // mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
        // let mConfig = new MongoConfig();
        // mConfig.mongoConfig();
        switch (process.env.localname) {
            case  process.env.name: mongoose.Promise = global.Promise;
                                    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
                break;

            default:  let mConfig = new MongoConfig();
                      mConfig.mongoConfig();
                break;
        }
    }

}

new App().app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})