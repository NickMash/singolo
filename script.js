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


let slideIndex = 1;

showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
      if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
   }

function changeWallpaperVertical() {
    if (document.getElementById("vertical_wallpaper").classList.contains('vertical-phone__wallpaper')) {
        document.getElementById("vertical_wallpaper").classList.add('vertical-phone__wallpaper_turn_off');
        document.getElementById("vertical_wallpaper").classList.remove('vertical-phone__wallpaper');
    }
    else
    {
        document.getElementById("vertical_wallpaper").classList.remove('vertical-phone__wallpaper_turn_off');
        document.getElementById("vertical_wallpaper").classList.add('vertical-phone__wallpaper');
    }
}

function changeWallpaperHorizontal() {
    if (document.getElementById("horizontal_wallpaper").classList.contains('horizontal-phone__wallpaper')) {
        document.getElementById("horizontal_wallpaper").classList.add('horizontal-phone__wallpaper_turn_off');
        document.getElementById("horizontal_wallpaper").classList.remove('horizontal-phone__wallpaper');
    }
    else
    {
        document.getElementById("horizontal_wallpaper").classList.remove('horizontal-phone__wallpaper_turn_off');
        document.getElementById("horizontal_wallpaper").classList.add('horizontal-phone__wallpaper');
    }
}

function changeWallpaper2() {
    if (document.getElementById("green_wallpaper").classList.contains('vertical-phone__wallpaper-2')) {
        document.getElementById("green_wallpaper").classList.add('turn_off');
        document.getElementById("green_wallpaper").classList.remove('vertical-phone__wallpaper-2');
    }
     else
    {
    document.getElementById("green_wallpaper").classList.remove('turn_off');
    document.getElementById("green_wallpaper").classList.add('vertical-phone__wallpaper-2');
    }
}