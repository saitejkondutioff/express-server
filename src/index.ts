import configurations from "./config/configuration";
import server from "./Server";

let final_run = new server(configurations);
final_run.bootstrap
final_run.run