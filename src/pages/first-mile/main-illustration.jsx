import React from "react";
import { styled } from "linaria/react";

import mainIllustration from "../../assets/first-mile/main.png";

const StyledFigure = styled.figure`
    grid-column: 3 / -1;
    margin: 0 0 20px 0;
    position: relative;

    img {
        width: 100%;
        min-height: 150px;
        padding: 1em 20% 1em 39%;
        margin-left: -40%;
        background-color: #7ea8d9;
    }

    figcaption {
        margin: -0.1em 0 0 0;
        font-size: 0.88em;
        color: var(--grey03);

        a {
            color: var(--grey03);

            :hover {
                font-style: italic;
            }
        }
    }

    @media (max-width: 769px) {
        grid-column: 1 / -1;
    }

    @media (max-width: 680px) {
        margin: 0;
    }
`;

const MainIllustration = () => (
    <StyledFigure>
        <img
            src={mainIllustration}
            alt="An illustration of a race start line, with various animals running together"
        />
        <figcaption>
            Illustrations —{" "}
            <a
                href="https://www.olfdebruin.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Olf de Bruin
            </a>
        </figcaption>
    </StyledFigure>
);

export default MainIllustration;
