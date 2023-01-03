import { config } from 'dotenv';
config()

const Config = Object.freeze({
    port: process.env.PORT,
    env: process.env.NODE_ENV
})

export default Config;