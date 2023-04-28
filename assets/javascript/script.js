// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

bar.addEventListener('click', () => {
    nav.classList.toggle('active');
});

close.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// on scroll remove navbar
window.onscroll = () => {
    nav.classList.remove('active');
}


// IMAGE CLICK SLIDER
const mainImg = document.getElementById('main-img');
var smallImgs = document.getElementsByClassName('small-img');

smallImgs[0].addEventListener('click',()=> {
    mainImg.src = smallImgs[0].src;
});

smallImgs[1].addEventListener('click',()=> {
    mainImg.src = smallImgs[1].src;
});

smallImgs[2].addEventListener('click',()=> {
    mainImg.src = smallImgs[2].src;
});

smallImgs[3].addEventListener('click',()=> {
    mainImg.src = smallImgs[3].src;
});




