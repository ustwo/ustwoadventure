const portfolioItems = createPortfolioItems(shuffle(portfolioArray)).join("");

const portfolioPage = `
    <div class="portfolio-content">

        <h1>
            Our family of companies
        </h1>

        <div class="portfolio-container">
            ${ portfolioItems }
        </div>


    </div>
`;
