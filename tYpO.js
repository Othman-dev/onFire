let arg = process.argv[2]

let min = arg.toLowerCase();
let maj = arg.toUpperCase();

let result = '';

for(let i = 0; i <= (arg.length - 1) ; i++){

	if(i % 2 === 0){

		result += min.slice(i,(i+1));

		}
	
	else{
		result += maj.slice(i,(i+1));
	}

}

console.log(result);


