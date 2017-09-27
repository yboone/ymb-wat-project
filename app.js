        var express = require('express');
        var app = express ();
         var bodyParser = require('body-Parser');
         var mongoose = require('mongoose');
         var random = require('mongoose-random');

         //connect  to Mongoose
         //mongoose.connect('mongodb://localhost/game');
         mongoose.Promise = global.Promise;
          var promise = mongoose.connect('mongodb://localhost/game', {
            useMongoClient: true,
           /* other options */
         });

         var db = mongoose.connection;
         db.on('error', console.error.bind(console, 'connection error:'));
         db.once('open', function(){
             console.log('db is connected...');
         });

         People = require('./models/people');
       //   NewGame  = require('./models/newgame');


        //--redirect to newgame
         app.get('/', function(req, res){
             res.send('Please use /api/newgame');
         });

         //get 5 set of headshot url's
           app.get('/api/newgame', function(req, res){
               People.getFive(function(err, newgame){
                   if (err){
                       throw err;
                   }
                   res.json(newgame);
               });
           });

         app.get('/api/people', function(req, res){
             People.getPeople(function(err, people){
                 if (err){
                     throw err;
                 }
                 res.json(people);
             });
         });

         app.get('/api/people/:_id', function(req, res){
             People.getPeopleById(req.params._id, function(err, people){
                 if (err){
                     throw err;
                 }
                 res.json(people);
             });
         });

         app.listen(3032);
         console.log('Running on Port 3032.....');
