const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": "",
    "/404": fourOhFourPage
};


const pageContentContainer = document.querySelector(".content-wrapper");
const orbitLetters = Array.from(document.querySelectorAll("header .logo ul li"));
const adventureLetters = "ADVENTURE";
const fourOhFourLetters = "404ERROR-";


const goToPage = pathName => {
    if (!routes.hasOwnProperty(window.location.pathname)) {
        for (var i = 0; i < orbitLetters.length; i++) {
            orbitLetters[i].innerHTML = adventureLetters[i];
        }
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
    for (var i = 0; i < orbitLetters.length; i++) {
        orbitLetters[i].innerHTML = fourOhFourLetters[i];
    }
};


const navLinkSetup = () => {
    const navLinks = document.querySelectorAll("a.nav");
    navLinks.forEach(link => {
        const pathName = link.getAttribute("data-pathname");
        link.addEventListener("click", e => {
            goToPage(pathName);
            window.history.pushState({}, pathName, window.location.origin + pathName);
            // document.title = `${window.location.pathname.split("/")} - ustwo Adventure`;
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
