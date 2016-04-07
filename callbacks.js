"use strict";


function connect(url, callback){
  // conecta no banco
  setTimeout(function() {
    let db = { url: url };
    try {
      if(Math.random() < 0.5) {
        throw new Error('fodeu');
      }
      callback(null, db);
    } catch(e) {
      callback(e);
    }
  }, 1000);
}

const url = 'mongodb://localhost:27017/teste_db';

connect(url, function(err, db) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(db);
})

