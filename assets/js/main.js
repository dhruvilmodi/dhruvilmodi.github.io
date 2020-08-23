/* ------------ heropage animation ------------ */

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

function heroPageAnimation() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("D0B52137081046E78024DFE5FF4AA5C9");
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
	exportRoot = new lib.heroPageAnim2();
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

/* -------------------------------------------------------------- */

$(document).ready(function(){
    heroPageAnimation();
    subAnimation();
    diveTextAnimation();
});