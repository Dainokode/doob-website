const reveal = document.querySelector(".reveal");
const heroImg = document.querySelector(".hero-image");
const logo = document.querySelector("#logo");
const servicesText = document.querySelector(".services-text");
const cardsContainer = document.querySelector(".cards-container");
const revealAbout = document.querySelector(".reveal-about");
const aboutImg = document.querySelector(".about-image");

// slide animation
const slideAnimation = () => {
    const slideTimeline = gsap.timeline({ defaults: {ease: "power2.inOut"}});
  
    slideTimeline.fromTo(reveal, 1, {y: "0%"}, {y: "100%"}, "+=0.5");
}

slideAnimation();

// scale animation
const scaleAnimation = () => {
    const scaleTimeline = gsap.timeline({ defaults: {ease: "power2.inOut"}});
  
    scaleTimeline.fromTo(heroImg, 1, {scale: 1.5, opacity: 0}, {scale: 1, opacity: 1}, "+=0.5");
}

scaleAnimation();

gsap.fromTo(logo, 1, {x: "-300%"}, {x: "0"});


window.addEventListener("scroll", () => {
    if(window.scrollY > 600){
        // text
        servicesText.style.opacity = "1";
        servicesText.style.transform = "translateX(0)";
        servicesText.style.transition = "1.5s ease";

        // cards
        cardsContainer.style.opacity = "1";
        cardsContainer.style.transform = "translateX(0)";
        cardsContainer.style.transition = "1.5s ease";
    } else {
        servicesText.style.opacity = "0";
        servicesText.style.transform = "translateX(-250px)";

        cardsContainer.style.opacity = "0";
        cardsContainer.style.transform = "translateX(250px)";
    }
})

window.addEventListener("scroll", () => {
    if(window.scrollY > 1000){
        // text
        revealAbout.style.transform = "translateX(500px)";
        revealAbout.style.transition = "1.5s ease";

        // image
        aboutImg.style.transform = "scale(1)";
        aboutImg.style.transition = "1.5s ease";
        aboutImg.style.opacity = "1";
    } else {
        revealAbout.style.transform = "translateX(0)";
        revealAbout.style.width = "100%";

        aboutImg.style.transform = "scale(0.5)";
        aboutImg.style.opacity = "0";
    }
})