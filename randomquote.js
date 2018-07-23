const axios = require('axios')

function replyQuote (cp) {
    axios.get('https://talaikis.com/api/quotes/random/').then((resp)=>{cp(resp)})
}

module.exports = replyQuote