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

    <h1>[Doing it differently]</h1>

    <div class="writing">

        <p>
            Adventure is an expression of ustwo’s values applied to the world of investment
            and company building. We want to help founders with true heart and ambition forge
            a path in a world that suffers from bias, groupthink, and growth-at-all-costs.
            Money is one part of this equation, but we also care about supporting our
            community of founders and their teams in the long run.
        </p>

        <blockquote>
            Applying our values to investing [will change this]
        </blockquote>

        <p>
            [More here] Our investment thesis is comprised of 6 core principles:
        </p>

    </div>


    <div class="stages">

        <div class="stage-1">
            <h2 class="number" data-number="1"> 1 </h2>
            <p class="stage-title"> Design as a force for good </p>
            <p class="stage-copy">
                At the highest level this is what ustwo is all about. From a
                strong sense of design in product or brand, to tools that
                facilitate creative expression. We want to let creativity shape
                our portfolio of investments.
            </p>
        </div>

        <div class="stage-2">
            <h2 class="number" data-number="2"> 2 </h2>
            <p class="stage-title"> Real communities </p>
            <p class="stage-copy">
                We love it when people are brought together through common bonds
                and a higher purspose. It's collective genius in action. Community
                for us means being made better by really engaged users,
                whose contribution to the brand goes beyond purchasing.
            </p>
        </div>

        <div class="stage-3">
            <h2 class="number" data-number="3"> 3 </h2>
            <p class="stage-title"> Deep care </p>
            <p class="stage-copy">
                For your product, your users, and your employees. We want to back
                genuine founders who take a long-term approach to their business,
                and who would rather speak to customers than investors.
            </p>
        </div>

        <div class="stage-4">
            <h2 class="number" data-number="4"> 4 </h2>
            <p class="stage-title"> Inclusivity </p>
            <p class="stage-copy">
                We are committed to building a portfolio of companies that
                reflects the world we live in, both in terms of the founders
                we back, and how they consider diversity when operating their
                business.
            </p>
        </div>

        <div class="stage-5">
            <h2 class="number" data-number="5"> 5 </h2>
            <p class="stage-title"> A golden thread </p>
            <p class="stage-copy">
                At ustwo we look to make investments where we can both add value
                to companies and learn from them ourselves. Especially in areas where
                we do work. Healthcare, mobility, immersive technologies, games.
                These are areas that we love to work with.
            </p>
        </div>

        <div class="stage-6">
            <h2 class="number" data-number="6"> 6 </h2>
            <p class="stage-title"> Sustainable growth </p>
            <p class="stage-copy">
                No need to offer the world to us. We're not looking for mega-scale.
                Instead we want to see realistic targets and credible, thoughtful
                milestones. To achieve this we're open to different ways of making
                growing your businesswork for you.
            </p>
        </div>

    </div>

    <div class="writing">

        <p>
            To expand on that last point, we believe that founders should be able to run their
            companies in the way that feels right for them and their team. Sometimes this means
            that the traditional venture capital path is right for them, and sometimes it isn't.
            To make sure we can work with all types of companies, we are actively practicing
            investment styles beyond equity.
        </p>

        <p>
            Our favoured alternative style of investing has a few key components: No equity by
            default, a share of revenue that kicks in after 2 years, and a capped return at 3x.
            The revenue shares are in the single digit range, and once the cap is hit, we're square.
            We feel this model is perfect for founders who need extra capital to scale their
            business sustainably, while maintaining financial independance. And because we know
            that things change and one day VC might make sense, or you might want to sell the
            business, we preserve optionality for founders via an equity option. One that
            triggers in the event  of further fundraising or an exit. This option exists to
            give the flexibility to do what makes sense in the future.
        </p>

    </div>

`;
