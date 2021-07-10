import  'jquery';
import Typed from 'typed.js'

document.addEventListener("DOMContentLoaded", () => {
//     const hamburger = document.getElementById('hamburger-button');
// const menu = document.getElementById('menu');
const subname = document.getElementById('subname');


// hamburger.addEventListener('click', event => {
//     menu.style('top', '-345px');
//     console.log('click');
// })

$('#hamburger-button').click(function() {
    $('#menu').toggleClass('drop')
})

$('#menu').click(function() {
    $('#menu').toggleClass('drop')
})


let typed = new Typed('#subname', {
    strings: ['^1000 JavaScript coder', 'React coder', 'Front-end developer'] ,
  smartBackspace: true,
    typeSpeed: 70
  });

  });