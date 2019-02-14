const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": "",
};


const pageContentContainer = document.querySelector(".content-wrapper");
const logoRingLetters = document.querySelector("header .logo ul");

if (routes.hasOwnProperty(window.location.pathname)) {
    pageContentContainer.innerHTML = routes[window.location.pathname];
} else {
    pageContentContainer.innerHTML = fourOhFourPage;
    logoRingLetters.innerHTML = "<li>4</li><li>0</li><li>4</li><li>E</li><li>R</li><li>R</li><li>O</li><li>R</li><li>-</li>";
}

lzy();


const goToPage = pathName => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    pageContentContainer.classList.add("transition");
    setTimeout(() => pageContentContainer.innerHTML = routes[pathName], 150);
    setTimeout(() => lzy(), 150);
    if (window.pageYOffset > 400) setTimeout(() => window.scrollTo(0, 0), 150);
    setTimeout(() => pageContentContainer.classList.remove("transition"), 150);
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
