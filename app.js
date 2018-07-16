const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config.js')
const twitter = require('./stream.js')
const tweetcount = require('./tweetcount.js')
const path = require('path')
const http = require('http')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//http server to serve view files
const httpServer = http.Server(app);
app.use(express.static(__dirname + '/views/'))

//root
app.get('/', function(req, res){
    res.status(200).sendFile(path.join(__dirname + '/views/index.html'))
})

//ping to keep sit alive
app.get('/ping', function(req, res){
    res.status(200).send({"status": "ok"})
})

//streaming on
twitter

//get tweet counts of the bot
app.get('/count', async function (req, res){
    tweetcount(1018580921740492800,function(data){
        console.log(data)
        res.send({data})
    })
})
    

  //start listening  
app.listen(config.port, config.host, (err) => {
      if (err) {
        console.log(`Error : ${err}`)
        
      }
      
      console.log(` running on http://${config.host}:${config.port}`)
    })

exports.app = app