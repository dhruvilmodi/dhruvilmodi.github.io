/* -------------------- global variables -------------------- */
var section;

// viewport
var vpX1280 = window.matchMedia("(max-width: 1280px)");
var vpX375 = window.matchMedia("(max-width: 375px)");
var vpY700 = window.matchMedia("(max-height: 700px)");

// welcomeContainer
let welcomeContainer = document.querySelector(".welcomeContainer");
let welcomeText1 = document.querySelector(".welcomeText1");
let welcomeText2 = document.querySelector(".welcomeText2");
let homeName = document.querySelector(".homeName");
let homeSubText = document.querySelector(".homeSubText");

let plane = document.querySelector(".plane");
let cloud1 = document.querySelector(".cloud1");
let cloud2 = document.querySelector(".cloud2");

let ship1 = document.querySelector(".ship1");

let meterSurface = document.querySelector(".meterSurface");
let meterAbout = document.querySelector(".meterAbout");
let meterSkills = document.querySelector(".meterSkills");
let meterProjects = document.querySelector(".meterProjects");
let meterContact = document.querySelector(".meterContact");

// GSAP timelines
var welcomeTl = gsap.timeline();
var planeTl = gsap.timeline();
var cloudTl = gsap.timeline();
var ship1Tl = gsap.timeline();
var diveTextTl = gsap.timeline();
var fishTl = gsap.timeline({duration:1, repeat: -1, repeatDelay: 2});
var homeTl = gsap.timeline();
var aboutTl = gsap.timeline();
var jellyTl = gsap.timeline();
var sharksTl = gsap.timeline({duration:1, repeat: -1, repeatDelay: 2});
var projectsT1 = gsap.timeline({repeat: 0, autoRemoveChildren: true});
gsap.registerPlugin(TextPlugin);



/* ------------------- global functions ------------------- */
function escBlink() {
	gsap.to(".escBlink", {opacity: 0.3, yoyo: true, ease: "power1.inOut", repeat: -1});
}

function fact1Fun() {
	gsap.to(".fact1", {opacity: 1, display: "flex", duration: 0.5});
}

function fact2Fun() {
	gsap.to(".fact2", {opacity: 1, display: "flex", duration: 0.5});
}

function fact3Fun() {
	gsap.to(".fact3", {opacity: 1, display: "flex", duration: 0.5});
}

function subAnimation() {
    gsap.to(".subMarine", 0.5, {opacity: 1, delay: 1});
    gsap.fromTo(".subMarine", 4, {y: 10, rotate: 5}, {y: -10, rotate: -5, yoyo:true, repeat: -1, ease: "power1.inOut"});
}

function reachedTop() {
	gsap.fromTo(".reachedTopContainer", {y:-50, opacity: 0}, {y: 0, opacity: 1, ease: "back.out"});
	gsap.fromTo(".reachedTopContainer", {y: 0, opacity: 1}, {y: -50, opacity: 0, ease: "back.in", delay: 2});
}

function welcomeContaineFn() {
	welcomeTl.fromTo(welcomeText1, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 0.5})
		.fromTo(welcomeText2, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 0.5}, 0.5)
		.fromTo(welcomeText1, {letterSpacing: 0}, {letterSpacing: 3, ease: "power1.inOut", duration: 0.5}, 0)
		.fromTo(welcomeText2, {letterSpacing: 0}, {letterSpacing: 3, ease: "power1.inOut", duration: 0.5}, 0)
		.fromTo(welcomeContainer, {opacity: 1, display: "flex"}, {opacity: 0, display: "none", ease: "power1.inOut", duration: 0.5, delay: 1})
		.fromTo(homeName, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 0.5, delay: 0})
		.fromTo(homeSubText, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 0.5, delay: 0})
		.fromTo(".subMarine", {x: -500}, {x: 0, ease: "power1.inOut", duration: 1.5}, 2)
		.fromTo(".depthMeter", 0.5, {scale: 2}, {opacity: 1, scale: 1, ease: "back.in"})
		.to(".keyboardHint", {opacity: 1, display: "flex", duration: 0.5, delay: 0.1});
		gsap.to(meterSurface, 0.5, {stroke: "#000000"});

		gsap.fromTo(".ship1", {x: "-60vw"}, {x: 0, ease: "none", duration: 4});
}

