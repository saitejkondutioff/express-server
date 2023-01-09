
import  express from "express";
import  bodyParser from 'body-parser';
import notFoundRoute from "./lib/routes/notFoundRoute";
import errorHandler from "./lib/routes/errorHandler";

class Server {
    private app: express.Express;

    constructor(private config) {
        this.app = express();
    }
    bootstrap() {
        this.setupRoutes();
        return this.app;
    }
    public initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false}));
        app.use(bodyParser.json());
        }
    public setupRoutes() {
        const { env, apiPrefix } = this.config;
        const { app } = this;
        app.get('/health-checkup', (req, res) => {
            res.send('I am ok');
        })
        app.use(notFoundRoute);
        app.use(errorHandler);
    }

    public run() {
        
        const { port, env } = this.config;
        this.app.listen(port, () => {
            try {
                console.log("success")
            }
            catch (error) {
                console.log(error)
            }

        });
        return this;
    }
}


export default Server;

