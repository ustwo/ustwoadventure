const shuffledPortfolioArrayCopy = shuffle(portfolioArray.slice());
const portfolioItems = createPortfolioItems(shuffledPortfolioArrayCopy, false).join("");


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
