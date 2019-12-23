import { styled } from "linaria/react";

export const PortfolioGridWrapper = styled.div`
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5vw;
    row-gap: 2.9vw;

    @media (min-width: 1280px) {
        gap: 2.1em 3.9em;
    }

    @media (max-width: 1025px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 9.5vw;
        margin: 0 4.2vw;
    }

    @media (max-width: 965px) {
        margin: 0 2.3vw;
        column-gap: 8vw;
    }

    @media (max-width: 825px) {
        margin: 0;
        column-gap: 6.8vw;
        row-gap: 3.8vw;
    }

    @media (max-width: 710px) {
        grid-template-columns: repeat(2, 1fr);
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
        row-gap: 4.5vw;
    }

    @media (max-width: 500px) {
        margin: 0 4vw;
        column-gap: 11vw;
        row-gap: 8vw;
    }

    @media (max-width: 450px) {
        margin: 0;
        column-gap: 8.5vw;
    }

    @media (max-width: 420px) {
        margin: 0;
        column-gap: 6vw;
    }

    @media (max-width: 380px) {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 11vw;
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
