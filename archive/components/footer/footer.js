const footerADVLetters = document.querySelectorAll("footer .left .ADV span");
const moveLetter = letter => {
    const x = 10 * Math.floor(Math.random() * 4) - 10;
    const y = 10 * Math.floor(Math.random() * 4) - 10;

    letter.style.transform = `translate(${x}px, ${y}px)`;
};

footerADVLetters.forEach(letter => {
    letter.addEventListener("mouseover", () => moveLetter(letter));
    letter.addEventListener("click", () => moveLetter(letter));
});

document.querySelector(".footerYear").textContent = new Date().getFullYear();
