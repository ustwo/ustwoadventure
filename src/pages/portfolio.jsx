import React from "react";
// import { render } from "react-dom";
import { styled } from "linaria/react";

import SEO from "../components/seo";
import MainWrapper from "../components/main-wrapper";
import shuffle from "../utils/shuffle";
import portfolioArray from "../data/portfolio-array";
// import PortfolioItem from "../components/portfolio-item";
import PortfolioGrid, {
    PortfolioGridBackground
} from "../components/portfolio-grid";

const PortfolioPageHeader = styled.h1`
    grid-column: 1 / -1;
    max-width: 69%;

    @media (max-width: 580px) {
        max-width: 90%;
    }
`;

const StyledPortfolioGrid = styled(PortfolioGrid)`
    margin-top: 20px;
    position: relative;
    min-height: 100vh;
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

const Portfolio = () => (
    <MainWrapper>
        <SEO
            title="Portfolio"
            description="Our family of companies. ustwo Adventure invests in creative companies, differently."
        />

        <PortfolioPageHeader>Our family of companies</PortfolioPageHeader>

        <StyledPortfolioGrid
            companies={shuffledPortfolioArrayCopy}
            Background={FullPortfolioGridBackground}
        />
    </MainWrapper>
);

export default Portfolio;
