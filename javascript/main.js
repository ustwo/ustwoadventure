const logoRing = document.querySelector("header .logo");
const logoUstwo = document.querySelector("header .logo img");
const tiltLogo = tilt => {
    logoRing.style.transform = `rotate(${-(tilt + 10)}deg)`;
    logoUstwo.style.transform = `rotate(${(tilt + 10)}deg)`;
};

if ("ontouchstart" in document.documentElement) {
    window.addEventListener("deviceorientation", e => {
        logoRing.style.transition = "transform 4s cubic-bezier(0.6, 0, 0.5, 1)";
        logoUstwo.style.transition = "transform 4s cubic-bezier(0.6, 0, 0.5, 1)";

        const tilt = (window.innerHeight > window.innerWidth) ? e.gamma : e.beta;
        const cappedTilt = Math.max(-35, Math.min(15, tilt));

        tiltLogo(cappedTilt);
    });
}

const orbitLetters = Array.from(document.querySelectorAll("header .logo ul li"));
const orbitLetterChange = string => {
    string = (string.length < 9) ? string.padEnd(9, "-") : string.substr(0, 9);
    string = string.toUpperCase();

    orbitLetters.forEach(letter => letter.classList.add("transition"));
    setTimeout(() => {
        for (var i = 0; i < orbitLetters.length; i++) {
            orbitLetters[i].innerHTML = string[i];
        }
        orbitLetters.forEach(letter => letter.classList.remove("transition"));
    }, 200);
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
    const approachStages = document.querySelectorAll(".approach-content .stages div");
    if (window.innerWidth < 450 && approachStages) {
        const onIntersection = entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    observer.unobserve(entry.target);
                    stageScrolled(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(onIntersection, {
            rootMargin: "-25%",
            threshold: 0.5
        });
        const stageScrolled = stage => {
            stage.classList.add("scrolled");
        };
        approachStages.forEach(stage => observer.observe(stage));
    }
};




console.log("%c It's always fun looking under the hood ツ ", "background: #f32d94; color: #fff", "--> https://ustwo.com/join-us");
