const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config.js')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/webhook/tweets',function (req, res){
    console.log('~~new tweet~~')
    console.log(req.body)
    res.status(200).send()
})

app.listen(config.port, config.host, (err) => {
      if (err) {
        console.log(`Error : ${err}`)
        
      }
  
      console.log(` running on http://${config.host}:${config.port}`)
    })

exports.app = app