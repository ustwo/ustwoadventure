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
        padding: 1.4em 1.8em;

        img {
            object-fit: cover;
            width: 24%;
            transform: scale(1.06);
            margin-right: 2em;
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
                transition: transform 100ms;
            }
        }
    }

    &:hover {
        box-shadow: 0px 11px 28px rgba(0, 0, 0, 0.18);

        div svg {
            transform: translateX(2px);
        }
    }

    @media (max-width: 1080px) {
        div.wrapper {
            img {
                width: 27%;
            }
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
        div.wrapper {
            div h2 {
                font-size: 1.2em;
            }
        }
    }

    @media (max-width: 805px) {
        div.wrapper {
            flex-direction: row-reverse;
            align-items: flex-start;
            overflow: hidden;
            position: relative;
            height: 210px;

            img {
                width: 40%;
                transform: scale(1);
                position: absolute;
                right: 0;
                bottom: -40px;
            }
        }
    }

    @media (max-width: 769px) {
        margin: 70px 0 40px 0;

        div.wrapper {
            height: 190px;

            div h2 {
                font-size: 1.333em;
            }
        }
    }

    @media (max-width: 715px) {
        div.wrapper {
            height: 180px;

            div h2 {
                font-size: 1.333em;
            }
        }
    }

    @media (max-width: 650px) {
        grid-column: 1 / -1;

        div.wrapper {
            height: 210px;

            img {
                width: 45%;
            }
        }
    }

    @media (max-width: 585px) {
        div.wrapper {
            height: 200px;

            img {
                bottom: -30px;
            }
        }
    }

    @media (max-width: 500px) {
        margin: 60px 0 30px 0;

        div.wrapper {
            height: 190px;
        }
    }

    @media (max-width: 410px) {
        margin: 50px 0 20px 0;

        div.wrapper {
            height: 170px;

            img {
                right: -30px;
            }

            div h2 {
                font-size: 1.22em;
            }
        }
    }

    @media (max-width: 370px) {
        div.wrapper {
            height: 200px;

            img {
                width: 50%;
                bottom: -20px;
                right: -40px;
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
                    generation on creative founders
                </h2>
                <p>
                    Learn more <ForwardsArrow />
                </p>
            </div>
        </div>
    </Link>
);

export default HomePageCTA;
