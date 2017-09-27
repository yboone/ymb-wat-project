// var mongoose = require('mongoose');
// //Schema for the app
// var peopleSchema = mongoose.Schema({
//     firstName:{
//         type: String,
//         required: true
//     },
//     lastName:{
//         type: String,
//         required: true
//     },
//     create_date:{
//         type: Date,
//         default: Date.now
//     }
// });
// //
// //makes this  model accessible from anywhere else.
// var newGame = module.exports = mongoose.model('People', peopleSchema);
//
// //get People
// module.exports.getFive = function(callback, limit){
//     NewGame.find(callback).limit(5);
// }
//
// // //get People
// // module.exports.getPeople = function(callback, limit){
// //     People.find(callback).limit(5);
// // }
//
// // //get one person
// // module.exports.getPeopleById = function(id,callback){
// //     	People.findById(id, callback);
// // }
