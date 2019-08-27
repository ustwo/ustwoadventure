const approachStageScroll = () => {
    const approachStages = document.querySelectorAll(
        ".approach-content .stages div"
    );

    if (
        window.innerWidth < 635 &&
        window.matchMedia("(pointer: coarse)").matches
    ) {
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

    <h1>Investing our way</h1>

    <div class="writing">

        <p>
            Adventure is an expression of ustwo’s values applied to the world of investment
            and company building. We want to help founders with true heart and ambition forge
            a path in a world that suffers from bias, groupthink, and growth-at-all-costs.
            Money is one part of this equation, but we also care about supporting our
            community of founders and their teams in the long run.
        </p>

        <!-- <blockquote>
            Applying our values to investing
        </blockquote> -->

        <p>
            We have six core principles to evaluate the companies we invest in:
        </p>

    </div>


    <div class="stages">

        <div class="stage-1">
            <h2 class="number" data-number="1"> 1 </h2>
            <p class="stage-title"> Design as a force for good </p>
            <p class="stage-copy">
                This is what ustwo is all about. We believe design and creativity
                can improve the world we live in. We want to support the next generation
                of founders doing just that.
            </p>
        </div>

        <div class="stage-2">
            <h2 class="number" data-number="2"> 2 </h2>
            <p class="stage-title"> Real communities </p>
            <p class="stage-copy">
                We love it when people are brought together through common bonds
                and a higher purspose. It's collective genius in action. For us,
                community means engaged users, whose contribution to the brand
                goes beyond purchasing.
            </p>
        </div>

        <div class="stage-3">
            <h2 class="number" data-number="3"> 3 </h2>
            <p class="stage-title"> Deep care </p>
            <p class="stage-copy">
                For your product, your users, and your employees. We back
                genuine founders who take a long-term approach to their
                business, and come with real conviction to solve the
                problems they see.
            </p>
        </div>

        <div class="stage-4">
            <h2 class="number" data-number="4"> 4 </h2>
            <p class="stage-title"> Inclusivity </p>
            <p class="stage-copy">
                We are committed to building a portfolio of companies that
                reflects the world we live in, both in terms of the founders
                we back, and how they consider diversity and inclusion when
                operating their business.
            </p>
        </div>

        <div class="stage-5">
            <h2 class="number" data-number="5"> 5 </h2>
            <p class="stage-title"> A golden thread </p>
            <p class="stage-copy">
                At ustwo we look to make investments that align with our work and expertise.
                Healthcare, mobility, immersive technologies, future of work, games — these
                are areas that we know and love.
            </p>
        </div>

        <div class="stage-6">
            <h2 class="number" data-number="6"> 6 </h2>
            <p class="stage-title"> Sustainable growth </p>
            <p class="stage-copy">
                We're not looking for mega-scale.
                Instead we want to see realistic targets and credible, thoughtful
                milestones. To achieve this we're open to different investment
                structures in addition to equity.
            </p>
        </div>

    </div>

    <h1>An alternative path</h1>

    <div class="writing">

        <p>
            Founders should be able to run their companies in a way that feels
            right for them and their team. Sometimes this means that the traditional venture
            capital path is right, and sometimes it isn't. To make sure we can work
            with all types of companies, we use a range of investment styles.
        </p>

        <p>
            Our favoured alternative style of investing has a few key components: No equity by
            default, a revenue-share that kicks in after 2 years, and a capped return at 3x.
            We feel this model is perfect for founders who need extra capital to scale their
            business sustainably, while maintaining financial independance.
        </p>

    </div>

`;
