require('dotenv').config()

module.exports = {
    consumer_key: process.env.consumer_key ,
    consumer_secret: process.env.consumer_secret ,
    access_token: process.env.access_token ,
    access_token_secret: process.env.access_token_secret,
    timeout_ms: process.env.timeout_ms,
    port: process.env.PORT,
    host: process.env.HOST,
    userid: process.env.userid,
    botid: process.env.botid
}