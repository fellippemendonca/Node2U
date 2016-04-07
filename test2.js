"use strict";

function wait(err){
	setTimeout(function(){ throw err;}, 1000);
}

try{
	wait(new Error());
}catch(e){
	console.log(e);
}


console.log('qualquer coisa');
