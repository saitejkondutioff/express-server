import {config} from 'dotenv';
config() 
import { IConfig } from './IConfig';

const Config:IConfig = Object.freeze({
    PORT : process.env.PORT,
    NODE_ENV : process.env.NODE_DEV
})

export default Config;