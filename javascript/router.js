const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": "",
    "/404": fourOhFourPage
};


const goToPage = pathName => {
    if (!routes.hasOwnProperty(window.location.pathname)) {
        orbitLetters[0].innerHTML = "A";
        orbitLetters[1].innerHTML = "D";
        orbitLetters[2].innerHTML = "V";
        orbitLetters[3].innerHTML = "E";
        orbitLetters[4].innerHTML = "N";
        orbitLetters[5].innerHTML = "T";
        orbitLetters[6].innerHTML = "U";
        orbitLetters[7].innerHTML = "R";
        orbitLetters[8].innerHTML = "E";
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
    orbitLetters[0].innerHTML = "4";
    orbitLetters[1].innerHTML = "0";
    orbitLetters[2].innerHTML = "4";
    orbitLetters[3].innerHTML = "E";
    orbitLetters[4].innerHTML = "R";
    orbitLetters[5].innerHTML = "R";
    orbitLetters[6].innerHTML = "O";
    orbitLetters[7].innerHTML = "R";
    orbitLetters[8].innerHTML = "-";
}


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


const pageContentContainer = document.querySelector(".content-wrapper");
const orbitLetters = Array.from(document.querySelectorAll("header .logo ul li"));

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
