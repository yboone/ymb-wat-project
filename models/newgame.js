// var mongoose = require('mongoose');
// var random = require('mongoose-random');
//
//
// //get 5  People
// module.exports.getFive = function(people){
//
//         var    limitrecords=5;
//
//        function getRandomArbitrary(min, max) {
//            return Math.ceil(Math.random() * (max - min) + min);
//        }
//
//
//        var count = People.find({jobTitle: {$exists : true}}).count({}, function(err, count) {
//            if (err){
//                 throw err;
//         }//console.log('count: ');   console.log(count);
//                People.find({jobTitle: {$exists : true}}, 'headshot.url id firstName lastName').skip( getRandomArbitrary(1, count-limitrecords) ).limit(limitrecords).exec(people); // Random Offset
//         });
// }
