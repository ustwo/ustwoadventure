import React from "react";
import { styled } from "linaria/react";

import SectionWrapper from "../../components/section-wrapper";
import LatestInvestment from "./latest-investment";
import Button from "../../components/button";

const Intro = () => {
    const StyledIntroCopy = styled.div`
        grid-column: 1 / 7;

        h2 {
            max-width: 360px;
        }

        p {
            max-width: 470px;
        }

        @media (--for-up-to-large-tablet) {
            grid-column: 1 / 8;

            h2 {
                max-width: 330px;
            }
        }

        @media (max-width: 740px) {
            grid-column: 1 / 10;
        }

        @media (--for-up-to-small-tablet) {
            grid-column: 1 / 12;

            h2 {
                max-width: 310px;
            }
        }
    `;

    const LatestInvestmentElement = styled(LatestInvestment)`
        margin-top: 150px;
        grid-column: 8 / -1;
        margin-left: 3vw;
        margin-right: 4vw;

        @media (--for-over-desktop) {
            margin-left: 30px;
            margin-right: 40px;
        }

        @media (max-width: 950px) {
            margin-top: 130px;
            margin-left: 6.3vw;
            margin-right: 0;
        }

        @media (max-width: 740px) {
            display: none;
        }
    `;

    return (
        <SectionWrapper noMarginTop subgrid>
            <StyledIntroCopy>
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
                <Button href="/approach">Our approach</Button>
                <Button href="/about">About us</Button>
            </StyledIntroCopy>

            <LatestInvestmentElement />
        </SectionWrapper>
    );
};

export default Intro;
