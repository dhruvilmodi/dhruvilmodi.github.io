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

	aboutAnimated = true;

	gsap.to(".aboutHead", 1, {
		opacity: 1,
		// delay: 4.5
	});

	gsap.to(".dhruvilImage", 1, {
		opacity: 1,
		// delay: 5
	});

	gsap.to(".aboutSub", 1, {
		opacity: 1,
		// delay: 5.5
	});
}

/* -------------------------------------------------------------- */

$(document).ready(function(){

	var aboutAnimated = false;

	$(".fish1About").fadeOut();
	$(".fish2About").fadeOut();
	$(".fish3About").fadeOut();
	$(".fish4About").fadeOut();
	$(".fish5About").fadeOut();

    heroPageAnimation();
    subAnimation();
	diveTextAnimation();
	fishAnim();

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
        }else{
            gsap.to(".subMarine", 1, {bottom: "20vh", ease:"power4.Out"});
        }
    });


});