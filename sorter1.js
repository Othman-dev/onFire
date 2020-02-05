let arg = [];

for(let i = 2; process.argv[i] != undefined; i++ ){

	arg[i-2] = Number(process.argv[i]);

}

console.log(arg);

for(i = arg.length-1; i > 0; i--){
	for(j = 0; j < arg.length-1; j++){
		if(arg[j]>arg[j+1]){
			let a = arg[j+1];
			arg[j+1] = arg[j];
			arg[j] = a;
		}
	}
}

console.log(arg);

