import React from "react";
import { styled } from "linaria/react";

import SEO from "../components/seo";
import MainWrapper from "../components/main-wrapper";
import shuffle from "../utils/shuffle";
import portfolioArray from "../data/portfolio-array";
import PortfolioItem from "../components/portfolio-item";
import {
    PortfolioGridWrapper,
    PortfolioGridBackground
} from "../components/portfolio-grid";

const PortfolioPageHeader = styled.h1`
    grid-column: 1 / -1;
    max-width: 69%;

    @media (max-width: 580px) {
        max-width: 90%;
    }
`;

const StyledPortfolioGridWrapper = styled(PortfolioGridWrapper)`
    margin-top: 20px;
    position: relative;
`;

const FullPortfolioGridBackground = styled(PortfolioGridBackground)`
    height: 90%;
    top: 120px;

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

const shuffledPortfolioArrayCopy = shuffle(portfolioArray.slice());

// const alphabeticalPortfolioArray = portfolioArray.sort((a, b) =>
//     a.name.localeCompare(b.name)
// );

const Portfolio = () => {
    return (
        <MainWrapper>
            <SEO
                title="Portfolio"
                description="Our family of companies. ustwo Adventure invests in creative companies, differently."
            />

            <PortfolioPageHeader>Our family of companies</PortfolioPageHeader>

            <StyledPortfolioGridWrapper>
                {shuffledPortfolioArrayCopy.map(company => (
                    <PortfolioItem
                        key={company.name}
                        name={company.name}
                        oneLiner={company.oneLiner}
                        url={company.url}
                        tidyUrl={company.tidyurl}
                        description={company.copy}
                        image={company.image}
                        logo={company.logo}
                    />
                ))}
                <FullPortfolioGridBackground />
            </StyledPortfolioGridWrapper>
        </MainWrapper>
    );
};

export default Portfolio;
