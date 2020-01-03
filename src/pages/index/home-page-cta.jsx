import React from "react";
import { css } from "linaria";
import { Link } from "gatsby";

import start from "../../assets/first-mile/start.png";
import ForwardsArrow from "../../assets/forwards-arrow";

const linkStyles = css`
    grid-column: 2 / 12;
    margin: 70px 0;
    background-color: var(--nonBlack);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--card-shadow);
    border-radius: 3px;
    transition: box-shadow 200ms;

    img {
        object-fit: cover;
        width: 24%;
        background-color: var(--grey04);
        padding: 0.7em 1.2em;
        border-radius: 3px 0 0 3px;
    }

    div {
        padding: 1.6em 2.4em;
    }

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

    &:hover {
        box-shadow: 0px 9px 28px rgba(0, 0, 0, 0.17);

        svg {
            transform: translateX(2px);
        }
    }

    @media (max-width: 920px) {
        img {
            width: 30%;
            padding: 0.7em 1.4em;
        }
    }

    @media (max-width: 740px) {
        grid-column: 1 / 13;
        margin: 90px 0 70px 0;
    }
`;

const HomePageCTA = () => (
    <Link to="/first-mile" className={linkStyles}>
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
    </Link>
);

export default HomePageCTA;
