/* ---------------- submarine animation ---------------- */

function subAnimation() {
    gsap.to(".subMarine", 1, {opacity: 1, delay: 1});
    gsap.fromTo(".subMarine", 4, {y: 5, rotate: 2}, {y: -5, rotate: -2, yoyo:true, repeat: -1, ease: "power1.inOut"});
}

/* -------------------------------------------------------------- */

$(document).ready(function(){

	$(window).on('beforeunload', function(){
		$(window).scrollTop(0);
	});

	// welcomeContainer
	let welcomeContainer = document.querySelector(".welcomeContainer");
	let welcomeText1 = document.querySelector(".welcomeText1");
	let welcomeText2 = document.querySelector(".welcomeText2");
	let homeName = document.querySelector(".homeName");
	var welcomeTl = gsap.timeline();
	welcomeTl.fromTo(welcomeText1, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 0.5})
		.fromTo(welcomeText2, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 0.5}, 0.5)
		.fromTo(welcomeText1, {letterSpacing: 0}, {letterSpacing: 3, ease: "power1.inOut", duration: 0.5}, 0)
		.fromTo(welcomeText2, {letterSpacing: 0}, {letterSpacing: 3, ease: "power1.inOut", duration: 0.5}, 0)
		.fromTo(welcomeContainer, {opacity: 1, display: "flex"}, {opacity: 0, display: "none", ease: "power1.inOut", duration: 0.5, delay: 1})
		.fromTo(homeName, {opacity: 0}, {opacity: 1, ease: "power1.inOut", duration: 0.5, delay: 0.3});

	// plane animation
	let plane = document.querySelector(".plane");
	let plane2 = document.querySelector(".plane2");
	let plane3 = document.querySelector(".plane3");
	let plane4 = document.querySelector(".plane4");
	var planeTl = gsap.timeline();
	planeTl.fromTo(plane, {x: "-20vw", y: 20},{x: "120vw", duration: 9, ease: "none", repeat: -1}, 0)
		.fromTo(plane2, {x: "-40vw", y: 50},{x: "120vw", duration: 8, ease: "none", repeat: -1}, 0)
		.fromTo(plane3, {x: "120vw", y: -40},{x: "-60vw", duration: 9, ease: "none", repeat: -1}, 0)
		.fromTo(plane4, {x: "120vw", y: 110},{x: "-80vw", duration: 8, ease: "none", repeat: -1}, 0);
	planeTl.play();

	// blast animation
	let blast1 = document.querySelector(".blast1");
	let blast2 = document.querySelector(".blast2");
	let blast3 = document.querySelector(".blast3");
	let blast4 = document.querySelector(".blast4");
	var blastTl = gsap.timeline();
	blastTl.fromTo(blast1, {opacity: 1, scale: 0}, {opacity: 0, scale: 2.5, duration: 2, repeat: -1, repeatDelay: 1, ease: "back.out"}, 0)
		.fromTo(blast2, {opacity: 1, scale: 0}, {opacity: 0, scale: 2.5, duration: 2, repeat: -1, repeatDelay: 2, ease: "back.out"}, 0.5)
		.fromTo(blast3, {opacity: 1, scale: 0}, {opacity: 0, scale: 2.5, duration: 2, repeat: -1, repeatDelay: 3, ease: "back.out"}, 1)
		.fromTo(blast4, {opacity: 1, scale: 0}, {opacity: 0, scale: 2.5, duration: 2, repeat: -1, repeatDelay: 4, ease: "back.out"}, 1.5);
	blastTl.play();

	// cloud animation
	let cloud1 = document.querySelector(".cloud1");
	let cloud2 = document.querySelector(".cloud2");
	var cloudTl = gsap.timeline();
	cloudTl.fromTo(cloud1, {x: "-50vw"}, {x: "100vw", duration: 30, ease: "none", repeat: -1}, 0)
		.fromTo(cloud2, {x: "-60vw"}, {x: "100vw", duration: 40, ease: "none", repeat: -1}, 1);

	// ship1 animation
	let ship1 = document.querySelector(".ship1");
	let ship2 = document.querySelector(".ship2");
	var ship1Tl = gsap.timeline();
	ship1Tl.fromTo(ship1, {rotate: 0.5}, {rotate: -1, repeat: -2, duration: 3, yoyo: true, ease: "power1.inOut"})
		.fromTo(ship2, {rotate: 0.5}, {rotate: -1, repeat: -2, duration: 3, yoyo: true, ease: "power1.inOut"});


	var diveTextTl = gsap.timeline();
	var homeTl = gsap.timeline();
	var firstPageTl = gsap.timeline();
	var secondPageTl = gsap.timeline();
	var thirdPageTl = gsap.timeline();
	var forthPageTl = gsap.timeline();
	var fifthPageTl = gsap.timeline();
	var sharksTl = gsap.timeline({duration:1, repeat: -1, repeatDelay: 2});
	sharksTl.pause();
	gsap.registerPlugin(TextPlugin);

	/* ---------------- divetext animation ---------------- */
	diveTextTl.fromTo(".diveButton", 1, {opacity: 0},{opacity: 1, yoyo:true, repeat: -1, ease: "power1.inOut"});
	diveTextTl.play();

    subAnimation();

	// onclick animation for homePage

	$(document).on('click', 'body .diveButton', function() {
		$(".aboutFishes").fadeIn("fast");

		gsap.to(window, {duration: 0.5, scrollTo: ".firstPage"});
		homeTl.to(".subMarine", 0.5, {x: 0, opacity: 1, bottom: "60vh", ease:"power1.inOut"})
			.fromTo(".firstStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back"});
		
		homeTl.play();
		diveTextTl.pause();
	});

	// onclick animation for firstPage

	$(document).on('click', 'body .ascentToHome', function() {

		homeTl.pause();

		gsap.to(window, {duration: 0.5, scrollTo: ".heroPage"});
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(".subMarine", 0.5, {bottom: "10vh", ease:"power4.Out"});

		diveTextTl.play();
	});

	$(document).on('click', 'body .descentToSecond', function() {
		homeTl.pause();

		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(window, {duration: 0.5, scrollTo: ".secondPage"});

		firstPageTl.fromTo(".secondStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back", delay: 0.3});
		
		firstPageTl.play();

	});

	// onclick animation for secondPage

	$(document).on('click', 'body .ascentToFirst', function() {
		homeTl.pause();
		firstPageTl.pause();

		gsap.to(window, {duration: 0.5, scrollTo: ".firstPage"});
		gsap.to(".subMarine", 1, {x: 0, opacity: 1, ease:"power1.inOut"});
	});

	$(document).on('click', 'body .descentToThird', function() {
		firstPageTl.pause();

		gsap.to(window, {duration: 0.5, scrollTo: ".thirdPage"});
		secondPageTl.fromTo(".thirdStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back", delay: 0.3});
		secondPageTl.play();
	});

	// onclick animation for thirdPage

	$(document).on('click', 'body .ascentToSecond', function() {
		firstPageTl.pause();
		secondPageTl.pause();

		gsap.to(window, {duration: 0.5, scrollTo: ".secondPage"});
		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
	});

	$(document).on('click', 'body .descentToForth', function() {
		firstPageTl.pause();
		secondPageTl.pause();

		gsap.to(window, {duration: 0.5, scrollTo: ".forthPage"});
		gsap.to(".subMarine", 0.5, {x: 0, ease:"power1.inOut"});
		thirdPageTl.fromTo(".forthStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back", delay: 0.3});
		thirdPageTl.play();
	});

	// onclick animation for forthPage

	$(document).on('click', 'body .ascentToThird', function() {
		firstPageTl.pause();
		secondPageTl.pause();
		thirdPageTl.pause();

		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(window, {duration: 0.5, scrollTo: ".thirdPage"});

	});

	$(document).on('click', 'body .descentToFifth', function() {
		firstPageTl.pause();
		secondPageTl.pause();
		thirdPageTl.pause();

		gsap.to(".subMarine", 0.5, {x: 0, ease:"power1.inOut"});
		gsap.to(window, {duration: 0.5, scrollTo: ".fifthPage"});
		forthPageTl.fromTo(".fifthStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back", delay: 0.3});
		forthPageTl.play();

	});

	// onclick animation for fifthPage

	$(document).on('click', 'body .ascentToForth', function() {
		firstPageTl.pause();
		secondPageTl.pause();
		thirdPageTl.pause();
		forthPageTl.pause();

		gsap.to(".subMarine", 0.5, {x: 0, opacity: 1, ease:"power1.inOut"});
		gsap.to(window, {duration: 0.5, scrollTo: ".forthPage"});
	});

	$(document).on('click', 'body .descentToSixth', function() {
		firstPageTl.pause();
		secondPageTl.pause();
		thirdPageTl.pause();
		forthPageTl.pause();

		gsap.to(window, {duration: 0.5, scrollTo: ".sixthPage"});
		fifthPageTl.fromTo(".sixthStagger", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back", delay: 0.3});
		fifthPageTl.play();

		sharksTl.fromTo(".shark1", {x: "0"},{x:"-130vw", ease: "power1.in", duration: 12}, 0.1)
			.fromTo(".shark2", {x: "0"},{x:"-120vw", ease: "power1.in", duration: 12}, 0.1);
		
		sharksTl.play();
	});

	// onclick animation for sixthPage

	$(document).on('click', 'body .ascentToFifth', function() {
		firstPageTl.pause();
		secondPageTl.pause();
		thirdPageTl.pause();
		forthPageTl.pause();
		sharksTl.pause();

		gsap.to(".subMarine", 1, {x: 0, opacity: 1});
		gsap.to(window, {duration: 0.5, scrollTo: ".fifthPage"});
	});

	$(document).on('click', 'body .descentToContact', function() {
		firstPageTl.pause();
		secondPageTl.pause();
		thirdPageTl.pause();
		forthPageTl.pause();

		gsap.to(".subMarine", {opacity: 0, duration: 0.1, delay: 0.3});
		gsap.to(window, {duration: 0.5, scrollTo: ".contactPage"});
		fifthPageTl.fromTo(".contact", {opacity: 0, y: 50}, {y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back", delay: 0.3});
		fifthPageTl.play();
	});

	// onclick animation for contactPage


	$(document).on('click', 'body .ascentBtnContact', function() {

		gsap.to(window, {duration: 0.5, scrollTo: ".sixthPage"});
		gsap.to(".subMarine", 1, {x: 0, opacity: 1, bottom: "60vh", ease:"power1.inOut"})
		gsap.to(".subMarine", {opacity: 1, duration: 0.1, delay: 0.2});

	});

	$(document).on('click', 'body .backToTopBtnContact', function() {
		firstPageTl.pause();
		secondPageTl.pause();
		thirdPageTl.pause();
		forthPageTl.pause();
		fifthPageTl.pause();

		gsap.to(window, {duration: 4, scrollTo: "body", delay: 0.1});
		gsap.to(".subMarine", {x: 0, bottom: "10vh", duration: 0.5, ease:"power1.inOut", delay: 2});
		gsap.to(".subMarine", {opacity: 1, duration: 0.1, delay: 0.2});
		diveTextTl.play();
	});

	// loading container for present
	let loadToPresent = document.querySelector(".loadToPresent");
	let loadPresentText = document.querySelector(".loadPresentText");
	var loadToPresentTl = gsap.timeline();

	function backToPresent() {
		window.location.href = "../";
	}

	$(document).on('click', 'body .backToPresentBtnContact', function() {
		welcomeTl.kill();

		loadToPresentTl.fromTo(loadToPresent,{display: "none", opacity: 0}, {display: "flex", opacity: 1, duration: 0.5})
			.fromTo(loadPresentText, {opacity: 0}, {opacity: 1, repeat: 1, yoyo: true, duration: 0.5, onComplete : backToPresent});
	});

});