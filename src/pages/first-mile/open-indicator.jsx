import React from "react";
import { styled } from "linaria/react";

import CTAWrapper from "../../components/cta-wrapper";
import ForwardsArrow from "../../assets/forwards-arrow";

const StyledCTA = styled(CTAWrapper)`
    border-radius: 2px;
    display: block;
    grid-column: 1 / 4;
    margin: 0 0 auto 0;
    padding: 1.2em 1.4em;
    transition: box-shadow 200ms;
    cursor: ${props => (props.open ? "pointer" : "default")};
    background-color: ${props => (props.open ? "var(--blu)" : "var(--grey04)")};
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);

    div {
        display: block;
        text-align: left;
        color: #ffffff;
        width: 100%;

        h2 {
            color: #ffffff;
            font-size: 1.6em;
            margin-bottom: 15px;
        }

        p {
            margin-bottom: 0;

            svg {
                width: 0.92em;
                margin-left: 0.2em;
                transition: transform 140ms;
                transform: rotate(90deg);
            }
        }
    }

    &:hover {
        box-shadow: ${props =>
            props.open
                ? `0px 8px
            28px rgba(0, 0, 0, 0.18)`
                : "0px 2px 20px rgba(0, 0, 0, 0.16);"};

        div svg {
            transform: rotate(90deg) translateX(2px);
        }
    }

    @media (max-width: 1025px) {
        grid-column: 4 / 12;
        margin-bottom: 3em;
    }

    @media (max-width: 880px) {
        grid-column: 4 / -1;
    }

    @media (max-width: 769px) {
        grid-column: 3 / 12;

        div h2 {
            font-size: 1.5em;
        }
    }

    @media (max-width: 660px) {
        grid-column: 3 / -1;
    }

    @media (max-width: 600px) {
        grid-column: 1 / -1;

        div h2 {
            font-size: 1.4em;
        }
    }
`;

const OpenIndicator = ({ onClick }) => {
    const applicationsAreOpen = true;
    const deadline = "April 6th";

    const havePlannedNextStart = true;
    const nextStart = "Q2 2020";

    return (
        <StyledCTA
            open={applicationsAreOpen}
            as="a"
            onClick={applicationsAreOpen && onClick}
        >
            <div>
                <h2>
                    Applications now {applicationsAreOpen ? "open" : "closed"}
                </h2>
                <p>
                    {applicationsAreOpen
                        ? `Deadline ${deadline} — Apply now `
                        : `We'll be announcing our next programme ${
                              havePlannedNextStart ? `in ${nextStart}` : "soon"
                          }`}
                    {applicationsAreOpen && <ForwardsArrow />}
                </p>
            </div>
        </StyledCTA>
    );
};

export default OpenIndicator;
