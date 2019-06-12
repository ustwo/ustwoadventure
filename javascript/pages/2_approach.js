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

    <h1>Doing it differently</h1>

    <div class="writing">

        <p>
            We know how important creativity is, and what it takes to build a company
            people believe in. ustwo has been an independent studio for
            ${new Date().getFullYear() - 2004} years, and we've worked hard to build a
            culture that we're proud of. These traits have been essential to our success,
            and have allowed us to take risks and make a meaningful impact with the work we
            do.
        </p>

        <blockquote>
            Applying our values to investment
        </blockquote>

        <p>
            Adventure is an expression of ustwo’s values applied to the world of investment
            and company building. We want to help founders with true heart and ambition forge
            a path in a world that suffers from bias, groupthink, and growth-at-all-costs.
            Money is one part of this equation, but we also care about how we support our
            community of founders and their teams in the long run.
        </p>

        <p>
            Founders should be able to run their companies in they way that feels right for
            them and their team, sometimes this means that the traditional venture capital
            path isn't right for them, and sometimes it is. To make sure we can be inclusive
            to all types of companies we practice two models of investment. The first is
            traditional equity based investments. The second is an alternative revenue-share
            structure, which has 5 components.
        </p>

    </div>


    <div class="stages">

        <div class="stage-1">
            <h2 class="number" data-number="1"> 1 </h2>
            <p class="stage-title">Investment of up to £500k</p>
            <p class="stage-copy">
                This capital is about unlocking pent-up growth, not subsidising
                future fundraises. This amount should credibly get you to
                profitability so this can be your last round
                (if that’s what you want).
            </p>
        </div>

        <div class="stage-2">
            <h2 class="number" alt="2" data-number="2"> 2 </h2>
            <p class="stage-title">No equity by default</p>
            <p class="stage-copy">
                This is about preserving a founder's most valuable asset. We
                can find other ways of realising value (see number 3).
            </p>
        </div>

        <div class="stage-3">
            <h2 class="number" data-number="3"> 3 </h2>
            <p class="stage-title">Revenue share</p>
            <p class="stage-copy">
                These payments kick in 2–3 years post investment, once
                the business has grown and can afford to take out a single
                digit percentage of revenue to repay investors.
            </p>
        </div>

        <div class="stage-4">
            <h2 class="number" data-number="4"> 4 </h2>
            <p class="stage-title">A capped return</p>
            <p class="stage-copy">
                Our cap is 3X the original investment, not insignificant but
                certainly more modest than the 10X+ that traditional venture
                capital wants from any given investment.
            </p>
        </div>

        <div class="stage-5">
            <h2 class="number" data-number="5"> 5 </h2>
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
