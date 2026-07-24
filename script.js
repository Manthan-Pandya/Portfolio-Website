// ==============================
// Smooth Scroll for Navigation
// ==============================

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });
});


// ==============================
// Navbar Shadow on Scroll
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.1)";

    }

    else{

        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "none";

    }

});


// ==============================
// Reveal Elements on Scroll
// ==============================

const reveals = document.querySelectorAll(
".hero-text, .hero-image, .about-image, .about-content, .project-card, form, .contact-info"
);

function reveal(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ==============================
// Typing Animation
// ==============================

const text = [
"Frontend Web Developer",
"UI / UX Designer",
"Web Designer",
"Computer Engineering Student"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".hero-text h2").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1500);

    }

    else{

        setTimeout(type,120);

    }

})();


// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};