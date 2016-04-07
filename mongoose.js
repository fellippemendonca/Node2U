"use strict";

const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/teste_db', function(err){
  if(err){
    console.log(err.message);
  } else {
     user.find({}, function (err, docs) {
        console.log(docs);
        mongoose.disconnect();
    });
  }
});

let Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    name:String,
    gender:String
  }
);


let user = mongoose.model('Users',UserSchema);



