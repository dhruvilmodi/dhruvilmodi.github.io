/* ---------------- submarine animation ---------------- */

function subAnimation() {
    gsap.to(".subMarine", 1, {opacity: 1, delay: 1});
    gsap.fromTo(".subMarine", 4, {y: 10, rotate: 5}, {y: -10, rotate: -5, yoyo:true, repeat: -1, ease: "power1.inOut"});
}

/* -------------------------------------------------------------- */

$(document).ready(function(){

	// welcomeContainer
	let welcomeContainer = document.querySelector(".welcomeContainer");
	let welcomeText1 = document.querySelector(".welcomeText1");
	let welcomeText2 = document.querySelector(".welcomeText2");
	let homeName = document.querySelector(".homeName");
	let homeSubText = document.querySelector(".homeSubText");
	var welcomeTl = gsap.timeline();
	welcomeTl.fromTo(welcomeText1, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 1})
		.fromTo(welcomeText2, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 1}, 1)
		.fromTo(welcomeText1, {letterSpacing: 0}, {letterSpacing: 3, ease: "power1.inOut", duration: 1}, 0)
		.fromTo(welcomeText2, {letterSpacing: 0}, {letterSpacing: 3, ease: "power1.inOut", duration: 1}, 0)
		.fromTo(welcomeContainer, {opacity: 1, display: "flex"}, {opacity: 0, display: "none", ease: "power1.inOut", duration: 1, delay: 2})
		.fromTo(homeName, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 1, delay: 0.5})
		.fromTo(homeSubText, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 1, delay: 0.1});

	let cls1 = document.querySelectorAll(".cls-1");
	let cls2 = document.querySelectorAll(".cls-2");
	let cls3 = document.querySelectorAll(".cls-3");
	// window.addEventListener("scroll", function () {
    //     if (document.documentElement.scrollTop > 0) {
    //         gsap.to(cls1, 0.5, {stroke: "#999", ease: "none"});
    //         gsap.to(cls2, 0.5, {stroke: "#999", ease: "none"});
    //         gsap.to(cls3, 0.5, {stroke: "#999", ease: "none"});
    //     }else{
	// 		gsap.to(cls1, 0.5, {stroke: "#999", ease: "none"}, 0);
	// 		gsap.to(cls2, 0.5, {stroke: "#999", ease: "none"}, 0);
	// 		gsap.to(cls3, 0.5, {stroke: "#999", ease: "none"});
	// 		gsap.to(meterSurface, 1, {stroke: "#FFF"});
    //     }
    // });

	// plane animation
	let plane = document.querySelector(".plane");
	var planeTl = gsap.timeline();
	planeTl.fromTo(plane, {x: "-20vw"},{x: "120vw", duration: 10, ease: "none", repeat: -1}, 0);
	planeTl.play();

	// cloud animation
	let cloud1 = document.querySelector(".cloud1");
	let cloud2 = document.querySelector(".cloud2");
	var cloudTl = gsap.timeline();
	cloudTl.fromTo(cloud1, {x: "-30vw"}, {x: "100vw", duration: 15, ease: "none", repeat: -1}, 0)
		.fromTo(cloud2, {x: "-50vw"}, {x: "100vw", duration: 20, ease: "none", repeat: -1}, 1);

	// ship1 animation
	let ship1 = document.querySelector(".ship1");
	var ship1Tl = gsap.timeline();
	ship1Tl.fromTo(ship1, {rotate: 1}, {rotate: -2, repeat: -2, duration: 2, yoyo: true, ease: "power1.inOut"});


	let meterSurface = document.querySelector(".meterSurface");
	let meterAbout = document.querySelector(".meterAbout");
	let meterSkills = document.querySelector(".meterSkills");
	let meterProjects = document.querySelector(".meterProjects");
	let meterContact = document.querySelector(".meterContact");

	var diveTextTl = gsap.timeline();
	var fishTl = gsap.timeline({duration:1, repeat: -1, repeatDelay: 2});
	fishTl.pause();
	var homeTl = gsap.timeline();
	var aboutTl = gsap.timeline();
	var jellyTl = gsap.timeline();
	var sharksTl = gsap.timeline({duration:1, repeat: -1, repeatDelay: 2});
	var projectsT1 = gsap.timeline();
	gsap.registerPlugin(TextPlugin);
	sharksTl.pause();

	$(".aboutFishes").fadeOut("fast");

	gsap.fromTo(".depthMeter", {scale: 2}, {opacity: 1, scale: 1, delay: 2, ease: "back.out"});
	gsap.to(meterSurface, 1, {stroke: "#eeea80"});

	/* ---------------- divetext animation ---------------- */
	diveTextTl.fromTo(".diveButton", 1, {opacity: 0},{opacity: 1, yoyo:true, repeat: -1, ease: "power1.inOut"});
	diveTextTl.play();

    subAnimation();

	// onclick animation for homePage

	$(document).on('click', 'body .diveButton', function() {
		$(".aboutFishes").fadeIn("fast");
		gsap.to(meterSurface, 1, {stroke: "#999"});
		gsap.to(meterAbout, 1, {stroke: "#eeea80"});
		gsap.to(meterSkills, 1, {stroke: "#999"});
		gsap.to(meterProjects, 1, {stroke: "#999"});
		gsap.to(meterContact, 1, {stroke: "#999"});

		fishTl.fromTo(".fish1About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish2About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish3About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish4About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish5About", {x: "100vw"}, {x: -800, ease: "power4.in", duration: 6}, 1);
		fishTl.play();

		gsap.to(window, {duration: 1, scrollTo: ".aboutPage"});
		homeTl.to(".subMarine", 1, {x: 0, opacity: 1, bottom: "60vh", ease:"power1.inOut"})
			.to(".about", {display: "inline", opacity: 1, stagger: 0.2, duration: 1, ease: "back"});
		
		homeTl.play();
		diveTextTl.pause();
	});

	$(document).on('click', 'body .meterAbout', function() {
		$(".aboutFishes").fadeIn("fast");
		gsap.to(meterSurface, 1, {stroke: "#999"});
		gsap.to(meterAbout, 1, {stroke: "#eeea80"});
		gsap.to(meterSkills, 1, {stroke: "#999"});
		gsap.to(meterProjects, 1, {stroke: "#999"});
		gsap.to(meterContact, 1, {stroke: "#999"});

		fishTl.fromTo(".fish1About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish2About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish3About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish4About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish5About", {x: "100vw"}, {x: -800, ease: "power4.in", duration: 6}, 1);
		fishTl.play();

		gsap.to(window, {duration: 1, scrollTo: ".aboutPage"});

		homeTl.to(".subMarine", 1, {x: 0, opacity: 1, ease:"power1.inOut"})
		.to(".subMarine", 1, {bottom: "60vh", ease:"power1.inOut"})
			.to(".about", {display: "inline", opacity: 1, stagger: 0.2, duration: 1, ease: "back"});
		
		homeTl.play();
		diveTextTl.pause();
	});

	// onclick animation for aboutPage

	$(document).on('click', 'body .ascentBtnAbout', function() {
		gsap.to(meterSurface, 1, {stroke: "#eeea80"});
		gsap.to(meterAbout, 1, {stroke: "#999"});
		gsap.to(meterSkills, 1, {stroke: "#999"});
		gsap.to(meterProjects, 1, {stroke: "#999"});
		gsap.to(meterContact, 1, {stroke: "#999"});

		gsap.to(window, {duration: 1, scrollTo: ".heroPage"});
		gsap.to(".subMarine", 1, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(".subMarine", 1, {bottom: "10vh", ease:"power4.Out"});
		diveTextTl.play();
		fishTl.pause();
		jellyTl.pause();
	});

	$(document).on('click', 'body .descentBtnAbout', function() {
		homeTl.pause();

		gsap.to(meterSurface, 1, {stroke: "#999"});
		gsap.to(meterAbout, 1, {stroke: "#999"});
		gsap.to(meterSkills, 1, {stroke: "#eeea80"});
		gsap.to(meterProjects, 1, {stroke: "#999"});
		gsap.to(meterContact, 1, {stroke: "#999"});

		jellyTl.fromTo(".jellyFish1", {y: 10, x: -5, rotate: 5}, {y: -10, x: 5, rotate: -5, ease: "power1.inOut", duration: 3, yoyo: true, repeat: -1}, 0.2)
			.fromTo(".jellyFish2", {y: -10, x: 4, rotate: 4},{y: 10, x: -5, rotate: -5, ease: "power1.inOut", duration: 3, yoyo: true, repeat: -1}, 0.2)
			.fromTo(".jellyFish3", {y: -5, x: 2}, {y: 5, x: -2, ease: "power2.inOut", duration: 5, yoyo: true, repeat: -1}, 0.2);

		jellyTl.play();

		gsap.to(".subMarine", 1, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(window, {duration: 1, scrollTo: ".skillsPage"});
		gsap.to(".subMarine", 1, {bottom: "47vh", ease:"power1.inOut"});

		aboutTl.to(".skills", {opacity: 1, stagger: 0.1, duration: 1, ease: "back"})
			.fromTo(".skillIcons", {rotate: 2},{rotate: -2, yoyo: true, ease:"power1.inOut", repeat: -1, duration: 1}, 1)
			.to(".skillsBtns", {display: "inline", opacity: 1, duration: 1, ease: "back"}, 2.5);
		
		aboutTl.play();

	});

	// onclick animation for skillsPage

	$(document).on('click', 'body .ascentBtnSkills', function() {
		gsap.to(meterSurface, 1, {stroke: "#999"});
		gsap.to(meterAbout, 1, {stroke: "#eeea80"});
		gsap.to(meterSkills, 1, {stroke: "#999"});
		gsap.to(meterProjects, 1, {stroke: "#999"});
		gsap.to(meterContact, 1, {stroke: "#999"});

		gsap.to(window, {duration: 1, scrollTo: ".aboutPage"});
		gsap.to(".subMarine", 1, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(".subMarine", 1, {bottom: "60vh", ease:"power1.inOut"});
		fishTl.play();
		jellyTl.pause();
	});

	$(document).on('click', 'body .descentBtnSkills', function() {
		gsap.to(meterSurface, 1, {stroke: "#999"});
		gsap.to(meterAbout, 1, {stroke: "#999"});
		gsap.to(meterSkills, 1, {stroke: "#999"});
		gsap.to(meterProjects, 1, {stroke: "#eeea80"});
		gsap.to(meterContact, 1, {stroke: "#999"});
		
		projectsT1.play();
		gsap.to(window, {duration: 1, scrollTo: ".projectPage"});
		gsap.to(".subMarine", {opacity: 1, bottom: "35vh", ease: "power1", duration: 1});
		gsap.to(".subMarine", {x: 300, bottom: "20vh", ease: "power1", duration: 2, delay: 1.5});
		projectsT1.fromTo(".project", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "back", delay: 3})
			.fromTo(".nukeBlueprint", {scale: 1}, {scale: 1.1, yoyo: true, ease: "power1.inOut", duration: 1, repeat: 2});


		sharksTl.fromTo(".shark1", {x: "0"},{x:"-130vw", ease: "power1.in", duration: 12}, 0.1)
		.fromTo(".shark2", {x: "0"},{x:"-120vw", ease: "power1.in", duration: 12}, 0.1);
		
		sharksTl.play();
	});

	// onclick animation for projectsPage

	$(document).on('click', 'body .ascentBtnProjects', function() {

		gsap.to(meterSurface, 1, {stroke: "#999"});
		gsap.to(meterAbout, 1, {stroke: "#999"});
		gsap.to(meterSkills, 1, {stroke: "#eeea80"});
		gsap.to(meterProjects, 1, {stroke: "#999"});
		gsap.to(meterContact, 1, {stroke: "#999"});

		gsap.to(".subMarine", 1, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(".subMarine", 1, {bottom: "47vh", ease:"power1.inOut", delay: 1});
		gsap.to(window, {duration: 1, scrollTo: ".skillsPage", delay: 1.25});
		sharksTl.pause();
		jellyTl.play();
		projectsT1.pause();
	});

	$(document).on('click', 'body .descentBtnProjects', function() {
		gsap.to(meterSurface, 1, {stroke: "#999"});
		gsap.to(meterAbout, 1, {stroke: "#999"});
		gsap.to(meterSkills, 1, {stroke: "#999"});
		gsap.to(meterProjects, 1, {stroke: "#999"});
		gsap.to(meterContact, 1, {stroke: "#eeea80"});

		gsap.to(".subMarine", 1, {x: 0, ease:"power1.inOut"});
		gsap.to(".subMarine", {opacity: 0, duration: 0.1, delay: 0});
		gsap.to(window, {duration: 1, scrollTo: ".contactPage"});
		gsap.to(".contactBtn", {display: "inline", opacity: 1, duration: 1, ease: "back"});
		
		sharksTl.pause();
		jellyTl.pause();
		projectsT1.pause();
	});

	// onclick animation for contactPage

	$(document).on('click', 'body .backToTopBtnContact', function() {
		gsap.to(meterSurface, 1, {stroke: "#eeea80"});
		gsap.to(meterAbout, 1, {stroke: "#999"});
		gsap.to(meterSkills, 1, {stroke: "#999"});
		gsap.to(meterProjects, 1, {stroke: "#999"});
		gsap.to(meterContact, 1, {stroke: "#999"});

		gsap.to(".depthMeter", {opacity: 0});
		gsap.to(".subMarine", {x: 0, bottom: "10vh", duration: 0.1, ease:"power1.inOut"});
		gsap.to(window, {duration: 4, scrollTo: "body", delay: 0.1});
		gsap.to(".subMarine", {opacity: 1, duration: 0.1, delay: 0.5});
		sharksTl.pause();
		jellyTl.pause();
		diveTextTl.play();
		gsap.to(".depthMeter", {opacity: 1, delay: 4});
	});

	function loadProjects() {
		window.location.href = "./projects/";
	}

	$(document).on('click', 'body .nukeBlueprint', function() {
		welcomeTl.kill();
		let loadingContainer = document.querySelector(".loadingContainer");
		let loadingText = document.querySelector(".loadingText");
		var loadProjectsTl = gsap.timeline();
		loadProjectsTl.fromTo(loadingContainer,{display: "none", opacity: 0}, {display: "flex", opacity: 1, duration: 0.5})
			.fromTo(loadingText, {opacity: 0}, {opacity: 1, repeat: 2, yoyo: true, duration: 0.5, onComplete : loadProjects});
	});


});