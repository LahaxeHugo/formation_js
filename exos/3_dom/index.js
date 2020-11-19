'use strict';

// # 4_DOM

/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la couleur en textContent, et l'ajouter à l'élément avec l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Au click, chaque div doit logguer sa couleur dans la console
*/

const colors = ['blue', 'red', 'green', 'black', 'grey', 'orange', 'purple'];

const exo1 = document.getElementById('exo1');
colors.forEach( (color) => {
    let el = document.createElement('div');
    el.textContent = color;
    el.style.backgroundColor = color;
    exo1.append(el);

    el.addEventListener('click', function() {
        console.log(this.textContent);
    });
});

// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa hauteur/largeur
    en fonction de la position de la souris à l'écran (event.clientX, event.clientY)
*/
const exo2 = document.createElement('section');
exo2.id = 'exo2';
exo2.style.width = '250px';
exo2.style.height = '250px';
exo2.style.border = '1px solid red';
exo2.style.display = 'block';
exo2.style.padding = '0';
exo1.after(exo2);

let div2 = document.createElement('div');
div2.style.backgroundColor = 'black';
exo2.append(div2);

exo2.addEventListener('mousemove', function(e) {
    if(e.clientX < 250)
        div2.style.width = e.clientX +'px';
    if(e.clientY < 250)
        div2.style.height = e.clientY+'px';
});

// -------------------------------

/* Exercice 3: Harry & friends
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Créer une <div> pour Harry, avec le nom en textContent, et l'ajouter à la 3e section
    - Ajouter un listener qui, au click, choisit un nom au hasard
    puis remplace la <div> cliquée par une nouvelle <div>, avec le nouveau nom
*/

const names = ['Harry', 'Hermione', 'Ron', 'Sirius', 'Hagrid', 'Albus'];

const exo3 = document.createElement('section');
exo3.id = 'exo3';
exo2.after(exo3);

let div3 = document.createElement('div');
div3.textContent = names[0];
exo3.append(div3);

exo3.addEventListener('click', function() {
    let rand = Math.floor(Math.random()*names.length);
    div3.textContent = names[rand];
});


// -------------------------------

/* Exercice 4: Tracking de la souris
    - Créer une <section> avec l'id 'exo4', et l'ajouter au body
    - Créer un <button>, lui donner le contenu "Track", et l'ajouter à la 4e section
    - Lui ajouter un listener qui active/désactive le tracking
    de la position de la souris dans la fenêtre (event.clientX, event.clientY)
*/

const exo4 = document.createElement('section');
exo4.style.display = 'block';
exo4.id = 'exo4';
exo3.after(exo4);

let button4 = document.createElement('button');
button4.textContent = 'Track';
exo4.append(button4);

let exo4X = document.createElement('div');
exo4X.innerHTML = '0';
let exo4Y = document.createElement('div');
exo4Y.innerHTML = '0';
exo4.append(exo4X);
exo4.append(exo4Y);

let exo4Toggle = false;
button4.addEventListener('click', function() {
    exo4Toggle = !exo4Toggle;
    if(exo4Toggle) {
        document.addEventListener('mousemove', exo4Move);
    } else {
        document.removeEventListener('mousemove', exo4Move);
    }
});

function exo4Move(e) {
    exo4X.innerHTML = e.clientX;
    exo4Y.innerHTML = e.clientY;
}


// -------------------------------

/* Exercice Bonus: Click and drag
    - Créer une <section> avec l'id 'exo5', et l'ajouter au body
    - Créer une <div>, lui donner le contenu "Drag me", et l'ajouter à la 5e section
    - Faire en sorte de pouvoir déplacer cette <div> lorsque l'on clique dessus:
      * quand on clique dessus en laissant enfoncé, la <div> se déplace en fonction des déplacements de la souris
      * lorsqu'on relâche, la <div> ne se déplace plus
*/

const exo5 = document.createElement('section');
exo5.id = 'exo5';
exo4.after(exo5);

let div5 = document.createElement('div');
div5.textContent = 'Drag me';
div5.style.backgroundColor = 'darkgrey';
div5.style.border = '1px solid black';
div5.style.padding = '10px';
div5.style.cursor = 'grab';
exo5.append(div5);

let exo5Toggle = false;
exo5.addEventListener('mousedown', function() {
    document.addEventListener('mousemove', exo5move);
});
document.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', exo5move);
});

function exo5move(e) {
    e.preventDefault();
    div5.style.position = 'absolute';
    div5.style.top = (e.pageY-div5.offsetHeight/2)+'px';
    div5.style.left = (e.pageX-div5.offsetWidth/2)+'px';
}