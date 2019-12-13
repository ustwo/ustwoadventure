import React from "react";
import { styled } from "linaria/react";

import ForwardsArrow from "../assets/forwards-arrow";

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

    @media (max-width: 580px) {
        div.image-container img.image {
            height: calc(200px + 7.5vw);
        }
    }

    @media (max-width: 500px) {
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

const PortfolioItem = ({ name, image, oneLiner, hasArrows = false }) => {
    const randomOffset = () => 10 * Math.floor(Math.random() * 11) - 50;

    // TODO: Fix name changes on refresh - happend only in production

    return (
        <PortfolioPreviewLink style={{ "--offset": `${randomOffset()}px` }}>
            <p className="name">{name}</p>
            <div className="image-container">
                <img className="image" src={image} alt={name} />
                {hasArrows && <ForwardsArrow />}
            </div>
            <p className="copy">{oneLiner}</p>
        </PortfolioPreviewLink>
    );
};

export default PortfolioItem;
