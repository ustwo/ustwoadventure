import React, { useRef, useEffect } from "react";
import { render } from "react-dom";
import { styled } from "linaria/react";

import PortfolioItem from "./portfolio-item";

const PortfolioGridWrapper = styled.div`
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: repeat(auto-fit, minmax(178px, 1fr));
    column-gap: 5vw;
    row-gap: 1.8em;

    @media (min-width: 1280px) {
        gap: 2.1em 3.9em;
    }

    @media (max-width: 980px) {
        margin: 0 2.3vw;
        column-gap: 8vw;
    }

    @media (max-width: 825px) {
        margin: 0;
        column-gap: 6.8vw;
    }

    @media (max-width: 710px) {
        margin: 0 6vw;
        column-gap: 17vw;
    }

    @media (max-width: 670px) {
        margin: 0 5vw;
        column-gap: 14vw;
    }

    @media (max-width: 625px) {
        margin: 0 3.2vw;
        column-gap: 13vw;
    }

    @media (max-width: 580px) {
        margin: 0 1.5vw;
        column-gap: 8.5vw;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(auto-fit, minmax(154px, 1fr));
        margin: 0 4vw;
        column-gap: 11vw;
        row-gap: 2.2em;
    }

    @media (max-width: 450px) {
        margin: 0;
        column-gap: 8.5vw;
    }

    @media (max-width: 420px) {
        margin: 0;
        column-gap: 6vw;
    }
`;

export const PortfolioGridBackground = styled.div`
    background-color: var(--nonWhite);
    width: 100vw;
    max-width: 1520px;
    height: 74%;
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);

    @media (min-width: 1520px) {
        max-width: 1320px;
    }
`;

const PortfolioGrid = ({
    companies,
    Background,
    style,
    className,
    hasArrows
}) => {
    const portfolioContainerRef = useRef();

    const PortfolioItems = () =>
        companies.map(company => (
            <PortfolioItem
                hasArrows={hasArrows}
                key={company.name}
                name={company.name}
                oneLiner={company.oneLiner}
                url={company.url}
                tidyUrl={company.tidyurl}
                description={company.copy}
                image={company.image}
                logo={company.logo}
            />
        ));

    // Using render() due to the way Gatsby handles shuffling content was causing
    // Name changes on refresh, only  in production
    // Problem is because of static html that's rendered (can see in page source)
    // shuffling order css property also has same issue. Soe does Suspense and anything else I've tried
    // No way to shuffle elements properly that are already in the DOM, it seems
    // https://github.com/gatsbyjs/gatsby/issues/8707
    // https://stackoverflow.com/questions/52959147/gatsby-static-dynamic-hybrid-component
    useEffect(() => {
        const portfolioContainer = portfolioContainerRef.current;
        render(
            <>
                <PortfolioItems />
                <Background />
            </>,
            portfolioContainer
        );
    }, []);

    return (
        <PortfolioGridWrapper
            style={style}
            className={className}
            ref={portfolioContainerRef}
        />
    );
};

export default PortfolioGrid;
