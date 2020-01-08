import React from "react";
import { styled } from "linaria/react";

import { plus } from "../assets/inline-icons";
import SectionWrapper from "./section-wrapper";

const StyledFaqSection = styled(SectionWrapper)`
    margin-top: 100px;

    @media (max-width: 1080px) {
        margin-top: 80px;
    }

    @media (max-width: 769px) {
        margin-top: 70px;
    }

    @media (max-width: 625px) {
        margin-top: 60px;
    }

    @media (max-width: 475px) {
        margin-top: 50px;
    }
`;

const FaqH1 = styled.h1`
    grid-column: 1 / -1;
`;

const FaqColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -20px;
    margin-bottom: var(--column-gap);

    &:first-of-type {
        grid-column: 1 / 7;
    }

    &:nth-of-type(2) {
        grid-column: 7 / -1;
    }

    @media (max-width: 769px) {
        margin-top: 0;

        &:first-of-type,
        &:nth-of-type(2) {
            grid-column: 1 / -1;
        }
    }
`;

const FaqStyledDetails = styled.details`
    --faqPadding: 1.23em;
    width: 100%;

    &:not(:last-child) {
        margin-bottom: var(--column-gap);
    }

    summary {
        cursor: default;
        background-color: var(--piglet);
        color: #ffffff;
        font-size: 1.16em;
        padding: calc(var(--faqPadding) * 0.82) var(--faqPadding);

        > p {
            margin-bottom: 0;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            &::after {
                content: url(${plus});
                width: 28.7px;
                height: 28px;
                transition: transform 160ms;
            }
        }

        ::-webkit-details-marker {
            display: none;
        }

        &:focus {
            outline: none;
        }
    }

    &[open] summary p::after {
        transform: rotate(45deg);
    }

    > div {
        background-color: var(--grey01);
        padding: calc(var(--faqPadding) * 0.8) var(--faqPadding);
        transition: height 200ms;

        p:last-child {
            margin-bottom: 0;
        }
    }

    @media (max-width: 769px) {
        width: 480px;
    }

    @media (max-width: 580px) {
        width: 100%;
    }
`;

const FaqItem = ({ question, answer }) => (
    <FaqStyledDetails>
        <summary>
            <p>{question}</p>
        </summary>
        <div>
            <p>{answer}</p>
        </div>
    </FaqStyledDetails>
);

const FaqSection = ({ faqArray }) => {
    const faqColumnOne = faqArray.filter((_, i) => i % 2 !== 1);
    const faqColumnTwo = faqArray.filter((_, i) => i % 2 === 1);

    return (
        <StyledFaqSection subgrid>
            <FaqH1>FAQs</FaqH1>

            <FaqColumnContainer>
                {faqColumnOne.map(faq => (
                    <FaqItem
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </FaqColumnContainer>
            <FaqColumnContainer>
                {faqColumnTwo.map(faq => (
                    <FaqItem
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </FaqColumnContainer>
        </StyledFaqSection>
    );
};

export default FaqSection;
