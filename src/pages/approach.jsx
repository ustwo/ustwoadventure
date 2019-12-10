import React from "react";
import { styled } from "linaria/react";

import SectionWrapper from "../components/section-wrapper";
import MainWrapper from "../components/main-wrapper";
import Button from "../components/button";

const HomePage = styled(MainWrapper)`
    h1.PageHeader {
        margin: 0 0 140px auto;
        max-width: 710px;
        grid-column: 5 / -1;
    }

    section div.introCopy {
        grid-column: 1 / 7;
    }
`;

const Index = () => (
    <HomePage>
        <h1 className="PageHeader">
            ustwo Adventure invests in creative companies, differently
        </h1>

        <SectionWrapper subgrid>
            <div className="introCopy">
                <h2>Build something bigger than an exit</h2>
                <p>
                    When you combine long-term thinking with strong culture and
                    design, you create amazing companies.
                </p>
                <p>
                    Through capital, experience and belief, we help founders
                    with true heart and ambition build businesses on top of
                    these principles.
                </p>
                <Button>Our approach</Button>
            </div>
        </SectionWrapper>
    </HomePage>
);

export default Index;
