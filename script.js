document.addEventListener('DOMContentLoaded', function() {
    const burguer = document.querySelector('.burguer-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burguer && navLinks) {
        burguer.addEventListener('click', () => {
            burguer.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 600,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    swiper.on('slideChange', function() {
        const previousSlide = swiper.slides[swiper.previousIndex];
        if (previousSlide) {
            const previousVideo = previousSlide.querySelector("video");
            if (previousVideo) {
                previousVideo.pause();
            }
        }

        const currentSlide = swiper.slides[swiper.realIndex];
        const currentVideo = currentSlide.querySelector("video");
        if (currentVideo) {
            currentVideo.play().catch(error => {
                console.log("Autoplay do vídeo falhou. O usuário pode precisar interagir.");
            });
        }
    });
});