
import express from "express";

class server{
    private app: express.Express;
   
    constructor(private config) {
        this.app = express();
    }
bootstrap(){
        this.setroutes();
        return this;
    }


setroutes(){
    
        this.app.get('/health-check', function (req, res) {
                console.log(req.body);
                res.send('I am OK');
            });
        }

run(){
     this.app.listen(this.config.port,() =>{
        try {console.log("Log success message in case of success")}
        catch{console.log("Log success message in case of success")}

     }
     );
}
}

export default server;

