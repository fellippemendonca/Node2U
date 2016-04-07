"use strict";


//DB Params
const mongoConn = require('./mongo');

//Server Params
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


//---------GET 
app.get('/users', function (req, res) {
  mongoConn.findUsers('users', req.query, function(err, result){
    if(err){
      res.status(500).json(err);
    } else {
      res.status(200).json(result); 
    }
  });
});


//---------POST
app.post('/users', function (req, res) {
    mongoConn.insertUser('users', req.body, function(err, result){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(201).json(result);
      }
    });
});


//---------PUT
app.put('/users/:id', function (req, res) {
    mongoConn.updateUser('users', req.params.id, req.body, function(err, result){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(202).json(result);
      }
    });
});

//---------DELETE
app.delete('/users/:id', function (req, res) {
    mongoConn.removeUser('users', req.params.id, function(err, result){
      if(err){
        res.status(500).json(err);
      } else {
        res.status(204).end();
      }
    });
});


mongoConn.connect(function(){
  app.listen(3001, function(){
    console.log("Server started.");
  });
});

