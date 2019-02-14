const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": "",
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


const goToPage = pathName => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    pageContentContainer.classList.add("transition");
    setTimeout(() => pageContentContainer.innerHTML = routes[pathName], 150);
    setTimeout(() => lzy(), 150);
    if (window.pageYOffset > 400) setTimeout(() => window.scrollTo(0, 0), 150);
    setTimeout(() => pageContentContainer.classList.remove("transition"), 150);
    // orbitLetters.innerHTML = "<li>A</li><li>D</li><li>V</li><li>E</li><li>N</li><li>T</li><li>U</li><li>R</li><li>E</li>";
};


window.onpopstate = () => {
    pageContentContainer.classList.add("transition");
    setTimeout(() => pageContentContainer.innerHTML = routes[window.location.pathname], 150);
    setTimeout(() => lzy(), 150);
    if (window.pageYOffset > 400) setTimeout(() => window.scrollTo(0, 0), 150);
    setTimeout(() => pageContentContainer.classList.remove("transition"), 150);
};


const navLinks = document.querySelectorAll("a.nav");
navLinks.forEach(link => {
    const pathName = link.getAttribute("data-pathname");
    link.addEventListener("click", e => {
        goToPage(pathName);
        e.preventDefault();
    });
});
