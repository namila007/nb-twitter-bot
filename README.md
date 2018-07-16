
# NB-Twitter Bot
![nb bot](https://nb-twitter-bot.herokuapp.com/main.png)

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Intro

A twitter bot made by nodejs, using twitter api

## Run the code

 1. Create a twitter account and create a  [Twitter app](https://apps.twitter.com/)
 2. Clone the git
 3. make `.env` file and copy `.env.example` and add the relevant keys from twitter app 
 4. run `npm install` 
 5.  change `var  users  = [ '20523325']` in `streaming.js` file and add user id to monitor. example: ` var  users  = [ 'XXXXX' , 'YYYYYY']`
 6. run `npm start`
 

## Deploy
User can deploy this to heroku. Create `  Config Vars` for each in `.env` file and deply
