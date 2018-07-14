const twit = require('twit')
const twitter = new twit(auth)


// twitter.post('statuses/update', { status: 'hello world1!' }, function(err, data, response) {
//     console.log(data)
//   })

module.exports (ID) {
    bot.post(
        'statuses/retweet/:id',
        {
          id: ID
        },
        (err, response) => {
          if (err) {
            console.lol('ERRORDERP: Retweet!')
          }
          console.lol(
            'SUCCESS: RT: ',
            data.statuses[rando].text,
            'RANDO ID: ',
            rando
          )
}
}

//   var params = {
//     q: 'from%3Anamila007',
//     count: 3,
//     result_type: 'recent',
//     lang: 'en'
//   }

//   var getmine = {
//     screen_name: 'namila007',
//     count: 5
//   }

// twitter.get('search/tweets', params, function(err, data, response) {
//     if(!err){
//         var i=0;
//         while(i <3){
//             console.log(data.statuses[i].text)
//             i++
//         }
//     } else {
//       console.log(err)
//     }
//   })
