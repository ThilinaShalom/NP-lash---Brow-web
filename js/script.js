let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () =>{
   navbar.classList.add('active');
};

closeBtn.onclick = () =>{
    navbar.classList.remove('active');
 };

window.onscroll = () =>{
   navbar.classList.remove('active');
};

// Function for Call Us button
function callUs() {
   // Replace with your phone number
   window.location.href = 'tel:+61403233738';
 }
 
 // Function for Book Online button
 function bookOnline() {
   // Replace with the URL of your booking page
   window.open('https://www.fresha.com/book-now/np-lash-and-brow-beauty-qr2o1eel/services?lid=1195645&eid=2802865&pId=1134435', '_blank');
 }
 
