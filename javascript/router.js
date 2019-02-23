const routes = [
    {
        pathname: "/",
        pageContent: homePage,
        title: "ustwo Adventure",
        description: "ustwo Adventure invests in creative companies, differently. No equity by default, shared revenue, and a capped return. Our approach gives founders the option to grow their company as they see fit."
    },
    {
        pathname: "/approach",
        pageContent: approachPage,
        title: "Approach — ustwo Adventure",
        description: "We invest to prioritise sustainability, independance and optionality. No equity by default, revenue shares and a capped return."
    },
    {
        pathname: "/portfolio",
        pageContent: portfolioPage,
        title: "Portfolio — ustwo Adventure",
        description: "Our family of companies."
    },
    {
        pathname: "/apply",
        // pageContent: applyPage,
        title: "Apply — ustwo Adventure",
        description: "Apply to ustwo Adventure — investment, but differently."
    },
    {
        pathname: "/faq",
        pageContent: faqPage,
        title: "FAQ — ustwo Adventure",
        description: "Frequently asked questions."
    }
];



const pageContentContainer = document.querySelector(".page-content-container");
const metaDescription = document.querySelector("meta[name='description']");



const goToPage = pathName => {
    const page = routes.find(route => route.pathname == pathName);
    document.title = page.title;
    metaDescription.setAttribute("content", page.description);

    pageContentContainer.classList.add("transition");
    if (orbitLetters[0].innerHTML != "A") orbitLetterChange("ADVENTURE");

    setTimeout(() => {
        pageContentContainer.innerHTML = page.pageContent;
        if (window.pageYOffset > 100) window.scrollTo(0, 0);
        pageContentContainer.classList.remove("transition");

        lzy();
        navLinkSetup();
        portfolioItemLinkSetup();
        if (pathName == "/approach") approachStageScroll();
    }, 200);
};



const goTo404 = () => {
    pageContentContainer.innerHTML = fourOhFourPage;
    document.title = "404 — ustwo Adventure";

    if (orbitLetters[0].innerHTML != "4") orbitLetterChange("404ERROR-");

    lzy();
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



const portfolioItemLinkSetup = () => {
    const portfolioItemElements = document.querySelectorAll("a.portfolio-item, .latest-investment a");

    if (portfolioItemElements) {
        portfolioItemElements.forEach(item => {
            item.addEventListener("click", companyName => {
                companyName = item.getAttribute("href").split("#modal-")[1];
                history.replaceState("", document.title, window.location.pathname + `#${companyName}`);
            });
        });
    }
};



const modalContainer = document.querySelector(".modal-container");
modalContainer.innerHTML = createModals(portfolioArray).join("");



if (routes.some(route => route.pathname == window.location.pathname)) {
    goToPage(window.location.pathname);
} else {
    goTo404();
}



window.onpopstate = () => {
    if (routes.some(route => route.pathname == window.location.pathname)) {
        goToPage(window.location.pathname);
    } else {
        goTo404();
    }
};



if (window.location.hash) {
    const query = window.location.hash.substring(1);
    const parameters = query.split("&");
    let companyName, val;
    for (var i = 0; i < parameters.length; i++) {
        val = parameters[i].split("=");
        companyName = val[0];
    }
    $(`#modal-${companyName}`).modal();
}
