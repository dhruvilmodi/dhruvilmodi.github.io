let logo = document.querySelector("#logo");
let welcomeText = document.querySelector("#welcomeText");
let welcomeSubText = document.querySelector("#welcomeSubText");
let nav = document.querySelector("nav");

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
    gsap.fromTo(welcomeSubText, {
        opacity: 0,
        ease: "power2.inOut",
    },{
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
        delay: 1,
        repeat: -1,
        yoyo: true
    });
}

$(document).ready(function(){
    welcomeanimation();

    // on scroll animation
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 250) {
            gsap.to(nav, 0.3, {display:"flex", opacity: 1, duration:0.3, ease:"power2.in", yoyo:true});
        }else{
            gsap.to(nav, 0.3, {display:"none", opacity: 0, duration:0.3, ease:"power2.out", yoyo:true});
        }
    });
});