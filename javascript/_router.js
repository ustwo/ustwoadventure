const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": ""
};


const pageContentContainer = document.querySelector(".content-wrapper");

const orbitLetters = Array.from(document.querySelectorAll("header .logo ul li"));
const orbitLetterChange = string => {
    if (string.length == 9) {
        for (var i = 0; i < orbitLetters.length; i++) {
            orbitLetters[i].innerHTML = string[i];
        }
    }
};


const goToPage = pathName => {
    if (orbitLetters[0] != "A") {
        orbitLetterChange("ADVENTURE");
    }

    pageContentContainer.classList.add("transition");
    document.title = `${window.location.pathname.split("/")} - ustwo Adventure`;

    setTimeout(() => {
        pageContentContainer.innerHTML = routes[pathName];
        lzy();
        navLinkSetup();
        if (pathName == "/approach") approachStageScroll();
        if (window.pageYOffset > 100) window.scrollTo(0, 0);
        pageContentContainer.classList.remove("transition");
    }, 150);
};


const goTo404 = () => {
    if (orbitLetters[0] != "4") {
        orbitLetterChange("404ERROR-");
    }
    pageContentContainer.innerHTML = fourOhFourPage;
};


const navLinkSetup = () => {
    const navLinks = document.querySelectorAll("a.nav");
    navLinks.forEach(link => {
        const pathName = link.getAttribute("data-pathname");
        link.addEventListener("click", e => {
            if (pathName != window.location.pathname) {
                goToPage(pathName);
                window.history.pushState({}, pathName, window.location.origin + pathName);
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
approachStageScroll();


window.onpopstate = () => {
    if (routes.hasOwnProperty(window.location.pathname)) {
        goToPage(window.location.pathname);
    } else {
        goTo404();
    }
};
