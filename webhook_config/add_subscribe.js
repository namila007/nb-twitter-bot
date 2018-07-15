var request = require('request')
var config = require('../config/config')


// twitter authentication
var twitter_oauth = {
  consumer_key: config.consumer_key,
  consumer_secret: consumer_secret,
  token: config.access_token,
  token_secret: config.access_token_secret
}

var WEBHOOK_ID = 'your-webhook-id'


// request options
var request_options = {
  url: 'https://api.twitter.com/1.1/account_activity/webhooks/' + WEBHOOK_ID + '/subscriptions.json',
  oauth: config
}

// POST request to create webhook config
request.post(request_options, function (error, response, body) {

  if (response.statusCode == 204) {
    console.log('Subscription added.')
  } else {
    console.log('User has not authorized your app.')
  }
})
