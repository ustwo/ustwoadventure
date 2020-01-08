import React from "react";
import { styled } from "linaria/react";

import SEO from "../../components/seo";
import SectionWrapper from "../../components/section-wrapper";
import MainWrapper from "../../components/main-wrapper";
import TextBlock from "../../components/text-block";
import FaqSection from "../../components/faqs";
import faqContent from "../../data/first-mile-faqs";
import FirstMileApplicationForm from "./first-mile-application-form";

import mainIllustration from "../../assets/first-mile/main.png";
// import startIllustration from "../../assets/first-mile/start.png";
import jumpIllustration from "../../assets/first-mile/jump.png";
import batonIllustration from "../../assets/first-mile/baton.png";

const FirstMilePage = styled(MainWrapper)`
    h1 {
        grid-column: 1 / -1;
    }

    ${SectionWrapper} {
        margin: 60px 0;

        @media (max-width: 880px) {
            margin: 40px 0;
        }
    }

    ${TextBlock} {
        @media (max-width: 880px) {
            grid-column-start: 4;
        }

        @media (max-width: 769px) {
            grid-column-start: 3;
        }

        @media (max-width: 600px) {
            grid-column-start: 1;
        }
    }
`;

const MainIllustration = styled.figure`
    grid-column: 3 / -1;
    margin: 20px 0;

    img {
        width: 100%;
        background-color: #7ea8d9;
    }

    figcaption {
        margin: -0.15em 0;
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

const DetailsSection = styled(SectionWrapper)`
    img {
        grid-column: 1 / 5;
        width: 100%;
        margin-bottom: 50px;

        @media (max-width: 769px) {
            grid-column: 1 / 6;
            margin-bottom: 40px;
        }

        @media (max-width: 580px) {
            grid-column: 1 / 8;
            margin-bottom: 20px;
        }

        @media (max-width: 450px) {
            margin-bottom: 10px;
        }

        @media (max-width: 500px) {
            width: 66%;
        }
    }

    ${TextBlock} {
        grid-column-start: 6;

        h3 {
            margin-bottom: 40px;

            &:not(:first-child) {
                margin-top: 70px;
            }
        }

        @media (max-width: 1025px) {
            grid-column-start: 5;
            grid-column-end: -1;
        }

        @media (max-width: 769px) {
            grid-column-start: 3;
        }

        @media (max-width: 650px) {
            grid-column-start: 1;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: var(--column-gap);
        row-gap: 1.4em;

        li {
            line-height: 1.5;
        }

        @media (max-width: 520px) {
            grid-template-columns: repeat(1, 1fr);
            row-gap: 1.2em;
        }
    }
`;

const MoreInfoSection = styled(SectionWrapper)`
    img {
        grid-column: 1 / 4;
        width: 100%;
        margin-bottom: 50px;

        @media (max-width: 769px) {
            grid-column: 1 / 5;
            margin-bottom: 40px;
        }

        @media (max-width: 580px) {
            grid-column: 1 / 6;
            margin-bottom: 25px;
        }

        @media (max-width: 450px) {
            margin-bottom: 20px;
        }

        @media (max-width: 500px) {
            width: 33%;
        }
    }
`;

const Index = () => (
    <FirstMilePage>
        <SEO
            title="First Mile"
            description="A program for the next generation of founders who are building businesses that have creativity and culture at their core."
            image="https://adventure.ustwo.com/meta_first_mile_image.png"
        />

        <h1>First Mile</h1>

        <MainIllustration>
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
        </MainIllustration>

        <SectionWrapper>
            <TextBlock>
                <h3>
                    A program for the next generation of founders who are
                    building businesses that have creativity and culture at
                    their core.
                </h3>

                <p>
                    We want to enable a new wave of leaders who understand the
                    power of design, culture and long-term thinking, and equip
                    them with the belief, network and resources to build the
                    foundations of great businesses.
                </p>

                <p>
                    First Mile is a 12-month program for first-time founders,
                    we’ve designed it to focus on...
                </p>

                <p>Applications are currently open for our 2020 cohort.</p>
            </TextBlock>
        </SectionWrapper>

        <DetailsSection>
            <img
                src={jumpIllustration}
                alt="An illustration of a race start line, with various animals running together"
            />

            <TextBlock>
                <h3>What you get</h3>
                <ul>
                    <li>12 months of guided support</li>
                    <li>A £10,000 stipend</li>
                    <li>An additional £5,000 of services</li>
                    <li>Hotdesking space in our London studio</li>
                    <li>A structured mentorship program</li>
                    <li>More...</li>
                </ul>

                <h3>The criteria</h3>
                <ul>
                    <li>First-time founder</li>
                    <li>Have a limited company set up in the UK</li>
                    <li>An additional £5,000 of services</li>
                    <li>Hotdesking space in our London studio</li>
                </ul>
            </TextBlock>
        </DetailsSection>

        <MoreInfoSection>
            <img
                src={batonIllustration}
                alt="An illustration of a race start line, with various animals running together"
            />

            <TextBlock>
                <h3>
                    A program for the next generation of founders with true
                    heart and ambition, who are building businesses with
                    creativity and culture at their core.
                </h3>

                <p>
                    You may come for the capital, but we want you to stay for
                    the belief. We offer the perspective and support to help you
                    forge your path.
                </p>

                <p>
                    At ustwo we celebrate difference, and the creativity that it
                    generates. We are proud to offer equal opportunities
                    regardless of race, religion, sex, nationality, sexual
                    orientation, age, disability, gender identity, marital
                    status, or other ways that people identify. We welcome
                    applications for our First Mile programe from anywhere.
                </p>
            </TextBlock>
        </MoreInfoSection>

        <FirstMileApplicationForm />

        <FaqSection faqArray={faqContent} />
    </FirstMilePage>
);

export default Index;
