// =========================
// MOBILE MENU
// =========================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


// =========================
// CLOSE MENU AFTER CLICKING
// =========================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// =========================
// HEADER EFFECT ON SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(11, 17, 32, 0.98)";

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.background =
            "rgba(11, 17, 32, 0.95)";

        header.style.boxShadow = "none";

    }

});