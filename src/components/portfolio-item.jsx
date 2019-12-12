import React from "react";
import { styled } from "linaria/react";

import ForwardsArrow from "../assets/forwards-arrow";

export const PortfolioGridWrapper = styled.div`
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5vw;
    row-gap: 2.9vw;

    @media (--for-over-desktop) {
        gap: 2.1em 3.7em;
    }

    @media (--for-up-to-large-tablet) {
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

    @media (--for-up-to-small-tablet) {
        margin: 0 1.5vw;
        column-gap: 8.5vw;
        row-gap: 4.5vw;
    }

    @media (--for-up-to-mobile) {
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
        row-gap: 12vw;
    }
`;

export const PortfolioBackground = styled.div`
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

const PortfolioPreviewLink = styled.a`
    height: max-content;

    p.name {
        margin-bottom: 2px;
        width: 100%;
        font-size: 1.08em;
        font-weight: 800;
        line-height: 1.7;
        color: var(--piglet);
        text-align: right;
        text-transform: uppercase;
        transition: transform 0.09s;
    }

    div.image-container {
        position: relative;

        img.image {
            display: block;
            width: 100%;
            height: calc(200px + 6.5vw);
            max-height: 287px;
            object-fit: cover;

            filter: contrast(92%);

            transition: transform 0.09s, box-shadow 0.09s, filter 0.09s;
        }

        svg {
            position: absolute;
            bottom: 15px;
            left: 15px;
            width: 22px;

            transition: transform 0.09s;
        }
    }

    p.copy {
        width: 100%;

        margin-top: 5px;
        line-height: 1.6;
    }

    &:hover,
    &.active {
        p.name {
            font-style: italic;
            transform: translate(0px, -5px);
        }

        div.image-container {
            img.image {
                box-shadow: -0px 6px 0px -2px var(--piglet);
                transform: translate(0px, -5px);
                filter: contrast(92%) brightness(104%);
            }

            svg {
                transform: translate(2px, -5px);

                &:hover {
                    transform: translate(5px, -5px);
                }
            }
        }
    }

    @media (max-width: 710px) {
        div.image-container img.image {
            height: calc(200px + 9.5vw);
        }
    }

    @media (--for-up-to-small-tablet) {
        div.image-container img.image {
            height: calc(200px + 7.5vw);
        }
    }

    @media (--for-up-to-mobile) {
        div.image-container img.image {
            height: calc(200px + 5vw);
        }
    }

    @media (max-width: 410px) {
        div.image-container img.image {
            height: calc(190px + 2vw);
        }
    }

    @media (max-width: 380px) {
        --columnWidth: 60%;
        transform: translateX(calc(100% - var(--columnWidth) + var(--offset)));
        width: var(--columnWidth);

        p.name {
            font-size: 1.12em;
        }

        div.image-container img.image {
            height: calc(215px + 5vw);
        }
    }

    @media (max-width: 340px) {
        --columnWidth: 70%;
        transform: translateX(
            calc((100% - var(--columnWidth) + var(--offset)) * 0.6)
        );
    }
`;

export const PortfolioItem = ({ name, image, oneLiner, hasArrows = false }) => {
    const randomOffset = () => 10 * Math.floor(Math.random() * 11) - 50;

    return (
        <PortfolioPreviewLink style={{ "--offset": `${randomOffset()}px` }}>
            <p className="name">{name}</p>
            <div className="image-container">
                {/* TODO: get lzy working */}
                <img className="image" src={image} alt={name} />
                {hasArrows && <ForwardsArrow />}
            </div>
            <p className="copy">{oneLiner}</p>
        </PortfolioPreviewLink>
    );
};
