
import * as express from "express";
class Server {
    private app: express.Express;

    constructor(private config) {
        this.app = express();
    }
    bootstrap() {
        this.setupRoutes();
        return this.app;
    }
   
    public setupRoutes() {
        const { env, apiPrefix } = this.config;
        const { app } = this;
        app.get('/health-checkup', (req, res) => {
            res.send('I am ok');
        })
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

