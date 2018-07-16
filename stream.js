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
//'1018580921740492800' nb_bot007 id
//getting mentions and replying to the relevent thread
var reply = T.stream('statuses/filter', { track: 'nb_bot007'  }) 
reply.on('tweet', function(tweet){
  console.log("Hola! got a mention " +tweet.id_str)
  //here tweet id is not working, so try tweet string if
  if(tweet.user.id != 1018580921740492800 && tweet.in_reply_to_status_id == null) { 
    T.post('statuses/update', { 
      
      in_reply_to_status_id : tweet.id_str, 
      status: 'Hi, @'+tweet.user.screen_name+' thanks for mentioning me, Have a good day! 😊'
      
    }, function(err, data, response) {
      if(err) console.log("Didn't replied :("+err)
      console.log("Replied to mention :)")
    })
  }
})

module.exports = stream


