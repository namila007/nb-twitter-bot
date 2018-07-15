const request = require('request')
const config = require('../../config/config')


// twitter authentication
var twitter_oauth = {
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  token: config.access_token,
  token_secret: config.access_token_secret
}

var WEBHOOK_URL = 'https://nb-twitter-bot.herokuapp.com/webhook/tweets'


// request options
var request_options = {
  url: 'https://api.twitter.com/1.1/account_activity/webhooks.json',
  oauth: twitter_oauth,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded'
  },
  form: {
    url: WEBHOOK_URL
  }
}

console.log(config)
// POST request to create webhook config
// request.post(request_options, function (error, response, body) {
//   console.log(body)
// })