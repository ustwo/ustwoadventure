import React from "react";
import { css } from "linaria";
import { Link } from "gatsby";

import start from "../../assets/first-mile/start.png";
import ForwardsArrow from "../../assets/forwards-arrow";

const linkStyles = css`
    grid-column: 2 / 12;
    margin: 70px 0 60px 0;
    background-color: var(--nonBlack);
    box-shadow: var(--card-shadow);
    border-radius: 3px;
    transition: box-shadow 200ms;

    div.wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.4em 2em;

        img {
            object-fit: cover;
            width: 24%;
            transform: scale(1.06);
            margin-right: 2.3em;
            border-radius: 3px 0 0 3px;
        }

        div {
            h2 {
                font-size: 1.44em;
                line-height: 1.4;
                color: #ffffff;
            }

            p {
                color: #ffffff;
                margin-bottom: 0;
            }

            svg {
                width: 0.92em;
                margin-left: 0.4em;
                transition: transform 140ms;
            }
        }
    }

    &:hover {
        box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.19);

        div svg {
            transform: translateX(2px);
        }
    }

    @media (max-width: 1080px) {
        div.wrapper img {
            width: 27%;
        }
    }

    @media (max-width: 960px) {
        div.wrapper {
            img {
                width: 33.3%;
            }

            div h2 {
                font-size: 1.33em;
            }
        }
    }

    @media (max-width: 870px) {
        div.wrapper div h2 {
            font-size: 1.2em;
        }
    }

    @media (max-width: 805px) {
        div.wrapper {
            flex-direction: row-reverse;
            align-items: flex-start;
            overflow: hidden;
            position: relative;
            height: 21vw;

            img {
                width: 35%;
                transform: scale(1);
                position: absolute;
                margin-right: 0;
                right: 1.5em;
                bottom: -35px;
            }
        }
    }

    @media (max-width: 769px) {
        margin: 70px 0 40px 0;

        div.wrapper {
            height: 23vw;

            div h2 {
                font-size: 1.333em;
            }
        }
    }

    @media (max-width: 650px) {
        grid-column: 1 / -1;

        div.wrapper {
            height: 28vw;

            img {
                width: 38%;
                bottom: -35px;
            }
        }
    }

    @media (max-width: 585px) {
        div.wrapper {
            height: 31vw;

            img {
                bottom: -30px;
            }
        }
    }

    @media (max-width: 500px) {
        margin: 60px 0 30px 0;
    }

    @media (max-width: 440px) {
        margin: 50px 0 20px 0;

        div.wrapper {
            padding: 1.2em 1.4em;

            div h2 {
                font-size: 1.22em;
            }
        }
    }

    @media (max-width: 420px) {
        div.wrapper {
            min-height: 150px;

            img {
                width: 42%;
                bottom: -20px;
                right: 1em;
            }

            div h2 {
                font-size: 1.18em;
            }
        }
    }
`;

const HomePageCTA = () => (
    <Link to="/first-mile" className={linkStyles}>
        <div className="wrapper">
            <img src={start} alt="start line" />
            <div>
                <h2>
                    We&#39;ve just launched First Mile, a program for the next
                    generation of creative founders
                </h2>
                <p>
                    Learn more <ForwardsArrow />
                </p>
            </div>
        </div>
    </Link>
);

export default HomePageCTA;
