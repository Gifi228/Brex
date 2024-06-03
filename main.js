document.addEventListener("DOMContentLoaded", (load) => {
    try {
        let swiper = new Swiper('.mySwiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: ".swipper-button-next",
                prevEl: ".swipper-button-prev",
            },
            pagination: {
                el: '.swiper-pagination',
            },
            // mousewhell: true,
            // keyboard: true
        });
    } catch (error) { console.warn(error); }
});