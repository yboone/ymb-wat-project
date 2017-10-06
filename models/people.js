var mongoose = require('mongoose');
var peopleSchema =  mongoose.Schema();
       peopleSchema.add({ was_matched: 'bool', match_attempts: 'number' });
var People = module.exports = mongoose.model('People', peopleSchema);


module.exports.clearMatches = function(people){
    //reset was_matched and match_attempts for new game
    People.update({type : 'people'},
                {was_matched: false, match_attempts:0} ,
                {multi:true},
                function (err, req, res, people) {
                             if (err) return handleError(err);
                     });
}

//get 5  Headshots :  currently employed------------------------------
module.exports.getFive = function(people){
 console.log("Hello Yvette in Get5"+Date());
        var    limitrecords=5;
          function getRandomArbitrary(min, max) {
              return Math.ceil(Math.random() * (max - min) + min);
          }

       var count = People.find({jobTitle: {$exists : true}}).count({}, function(err, count) {
           if (err){
                throw err;
        }//console.log('count: ');   console.log(count);
               People.find({/*jobTitle: {$exists : true}, */"headshot.url" : {$exists : true, $nin: [""] },
               was_matched: false }, 'id firstName lastName headshot.url headshot.id was_matched jobTitle').skip( getRandomArbitrary(1, count-limitrecords) ).limit(limitrecords).exec(people); // Random Offset
        });
}
//---------------------------------------------------------------------------

//TEAM-MODE: get 5  Headshots :  past & present employees------------------------------
module.exports.getFiveTM = function(people){
        var    limitrecords=5;
          function getRandomArbitrary(min, max) {
              return Math.ceil(Math.random() * (max - min) + min);
          }

       var count = People.find({jobTitle: {$exists : true}}).count({}, function(err, count) {
           if (err){        throw err;      }
               People.find({type: 'people', jobTitle: {$exists : true}, "headshot.url" : {$exists : true, $nin: [""] },
               was_matched: false }, 'id firstName lastName headshot.url headshot.id was_matched jobtitle').skip( getRandomArbitrary(1, count-limitrecords) ).limit(limitrecords).exec(people); // Random Offset
        });
}
//---------------------------------------------------------------------------


//PICTURE & TEAM CHECK MATCH ---------------------------------------------------------------
module.exports.checkMatch = function(picid, nameid, checkmatch){
        People.find({'headshot.id' : picid , id: nameid}).count(function(err,count){
                if (err){    throw err;    }
                console.log('picid: '+picid+' nameid: '+nameid+'     count '+count);

                if (count===1){//found a match    update was_matched to true, return updated collection
                        console.log('found my match...picid= '+picid+' nameid- '+nameid);
                         query= People.findOneAndUpdate({'headshot.id' : picid , id: nameid},
                                                        {was_matched: true} ,   {new:true}                      );
                }else if (count===0){//no match    update match attempts
                        console.log('No match found: updated match_attempts...picid: '+picid+' and nameid: '+nameid);
                     query = People.findOneAndUpdate({id: nameid},    {$inc: {match_attempts: 1}} ,   {new:true}                );
                }
                //People.find({id: nameid}).exec(checkmatch);
                query.exec(checkmatch);
    });
}//---check match------------------------------------------------------------

//name MODE---CHECK MATCH ---------------------------------------------------------------
module.exports.checkMatchRM = function(picid, nameid, checkmatch){
        People.find({'headshot.id' : picid , id: nameid}).count(function(err,count){
            console.log('picid: '+picid+' nameid: '+nameid+'     count '+count);
                if (err){    throw err;    }
                console.log('nameid: '+nameid+'     count '+count);

                if (count===1){//found a match    update db with match info
                        console.log('found my match');
                        query = People.findOneAndUpdate({'headshot.id' : picid , id: nameid},  {was_matched: true} ,   {new:true});


                }else if (count===0){//no match    update match attempts
                        console.log('No match found: updated match_attempts');
                        query = People.findOneAndUpdate({'headshot.id' : picid}, {$inc: {match_attempts: 1}} ,   {new:true});

                }
                //People.find({'headshot.id' : picid}).exec(checkmatch);
                query.exec(checkmatch);
    });
}//---RM-check match------------------------------------------------------------

//get Average Attempt
module.exports.getAvgAttempt = function(people){
    People.find({type:'people', match_attempts:{$gt:0}}, 'firstName lastName was_matched match_attempts').exec(people);


    // People.aggregate({
    // 	// $match: { instance_id: { $gte: 21 }}
    // 	$match : {
    // 		type : 'people',
    // 		match_attempts : {$gt : 0}
    // 	}
    // }).group({
    // 	type : 'people',
    // 	markAvg : {
    // 		$avg : '$average'
    // 	}
    // }).exec(function(err, res) {
    // 	if (err) {
    // 		console.log(err);
    // 	} else {
    // 		console.log(res);
    // 	}
    // });

}


//get People
module.exports.getPeople = function(callback){
    People.find(callback);
}

//get one person
module.exports.getPeopleById = function(id,callback){
    	People.findById(id, callback);
}
