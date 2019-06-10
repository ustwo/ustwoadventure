const createModals = a => a.map(obj => {
    return `
        <div id="modal-${ kebabCase(obj.name) }" class="modal">
            <div class="modal-inner">
                <div class="modal-details">
                    <h2>${ obj.name }</h2>
                    <a class="site-link" href="${ obj.url }" target="_blank" rel="noopener">${ obj.tidyurl }</a>
                    <a class="site-link-mobile" href="${ obj.url }" target="_blank" rel="noopener">${ obj.name }</a>
                    <p class="line">${ obj.line }</p>
                    <p class="copy">${ obj.copy }</p>
                </div>
                <div class="modal-image">
                    <img class="background" data-src="${ obj.image }" alt="${ obj.name }'s company photo"/>
                    <a href="${ obj.url }" target="_blank" rel="noopener"> <img class="logo" src="${ obj.logo }"/> </a>
                </div>
            </div>
        </div>
    `;
});


const modalContainer = document.querySelector(".modal-container");
modalContainer.innerHTML = createModals(portfolioArray).join("");




const activeModalContainer = document.querySelector(".active-modal-container");

const closeModalButton = document.createElement("a");
closeModalButton.classList.add("close-modal");
closeModalButton.href = ("");

let activeModalIndex,
    clonedModal,
    portfolioItemLinks,
    modalLinks;


const modalLinkSetup = () => {
    modalLinks = document.querySelectorAll("a.portfolio-item, a.latest-investment-item");
    portfolioItemLinks = document.querySelectorAll("a.portfolio-item");

    if (modalLinks) {
        modalLinks.forEach(link => {
            link.addEventListener("click", e => {
                const modalHref = link.href;
                const modalId = modalHref.substr(modalHref.indexOf("#"), modalHref.length);
                openModal(modalId);
                e.preventDefault();
            });
        });
    }
};


const openModal = modalId => {
    const modal = document.querySelector(modalId);
    clonedModal = modal.cloneNode(true);

    while (activeModalContainer.firstChild) activeModalContainer.removeChild(activeModalContainer.firstChild);
    activeModalContainer.appendChild(clonedModal);
    clonedModal.appendChild(closeModalButton);

    activeModalContainer.classList.add("show");
    document.body.classList.add("no-scroll");

    const companyphoto = activeModalContainer.querySelector("img[data-src]");
    companyphoto.setAttribute("src", companyphoto.getAttribute("data-src"));

    const companyName = modalId.split("#modal-")[1];
    history.replaceState("", document.title, window.location.pathname + `#${companyName}`);

    let parentPortfolioItem = document.querySelector(`[href="${modalId}"]`);
    activeModalIndex = (parentPortfolioItem) ? parseFloat(parentPortfolioItem.getAttribute("data-index")) : -1;

    if (modalLinks && parentPortfolioItem) {
        modalLinks.forEach(link => link.classList.remove("active"));
        parentPortfolioItem.classList.add("active");
    } else if (!parentPortfolioItem) {
        document.addEventListener("DOMContentLoaded", () => {
            parentPortfolioItem = document.querySelector(`[href="${modalId}"]`);
            parentPortfolioItem.classList.add("active");
        });
    }
};


const closeModal = () => {
    while (activeModalContainer.firstChild) activeModalContainer.removeChild(activeModalContainer.firstChild);

    activeModalContainer.classList.remove("show");
    modalLinks.forEach(link => link.classList.remove("active"));
    document.body.classList.remove("no-scroll");

    history.replaceState("", document.title, window.location.pathname);
};


activeModalContainer.addEventListener("click", e => {
    if (e.target == activeModalContainer && e.target != clonedModal) closeModal();
});


closeModalButton.addEventListener("click", e => {
    closeModal();
    e.preventDefault();
});


if (window.location.hash) {
    const query = window.location.hash.substring(1);
    const parameters = query.split("&");
    let companyName, val;
    for (let i = 0; i < parameters.length; i++) {
        val = parameters[i].split("=");
        companyName = val[0].toLowerCase();
    }
    const linkedModal = document.querySelector(`#modal-${companyName}`);
    if (linkedModal) openModal(`#modal-${companyName}`);
}


const arrowModalChange = indexChange => {
    const newIndex = activeModalIndex + indexChange;

    if (0 <= newIndex && newIndex < portfolioItemLinks.length) {
        const newModal = document.querySelector(`[data-index="${newIndex}"]`);
        const newModalHref = newModal.href;
        const newModalId = newModalHref.substr(newModalHref.indexOf("#"), newModalHref.length);
        openModal(newModalId);
    }
};


window.addEventListener("keydown", e => {
    if (activeModalContainer.classList.contains("show")) {
        if (e.key == "ArrowRight" || e.code == "Space") arrowModalChange(+1);
        if (e.key == "ArrowLeft") arrowModalChange(-1);
        if (e.key == "Escape") closeModal();
    }
});
