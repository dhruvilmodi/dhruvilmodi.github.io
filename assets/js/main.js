/* ------------ heropage animation ------------ */

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function heroPageAnimation() {

	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("105762F5EC3F491B90B0CB62D761F914");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.heroPageAnim3();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

/* ---------------- submarine animation ---------------- */

function subAnimation() {
    gsap.to(".subMarine", 1, {opacity: 1, delay: 1});
    gsap.fromTo(".subMarine", 4, {y: 10, rotate: 5}, {y: -10, rotate: -5, yoyo:true, repeat: -1, ease: "power1.inOut"});
}

/* -------------------------------------------------------------- */

$(document).ready(function(){

	var diveTextTl = gsap.timeline();
	var fishTl = gsap.timeline({duration:1, repeat: -1, repeatDelay: 2});
	var homeTl = gsap.timeline();
	var aboutTl = gsap.timeline();
	var jellyTl = gsap.timeline();
	var sharksTl = gsap.timeline({duration:1, repeat: -1, repeatDelay: 2});

	$(".aboutFishes").fadeOut("fast");

	/* ---------------- submarine scroll control ---------------- */

	window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 300) {
            gsap.to(".subMarine", 1, {bottom: 400, ease:"power1.inOut"});
		}
		if (document.documentElement.scrollTop < 300){
            gsap.to(".subMarine", 1, {bottom: "20vh", ease:"power4.Out"});
		}
    });

	/* ---------------- divetext animation ---------------- */
	diveTextTl.fromTo(".diveButton", 1, {opacity: 0.2},{opacity: 1, yoyo:true, repeat: -1, ease: "power1.inOut"});
	diveTextTl.play();

    heroPageAnimation();
    subAnimation();

	// onclick animation for homePage

	$(document).on('click', 'body .diveButton', function() {
		$(".aboutFishes").fadeIn("fast");
	
		fishTl.fromTo(".fish1About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish2About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish3About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish4About", {x: "100vw"}, {x: -700, ease: "power4.in", duration: 6}, 1)
			.fromTo(".fish5About", {x: "100vw"}, {x: -800, ease: "power4.in", duration: 6}, 1);
		fishTl.play();

		gsap.to(window, {duration: 2, scrollTo: ".aboutPage"});

		homeTl.to(".subMarine", 1, {bottom: 400, ease:"power1.inOut"})
			.to(".about", {opacity: 1, stagger: 0.2, duration: 1, ease: "back"});
		
		homeTl.play();
		diveTextTl.pause();
	});

	// onclick animation for aboutPage

	$(document).on('click', 'body .ascentBtnAbout', function() {
		gsap.to(window, {duration: 2, scrollTo: ".heroPage"});
		diveTextTl.play();
		fishTl.pause();
		jellyTl.pause();
	});

	$(document).on('click', 'body .descentBtnAbout', function() {
		homeTl.pause();

		jellyTl.fromTo(".jellyFish1", {y: 10, x: -5, rotate: 5}, {y: -10, x: 5, rotate: -5, ease: "power1.inOut", duration: 3, yoyo: true, repeat: -1}, 0.2)
			.fromTo(".jellyFish2", {y: -10, x: 4, rotate: 4},{y: 10, x: -5, rotate: -5, ease: "power1.inOut", duration: 3, yoyo: true, repeat: -1}, 0.2)
			.fromTo(".jellyFish3", {y: -5, x: 2}, {y: 5, x: -2, ease: "power2.inOut", duration: 5, yoyo: true, repeat: -1}, 0.2);

		jellyTl.play();

		gsap.to(window, {duration: 2, scrollTo: ".skillsPage"});

		aboutTl.to(".skills", {opacity: 1, stagger: 0.1, duration: 1.5, ease: "back"})
			.fromTo(".skillIcons", {rotate: 2},{rotate: -2, yoyo: true, ease:"power1.inOut", repeat: -1, duration: 1})
			.to(".skillsBtns", {opacity: 1, duration: 0.2, ease: "back"});
		
		aboutTl.play();

	});

	// onclick animation for skillsPage

	$(document).on('click', 'body .ascentBtnSkills', function() {
		gsap.to(window, {duration: 2, scrollTo: ".aboutPage"});
		fishTl.play();
		jellyTl.pause();
	});

	$(document).on('click', 'body .descentBtnSkills', function() {
		gsap.to(window, {duration: 2, scrollTo: ".projectPage"});

		sharksTl.fromTo(".shark1", {x: "0"},{x:"-130vw", repeat: -1, repeatDelay: 2, ease: "power1.in", duration: 12}, 1)
		.fromTo(".shark2", {x: "0"},{x:"-120vw", repeat: -1, repeatDelay: 2, ease: "power1.in", duration: 12}, 1);
	});



});