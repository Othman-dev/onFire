let arg = process.argv[2];

if (arg > 50) {

        arg = 50;
        console.log("Sorry but the number was too high to be displayed correctly, we reduced it to 50");

}


console.log ("let's make stairs of " + arg + " steps then!");
let steps = '' ; 

for (let i = 1; i < arg; i++) {

	steps += ' ';
}

steps += '#';
console.log(steps);

for (let i = 1; i < arg; i++) {

	steps = steps.slice(1);
	steps += '#'
 	console.log(steps);

}

