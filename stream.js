const twit = require('twit')
const config = require('./config/config')
const T = new twit(config)



var users = [ '20523325'] //my user id, can give more ['xxx','yyy']

//starting stream
var stream = T.stream('statuses/filter', { follow: users }) 

stream.on('tweet', function (tweet) {
  
    console.log('New tweet: '+ tweet.id_str)
    console.log('Text: '+tweet.text)

    //send rt and likes<3 (only users tweets)
   if(!tweet.retweeted && !tweet.favorited && tweet.user.id == 20523325 ){
    T.post(
        'statuses/retweet/:id',{id: tweet.id_str},(err, response) => {
          if (err) {
            console.log('ERRORDERP: Retweet! ' + err + ' ' + tweet.id_str)
          }
          else{
            console.log('SUCCESS RT: '+ tweet.id_str)
          }
        })  
    
     
        T.post('favorites/create',{id: tweet.id_str},(err, response) => {
              if (err) {
                console.log('ERRORDERP: fav! '+ err + ' ' + tweet.id_str)
              }
              else{
              console.log('SUCCESS Fav: '+tweet.id_str)
              }
            })  
        }

})



module.exports = stream


