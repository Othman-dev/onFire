let arg = [];

for(let i = 2; process.argv[i] != undefined; i++ ){

	arg[i-2] = Number(process.argv[i]);

}

function sortNumber(a, b){
	return a- b;
}

arg.sort(sortNumber);

console.log(arg);

