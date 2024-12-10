let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () => {
   navbar.classList.add('active');
};

closeBtn.onclick = () => {
    navbar.classList.remove('active');
};

window.onscroll = () => {
   navbar.classList.remove('active');
};

// Function for Call Us button
function callUs() {
   // Redirect to WhatsApp with the specified link
   window.location.href = 'https://api.whatsapp.com/send?phone=%2B61403233738&context=ARAB-P5S7s0-4ajwGPBTdt03h5xRlBe8upx73tgdKzVP_lnEdtbfBqB3I6CJ5e3cAEpjrd04-k_Z6_OHQwCGk0QcIv-B60G-qwcd6N_f03dg-WiADCp534uq-kfLxPeK1uC1nYUOCHCA1pgj9ziozMY&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawHD5MhleHRuA2FlbQIxMAABHXfeRNSn4mJ-K0IWzmhSPkGscgawame0kYbwaXZNsrw4IJ4nKDPLRCWhBw_aem_sHVs_Xl7zRZjgTFl_G5M9Q';
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
        console.error('Error:', error); // Log the error to the console
        result.innerHTML = "Something went wrong!"; // General error message
    })
    .then(function() {
        form.reset(); // Reset the form after submission
    });
});
