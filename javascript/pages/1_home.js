const latestInvestment = portfolioArray[portfolioArray.length - 1];
const latestInvestmentItem = `
    <a class="latest-investment-item" href="#modal-${ kebabCase(latestInvestment.name) }">
        <p class="tag">Latest investment:</p>
        <div class="image-container">
            <img class="company-image" data-src="${ latestInvestment.image }" alt="${ latestInvestment.name }'s company photo">
            <img class="arrow" data-src="images/arrow_white.svg" alt="">
        </div>
        <h1>${ latestInvestment.name }</h1>
        <p class="copy">${ latestInvestment.line }</p>
    </a>
`;


const portfolioMinusLatest = portfolioArray.slice(0, portfolioArray.length - 1);
const livePortfolioMinusLatest = portfolioMinusLatest.filter(obj => obj.status === PORTFOLIO_STATUS.LIVE);
const portfolioPreviewItems = shuffle(livePortfolioMinusLatest).slice(0, 5);
const portfolioPreview = createPortfolioItems(portfolioPreviewItems, true).join("");


const homePage = document.createElement("div");
homePage.className = "home-content";

homePage.innerHTML = `

    <h1>
        ustwo Adventure invests in creative companies, <span class="differently">differently</span>
    </h1>

    <div class="top-row">

        <div class="path-for-companies">
            <h2>A path for game-changing companies</h2>
            <p>
                When you combine long-term thinking with strong culture and design,
                you create game-changing companies. We want to help others build
                businesses on top of these principles.
            </p>
            <p>
                Whether by equity or revenue share, our approach to investing
                gives founders the option to grow their company as they see fit.
            </p>
            <a class="nav button internal" href="/approach">Our approach</a>
            <!-- <a class="nav button internal" href="/apply">Apply</a> -->
        </div>

        ${ latestInvestmentItem }

    </div>

    <div class="our-portfolio">
        <h2>Our Portfolio</h2>
        <p>
            We invest in early-stage companies that are building something
            bigger than an exit.
        </p>
        <a class="nav button internal" href="/portfolio">See all</a>
    </div>

    <div class="portfolio-preview">
        ${ portfolioPreview }
    </div>

    <div class="bottom-row">

        <div class="collective-genius">
            <h2>Collective genius</h2>
            <p>
                ustwo builds products, services and companies that make a meaningful
                impact on the world. By caring deeply for our people, clients, and
                partners, we believe that we can unleash the “collective genius” of
                all of us.
            </p>
            <a class="button external" href="https://ustwo.com" target="_blank" rel="noopener">ustwo.com</a>
        </div>

        <video autoplay playsinline loop muted
            data-src="https://player.vimeo.com/external/310346824.sd.mp4?s=5907d9389a6114dec39081532a102d4101c32c6d&profile_id=164"
            poster="images/monument-valley.jpg">
        </video>

    </div>

`;
