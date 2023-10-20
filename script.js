let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function() {
    // Your Swiper initialization code here
    var swiper = new Swiper('.home-slider', {
        paginationClickable: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
        rotate:50,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
        slidesPerView: 5,
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
});
});