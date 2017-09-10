console.log("Twitter bot is starting...");

var Twit = require("twit");

var config = require("./config.js");

var T = new Twit(config);

function tweet() {
    
    var currentTime = new Date().toTimeString();
    console.log(currentTime);
    var msg = {
        status: "The current time is: " + currentTime
    }
    
    T.post('statuses/update', msg, function(err, data, response) {
        if(err){
            console.log("Something went wrong when I tried to tweet...")
        }
        console.log("Tweeted!");
    });
};

setInterval(tweet, 1000*5);