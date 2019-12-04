import React from "react";
import { styled } from "linaria/react";

import SEO from "../components/seo";
import MainWrapper from "../components/main-wrapper";
import PortfolioGridWrapper from "../components/portfolio-grid";
import PortfolioItem from "../components/portfolio-item";
import portfolioArray from "../data/portfolioArray";
import shuffle from "../utils/shuffle";

const Portfolio = () => {
    const PortfolioPageHeader = styled.h1`
        grid-column: 1 / -1;
        max-width: 69%;

        @media (--for-up-to-small-tablet) {
            max-width: 90%;
        }
    `;

    const shuffledPortfolioArrayCopy = shuffle(portfolioArray.slice());

    return (
        <MainWrapper>
            <SEO
                title="Portfolio"
                description="Our family of companies. ustwo Adventure invests in creative companies, differently."
            />

            <PortfolioPageHeader>Our family of companies</PortfolioPageHeader>

            <PortfolioGridWrapper>
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
            </PortfolioGridWrapper>
        </MainWrapper>
    );
};

export default Portfolio;
