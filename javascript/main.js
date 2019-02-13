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




const approachStages = document.querySelectorAll(".stages div");
const approachStageScroll = () => {
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

if (approachStages && window.innerWidth < 500) {
    approachStageScroll();
}




const portfolioGridItems = document.querySelectorAll(".portfolio-item");
portfolioGridItems.forEach(item => {
    const randomOffset = 10 * (Math.floor(Math.random() * 11)) - 50;
    item.style.setProperty("--offset", `${randomOffset}px`);
});
