import React from "react";
import { styled } from "linaria/react";

import { plus } from "../assets/inline-arrows";

export const FaqContainer = styled.div`
    display: subgrid;
    row-gap: 2em;
    margin-top: -20px;
    margin-bottom: 40px;

    @media (--for-up-to-tablet) {
        margin-top: 0;
        margin-bottom: 20px;
    }
`;

const StyledDetails = styled.details`
    grid-column: span 6; /* TODO: masonry layout */
    --faqPadding: 1.24em;

    summary {
        background-color: var(--piglet);
        color: #ffffff;
        font-size: 1.16em;
        padding: calc(var(--faqPadding) * 0.86) var(--faqPadding);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        > p {
            cursor: pointer;
            margin-bottom: 0;
        }

        ::after {
            content: url(${plus});
            cursor: pointer;
            width: 28.7px;
            height: 28px;
            transition: transform 0.2s;
        }

        ::-webkit-details-marker {
            display: none;
        }

        &:focus {
            outline: none;
        }
    }

    /* TODO: animation here? */
    &[open] summary::after {
        transform: rotate(45deg);
    }

    > div {
        background-color: var(--grey01);
        padding: calc(var(--faqPadding) * 0.8) var(--faqPadding);

        p:last-child {
            margin-bottom: 0;
        }
    }
`;

export const FaqItem = ({ question, answer }) => (
    <StyledDetails>
        <summary>
            <p>{question}</p>
        </summary>
        <div>
            <p>{answer}</p>
        </div>
    </StyledDetails>
);
