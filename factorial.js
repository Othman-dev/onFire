let arg = process.argv[2];

let result = 1 ;

for (let i = arg; i > 0; i--){

	result *= i ;

}

console.log(result + ",followed without the scientific notation ")
console.log(result.toLocaleString());

