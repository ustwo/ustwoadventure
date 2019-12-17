import React from "react";
import { styled } from "linaria/react";

import { plus } from "../assets/inline-icons";
import SectionWrapper from "./section-wrapper";

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
        background-color: var(--piglet);
        color: #ffffff;
        font-size: 1.16em;
        padding: calc(var(--faqPadding) * 0.82) var(--faqPadding);
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
            transition: transform 160ms;
        }

        ::-webkit-details-marker {
            display: none;
        }

        &:focus {
            outline: none;
        }
    }

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
        <SectionWrapper subgrid marginTop="100px">
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
        </SectionWrapper>
    );
};

export default FaqSection;
