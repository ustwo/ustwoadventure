const approachStageScroll = () => {
    const approachStages = document.querySelectorAll(".approach-content .stages div");
    if (window.innerWidth < 635 && window.matchMedia("(pointer: coarse)").matches) {
        const onIntersection = entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    observer.unobserve(entry.target);
                    stageScrolled(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(onIntersection, {
            rootMargin: "-25%",
            threshold: 0.5
        });
        const stageScrolled = stage => {
            stage.classList.add("scrolled");
        };
        approachStages.forEach(stage => observer.observe(stage));
    }
};


const approachPage = document.createElement("div");
approachPage.className = "approach-content";

approachPage.innerHTML = `

    <h1>A flexible path</h1>

    <div class="writing">

        <p>
            When you combine long-term thinking with strong culture + design,
            you create game-changing companies. We want to help others create
            businesses that are buit on these principles.
            <!-- Very few investment models
            allow founders to do that. We’re creating an alternative that lets
            you build a business on your terms, with independence and optionality. -->
        </p>

        <blockquote>
            Build a business on your terms
        </blockquote>

        <p>
            We know what it takes to build a company people believe in. We
            are creators. We are operators. We value our financial independence.
            Our culture is essential to our success. These traits have allowed
            us to take risks and make a meaningful impact. We want other
            founders to have the same opportunity.
        </p>

        <p>
            There are 5 main components to our model. We'll soon be publishing our
            full investment terms on Github, for people to dig into all of the details.

            <!-- If you want to dig into the full terms we use to invest, feel
            free to check them out
            <a href="https://github.com/ustwo/adventureterms" target="_blank" rel="noopener">on Github.</a> -->
        </p>

    </div>


    <div class="stages">

        <div class="stage-1">
            <h2 class="number" data-number="1">1</h2>
            <p class="stage-title">Investment of up to £500k</p>
            <p class="stage-copy">
                This capital is about unlocking pent-up growth, not subsidising
                future fundraises. This amount should credibly get you to
                profitability so this can be your last round
                (if that’s what you want).
            </p>
        </div>

        <div class="stage-2">
            <h2 class="number" data-number="2">2</h2>
            <p class="stage-title">No equity by default</p>
            <p class="stage-copy">
                This is about preserving a founder's most valuable asset. We
                can find other ways of realising value (see number 3).
            </p>
        </div>

        <div class="stage-3">
            <h2 class="number" data-number="3">3</h2>
            <p class="stage-title">Revenue share</p>
            <p class="stage-copy">
                These payments would kick in 2–3 years post investment, once
                the business has grown and can afford to take out a single
                digit percentage of revenue to repay investors.
            </p>
        </div>

        <div class="stage-4">
            <h2 class="number" data-number="4">4</h2>
            <p class="stage-title">A capped return</p>
            <p class="stage-copy">
                Our cap is 3X the original investment, not insignificant but
                certainly more modest than the 10X+ traditional venture capital
                wants from any given investment.
            </p>
        </div>

        <div class="stage-5">
            <h2 class="number" data-number="5">5</h2>
            <p class="stage-title">Equity option</p>
            <p class="stage-copy">
                This is also in the single digit % range. One day VC may make
                sense. One day you may want to sell your business. This option
                exists to give founders the flexibility to do what makes sense
                in the future.
            </p>
        </div>

        <div class="stage-cta">
            <!-- <a class="nav button external" href="https://gihub.com/ustwo/adventure-investment-terms" target="_blank" rel="noopener">See terms</a> -->
            <a class="nav button internal" href="/faq">Read FAQ</a>
        </div>

    </div>

`;
