// Commentaire sur une ligne
// puis sur une autre ligne

/*
Commentaire
sur
plusieurs
lignes
*/

/**
 * Variables primitives : string, number et boolean
 */
var nb = 7;
var nb = "sept"; // JS faiblement typé !

var distanciel = 4; // Déclaration explicite
var presentiel = 3;

// Exploitation des variables et constantes
var code = 'CE999'; // Type String
var titre = "Langages HTML5, CSS3 et JS";
var duree = 5; // Type Number
var isDev = true; // Type Boolean
const public = 7; // Constante
// public = distanciel + presentiel;
console.log('Hello World!'); // Affiche un message dans la console

/**
 * Opérateurs arithmétiques
 */
console.log(code + ' - ' + titre); // Concaténation

var i = 1, j = '2', k = 'trois';
var result = i + j + k;
console.log(result); // Concaténation

var i = 1, j = 22, k = 333;
var result = i + j + k;
console.log(result); // Addition

var i = 1, j = 2, k = 3, l = 4;
var result = i + j * k / l - 5;
console.log(result); // Priorités PEMDAS

var i = 9, j = 3, k = 2;
var modulo1 = i % j;
var modulo2 = i % k;
console.log(modulo2); // i non divisible par k
console.log(modulo1); // i divisible par j

var i = 0;
console.log(++i); // Pré-incrémentation
console.log(i++); // Post-incrémentation
console.log(i);

/**
 * Typage et transtypage : typeof et cast
 */
var m;
console.log(typeof titre);
console.log(typeof isDev);
console.log(typeof duree);
console.log(typeof (i / k));
console.log(typeof m);
console.log(typeof n);

var i = '3 petits cochons', j = '2.50 nuances de Grey', k = 'R2D2';
var calc = i + j; // Concaténation
var calc = parseInt(i) + parseFloat(j); // Addition
console.log(calc);
var calc = parseInt(i) + parseFloat(j) + parseFloat(k); // NaN
console.log(calc);

/**
 * Ecrire dans le document HTML
 */
document.write('<h1>' + code + ' - ' + titre + '</h1>');
document.write('<p>Durée du stage : ' + duree + ' jours</p>');
document.write('<p>Public : ' + (distanciel + presentiel) + ' personnes');

/**
 * Variables composées : tableau ou array
 */
var cours = ['CE999', 'Développement Front-end', 35, true, 7]; // Indexation à partir de 0
console.log(typeof cours); // Object
console.log(cours[2]); // 3ème valeur du tableau
cours[5] = ['HTML', 'CSS', 'JS'];
cours.push('2022-11-14T09:30:00'); // Ajout en fin de tableau
cours[100] = 'Aujourd\'hui, il fait beau !';
console.log(cours);

/**
 * Objets globaux : String, Date, Number, Boolean, etc.
 */



// Ternaire !