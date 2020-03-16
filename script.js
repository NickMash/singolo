function active_home() {
    document.getElementById("home_link").classList.add('nav__name-click');
    document.getElementById("services_link").classList.remove('nav__name-click');
    document.getElementById("portfolio_link").classList.remove('nav__name-click');
    document.getElementById("about_link").classList.remove('nav__name-click');
    document.getElementById("contact_link").classList.remove('nav__name-click');
}

function active_services() {
    document.getElementById("home_link").classList.remove('nav__name-click');
    document.getElementById("services_link").classList.add('nav__name-click');
    document.getElementById("portfolio_link").classList.remove('nav__name-click');
    document.getElementById("about_link").classList.remove('nav__name-click');
    document.getElementById("contact_link").classList.remove('nav__name-click');
}

function active_portfolio() {
    document.getElementById("home_link").classList.remove('nav__name-click');
    document.getElementById("services_link").classList.remove('nav__name-click');
    document.getElementById("portfolio_link").classList.add('nav__name-click');
    document.getElementById("about_link").classList.remove('nav__name-click');
    document.getElementById("contact_link").classList.remove('nav__name-click');
}

function active_about() {
    document.getElementById("home_link").classList.remove('nav__name-click');
    document.getElementById("services_link").classList.remove('nav__name-click');
    document.getElementById("portfolio_link").classList.remove('nav__name-click');
    document.getElementById("about_link").classList.add('nav__name-click');
    document.getElementById("contact_link").classList.remove('nav__name-click');
}

function active_contact() {
    document.getElementById("home_link").classList.remove('nav__name-click');
    document.getElementById("services_link").classList.remove('nav__name-click');
    document.getElementById("portfolio_link").classList.remove('nav__name-click');
    document.getElementById("about_link").classList.remove('nav__name-click');
    document.getElementById("contact_link").classList.add('nav__name-click');
}

let controls = document.querySelectorAll('.controls');
for(let i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


let playing = true;
let pauseButton = document.getElementById('pause');

function pauseSlideshow(){
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide,4000);
}

pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};

let next = document.getElementById('next');
let previous = document.getElementById('previous');

next.onclick = function(){
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
};

