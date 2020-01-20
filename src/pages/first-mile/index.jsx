import React, { useRef } from "react";
import { styled } from "linaria/react";

import SEO from "../../components/seo";
import SectionWrapper from "../../components/section-wrapper";
import MainWrapper from "../../components/main-wrapper";
import TextBlock from "../../components/text-block";
import FaqSection from "../../components/faqs";
import faqContent from "../../data/first-mile-faqs";
import FirstMileApplicationForm from "./application-form";
import MainIllustration from "./main-illustration";

import jumpIllustration from "../../assets/first-mile/jump.png";
import batonIllustration from "../../assets/first-mile/baton.png";
import OpenIndicator from "./open-indicator";

const FirstMilePage = styled(MainWrapper)`
    h1 {
        grid-column: 1 / -1;

        @media (min-width: 769px) {
            margin-bottom: 45px;
        }
    }

    ${SectionWrapper} {
        margin: 50px 0;

        @media (max-width: 880px) {
            margin: 40px 0;
        }
    }

    ${TextBlock} {
        h3 {
            margin-bottom: 35px;

            :not(:first-of-type) {
                margin-top: 45px;
            }
        }

        :not(:first-of-type) {
            margin-top: 35px;
        }

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
            margin-bottom: 10px;
        }

        @media (max-width: 500px) {
            width: 70%;
            margin-bottom: 0;
        }
    }

    ${TextBlock} {
        grid-column-start: 6;

        h3 {
            margin-bottom: 35px;

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
        /* list-style: initial;
        list-style-type: "–  "; */
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

const FormContainer = styled.div`
    display: subgrid;
`;

const Index = () => {
    const formRef = useRef();
    const scrollToForm = () =>
        formRef.current.scrollIntoView({ behavior: "smooth" });

    return (
        <FirstMilePage>
            <SEO
                title="First Mile"
                description="A program for the next generation of founders who are building businesses that have creativity and culture at their core."
                image="https://adventure.ustwo.com/meta_first_mile_image.png"
            />

            <h1>First Mile</h1>

            <MainIllustration />

            <SectionWrapper>
                {/* <OpenIndicator onClick={scrollToForm} /> */}

                <TextBlock tight>
                    <h3>
                        A programme for first-time founders who are building
                        businesses with creativity and values at their core.
                    </h3>
                    <p>
                        For any creative business the first steps are often the
                        hardest. We know because we’ve done it, and now we want
                        to help the next generation of founders do the same.
                    </p>
                    <p>
                        We’ll give you 12 months of mentorship and personal
                        support from ustwobies and our Adventure community —
                        with anything from tech troubleshooting to building a
                        long-term strategy. As well as this we give a £10,000
                        stipend to help cover costs.
                    </p>
                </TextBlock>
            </SectionWrapper>

            <SectionWrapper style={{ marginTop: "0" }}>
                <OpenIndicator onClick={scrollToForm} />

                <TextBlock tight>
                    <h3>For dreamers and doers</h3>
                    <p>
                        We want to help kick start a new wave of creative
                        leaders — people who understand the value of design,
                        culture and long-term thinking, and who want to create
                        lasting impact.
                    </p>
                    <p>
                        We don&apos;t want to rapidly scale you up to be the
                        next digital unicorn. Instead, we&apos;d rather equip
                        you with the belief, network and tools to build
                        purposeful businesses, from the inside out.
                    </p>
                    <p>
                        In return, we’d like you to pledge to pay it forwards at
                        some point within five years, to help future
                        participants on their way.
                    </p>
                </TextBlock>
            </SectionWrapper>

            <DetailsSection>
                <img
                    src={jumpIllustration}
                    alt="An illustration of a runner jumping over a log while smiling."
                />

                <TextBlock>
                    <h3>What you get</h3>
                    <ul>
                        <li>12 months of structured support</li>
                        <li>A £10,000 stipend</li>
                        <li>
                            Advice and expertise from over 40 mentors, with a
                            variety of skills
                        </li>
                        <li>
                            A personalised learning journey, built around your
                            aims and ambitions
                        </li>
                        <li>Hotdesking space in our London studio</li>
                        <li>
                            A curated list of relevant and insightful workshops
                        </li>
                        <li>Regular community catchups and events</li>
                    </ul>
                </TextBlock>
            </DetailsSection>

            <MoreInfoSection>
                <img
                    src={batonIllustration}
                    alt="An illustration of one hand passing a baton to the next"
                />

                <TextBlock tight>
                    <h3>Paying it forwards</h3>
                    <p>
                        When you come on board, we ask you to sign a pledge to
                        pay it forwards. This means if your business is still
                        going in five years, you donate £20,000 to the
                        programme.
                    </p>
                    <p>
                        We’ve worked this out as £10,000 for the stipend and
                        £10,000 for the year of support, mentoring and
                        workspace. To be clear, this money doesn’t come to us.
                        It goes straight back into the First Mile programme to
                        continue helping new businesses get off the ground.
                    </p>

                    <h3>Criteria</h3>
                    <p>
                        To be eligible for the First Mile programme, it must be
                        the first time you’ve founded a business. You also need
                        to have a company entity already up and running. That’s
                        it!
                    </p>
                    <p style={{ fontStyle: "italic" }}>
                        At ustwo we celebrate diversity, and the creativity that
                        it generates. We are proud to offer equal opportunities
                        regardless of race, religion, nationality, sexual
                        orientation, age, disability, gender identity, family
                        status, and any other ways that people identify. We
                        welcome applicants from any background.
                    </p>
                </TextBlock>
            </MoreInfoSection>

            <FormContainer ref={formRef}>
                <FirstMileApplicationForm />
            </FormContainer>

            <FaqSection faqArray={faqContent} />
        </FirstMilePage>
    );
};

export default Index;
