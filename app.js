const auth = require('./auth.js')
const twit = require('twit')


const twitter = new twit(auth)

twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
  })