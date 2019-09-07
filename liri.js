
require("dotenv").config();
var keys = require("./keys.js");
const axios = require('axios');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require('fs');

// Variable declarations
let command;
let title;
let noTxtFile = true;

// If true, get command and title values from random.txt
if(process.argv[2] == "do-what-it-says"){
  noTxtFile = false;
  //get input from txt file
    fs.readFile('random.txt', 'utf8',(err, data) => {
      if(err) throw err;
     // assign values from txt file
      let x = data.split(',');
      command = x[0];
      title = x[1];
      apiSearch();

    });

}else{ 
   // get values from command line
    // node | liri.js | some-command | some-title
    //   0       1           2             3
    command = process.argv[2];
    title = process.argv[3];
    apiSearch();
}

function apiSearch(){
      //when user wants to make a spotify search 
      if(command == "spotify-this-song"){
            //let songName = process.argv[3];
            if( (noTxtFile && process.argv.length < 4 ) || title.length == 0){
                title = "The Sign";
            }
            spotify.search({ type: 'track', query: title }, function(err, data) {
              if (err) {
                return console.log('Error occurred: ' + err);
              }

              console.log("Artist(s): "+data.tracks.items[0].artists[0].name); 
              console.log("Name: "+title);
              console.log("Preview Link: "+data.tracks.items[0].external_urls.spotify);
              console.log("Album: "+data.tracks.items[0].album.name); 

            });
      }else if(command == "movie-this"){
            //when user wants to make a IMDB search
            //let movieName = process.argv[3];
            if( (noTxtFile && process.argv.length < 4 ) || title.length == 0){
                title = "Mr.Nobody";
            } 
            // Make a request for a user with a given ID
            axios.get("http://www.omdbapi.com/?t=" + title + "&apikey="+ process.env.IMDB_KEY)
              .then(function (response) {
                let info = response.data
                // console.log(response);
                console.log("Title: " + info.Title + '\n' + "Year: "+info.Year + '\n' + "IMDB Rating: "+info.imdbRating);
                console.log(info.Ratings[1].Source + ": " + info.Ratings[1].Value);
                console.log("Country: "+info.Country);
                console.log("Language: "+info.Language);
                console.log("Plot: " + info.Plot);
                console.log("Actors: " + info.Actors);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .finally(function () {
                // always executed
              });


      }else {
        //return error message
        console.log("Please try again. Invalid command");
      }
}
