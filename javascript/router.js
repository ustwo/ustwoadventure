const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": "",
};


const navLinkSetup = () => {
    const navLinks = document.querySelectorAll("a.nav");
    navLinks.forEach(link => {
        const pathName = link.getAttribute("data-pathname");
        link.addEventListener("click", e => {
            goToPage(pathName);
            window.history.pushState({}, pathName, window.location.origin + pathName);
            e.preventDefault();
        });
    });
};


const pageContentContainer = document.querySelector(".content-wrapper");
const orbitLetters = Array.from(document.querySelectorAll("header .logo ul li"));

if (routes.hasOwnProperty(window.location.pathname)) {
    pageContentContainer.innerHTML = routes[window.location.pathname];
} else {
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

lzy();
navLinkSetup();


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
    if (window.pageYOffset > 400) setTimeout(() => window.scrollTo(0, 0), 150);
    setTimeout(() => pageContentContainer.classList.remove("transition"), 150);
};


window.onpopstate = () => {
    goToPage(window.location.pathname);
};
