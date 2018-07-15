const twit = require('twit')
const config = require('./config/config.js')
const twitter = new twit(config)

function extractid(link) {

}


module.exports = (link)=> {

    var array = link.split("/")
    var ID = array[5]
   // console.log(id)

    twitter.post(
        'statuses/retweet/:id',
        {
          id: ID
        },
        (err, response) => {
          if (err) {
            console.log('ERRORDERP: Retweet!')
          }
          console.log(
            'SUCCESS: RT: '
            //data.statuses[rando].text
          )
        })   
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
