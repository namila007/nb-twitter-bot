const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config.js')
const twitter = require('./stream.js')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//removed webhooked

// app.post('/webhook/tweets',function (req, res){
//     console.log('~~new tweet~~')
//     console.log(req.body.link)
//     twitter(req.body.link)
//     res.status(200).send()
// })

app.get('/', function(req, res){
    res.status(200).send({"status": "ok"})
})

//ping to keep sit alive
app.get('/ping', function(req, res){
    res.status(200).send({"status": "ok"})
})

//streaming on
twitter


app.listen(config.port, config.host, (err) => {
      if (err) {
        console.log(`Error : ${err}`)
        
      }
      
      console.log(` running on http://${config.host}:${config.port}`)
    })

exports.app = app