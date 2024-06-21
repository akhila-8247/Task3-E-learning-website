let navbar = document.querySelector(' .header .navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

let loginForm =document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');

}
window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.toggle('active');
}


// Initializing Swiper
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        // When window width is >= 0px
        0: {
            slidesPerView: 1,
        },
        // When window width is >= 768px
        768: {
            slidesPerView: 2,
        },
        // When window width is >= 992px
        991: {
            slidesPerView: 3,
        },
    },
});

