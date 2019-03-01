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
