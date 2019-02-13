const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": ""
};

const pageContentContainer = document.querySelector(".content-wrapper");
pageContentContainer.innerHTML = routes[window.location.pathname];

const goToPage = pathName => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    pageContentContainer.classList.add("transition");
    setTimeout(() => pageContentContainer.innerHTML = routes[pathName], 200);
    setTimeout(() => lzy(), 200);
    setTimeout(() => pageContentContainer.classList.remove("transition"), 200);
};

const navLinks = document.querySelectorAll("a.nav");
navLinks.forEach(link => {
    const pathName = link.getAttribute("data-pathname");
    link.addEventListener("click", e => {
        goToPage(pathName);
        e.preventDefault();
    });
});
