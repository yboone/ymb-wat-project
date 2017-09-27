var mongoose = require('mongoose');
var random = require('mongoose-random');

//Schema for the app
// var s = new Schema({
//   message: String
// });
// s.plugin(random);



var peopleSchema =  mongoose.Schema({
    firstName:{
        type: String,
        required: false
    },
    lastName:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

//People.plugin(random);
peopleSchema.plugin(random, { path: 'r' });
 // by default `path` is `random`. It's used internally to store a random value on each doc.

//makes this People model accessible from anywhere else.
//Test = mongoose.model('Test', s);
var People = module.exports = mongoose.model('People', peopleSchema);


//get 5  People
module.exports.getFive = function(people){

        var    limitrecords=5;

       function getRandomArbitrary(min, max) {
           return Math.ceil(Math.random() * (max - min) + min);
       }


       var count = People.find({jobTitle: {$exists : true}}).count({}, function(err, count) {
           if (err){
                throw err;
        }//console.log('count: ');   console.log(count);
               People.find({jobTitle: {$exists : true}}, 'headshot.url id').skip( getRandomArbitrary(1, count-limitrecords) ).limit(limitrecords).exec(people); // Random Offset
        });
}

//get People
module.exports.getPeople = function(callback, limit){
    People.find(callback).limit(limit);
}

//get one person
module.exports.getPeopleById = function(id,callback){
    	People.findById(id, callback);
}
