//création des variables, d'une matrice à partir du txt et d'un tableau de comparaisons

var fs = require('fs')
var txt = process.argv[2];
var txtNumber = fs.readFileSync(txt, 'utf8').split('+').join('').split('-').join('').split('|').join('').split('\n').join('').split(',,').join().split('');
var matrice = [];
var missing = [];
var tabFull ;
var tabResult;

//matrice principale
var temp = [];

for(i = 0; i < txtNumber.length; i++){
	
	if(i % 9 == 0 && i !=0 ){
		matrice.push(temp);
		temp = [];

	};
	if(txtNumber[i] == '_'){
		temp.push('0');

	};
	if(Number(txtNumber[i]) < 10){
		temp.push(txtNumber[i]);

	};
	if(i == 80){
		matrice.push(temp);
	};
};

//Fonctions

//vérifie les cases vides.

function emptyCase(){

	missing = [];

	for(y = 0; y < 9; y++){
		for(x = 0; x < 9; x++){
			if(matrice[y][x] == '0'){
				missing.push(y + ',' + x);
			};
		};
	};
	isTabFull();
};

function isTabFull(){
	
	if(missing.length == 0){

		tabFull = true;
	
	};
	if(missing.length > 0){

		tabFull = false;

	};
};

//remplacement des chiffres à une seule possibilité.

function fillTab(){

	for(i = 0; i < missing.length; i++){	
		var solution = [];
		var tempRow = [];
		for(y = 0; y < 9; y++){
			tempRow.push(matrice[y][missing[i].slice(2)])
		};
		for(j = 0; j <	10; j++){	
			if(matrice[missing[i].slice(0,1)].indexOf(j.toString()) == -1 && tempRow.indexOf(j.toString())== -1){
				solution.push(j)
			};
		};
		if(solution.length == 1){
			matrice[missing[i].slice(0,1)][missing[i].slice(2)] = solution[0].toString();
		};
	};
};

//creation du txt avec les resultat

function createTab(){
	
	for(y = 0; y < 9; y++){
		
		matrice[y][2] += '|';
		matrice[y][5] += '|';
		matrice[y][8] += '\n';
		
		if(y == 2 || y == 5){
			matrice[y][8] += '---+---+---\n';
		
		};
	};

	tabResult = matrice.join('').split(',').join('');
	fs.writeFileSync('sudoku_result.txt',tabResult);
	return tabResult;
};

//main program

emptyCase();
while(tabFull != true){
	fillTab();
	emptyCase();
}
createTab();
console.log(tabResult);
