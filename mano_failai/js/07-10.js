// Generuojamas atsitiktinis skaicius nuo 0 iki 1 neimtinai
let atsitiktinisSkaicius = Math.random();

// atsitiktinis skaicius dauginamas iš 10
atsitiktinisSkaicius *= 10;

// Suapvalinsiu atsitiktini skaiciu iki sveiko skaiciaus
atsitiktinisSkaicius = Math.floor(atsitiktinisSkaicius);


console.log(atsitiktinisSkaicius);

let atsitiktinisSkaicius = Math.random() *10;   //generuojamas atsitiktinis kaicius nuo 0 iki 10 atsitiktinai (* 10)
console.log(atsitiktinisSkaicius);






//----------------------------ANDRIAUS KODO GABALAS-----------------------------------------
//let atsitiktinisSkaicius = Math.random();
//
//atsitiktinisSkaicius *= 10;
//if (atsitiktinisSkaicius < 1) {atsitiktinisSkaicius = 1}
//if (atsitiktinisSkaicius > 10) {atsitiktinisSkaicius = 10}
//
//atsitiktinisSkaiciusF = Math.floor(atsitiktinisSkaicius);
//atsitiktinisSkaiciusC = Math.ceil(atsitiktinisSkaicius);
//atsitiktinisSkaiciusR = Math.round(atsitiktinisSkaicius);
//atsitiktinisSkaiciusT = Math.trunc(atsitiktinisSkaicius);
//
//console.log('Floor: ' + atsitiktinisSkaiciusF);
//console.log('Ceil: ' + atsitiktinisSkaiciusC);
//console.log('Round: ' + atsitiktinisSkaiciusR);
//console.log('Trunc: ' + atsitiktinisSkaiciusT);