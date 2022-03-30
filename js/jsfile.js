console.log('This JS File is an intro to JavaScript building.');

// car object with properties
var car = [];
car.push('maker','yrmodel','model');
car.maker = 'audi';
car.model = 'R8 v10';
car.yrmodel = 1972;
console.log('\n'+'car : '+car.maker+' '+car.model+' '+car.yrmodel+' model.');

// array loop push
var arrloop = [];
function looper(str,num) {
	var ctr=0;
	for(i=num;i>0;i--){
		ctr=ctr+1;
		arrloop.push(str+ctr);
		console.log(arrloop);
	}
};
looper('count',3);