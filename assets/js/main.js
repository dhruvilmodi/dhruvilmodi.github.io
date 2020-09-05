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
    gsap.to(".subMarine", 1, {
        opacity: 1,
        delay: 1
    });
    gsap.fromTo(".subMarine", 4, {
        y: 10,
        rotate: 5
    },{
        y: -10,
        rotate: -5,
        yoyo:true,
        repeat: -1,
        ease: "power1.inOut"
    });
}

/* ---------------- divetext animation ---------------- */

function diveTextAnimation() {
    gsap.fromTo(".diveText", 1, {
        opacity: 0.2
    },{
        opacity: 1,
        yoyo:true,
        repeat: -1,
        ease: "power1.inOut"
    });
}

/* ---------------- fish animation ---------------- */

function fishAnim() {
	$(".fish1About").fadeIn("fast");
	$(".fish2About").fadeIn("fast");
	$(".fish3About").fadeIn("fast");
	$(".fish4About").fadeIn("fast");
	$(".fish5About").fadeIn("fast");

	// fish1
	gsap.fromTo(".fish1About", {
		x: "100vw"
	},{
		x: -700,
		ease: "power4.in",
		duration: 6,
		repeat: -1,
		repeatDelay: 3
	});

	// fish2
	gsap.fromTo(".fish2About", {
		x: "100vw"
	},{
		x: -700,
		ease: "power4.in",
		duration: 6,
		repeat: -1,
		repeatDelay: 3
	});

	// fish3
	gsap.fromTo(".fish3About", {
		x: "100vw"
	},{
		x: -700,
		ease: "power4.in",
		duration: 6,
		repeat: -1,
		repeatDelay: 3
	});

	// fish4
	gsap.fromTo(".fish4About", {
		x: "100vw"
	},{
		x: -700,
		ease: "power4.in",
		duration: 6,
		repeat: -1,
		repeatDelay: 3
	});

	// fish5
	gsap.fromTo(".fish5About", {
		x: "100vw"
	},{
		x: -800,
		ease: "power4.in",
		duration: 6,
		repeat: -1,
		repeatDelay: 3
	});
}

/* ---------------- about animation ---------------- */

function aboutAnim() {
	gsap.timeline().to(".about", {opacity: 1, stagger: 0.2, duration: 1.5, ease: "back"})
}

/* ---------------- jellyFish animation ---------------- */

function jellyAnimation() {
	// $(".jellyFish1").fadeIn("fast");

	// jelly1
	gsap.fromTo(".jellyFish1", {
		y: 10,
		x: -5,
		rotate: 5
	},{
		y: -10,
		x: 5,
		rotate: -5,
		ease: "power1.inOut",
		duration: 3,
		yoyo: true,
		repeat: -1,
	});

	// jelly2
	gsap.fromTo(".jellyFish2", {
		y: -10,
		x: 4,
		rotate: 4
	},{
		y: 10,
		x: -5,
		rotate: -5,
		ease: "power1.inOut",
		duration: 3,
		yoyo: true,
		repeat: -1,
	});

	// jelly3
	gsap.fromTo(".jellyFish3", {
		y: -5,
		x: 2,
	},{
		y: 5,
		x: -2,
		ease: "power2.inOut",
		duration: 5,
		yoyo: true,
		repeat: -1,
	});

}

/* ---------------- skillsPage animation ---------------- */
function skillsAnimation() {
	gsap.timeline().to(".skills", {opacity: 1, stagger: 0.1, duration: 1.5, ease: "back"});
	gsap.fromTo(".skillIcons", {rotate: 2},{rotate: -2, yoyo: true, ease:"power1.inOut", repeat: -1, duration: 1});
}


/* -------------------------------------------------------------- */

$(document).ready(function(){

	var aboutAnimated = false;

	$(".fish1About").fadeOut("fast");
	$(".fish2About").fadeOut("fast");
	$(".fish3About").fadeOut("fast");
	$(".fish4About").fadeOut("fast");
	$(".fish5About").fadeOut("fast");

	// $(".jellyFish1").fadeOut("fast");

    heroPageAnimation();
    subAnimation();
	diveTextAnimation();
	fishAnim();
	jellyAnimation();
	

	$(document).on('scroll', function() {
		// about page animation on scroll
		if( $(this).scrollTop() >= $('.diveText').position().top){
			if (aboutAnimated == false) {
				aboutAnim();
			}
		}
	});

	window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 300) {
            gsap.to(".subMarine", 1, {bottom: 400, ease:"power1.inOut"});
		}
		if (document.documentElement.scrollTop < 300){
            gsap.to(".subMarine", 1, {bottom: "20vh", ease:"power4.Out"});
		}
		if (document.documentElement.scrollTop > 1400){
			skillsAnimation();
		}
		
    });


});