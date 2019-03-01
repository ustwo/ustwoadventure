const randomOffset = () => 10 * (Math.floor(Math.random() * 11)) - 50;

const createPortfolioItems = a => a.map(obj => {
    return `
        <a class="portfolio-item" href="#modal-${ kebabCase(obj.name) }" rel="modal:open"
        style="--offset: ${randomOffset()}px">
            <p class="name">${ obj.name }</p>
            <div class="image-container">
                <img class="company-image" data-src="${ obj.image }" alt="${ obj.name }'s company photo">
                <img class="arrow" data-src="images/arrow_white.svg" alt="">
            </div>
            <p class="copy">${ obj.line }</p>
        </a>
    `;
});
