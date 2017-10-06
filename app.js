        //bring in all neede modules  make them const vs var
        const express = require('express');
        const path = require('path');
         const bodyParser = require('body-Parser');
         const mongoose = require('mongoose');
         const cors = require('cors');

         //initialize app variable
        const app = express ();

        //Cors Middleware (used for client & server to communicate)
        app.use(cors());

        //BodyParser Middleware (allow ability to parse body/content)
        app.use(bodyParser.json());

        //Set STATIC folder
        app.use(express.static(path.join(__dirname, 'public')));

         //SERVER SETUP-------------------
        const port = 3034;
         app.listen(port, () =>{
             console.log('Node Running on Port .....'+port);
        });

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
       // NewGame  = require('./models/newgame');


        //--suggest correct route path
         app.get('/', function(req, res){
             res.send('Please use /api/picMode/newgame');
         });
         //FINIT - clear board, show stats, then exit
         app.get('/api/finitMode',
                 function(req, res){
                     People.clearMatches(function(err, newgame){   if (err){  throw err;  }      });

                 });

         //PICmode NEWGAME---clear board & get set of 5 headshots of current employees
           app.get('/api/picMode/newgame',
                   function(req, res,next){
                       People.clearMatches(function(err, newgame){   if (err){  throw err;  }      });
                       next();
                   },
                   function(req, res){
                       People.getFive(function(err, newgame){   if (err){  throw err;  }   res.json(newgame);    });
                   }
            );
            //---newgame----------------------------------------------------




//---ROUTES-------------------------------------------------------------------
            //TEAM MODE - NEWGAME---clear board & get set of 5 headshots of  current and past employees
              app.get('/api/teamMode/newgame',
                      function(req, res,next){
                          People.clearMatches(function(err, newgame){   if (err){  throw err;  }      });
                          next();
                      },
                      function(req, res){
                          People.getFiveTM(function(err, newgame){   if (err){  throw err;  }   res.json(newgame);    });
                      }
               );
               //---TM-newgame----------------------------------------------------

               //NAME MODE---NEWGAME---clear board & get set of 5 names of current employees
                 app.get('/api/nameMode/newgame',
                         function(req, res,next){
                             People.clearMatches(function(err, newgame){   if (err){  throw err;  }      });
                             next();
                         },
                         function(req, res){
                             People.getFive(function(err, newgame){   if (err){  throw err;  }   res.json(newgame);    });
                         }
                  );
                  //---RM-newgame----------------------------------------------------
//table-striped

// app.post('/api/picMode/match/*' , function(req , res){
//     if (err){        throw err;      }
//     console.log('you are sending a post');
//
// });
//-----test
           // PICTURE MODE - MATCH---check for a match between chosen photo  and name displayed
           app.post('/api/picMode/match', function(req, res){
               console.log("--Making a match?.  i got these params: headshot: "+ req.body.headshot.id+" and id: "+req.body.id);
               People.checkMatch(req.body.headshot.id,  req.body.id, function(err, checkmatch){
                   if (err){        throw err;      }
                   res.json(checkmatch);
                   console.log(checkmatch);
               });
           });
           //---match--------------------------------------------------


           //TEAM-MODE---MATCH---check for a match between chosen photo  and name displayed
           app.post('/api/teamMode/match', function(req, res){

               People.checkMatch(req.body.headshot.id,  req.body.id, function(err, checkmatch){
                   if (err){        throw err;      }
                   res.json(checkmatch);
                   console.log(checkmatch);
               });
           });
           //---TM-match--------------------------------------------------

           //NAME-MODE---MATCH---check for a match between chosen photo  and name displayed
           app.post('/api/nameMode/match', function(req, res){
               People.checkMatchRM(req.body.headshot.id,  req.body.id, function(err, checkmatch){
                   if (err){        throw err;      }
                   res.json(checkmatch);
               });
           });
           //---RM-match--------------------------------------------------


        //Pic Mode PLAY AGAIN------get set of 5 random headshots that havent already been matched
        app.get('/api/picMode/playagain',
                function(req, res){
                    People.getFive(function(err, newgame){   if (err){  throw err;  }   res.json(newgame);    });
                });
         //---play_again----------------------------------------------------

         //TEAM-MODE---PLAY AGAIN------get set of 5 random headshots that havent alrady been matched
         app.get('/api/teamMode/playagain',
                 function(req, res){
                     People.getFiveTM(function(err, newgame){   if (err){  throw err;  }   res.json(newgame);    });
                 });
          //---TM-play_again----------------------------------------------------


          //NAME MODE---PLAY AGAIN------get set of 5 random headshots that havent already been matched
          app.get('/api/nameMode/playagain',
                  function(req, res){
                      People.getFive(function(err, newgame){   if (err){  throw err;  }   res.json(newgame);    });
                  });
           //---RM-play_again----------------------------------------------------

           //AVERAGE ATTEMPT----------display average attempt persistent
           app.get('/api/avgattempt', function(req, res){
               People.getAvgAttempt(function(err, people){
                   if (err){
                       throw err;
                   }
                   res.json(people);
               });
           });

           //PEOPLE---get list of people in db
         app.get('/api/people', function(req, res){
             People.getPeople(function(err, people){
                 if (err){
                     throw err;
                 }
                 res.json(people);
             });
         });

         //PEOPLE BY ID---
         app.get('/api/people/:_id', function(req, res){
             People.getPeopleById(req.body._id, function(err, people){
                 if (err){
                     throw err;
                 }
                 res.json(people);
             });
         });
