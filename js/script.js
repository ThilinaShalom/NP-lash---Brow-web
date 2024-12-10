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
 

    const form = document.getElementById('appointmentForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        result.innerHTML = "Please wait...";

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message; // Success message
            } else {
                result.innerHTML = json.message; // Error message
            }
        })
        .catch(error => {
            result.innerHTML = "Something went wrong!"; // General error message
        })
        .then(function() {
            form.reset(); // Reset the form after submission
        });
    });


