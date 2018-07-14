const auth = require('./auth.js')
const twit = require('twit')


const twitter = new twit(auth)


// twitter.post('statuses/update', { status: 'hello world1!' }, function(err, data, response) {
//     console.log(data)
//   })

  var params = {
    q: 'from%3Anamila007',
    count: 3,
    result_type: 'recent',
    lang: 'en'
  }

  var getmine = {
    screen_name: 'namila007',
    count: 5
  }

twitter.get('search/tweets', params, function(err, data, response) {
    if(!err){
        var i=0;
        while(i <3){
            console.log(data.statuses[i].text)
            i++
        }
    } else {
      console.log(err)
    }
  })

//   twitter.get('statuses/user_timeline', params, function(err, data, response) {
//     if(!err){
        
//             console.log('-----')
//             console.log(data)
           
        
//     } else {
//       console.log(err)
//     }
//   })