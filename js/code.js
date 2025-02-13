function scrollChromeTopBar() {
    if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const innerHeight = window.innerHeight;

        // Calculate the height of the top bar
        const chromeTopBarHeight = innerHeight - viewportHeight;

        if (chromeTopBarHeight > 0) {
            window.scrollBy(0, chromeTopBarHeight);
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(scrollChromeTopBar, 100);

    document.querySelectorAll(".mode-switcher").forEach((svg) => {
        svg.addEventListener("click", (event) => {
            svg.classList.toggle('activated');

            document.querySelectorAll("a svg").forEach((link) => {
                link.classList.toggle("dark");
            });

            document.querySelectorAll(".sidebar").forEach((sidebar) => {
                sidebar.classList.toggle("bg-[#8643de]");
                sidebar.classList.toggle("bg-[orange]");
            });

            document.querySelectorAll("body").forEach((body) => {
                body.classList.toggle("bg-black");
                body.classList.toggle("[&_p]:text-white");
                body.classList.toggle("[&_h2]:text-white");
                body.classList.toggle("[&_h3]:text-white");
                body.classList.toggle("[&_a]:text-[rgb(255_165_0)]");
                body.classList.toggle("[&_span.scroll-button]:text-[rgb(255_165_0)]");
                body.classList.toggle("[&_h1]:text-[rgb(255_165_0)]");
                body.classList.toggle("[&_a]:text-[#8643de]");
                body.classList.toggle("[&_span.scroll-button]:text-[#8643de]");
                body.classList.toggle("[&_h1]:text-[#8643de]");
            });

            document.querySelectorAll(".img-wrapper div").forEach((filter) => {
                filter.classList.toggle("from-[#8643de70]");
                filter.classList.toggle("to-[#d0abff70]");
                filter.classList.toggle("from-[#faa111]");
                filter.classList.toggle("to-[#faa11157]");
            });

            document.querySelectorAll(".scroll-icon path").forEach((arrow) => {
                arrow.classList.toggle("stroke-[rgb(255_165_0)]");
            });

            document.querySelectorAll(".splide button").forEach((button) => {
                button.classList.toggle("dark");
            });

            document.querySelectorAll(".splide__slide").forEach((slide) => {
                slide.classList.toggle("dark");
            });
        });
    });

    document.querySelectorAll(".scroll-button, .scroll-icon").forEach((btn) => {
        btn.addEventListener("click", () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        });
    });

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    const splide = new Splide('.splide', {
        type: 'slide',
        rewind: true,
        speed: 800,
        gap: '-2rem',
        padding: '2rem',
        arrows: false,
        pagination: true,
        perPage: 1,
        perMove: 1,
        autoplay: false,
        waitForTransition: true,
        updateOnMove: true,
        fixedHeight: '100%',
        breakpoints: {
            1024: {
                fixedHeight: 'fit-content',
                pagination: false,
                padding: '1rem',
            }
        },
    });

    // Add custom classes for stacking effect
    splide.on('moved', function () {
        const slides = document.querySelectorAll('.splide__slide');
        slides.forEach((slide, index) => {
            slide.classList.remove('is-next');

            if (slide.classList.contains('is-active')) {
                const nextSlide = slides[index + 1] || slides[0];
                if (nextSlide) {
                    nextSlide.classList.add('is-next');
                }
            }
        });
    });

    splide.mount();


});