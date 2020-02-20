$(document).foundation();
// mad movies
let madMovies = document.querySelector("#madMovies");
let madMoviesDetails = document.querySelector("#madMoviesDetails");

// standaloneSvg
let standalone = document.querySelector("#standalone");
let standaloneDetails = document.querySelector("#standaloneDetails");

// missionChandra
let missionChandra = document.querySelector("#missionChandra");
let missionChandraDetails = document.querySelector("#missionChandraDetails");

// regexForm
let regexForm = document.querySelector("#regexForm");
let regexFormDetails = document.querySelector("#regexFormDetails");

/* --------------------- addEventListeners --------------------- */

madMovies.addEventListener("click", function () {
    madMovies.style.opacity = 0.1;
    madMoviesDetails.style.opacity = 1;
});

madMoviesDetails.addEventListener("click", function () {
    madMovies.style.opacity = 0.1;
    madMoviesDetails.style.opacity = 1;
});

standalone.addEventListener("click", function () {
    standalone.style.opacity = 0.1;
    standaloneDetails.style.opacity = 1;
});

standaloneDetails.addEventListener("click", function () {
    standalone.style.opacity = 0.1;
    standaloneDetails.style.opacity = 1;
});

missionChandra.addEventListener("click", function () {
    missionChandra.style.opacity = 0.1;
    missionChandraDetails.style.opacity = 1;
});

missionChandraDetails.addEventListener("click", function () {
    missionChandra.style.opacity = 0.1;
    missionChandraDetails.style.opacity = 1;
});

regexForm.addEventListener("click", function () {
    regexForm.style.opacity = 0.1;
    regexFormDetails.style.opacity = 1;
});

regexFormDetails.addEventListener("click", function () {
    regexForm.style.opacity = 0.1;
    regexFormDetails.style.opacity = 1;
});

/* ------------------------------------------------------------- */
