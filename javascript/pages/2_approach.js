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

        <!-- <p>
            We know how important creativity is, and what it takes to build a company
            people believe in. ustwo has been an independent studio for
            ${new Date().getFullYear() - 2004} years, and we've worked hard to build a
            culture that we're proud of. These traits have been essential to our success,
            and have allowed us to take risks and make a meaningful impact with the work we
            do.
        </p> -->

        <p>
            Adventure is an expression of ustwo’s values applied to the world of investment
            and company building. We want to help founders with true heart and ambition forge
            a path in a world that suffers from bias, groupthink, and growth-at-all-costs.
            Money is one part of this equation, but we also care about how we support our
            community of founders and their teams in the long run.
        </p>

        <blockquote>
            We want to apply our values to investing
        </blockquote>

        <p>
            We have 5 core principles that we use to invest
        </p>

    </div>


    <div class="stages">

        <div class="stage-1">
            <h2 class="number" data-number="1"> 1 </h2>
            <p class="stage-title"> Design as a force for good </p>
            <p class="stage-copy">
                At the highest level this is what ustwo is all about.
                This capital is about unlocking pent-up growth, not subsidising
                future fundraises. This amount should credibly get you to
                profitability so this can be your last round
                (if that’s what you want).
            </p>
        </div>

        <div class="stage-2">
            <h2 class="number" alt="2" data-number="2"> 2 </h2>
            <p class="stage-title"> Deep care </p>
            <p class="stage-copy">
                For your product, your users, and your employees. We want to back
                founders who understand
            </p>
        </div>

        <div class="stage-3">
            <h2 class="number" data-number="3"> 3 </h2>
            <p class="stage-title"> Inclusivity </p>
            <p class="stage-copy">
                We are committed to building a portfolio of companies that
                reflects the diversity of the world we live in.
            </p>
        </div>

        <div class="stage-4">
            <h2 class="number" data-number="4"> 4 </h2>
            <p class="stage-title"> Real communities </p>
            <p class="stage-copy">
                We love it when people are brought together through common bonds
                and a higher purspose. It's collective genius in action. Community
                for us means businesses that are made better by engaged customers,
                whose contribution to the brand goes beyond purchasing.
            </p>
        </div>

        <div class="stage-5">
            <h2 class="number" data-number="5"> 5 </h2>
            <p class="stage-title"> Sustainable profitability </p>
            <p class="stage-copy">
                This is also in the single digit % range. One day VC may make
                sense. One day you may want to sell your business. This option
                exists to give founders the flexibility to do what makes sense
                in the future.
            </p>
        </div>

        <div class="stage-6">
            <h2 class="number" data-number="6"> 6 </h2>
            <p class="stage-title"> A golden thread </p>
            <p class="stage-copy">
                As a group of companies we look to make investments where we can
                add the most value, and where we can learn the most in areas where
                we do work. Healthcare, mobility, immersive technologies, games.
                These are areas that we love to work with.
            </p>
        </div>

    </div>

    <h1>Model</h1>

    <div class="writing">

        <p>
            Founders should be able to run their companies in the way that feels right for
            them and their team, while being able to prioritise all of the above. Sometimes
            this means that the traditional venture capital path isn't right for them, and
            sometimes it is. To make sure we can be inclusive to all types of companies we
            practice two models of investment. The first is traditional equity based investments.
            The second is an alternative revenue-share structure, which has 5 components.
        </p>

    </div>

    <h1>Platform</h1>

`;
