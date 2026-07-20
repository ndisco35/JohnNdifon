/*=========================================
    PORTFOLIO MAIN JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        PRELOADER
    =========================================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 600);
    });


    /*=========================================
        MOBILE MENU
    =========================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });


    /*=========================================
        CLOSE MENU WHEN LINK IS CLICKED
    =========================================*/

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        });

    });


    /*=========================================
        SCROLL PROGRESS BAR
    =========================================*/

    const progressBar = document.querySelector(".progress-bar");

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / docHeight) * 100;

        progressBar.style.width = progress + "%";

    });


    /*=========================================
        NAVBAR ON SCROLL
    =========================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(8,16,29,.92)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

        } else {

            navbar.style.background = "rgba(15,23,42,.65)";
            navbar.style.boxShadow = "none";

        }

    });


    /*=========================================
        COUNTER ANIMATION
    =========================================*/

    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 80;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    };


    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.5

    });


    counters.forEach(counter => {

        observer.observe(counter);

    });


    /*=========================================
        CURSOR GLOW
    =========================================*/

    const glow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });


    /*=========================================
        FADE-IN ON SCROLL
    =========================================*/

    const revealItems = document.querySelectorAll(

        ".stat-card, .service-card, .project-row, .timeline-item, .testimonial-card, .about-container"

    );

    revealItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        item.style.transition = "all .7s ease";

    });

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    revealItems.forEach(item => {

        revealObserver.observe(item);

    });


    /*=========================================
        ACTIVE NAV LINK
    =========================================*/

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    /*=========================================
        CURRENT YEAR
    =========================================*/

    const year = document.querySelector(".current-year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});