function planeTlFn() {
	planeTl.fromTo(plane, {x: "-60vw"},{x: "120vw", duration: 10, ease: "none", repeat: -1}, 0);
	planeTl.play();
}

function cloudFn() {
	if (vpX1280.matches) {
		gsap.fromTo(cloud1, {x: "-75vw", y: 0}, {x: "100vw", duration: 20, ease: "none", repeat: -1, delay: -0});
		gsap.fromTo(cloud2, {x: "-85vw", y: 0}, {x: "100vw", duration: 30, ease: "none", repeat: -1, delay: -5});
	} else {
		gsap.fromTo(cloud1, {x: "-30vw", y: -70}, {x: "100vw", duration: 30, ease: "none", repeat: -1, delay: -15});
		gsap.fromTo(cloud2, {x: "-50vw", y: -70}, {x: "100vw", duration: 40, ease: "none", repeat: -1, delay: -15});
	}

	
	
}

function depthMeterFn() {
	
}

function shipFn() {
	ship1Tl.fromTo(ship1, {rotate: 1}, {rotate: -2, repeat: -2, duration: 2, yoyo: true, ease: "power1.inOut"});
}

function diveTextFn() {
	diveTextTl.fromTo(".diveButton", 1, {opacity: 0.2},{opacity: 1, yoyo: true, repeat: -1, ease: "power1.inOut"}, 0);
	diveTextTl.play();
}

