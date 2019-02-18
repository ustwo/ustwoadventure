const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": ""
};



const pageContentContainer = document.querySelector(".content-wrapper");



const goToPage = pathName => {
    if (orbitLetters[0].innerHTML != "A") {
        orbitLetterChange("ADVENTURE");
    }

    pageContentContainer.classList.add("transition");
    // TODO:
    document.title = `${window.location.pathname.split("/")} - ustwo Adventure`;

    setTimeout(() => {
        pageContentContainer.innerHTML = routes[pathName];
        if (window.pageYOffset > 100) window.scrollTo(0, 0);
        pageContentContainer.classList.remove("transition");

        lzy();
        navLinkSetup();
        if (pathName == "/approach") approachStageScroll();
    }, 200);
};



const goTo404 = () => {
    if (orbitLetters[0].innerHTML != "4") {
        orbitLetterChange("404ERROR-");
    }
    pageContentContainer.innerHTML = fourOhFourPage;
    navLinkSetup();
};



const navLinkSetup = () => {
    const navLinks = document.querySelectorAll("a.nav");
    navLinks.forEach(link => {
        link.addEventListener("click", (e, pathName) => {
            pathName = link.getAttribute("data-pathname");
            if (pathName != window.location.pathname) {
                window.history.pushState({}, pathName, window.location.origin + pathName);
                goToPage(pathName);
            }
            e.preventDefault();
        });
    });
};



if (routes.hasOwnProperty(window.location.pathname)) {
    goToPage(window.location.pathname);
} else {
    goTo404();
}



if (window.location.hash) {
    const query = window.location.hash.substring(1);
    const parameters = query.split("&");
    var companyName, val;
    for (var i = 0; i < parameters.length; i++) {
        val = parameters[i].split("=");
        companyName = val[0];
    }
    // if (!companyName) return;
    $("#modal-" + companyName).modal();
}



window.onpopstate = () => {
    if (routes.hasOwnProperty(window.location.pathname)) {
        goToPage(window.location.pathname);
    } else {
        goTo404();
    }
};
