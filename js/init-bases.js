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
cours[6] = [1, 45, 789, -123, 46.125];
cours.push('2022-11-14T09:30:00'); // Ajout en fin de tableau
cours[100] = 'Aujourd\'hui, il fait beau !';
console.log(cours);

/**
 * Objets globaux : String, Date, Number, Boolean, etc.
 */

// String
var man = 'Claude'; // = Assignation
var woman = new String('Claude'); // Comme en langage objet
console.log(man == woman); // == Comparaison
console.log(man === woman); // === Comparaison stricte (valeur et type)
console.log(typeof man);
console.log(typeof woman);

// Boolean
var b1 = false;
var b2 = new Boolean(false);
var b3 = ''; // false
var b4 = 0; // false
var b5 = null; // false
var b6 = 'Jeff'; // true

// Math (non instanciable)
console.log(Math.PI);
console.log(Math.PI.toFixed(2)); // 2 décimales sous forme de String 
console.log(Math.round(Math.PI)); // Arrondit à l'entier le plus proche
console.log(Math.random());
console.log(Math.max(12, 100, -15, 0.258));
console.log(Math.min.apply(null, [12, 100, -15, 0.258]));
console.log(Math.min.apply(null, cours)); // Si tableau contient uniquement des nombres

// Date : timestamp (01/01/1970)
console.log(new Date());
console.log(new Date(-123456789)); // Avant le 01/01/1970
console.log(new Date(123456789));
console.log(new Date(1998, 6, 12, 22, 45, 01)); // 0=Jan - 1=Fév ... 11=Déc
console.log(new Date('7/2/2000 22:45:02'));
console.log(new Date('July 15, 2018 17:45:03 GMT-0400'));
console.log(new Date('2022-12-18T17:45:04')); // Format universel ISO

/**
 * Structures de contrôle : if, switch et ternaire
 */

var trainees = Math.ceil(Math.random() * 10); // Nb aléatoire entre 1 et 10
console.log(trainees);

// If
if (trainees < 4) {
    console.log('Il reste beaucoup de places');
} else if (trainees < 8) {
    console.log('Il reste encore quelques places');
} else if (trainees < 10) {
    console.log('Il ne reste plus beaucoup de places');
} else {
    console.log('Plus de place');
}

// Opérateur ternaire
// expr ? true : false
console.log('Il y a ' + trainees + ' stagiaire' + (trainees > 1 ? 's' : ''));

// switch
switch (trainees) {
    case 1:
    case 2:
    case 3:
        console.info('Il reste beaucoup de places');
        break;
    case 4:
    case 5:
    case 6:
    case 7:
        console.info('Il reste encore quelques places');
        break;
    case 8:
    case 9:
        console.warn('Il ne reste plus beaucoup de places');
        break;
    default:
        console.error('Plus de place');
}

// switch optimisée
switch (true) {
    case (trainees < 4):
        console.info('Il reste beaucoup de places');
        break;
    case (trainees < 8):
        console.info('Il reste encore quelques places');
        break;
    case (trainees < 10):
        console.warn('Il ne reste plus beaucoup de places');
        break;
    default:
        console.error('Plus de place');
}

/**
 * Structures itératives ou boucles
 */

// while
console.log('WHILE');
var cpt = 0;
while (cpt < cours.length) {
    if (cours[cpt]) {
        console.log(cours[cpt]);
    }
    cpt++;
}

// do...while
console.log('DO...WHILE');
cpt = 0;
do {
    if (cours[cpt]) {
        console.log(cours[cpt]);
    }
    cpt++;
} while (cpt < cours.length)

// for
console.log('FOR');
for (let i = 0; i < cours.length; i++) {
    if (cours[i]) {
        console.log(cours[i]);
    }
}

console.log(i);