function diveButton() {
	section = 1;
	console.log(section);

	$(".aboutFishes").fadeIn("fast");
	gsap.to(meterSurface, 0.5, {stroke: "#999"});
	gsap.to(meterAbout, 0.5, {stroke: "#eeea80"});
	gsap.to(meterSkills, 0.5, {stroke: "#999"});
	gsap.to(meterProjects, 0.5, {stroke: "#999"});
	gsap.to(meterContact, 0.5, {stroke: "#999"});

	fishTl.fromTo(".fish1About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
		.fromTo(".fish2About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
		.fromTo(".fish3About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
		.fromTo(".fish4About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
		.fromTo(".fish5About", {x: "100vw"}, {x: -800, ease: "power4.in", duration: 6}, 1);
	fishTl.play();

	gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, bottom: "60vh", ease:"power1.inOut"});
	gsap.to(window, {duration: 0.5, scrollTo: ".aboutPage"});
	homeTl.to(".about", {display: "inline", opacity: 1, stagger: 0.2, duration: 0.5, ease: "back"});
	
	homeTl.play();
	diveTextTl.pause();
}

function meterAboutFn() {
	section = 1;
	console.log(section);


	$(".aboutFishes").fadeIn("fast");
	gsap.to(meterSurface, 0.5, {stroke: "#999"});
	gsap.to(meterAbout, 0.5, {stroke: "#eeea80"});
	gsap.to(meterSkills, 0.5, {stroke: "#999"});
	gsap.to(meterProjects, 0.5, {stroke: "#999"});
	gsap.to(meterContact, 0.5, {stroke: "#999"});

	fishTl.fromTo(".fish1About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
	.fromTo(".fish2About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
	.fromTo(".fish3About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
	.fromTo(".fish4About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
	.fromTo(".fish5About", {x: "100vw"}, {x: -800, ease: "power4.in", duration: 6}, 1);
	fishTl.play();

	gsap.to(window, {duration: 0.5, scrollTo: ".aboutPage"});

	gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
	gsap.to(".subMarine", 0.5, {bottom: "60vh", ease:"power1.inOut"});
	homeTl.to(".about", {display: "inline", opacity: 1, stagger: 0.2, duration: 0.5, ease: "back"});
	
	homeTl.play();
	diveTextTl.pause();
}

function ascentBtnAbout() {
	section = 0;
	console.log(section);


	homeTl.pause();
	diveTextTl.play();
	fishTl.pause();
	jellyTl.pause();

	gsap.to(meterSurface, 0.5, {stroke: "#000000"});
	gsap.to(meterAbout, 0.5, {stroke: "#999"});
	gsap.to(meterSkills, 0.5, {stroke: "#999"});
	gsap.to(meterProjects, 0.5, {stroke: "#999"});
	gsap.to(meterContact, 0.5, {stroke: "#999"});

	if (vpX1280.matches) {
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(".subMarine", 0.5, {bottom: "15vh", ease:"power4.Out"});
	} else {
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(".subMarine", 0.5, {bottom: "10vh", ease:"power4.Out"});
	}
	
	gsap.to(window, {duration: 0.5, scrollTo: ".heroPage"});
}

function descentBtnAbout() {
	section = 2;
	console.log(section);


	homeTl.pause();

	gsap.to(meterSurface, 0.5, {stroke: "#999"});
	gsap.to(meterAbout, 0.5, {stroke: "#999"});
	gsap.to(meterSkills, 0.5, {stroke: "#eeea80"});
	gsap.to(meterProjects, 0.5, {stroke: "#999"});
	gsap.to(meterContact, 0.5, {stroke: "#999"});

	jellyTl.fromTo(".jellyFish1", {y: 10, x: -5, rotate: 5}, {y: -10, x: 5, rotate: -5, ease: "power1.inOut", duration: 3, yoyo: true, repeat: -1}, 0.2)
		.fromTo(".jellyFish2", {y: -10, x: 4, rotate: 4},{y: 10, x: -5, rotate: -5, ease: "power1.inOut", duration: 3, yoyo: true, repeat: -1}, 0.2)
		.fromTo(".jellyFish3", {y: -5, x: 2}, {y: 5, x: -2, ease: "power2.inOut", duration: 5, yoyo: true, repeat: -1}, 0.2);

	jellyTl.play();

	gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
	gsap.to(".subMarine", 0.5, {bottom: "47vh", ease:"power1.inOut"});
	gsap.to(window, {duration: 0.5, scrollTo: ".skillsPage"});

	aboutTl.to(".skills", {opacity: 1, stagger: 0.05, duration: 0.1, ease: "back"})
		.fromTo(".skillIcons", {rotate: 2},{rotate: -2, yoyo: true, ease:"power1.inOut", repeat: -1, duration: 0.5})
		.to(".skillsBtns", {display: "inline", opacity: 1, duration: 0.5, ease: "back"}, 1);	
	aboutTl.play();
}

function ascentBtnSkills() {
	section = 1;
	console.log(section);


	aboutTl.pause();
	gsap.to(meterSurface, 0.5, {stroke: "#999"});
	gsap.to(meterAbout, 0.5, {stroke: "#eeea80"});
	gsap.to(meterSkills, 0.5, {stroke: "#999"});
	gsap.to(meterProjects, 0.5, {stroke: "#999"});
	gsap.to(meterContact, 0.5, {stroke: "#999"});

	gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
	gsap.to(".subMarine", 0.5, {bottom: "60vh", ease:"power1.inOut"});
	gsap.to(window, {duration: 0.5, scrollTo: ".aboutPage"});
	
	fishTl.play();
	// jellyTl.pause();
}

function descentBtnSkills() {
	section = 3;
	console.log(section);


	gsap.to(".skills", {opacity: 1, duration: 0.1, ease: "back"});
	aboutTl.pause();
	gsap.to(meterSurface, 0.5, {stroke: "#999"});
	gsap.to(meterAbout, 0.5, {stroke: "#999"});
	gsap.to(meterSkills, 0.5, {stroke: "#999"});
	gsap.to(meterProjects, 0.5, {stroke: "#eeea80"});
	gsap.to(meterContact, 0.5, {stroke: "#999"});

	if (vpX1280.matches) {
		gsap.to(".subMarine", {opacity: 1, x: 0,  bottom: "35vh", ease: "power1", duration: 0.3});
	} else {
		gsap.to(".subMarine", {opacity: 1, bottom: "35vh", ease: "power1", duration: 0.3});
		gsap.to(".subMarine", {x: 300, bottom: "20vh", ease: "power1", duration: 1, delay: 0.3});
	}

	gsap.to(window, {duration: 0.5, scrollTo: ".projectPage"});
	
	sharksTl.fromTo(".shark1", {x: "0"},{x:"-130vw", ease: "power1.in", duration: 12}, 0.1)
		.fromTo(".shark2", {x: "0"},{x:"-120vw", ease: "power1.in", duration: 12}, 0.1);
	
	sharksTl.play();

	projectsT1.fromTo(".project", {y: 50, opacity: 0}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back", delay: 0.2, repeat: 0});
	projectsT1.play();
	
}

function ascentBtnProjects() {
	section = 2;
	console.log(section);


	gsap.to(".subMarine", 0.5, {bottom: "47vh", ease:"power1.inOut", delay: 0.2});
	gsap.to(".project", {y: 0, opacity: 1});
	projectsT1.pause();
	gsap.to(meterSurface, 0.5, {stroke: "#999"});
	gsap.to(meterAbout, 0.5, {stroke: "#999"});
	gsap.to(meterSkills, 0.5, {stroke: "#eeea80"});
	gsap.to(meterProjects, 0.5, {stroke: "#999"});
	gsap.to(meterContact, 0.5, {stroke: "#999"});

	if (vpX1280.matches) {
		gsap.to(window, {duration: 0.5, scrollTo: ".skillsPage"});
	} else {
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(window, {duration: 0.5, scrollTo: ".skillsPage", delay: 0.5});
	}
	
	// sharksTl.pause();
	jellyTl.play();
}

function descentBtnProjects() {
	section = 4;
	console.log(section);


	gsap.to(".project", {y: 0, opacity: 1, duration: 0.1, ease: "back"});
	gsap.to(meterSurface, 0.5, {stroke: "#999"});
	gsap.to(meterAbout, 0.5, {stroke: "#999"});
	gsap.to(meterSkills, 0.5, {stroke: "#999"});
	gsap.to(meterProjects, 0.5, {stroke: "#999"});
	gsap.to(meterContact, 0.5, {stroke: "#eeea80"});

	gsap.to(".subMarine", 0.5, {x: 0, ease:"power1.inOut"});
	gsap.to(".subMarine", {opacity: 0, duration: 0.1, delay: 0});
	gsap.to(window, {duration: 0.5, scrollTo: ".contactPage"});
	// gsap.to(".contactBtn", {display: "inline", opacity: 1, duration: 0.5, ease: "back"});
	gsap.fromTo(".contact", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back", delay: 0.3});
	
	sharksTl.pause();
	jellyTl.pause();
	projectsT1.pause();	
}

function ascentBtnContact() {
	section = 3;
	console.log(section);


	gsap.to(meterSurface, 0.5, {stroke: "#999"});
	gsap.to(meterAbout, 0.5, {stroke: "#999"});
	gsap.to(meterSkills, 0.5, {stroke: "#999"});
	gsap.to(meterProjects, 0.5, {stroke: "#eeea80"});
	gsap.to(meterContact, 0.5, {stroke: "#999"});

	// gsap.to(".subMarine", {opacity: 1, bottom: "35vh", ease: "power1", duration: 0.1});
	

	if (vpX1280.matches) {
		gsap.to(".subMarine", {opacity: 1, ease: "power1", duration: 1, delay: 0.1});
		gsap.to(window, {duration: 0.5, scrollTo: ".projectPage"});
	} else {
		gsap.to(".subMarine", {opacity: 1,x: 300, bottom: "20vh", ease: "power1", duration: 1, delay: 0.4});
		gsap.to(window, {duration: 0.5, scrollTo: ".projectPage"});
	}

	projectsT1.fromTo(".project", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back", delay: 0.2,  repeat: 0})
		.fromTo(".nukeBlueprint", {scale: 1}, {scale: 1.1, yoyo: true, ease: "power1.inOut", duration: 0.2, repeat: 0});
	projectsT1.play();


	sharksTl.fromTo(".shark1", {x: "0"},{x:"-130vw", ease: "power1.in", duration: 12}, 0.1)
		.fromTo(".shark2", {x: "0"},{x:"-120vw", ease: "power1.in", duration: 12}, 0.1);
	sharksTl.play();
}

function backToTopBtnContact() {
	section = 0;
	console.log(section);

	
	gsap.to(meterSurface, 0.5, {stroke: "#000000"});
	gsap.to(meterAbout, 0.5, {stroke: "#999"});
	gsap.to(meterSkills, 0.5, {stroke: "#999"});
	gsap.to(meterProjects, 0.5, {stroke: "#999"});
	gsap.to(meterContact, 0.5, {stroke: "#999"});

	projectsT1.pause();
	sharksTl.pause();
	jellyTl.pause();
	diveTextTl.play();
	if (vpX1280.matches) {
		gsap.to(".subMarine", {x: 0, bottom: "15vh", duration: 0.1, ease:"power1.inOut"});
	} else {
		gsap.to(".depthMeter", {opacity: 0});
		gsap.to(".subMarine", {x: 0, bottom: "10vh", duration: 0.1, ease:"power1.inOut"});
	}
	gsap.to(window, {duration: 4, scrollTo: "body", delay: 0.1});
	gsap.to(".subMarine", {opacity: 1, duration: 0.1, delay: 0.5});
	gsap.to(".depthMeter", {opacity: 1, delay: 4});	
}

function loadProjects() {
	window.location.href = "./projects/";
}

function nukeBlueprint() {
	welcomeTl.kill();
	let loadingContainer = document.querySelector(".loadingContainer");
	let loadingText = document.querySelector(".loadingText");
	var loadProjectsTl = gsap.timeline();
	loadProjectsTl.fromTo(loadingContainer,{display: "none", opacity: 0}, {display: "flex", opacity: 1, duration: 0.2})
		.fromTo(loadingText, {opacity: 0}, {opacity: 1, repeat: 2, yoyo: true, duration: 0.3, onComplete : loadProjects});
}


/* -------------------------------------------------------------- */

$(document).ready(function(){

	$(window).on('beforeunload', function(){
		$(window).scrollTop(0);
	});

	$(window).on('scroll', function () {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.querySelector("#myBar").style.width = scrolled + "%";
	});
	
	section = 0;
	console.log(section);

	// cloud animation
	cloudFn();
	// plane animation
	planeTlFn();
	// welcome animation
	welcomeContaineFn();
	// submarine animation
	subAnimation();
	// ship1 animation
	shipFn();
	// divetext animation
	diveTextFn();
	// depth meter animation
	depthMeterFn();
	// closeButton
	escBlink();

	$(".aboutFishes").fadeOut("fast");
	fishTl.pause();
	sharksTl.pause();


	// onclick animation for homePage
	$(document).on('click', 'body .diveButton', function() {diveButton();});
	$(document).on('click', 'body .meterAbout', function() {meterAboutFn();});

	// onclick animation for aboutPage
	$(document).on('click', 'body .ascentBtnAbout', function() {ascentBtnAbout();});
	$(document).on('click', 'body .descentBtnAbout', function() {descentBtnAbout();});

	// onclick animation for skillsPage
	$(document).on('click', 'body .ascentBtnSkills', function() {ascentBtnSkills();});
	$(document).on('click', 'body .descentBtnSkills', function() {descentBtnSkills();});

	// onclick animation for projectsPage
	$(document).on('click', 'body .ascentBtnProjects', function() {ascentBtnProjects();});
	$(document).on('click', 'body .descentBtnProjects', function() {descentBtnProjects();});

	// onclick animation for contactPage
	$(document).on('click', 'body .ascentBtnContact', function() {ascentBtnContact();});
	$(document).on('click', 'body .backToTopBtnContact', function() {backToTopBtnContact();});
	$(document).on('click', 'body .nukeBlueprint', function() {nukeBlueprint();});


	// up and down arrow key functions
	// $(document).keydown(function(e){e.preventDefault()});
	$(document).on('keypress keydown',function (e) {
		return e.which !== 9 && e.which !== 32;
	});

	$(document).keyup(function(e){

		var key = e.keyCode;
		
		// dor up arrow key
		if(key == 38){
			switch (section) {
				case 0: reachedTop(); break;
				case 1: ascentBtnAbout(); break;
				case 2: ascentBtnSkills(); break;
				case 3: ascentBtnProjects(); break;
				case 4: ascentBtnContact(); break;
				case 5: backToTopBtnContact();
			  }
		}
		
		// for down arrow key
		if(key == 40){
			switch (section) {
				case 0: diveButton(); break;
				case 1: descentBtnAbout(); break;
				case 2: descentBtnSkills(); break;
				case 3: descentBtnProjects();
			}
		}

		// for enter key
		if(key == 13){
			switch (section) {
				case 0: fact1Fun(); break;
				case 1: fact2Fun(); break;
				case 2: fact3Fun(); break;
				case 3: nukeBlueprint();
			}
		}

		// for esc key
		if(key == 27){
			gsap.to(".facts", {opacity: 0, display: "none", duration: 0.5});
			gsap.to(".keyboardHint", {opacity: 0, display: "none", duration: 0.5});
		}
	});

	$(document).on('click', 'body .escBlink', function() {
		gsap.to(".keyboardHint", {opacity: 0, display: "none", duration: 0.5});
	});

});