'use strict';

// # 2-1_Syntax

console.log('--- Question 1 ---');
// [1] créer une variable x, et lui assigner un nombre
var x = 3;
console.log('var x = 3');

console.log('--- Question 2 ---');
// [2] logguer cette variable dans la console avec console.log()
console.log(x);

console.log('--- Question 3 ---');
/* [3] créer une fonction x10 qui en entrée prend un nombre et renvoie le nombre multiplié par 10
  puis logguez le résultat de la fonction x10 appliquée sur x.
*/
function time10Func(val) {
  return val*10;
}
console.log(time10Func(x));

console.log('--- Question 4 ---');
/* [4] créer une fonction random qui en entrée prend un nombre et renvoie un nombre entier aléatoire
  entre 0 et ce nombre (ex: si on lui passe 4, on veut récupérer, 0, 1, 2 ou 3, au hasard).
  Logguer le résultat de la fonction random appliquée sur x.
  ( Utiliser Math.random() et Math.floor() )
*/
function randX(val) {
  return Math.floor(Math.random()*(val+1));
}
console.log(randX(x));

console.log('--- Question 5 ---');
/* [5] logguer chacune des valeurs de "nombres" dans la console
en utilisant .forEach()
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887];
nombres.forEach(el => console.log(el));

console.log('--- Question 6 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/
const pairs = nombres.filter(el => el % 2 === 0);
console.log(pairs);

console.log('--- Question 7 ---');
/* [7] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant .filter()
*/
const moreThan100 = nombres.filter(el => el > 100);
console.log(moreThan100);

console.log('--- Question 8 ---');
/* [8] à partir de "nombres", créer un nouveau tableau contenant les valeurs multipliées par 10
  en utilisant .map() et la function x10
*/
const time10 = nombres.map(el => el*10);
console.log(time10);

console.log('--- Question 9 ---');
/* [9] logguer chacune des valeurs de "couleurs" et leur longueur dans la console
en utilisant .forEach()
*/
const couleurs = ['bleu', 'rouge', 'vert', 'jaune', 'orange', 'marron', 'noir'];
couleurs.forEach(el => console.log(el, el.length));

console.log('--- Question 10 ---');
/* [10] à partir de "couleurs", créer un nouveau tableau contenant les longueurs
  en utilisant .map()
*/
const couleursLength = couleurs.map(el => el.length);
console.log(couleursLength);

console.log('--- Question 11 ---');
// [11] créer une fonction "longueur" qui prend en entrée une string et renvoie la longueur de la string
function longueur(str) {
  return str.length;
}

console.log('--- Question 12 ---');
// [12] reprendre le code de la question 10 mais en utilisant la fonction "longueur"
const couleursLength2 = couleurs.map(longueur);
console.log(couleursLength2);

console.log('--- Question 13 ---');
// [13] ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];
personnes.push({nom: 'Paul', date: '2002-01-01'});
personnes.push({nom: 'Germano', date: '1999-11-02'});
console.log(personnes);

console.log('--- Question 14 ---');
// [14] à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()
const personnesNom = personnes.map(el => el.nom);
console.log(personnesNom);

console.log('--- Question 15 ---');
/* [15] créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
 et renvoie l'âge en nombre, en utilisant Date()
*/
function calculerAge(str) {
  // return Date.now() - Date(str);
  console.log(Date.now());
  console.log(Date(str).getTime());
}
console.log(calculerAge('1999-11-02'));

console.log('--- Question 16 ---');
// [16] à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges
