const modalLinks = document.querySelectorAll(".portfolio-item, .latest-investment-item");
const activeModalContainer = document.querySelector(".active-modal-container");

let clonedModal;

modalLinks.forEach(modalLink => {
    modalLink.addEventListener("click", e => {
        const modal = document.querySelector(modalLink.href);
        clonedModal = modal.cloneNode(true);

        activeModalContainer.appendChild(clonedModal);

        e.preventDefault();
    });
});


document.addEventListener("click", e => {
    if (e.target != clonedModal) {
        activeModalContainer.removeChild(clonedModal);
    }
});
