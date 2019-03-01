const activeModalContainer = document.querySelector(".active-modal-container");
const closeModalButton = document.querySelector("a.close-modal");

let modalLinks = document.querySelectorAll("a.portfolio-item, a.latest-investment-item");
let clonedModal;


modalLinks.forEach(modalLink => {
    modalLink.addEventListener("click", e => {
        const modalHref = modalLink.href;
        const modalId = modalHref.substr(modalHref.indexOf("#"), modalHref.length);
        const modal = document.querySelector(modalId);
        openModal(modal);

        e.preventDefault();
    });
});


const openModal = modal => {
    clonedModal = modal.cloneNode(true);
    clonedModal.appendChild(closeModalButton);
    activeModalContainer.prepend(clonedModal);
    activeModalContainer.classList.add("show");
};


const closeModal = () => {
    activeModalContainer.removeChild(clonedModal);
    activeModalContainer.classList.remove("show");
};


// document.addEventListener("click", e => {
//     if (e.target != clonedModal) closeModal();
// });

// closeModalButton.addEventListener("click", closeModal());
