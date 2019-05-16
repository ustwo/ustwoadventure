const portfolioItems = createPortfolioItems(shuffle(allPortfolio)).join("");


const portfolioPage = document.createElement("div");
portfolioPage.className = "portfolio-content";

portfolioPage.innerHTML = `

    <h1>
        Our family of companies
    </h1>

    <div class="portfolio-container">
        ${ portfolioItems }
    </div>

`;
