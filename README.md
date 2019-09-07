# liri-node-app


Liri node app runs on command line. User will provide two values : command and title, respectively.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine. 
 
### Installing
1. On GitHub, click on the <b>clone or download</b> button and copy the URL.
2. Open your command prompt /terminal.
3. Change your current working directory to the location you want to save your project in.
4. Type git clone and paster the URL you copied earlier:

```
$ git clone https://github.com/melodyulloa/liri-node-app.git
```

5. Press Enter. You should now have a copy of the project on your computer.

## To run app

To run the app, you must run the program in terminal : 

1. Spotify API Search
```
$ node liri.js spotify-this-song "Bodak Yellow"
```
output: 
<a href="https://imgur.com/Xfa5pTk"><img src="https://i.imgur.com/Xfa5pTk.png" title="source: imgur.com" /></a>

2. IMDB API Search
```
$ node liri.js movie-this "titanic"
```
output: 
<a href="https://imgur.com/bhfjacB"><img src="https://i.imgur.com/bhfjacB.png" title="source: imgur.com" /></a>


3. Get input from random.txt file. Spotify API Search
```
$ node liri.js do-what-it-says
```
output: 
<a href="https://imgur.com/9dDQIDL"><img src="https://i.imgur.com/9dDQIDL.png" title="source: imgur.com" /></a>

4. Get input from random.txt file. IMDB Search
```
$ node liri.js do-what-it-says
```
output: 
<a href="https://imgur.com/RZHp0pu"><img src="https://i.imgur.com/RZHp0pu.png" title="source: imgur.com" /></a>

5. Invalid Input
```
$ node liri.js
```
output: 
<a href="https://imgur.com/P8qRnUZ"><img src="https://i.imgur.com/P8qRnUZ.png" title="source: imgur.com" /></a>



