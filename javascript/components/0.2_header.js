const logoRing = document.querySelector("header .logo");
const logoUstwo = document.querySelector("header .logo img");

const tiltLogo = tilt => {
    logoRing.style.transform = `rotate(${-(tilt + 10)}deg)`;
    logoUstwo.style.transform = `rotate(${(tilt + 10)}deg)`;
};

if ("ontouchstart" in document.documentElement) {
    window.addEventListener("deviceorientation", e => {
        logoRing.style.transition = "transform 6s cubic-bezier(0.6, 0, 0.5, 1)";
        logoUstwo.style.transition = "transform 6s cubic-bezier(0.6, 0, 0.5, 1)";

        const tilt = (window.innerHeight > window.innerWidth) ? e.gamma : e.beta;
        const cappedTilt = Math.max(-35, Math.min(15, (tilt * 0.6)));

        tiltLogo(cappedTilt);
    });
}


const orbitLetters = Array.from(document.querySelectorAll("header .logo ul li"));
const orbitLetterChange = string => {
    string = (string.length < 9) ? string.padEnd(9, "-") : string.substr(0, 9);
    string = string.toUpperCase();

    orbitLetters.forEach(letter => letter.classList.add("transition"));
    setTimeout(() => {
        for (let i = 0; i < orbitLetters.length; i++) {
            orbitLetters[i].textContent = string[i];
        }
        orbitLetters.forEach(letter => letter.classList.remove("transition"));
    }, 200);
};
