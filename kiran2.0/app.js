// App.js
// To start, enter 'node app.js' in the terminal.
// Receives GET requests for the various images, sends back the corresponding image file as a response.

/*
    SETUP
*/

var express = require('express');   
var app     = express();            
PORT        = 5115;           

/*
    ROUTES
*/

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
 });

app.get('/', function(req, res)               
    {
        res.send("The server is running!")      
    });       

app.get('/Burpees', function(req, res)             
    {
        res.sendFile('Burpees.jpeg', { root: 'public/images' }) 
    });  

app.get('/Decline', function(req, res)             
    {
        res.sendFile('Decline push-up.jpeg', { root: 'public/images' }) 
    });  

app.get('/Inchworm', function(req, res)             
    {
        res.sendFile('Inchworm.jpeg', { root: 'public/images' }) 
    });  

app.get('/Lunge', function(req, res)             
    {
        res.sendFile('Lunge.jpeg', { root: 'public/images' }) 
    }); 

app.get('/Off', function(req, res)             
    {
        res.sendFile('Off-set Bent-over Row with Broomstick Sets.jpeg', { root: 'public/images' }) 
    }); 

app.get('/PlankPull', function(req, res)             
    {
        res.sendFile('Plank Pull Sets.jpeg', { root: 'public/images' }) 
    }); 

app.get('/PlankTap', function(req, res)             
    {
        res.sendFile('Plank tap.jpeg', { root: 'public/images' }) 
    }); 

app.get('/Pull', function(req, res)             
    {
        res.sendFile('Pull-up.jpeg', { root: 'public/images' }) 
    }); 

app.get('/Push', function(req, res)             
{
    res.sendFile('pushup.jpeg', { root: 'public/images' }) 
}); 

app.get('/Side', function(req, res)             
    {
        res.sendFile('Side plank with arm extension.jpeg', { root: 'public/images' }) 
    }); 

app.get('/Split', function(req, res)             
    {
        res.sendFile('Split-Stance Row Iso Hold with TowelSets.jpeg', { root: 'public/images' }) 
    }); 

app.get('/Squat', function(req, res)             
    {
        res.sendFile('Squat.jpeg', { root: 'public/images' }) 
    }); 

app.get('/Step', function(req, res)             
    {
        res.sendFile('Step-up', { root: 'public/images' }) 
    }); 

app.get('/Superman', function(req, res)             
    {
        res.sendFile('Superman with arm extension.jpeg', { root: 'public/images' }) 
    }); 

app.get('/Tricep', function(req, res)             
    {
        res.sendFile('tricep-dip.jpeg', { root: 'public/images' }) 
    }); 

app.get('/Wide', function(req, res)             
    {
        res.sendFile('Wide-Grip Pushup With Tempo Sets.jpeg', { root: 'public/images' }) 
    });

/*
    LISTENER
*/

app.listen(PORT, function(){        
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});