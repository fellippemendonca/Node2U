"use strict";

//DB Params
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017/teste_db';


module.exports.connect = function(callback){
  MongoClient.connect(url, function(err,db){
    if(err){
      console.log(err.message);
      process.exit(1);
    }
    module.exports.db = db;
    callback();
  });
}


//Find
module.exports.findUsers = function(collection, srch, callback) {
  let cursor = module.exports.db.collection(collection).find( srch || {} );
  let queryResult = [];
  cursor.each(function(err, doc) {
      if (doc != null) {
        queryResult.push(doc);
      } else {
        callback(null,queryResult);
      }
    });
};


//Insert
module.exports.insertUser = function(collection, insObj, callback) {
  module.exports.db.collection(collection).insertOne( insObj, function(err, result) {
    if(err){
      callback(err);
    } else {
      callback(null, result)
    }
  });
};


//Update
module.exports.updateUser = function(collection, trgtObj, updField, callback) {
  module.exports.db.collection(collection).updateOne({ _id: ObjectId(trgtObj) }, {$set: updField}, function(err, result) {
    if(err){
      callback(err);
    } else {
      callback(null,result)
    }
  });  
};


//Remove
module.exports.removeUser = function(collection, trgtObj, callback) {
  module.exports.db.collection(collection).deleteMany(
    { _id: ObjectId(trgtObj) },
    function(err, result) {
      if(err){
        callback(err);
      }else{
        callback(null, result);
      }
    }
  );
};


