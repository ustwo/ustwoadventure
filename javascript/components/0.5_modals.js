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


const modalLinkSetup = () => {
    const modalLinks = document.querySelectorAll("a.portfolio-item, a.latest-investment-item");

    if (modalLinks) {
        modalLinks.forEach(link => {
            link.addEventListener("click", (e, companyName) => {
                companyName = link.getAttribute("href").split("#modal-")[1];
                history.replaceState("", document.title, window.location.pathname + `#${companyName}`);

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
    const clonedModal = modal.cloneNode(true);
    clonedModal.appendChild(closeModalButton);

    while (activeModalContainer.firstChild) activeModalContainer.removeChild(activeModalContainer.firstChild);
    activeModalContainer.appendChild(clonedModal);

    activeModalContainer.classList.add("show");
    document.body.classList.add("no-scroll");

    const companyphoto = activeModalContainer.querySelector("img[data-src]");
    companyphoto.setAttribute("src", companyphoto.getAttribute("data-src"));

    const blocker = document.querySelector(".blocker");
    blocker.addEventListener("click", e => {
        if (e.target == blocker && e.target != clonedModal) closeModal();
    });
};


const closeModal = () => {
    while (activeModalContainer.firstChild) activeModalContainer.removeChild(activeModalContainer.firstChild);

    activeModalContainer.classList.remove("show");
    document.body.classList.remove("no-scroll");

    history.replaceState("", document.title, window.location.pathname);
};


closeModalButton.addEventListener("click", e => {
    closeModal();
    e.preventDefault();
});


if (window.location.hash) {
    const query = window.location.hash.substring(1);
    const parameters = query.split("&");
    let companyName, val;
    for (var i = 0; i < parameters.length; i++) {
        val = parameters[i].split("=");
        companyName = val[0].toLowerCase();
    }
    openModal(`#modal-${companyName}`);
}
