const twit = require('twit')
const config = require('./config/config')
const T = new twit(config)

//function to get tweetcounts
     function tweetcount (id,callback) { 
         T.get('users/show', { user_id: id },  function (err, data, response) {
           //console.log(data)
           callback(data.statuses_count)
      })
    
}

module.exports = tweetcount