var keys = require('./keys.js')
//console.log(keys);

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});



//console.log(client);

client.get('statuses/user_timeline', function(error, tweets, response){
  if(error) throw error;
  tweets = JSON.stringify(tweets, null, 4);
  response = JSON.stringify(response, null, 4)
  console.log(tweets);  // The favorites. 
  console.log(response);  // Raw response object. 
});