const routes = [
    {
        pathname: "/",
        pageContent: homePage,
        title: "ustwo Adventure",
        description: "Investing in creative companies, differently. We want to help others build businesses on top of strong culture, values and design."
    },
    {
        pathname: "/approach",
        pageContent: approachPage,
        title: "Approach — ustwo Adventure",
        description: "We invest in companies that prioritise sustainability, inclusivity and deep care, and founders with true heart and ambition."
    },
    {
        pathname: "/portfolio",
        pageContent: portfolioPage,
        title: "Portfolio — ustwo Adventure",
        description: "Our family of companies. ustwo Adventure invests in creative companies, differently."
    },
    {
        pathname: "/contact",
        pageContent: contactPage,
        title: "Contact — ustwo Adventure",
        description: "Contact ustwo Adventure — investing in creative companies, differently."
    }
];


const pageContentContainer = document.querySelector(".page-content-container");

const metaTitles = document.querySelectorAll(`
    meta[property="og:title"],
    meta[name="twitter:title"]
`);

const metaDescriptions = document.querySelectorAll(`
    meta[name="description"],
    meta[property="og:description"],
    meta[name="twitter:description"]
`);

const canonicalTag = document.querySelector(`link[rel="canonical"]`);


const pageContentChange = page => {
    while (pageContentContainer.firstChild) {
        pageContentContainer.removeChild(pageContentContainer.firstChild);
    }
    pageContentContainer.appendChild(page);

    navLinkSetup();
    modalLinkSetup();
    lzy();
    if (page == approachPage) approachStageScroll();
    if (page == contactPage) formHandlingSetup();
};


const goToPage = (pathName, hasTransition = false) => {
    const page = routes.find(route => route.pathname == pathName);

    document.title = page.title;
    metaTitles.forEach(title => title.setAttribute("content", page.title));
    metaDescriptions.forEach(tag => tag.setAttribute("content", page.description));
    canonicalTag.setAttribute("href", `https://adventure.ustwo.com${page.pathname}`);

    if (orbitLetters[0].innerHTML != "A") orbitLetterChange("ADVENTURE");

    if (hasTransition == true) {
        pageContentContainer.classList.add("transition");
        setTimeout(() => {
            pageContentChange(page.pageContent);

            if (window.pageYOffset > 100) window.scrollTo(0, 0);
            pageContentContainer.classList.remove("transition");
        }, 200);
    } else {
        pageContentChange(page.pageContent);
    }
};


const goTo404 = () => {
    pageContentChange(fourOhFourPage);

    document.title = "404 — ustwo Adventure";
    if (orbitLetters[0].innerHTML != "4") orbitLetterChange("404ERROR");
};


const navLinkSetup = () => {
    const navLinks = document.querySelectorAll("a.nav");

    navLinks.forEach(link => {
        link.addEventListener("click", (e, pathName) => {
            pathName = link.getAttribute("href");
            if (pathName != window.location.pathname) {
                window.history.pushState({}, pathName, window.location.origin + pathName);
                goToPage(pathName, true);
            }
            e.preventDefault();
        });
    });
};


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


console.log("%c It's always fun looking under the hood ツ ", "background: #f32d94; color: #fff", "--> https://ustwo.com/join-us");
