import React from "react";
import { styled } from "linaria/react";

import SEO from "../components/seo";
import MainWrapper from "../components/main-wrapper";
import PortfolioGridWrapper from "../components/portfolio-grid";
import PortfolioItem from "../components/portfolio-item";
import portfolioArray from "../data/portfolio-array";
import shuffle from "../utils/shuffle";

const shuffledPortfolioArrayCopy = shuffle(portfolioArray.slice());

const Portfolio = () => {
    const PortfolioPageHeader = styled.h1`
        grid-column: 1 / -1;
        max-width: 69%;

        @media (--for-up-to-small-tablet) {
            max-width: 90%;
        }
    `;

    const StyledPortfolioGridWrapper = styled(PortfolioGridWrapper)`
        position: relative;
    `;

    const PortfolioGridBackground = styled.div`
        background-color: var(--nonWhite);
        width: 100vw;
        max-width: 1520px;
        height: 90%;
        position: absolute;
        z-index: -1;
        left: 50%;
        top: 120px;
        transform: translateX(-50%);

        @media (min-width: 1520px) {
            max-width: 1320px;
        }

        @media (max-width: 965px) {
            height: 92%;
        }

        @media (max-width: 710px) {
            height: 94%;
        }

        @media (max-width: 380px) {
            height: 97%;
        }
    `;

    return (
        <MainWrapper>
            <SEO
                title="Portfolio"
                description="Our family of companies. ustwo Adventure invests in creative companies, differently."
            />

            <PortfolioPageHeader>Our family of companies</PortfolioPageHeader>

            <StyledPortfolioGridWrapper>
                {shuffledPortfolioArrayCopy.map(company => {
                    return (
                        <PortfolioItem
                            key={company.name}
                            name={company.name}
                            image={company.image}
                            oneLiner={company.oneLiner}
                        />
                    );
                })}
                <PortfolioGridBackground />
            </StyledPortfolioGridWrapper>
        </MainWrapper>
    );
};

export default Portfolio;
