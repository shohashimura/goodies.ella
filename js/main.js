'use strict';

{

// loading

window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  const loadingBackground = document.getElementById('loading-background');
  loadingBackground.classList.add('loading-background-end');
}
// setInterval(opening, 3000);


// header


const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  overlay.classList.add('show');
  open.classList.add('hide');
})

close.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
})


// mainslide


const images = [
  'img/cafe2.jpg',
  'img/cafe3.jpg',
  'img/cafe4.jpg',
];

let currentIndex = 0;

function slideshow_timer(){
  if (currentIndex === images.length - 1){
    currentIndex = 0;
  } 
  else {
    currentIndex ++;
  }
  document.getElementById("mainslide").src = images[currentIndex];
}

setInterval(slideshow_timer, 3000);


// makeMenus

const menus = [
  "Top",
  "Cafe",
  "Menu",
  "Bike",
  "Contact",
];
  
function makeList(n, b){
  n.forEach (menu => {
    const ul = document.getElementById(b);
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.appendChild(a);
    a.appendChild(document.createTextNode(menu));
    ul.appendChild(li);
  }
  );
}

makeList(menus, "pc-ul");
makeList(menus, "sp-ul");
makeList(menus, "footer-ul");


}
