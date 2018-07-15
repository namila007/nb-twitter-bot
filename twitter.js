const twit = require('twit')
const config = require('./config/config')

console.log(config)

const twitter = new twit(config)




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

