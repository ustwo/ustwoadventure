const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": "",
    "": fourOhFourPage
};


const pageContentContainer = document.querySelector(".content-wrapper");
pageContentContainer.innerHTML = routes[window.location.pathname];
lzy();


const goToPage = pathName => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    pageContentContainer.classList.add("transition");
    setTimeout(() => pageContentContainer.innerHTML = routes[pathName], 170);
    setTimeout(() => lzy(), 170);
    setTimeout(() => pageContentContainer.classList.remove("transition"), 170);
};


window.onpopstate = () => {
    pageContentContainer.classList.add("transition");
    setTimeout(() => pageContentContainer.innerHTML = routes[window.location.pathname], 170);
    setTimeout(() => lzy(), 170);
    setTimeout(() => pageContentContainer.classList.remove("transition"), 170);
};


const navLinks = document.querySelectorAll("a.nav");
navLinks.forEach(link => {
    const pathName = link.getAttribute("data-pathname");
    link.addEventListener("click", e => {
        goToPage(pathName);
        e.preventDefault();
    });
});