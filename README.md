
# NB-Twitter Bot
![nb bot](https://nb-twitter-bot.herokuapp.com/main.png)

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
[![Build Status](https://travis-ci.org/namila007/nb-twitter-bot.svg?branch=master)](https://travis-ci.org/namila007/nb-twitter-bot)

## Intro

A twitter bot made by nodejs, using twitter api

## Run the code

 1. Create a twitter account and create a  [Twitter app](https://apps.twitter.com/)
 2. Clone the git
 3. make `.env` file and copy `.env.example` and add the relevant keys from twitter app 
 4. run `npm install` 
 5.  if you want to add more users change `var  users  = [ config.userid ]` in `streaming.js` file and add user ids to monitor. example: ` var  users  = [ 'XXXXX' , 'YYYYYY']`
 6. run `npm start`
 

## Deploy
User can deploy this to heroku. Create `  Config Vars` for each in `.env` file and deploy or simply press DEPLOY button. in `.env` files you cant add arrays.so need to add ids in the code


