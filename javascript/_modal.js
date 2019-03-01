const activeModalContainer = document.querySelector(".active-modal-container");
const closeModalButton = document.querySelector ("a.close-modal");

let modalLinks = document.querySelectorAll("a.portfolio-item, a.latest-investment-item");
let clonedModal;


modalLinks.forEach(modalLink => {
    modalLink.addEventListener("click", e => {
        const modal = document.querySelector(modalLink.href);

        openModal(modal);

        e.preventDefault();
    });
});


const openModal = modal => {
    clonedModal = modal.cloneNode(true);

    activeModalContainer.appendChild(clonedModal);
};


const closeModal = () => {
    activeModalContainer.removeChild(clonedModal);
    activeModalContainer.classList.remove("show");
};


document.addEventListener("click", e => {
    if (e.target != clonedModal) closeModal();
});

closeModalButton.addEventListener("click", closeModal());
