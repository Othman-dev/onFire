var fs = require('fs');
var mot = process.argv[2];
var txt = process.argv[3];
var dico = fs.readFileSync(txt, "utf8").split('\n');

var motTest = mot.split('').sort().join('');
var dicoTest = [];
var result = [];

for(i = 0; dico[i].length > 2; i++){

	dicoTest[i] = dico[i].split('').sort().join('');

	if(motTest == dicoTest[i]){
	
		result.push(dico[i]); 

	};
};

console.log(result); 
