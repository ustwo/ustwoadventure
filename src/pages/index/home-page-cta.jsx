import React from "react";
import { css } from "linaria";
import { Link } from "gatsby";

import start from "../../assets/start.png";

const linkStyles = css`
    grid-column: 2 / 12;
    margin: 70px 0;
    background-color: var(--grey04);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 30%;
        padding: 1em 2em;
    }

    div {
        padding: 1em 2em;
    }

    h2 {
        font-size: 24px;
        color: #ffffff;
    }

    p {
        color: #ffffff;
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
            <p>Learn more ⟶</p>
        </div>
    </Link>
);

export default HomePageCTA;
