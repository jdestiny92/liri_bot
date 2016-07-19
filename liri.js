var keys = require('./keys.js')
var Twitter = require('twitter');
var omdb = require('omdb')
var spotify = require('spotify');
 
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

var params = { screen_name: 'JulianBibble' };
var command = process.argv[2];
var argument = process.argv[3];


if (command == 'my-tweets') {
    console.log('here')
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }

        }
    });
}


if (command == 'movie-this') {
    console.log('movie');
    omdb.get({ title: argument }, true, function(err, movie) {
        if (err) {
            return console.error(err);
        }

        if (!movie) {
            return console.log('Movie not found!');
        }

        console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
        console.log(movie.plot);
    });

}


if (command == 'spotify-this-song') {
    console.log('spotify');
    spotify.search({ type: 'track', query: argument}, function(err, data) {
        
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
       
        for (var i = 0; i<data.tracks.items.length; i++) {

          console.log('song name: ' + data.tracks.items[i].name);
          console.log('preview url:'+ data.tracks.items[i].preview_url);
          console.log('album name: ' + data.tracks.items[i].album.name);
          
          for( var j = 0; j<data.tracks.items[i].artists.length; j++){

             console.log('artist name: ' + data.tracks.items[i].artists[j].name);
           }

          }
        
       
    })
};