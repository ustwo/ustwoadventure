const logoRing = document.querySelector("header .logo");
const logoUstwo = document.querySelector("header .logo img");
const tiltLogo = tilt => {
    logoRing.style.transform = `rotate(${-(tilt + 10)}deg)`;
    logoUstwo.style.transform = `rotate(${(tilt + 10)}deg)`;
};

window.addEventListener("deviceorientation", e => {
    logoRing.style.transition = "transform 4s cubic-bezier(0.6, 0, 0.5, 1)";
    logoUstwo.style.transition = "transform 4s cubic-bezier(0.6, 0, 0.5, 1)";

    const tilt = (window.innerHeight > window.innerWidth) ? e.gamma : e.beta;
    const cappedTilt = Math.max(-35, Math.min(15, tilt));

    tiltLogo(cappedTilt);
});

const orbitLetters = Array.from(document.querySelectorAll("header .logo ul li"));
const orbitLetterChange = string => {
    if (string.length == 9) {
        for (var i = 0; i < orbitLetters.length; i++) {
            orbitLetters[i].innerHTML = string[i];
        }
    }
};




const footerADVLetters = document.querySelectorAll("footer .left .ADV span");
const moveLetter = letter => {
    const x = 10 * (Math.floor(Math.random() * 4)) - 10;
    const y = 10 * (Math.floor(Math.random() * 4)) - 10;

    letter.style.transform = `translate(${x}px, ${y}px)`;
};

footerADVLetters.forEach(letter => {
    letter.addEventListener("mouseover", () => moveLetter(letter));
    letter.addEventListener("click", () => moveLetter(letter));
});




const approachStageScroll = () => {
    const approachStages = document.querySelectorAll(".stages div");
    const observer = new IntersectionObserver(onIntersection, {
        rootMargin: "-25%",
        threshold: 0.5
    });
    const stageScrolled = stage => {
        stage.classList.add("scrolled");
    };
    approachStages.forEach(stage => observer.observe(stage));
    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                stageScrolled(entry.target);
            }
        });
    }
};






// SPA logic
const routes = {
    "/": homePage,
    "/approach": approachPage,
    "/portfolio": portfolioPage,
    "/apply": "",
    "/faq": ""
};



const pageContentContainer = document.querySelector(".content-wrapper");



const goToPage = pathName => {
    if (orbitLetters[0] != "A") {
        orbitLetterChange("ADVENTURE");
    }

    pageContentContainer.classList.add("transition");
    document.title = `${window.location.pathname.split("/")} - ustwo Adventure`;

    setTimeout(() => {
        pageContentContainer.innerHTML = routes[pathName];
        if (window.pageYOffset > 100) window.scrollTo(0, 0);
        pageContentContainer.classList.remove("transition");

        lzy();
        navLinkSetup();
        if (pathName == "/approach") approachStageScroll();
    }, 150);
};



const goTo404 = () => {
    if (orbitLetters[0] != "4") {
        orbitLetterChange("404ERROR-");
    }
    pageContentContainer.innerHTML = fourOhFourPage;
};



const navLinkSetup = () => {
    const navLinks = document.querySelectorAll("a.nav");
    navLinks.forEach(link => {
        const pathName = link.getAttribute("data-pathname");
        link.addEventListener("click", e => {
            if (pathName != window.location.pathname) {
                goToPage(pathName);
                window.history.pushState({}, pathName, window.location.origin + pathName);
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



window.onpopstate = () => {
    if (routes.hasOwnProperty(window.location.pathname)) {
        goToPage(window.location.pathname);
    } else {
        goTo404();
    }
};
