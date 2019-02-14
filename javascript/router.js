const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": "",
    "/404": fourOhFourPage
};


const pageContentContainer = document.querySelector(".content-wrapper");

const orbitLetterContainer = document.querySelector("header .logo ul");
const orbitLetters = Array.from(document.querySelectorAll("header .logo ul li"));
const orbitLetterChange = string => {
    for (var i = 0; i < orbitLetters.length; i++) {
        orbitLetters[i].innerHTML = string[i];
    }
};


const goToPage = pathName => {
    if (orbitLetters[0] != "A") {
        orbitLetterChange("ADVENTURE");
    }
    pageContentContainer.classList.add("transition");
    setTimeout(() => pageContentContainer.innerHTML = routes[pathName], 150);
    setTimeout(() => lzy(), 150);
    setTimeout(() => navLinkSetup(), 150);
    if (window.pageYOffset > 100) setTimeout(() => window.scrollTo(0, 0), 150);
    setTimeout(() => pageContentContainer.classList.remove("transition"), 150);
};


const goTo404 = () => {
    pageContentContainer.innerHTML = fourOhFourPage;
    if (orbitLetters[0] != "4") {
        orbitLetterChange("404ERROR-");
    }
};


const navLinkSetup = () => {
    const navLinks = document.querySelectorAll("a.nav");
    navLinks.forEach(link => {
        const pathName = link.getAttribute("data-pathname");
        link.addEventListener("click", e => {
            if (pathName != window.location.pathname) {
                goToPage(pathName);
                window.history.pushState({}, pathName, window.location.origin + pathName);
                // document.title = `${window.location.pathname.split("/")} - ustwo Adventure`;
            }
            e.preventDefault();
        });
    });
};


if (routes.hasOwnProperty(window.location.pathname)) {
    pageContentContainer.innerHTML = routes[window.location.pathname];
} else {
    goTo404();
}


lzy();
navLinkSetup();


window.onpopstate = () => {
    if (routes.hasOwnProperty(window.location.pathname)) {
        goToPage(window.location.pathname);
    } else {
        goToPage("/404");
    }
};
