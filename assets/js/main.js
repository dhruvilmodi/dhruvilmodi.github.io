let logo = document.querySelector("#logo");
let welcomeText = document.querySelector("#welcomeText");
let welcomeSubText = document.querySelector("#welcomeSubText");

function welcomeanimation() {
    // logo
    gsap.to(logo, {
        opacity: 1,
        ease: "power2.inOut"
    });
    // blinking animation
    gsap.fromTo(welcomeText, {
        opacity: 0,
    },{
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.5
    });
    // subtext
    gsap.to(welcomeSubText, {
        opacity: 1,
        ease: "power2.inOut",
        delay: 1
    });
}

$(document).ready(function(){
    welcomeanimation();
});