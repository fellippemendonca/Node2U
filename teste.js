"use strict";

let time1 = 1;
let time2 = 2;
let time3 = 3;


function wait(name,sec, callback){
	setTimeout(function(){ console.log(name); if(typeof callback === 'function'){callback();} }, sec*100);
}

function doingFirst(){
	wait("doingFirst",time3, function doingSecond(){
		wait("doingSecond",time1, function doingThird(){
			wait("doingThird",time2);
		});
	});
}



function userException(message){
	this.message = message;
	this.name = 'userException';
}

userException.prototype.toString = function(){
	return this.name+': "'+ this.message+'"';
}



function fatorialCalculator(num){
	if(num > 10){
		throw new userException('number value too high!');
	}
	else if(num===1) {
		
		return 1;
	} else {
		return num*fatorialCalculator(num-1);
	}
}

try{
	let number = 10;
	console.log('fatorial calculation of '+number+' is '+fatorialCalculator(number));
}
catch(e){
	console.log(e);
}









//--------------------------------------------PROMISE------------------------------------------------------

let promise1 = new Promise(function(resolve, reject){
	doingFirst();
	resolve(1);
});


promise1.then(function(n){
	console.log(n);
});




