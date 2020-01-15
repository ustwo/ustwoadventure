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
        margin: 60px 0;

        @media (max-width: 880px) {
            margin: 40px 0;
        }
    }

    ${TextBlock} {
        h3 {
            margin-bottom: 40px;
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
        list-style: initial;
        list-style-type: "–  ";
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
                <OpenIndicator onClick={scrollToForm} />

                <TextBlock>
                    <h3>
                        A program for the next generation of founders who are
                        building businesses that have creativity and culture at
                        their core.
                    </h3>

                    <p>
                        We want to enable a new wave of leaders who understand
                        the power of design, culture and long-term thinking, and
                        equip them with the belief, network and resources to
                        build the foundations of great businesses.
                    </p>

                    <p>
                        First Mile is a 12-month programme for first-time
                        founders that focusses on mentorship, personalised
                        learning journeys, and deep care. Less about scale and
                        more about care. Long-term over short-term. Open minds
                        over singular-outcomes.
                    </p>

                    <p>
                        Practically what that means is a cash injection (to
                        cover costs and make the programme accessible) and a
                        years worth of structured support in a variety of
                        disciplines — from ustwobies and our Adventure community
                        — with a pledge to pay it forwards and enable future
                        participants to go on the journey, too.
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
                        <li>Hotdesking space in our London studio</li>
                        <li>A personalised learning journey</li>
                        <li>Access to 40+ mentors across all disciplines</li>
                        <li>A crafted workshop programme</li>
                        <li>Regular community catchups and events</li>
                    </ul>
                </TextBlock>
            </DetailsSection>

            <MoreInfoSection>
                <img
                    src={batonIllustration}
                    alt="An illustration of one hand passing a baton to the next"
                />

                <TextBlock>
                    <h3>Paying it forwards</h3>
                    <p>
                        Every participant of the First Mile programme must sign
                        a pledge to pay it forwards. Within 5 years, provided
                        you are still working on your business, we ask that you
                        pay back £20,000 pounds, which we recycle into the
                        programme to support future participants. This way we
                        can build a sustainable future for First Mile and the
                        community.
                    </p>

                    <h3>Criteria</h3>
                    <p>
                        To be eligible for the programme, you must be a
                        first-time founder, with a company entity set up.
                    </p>
                    <p style={{ fontStyle: "italic" }}>
                        At ustwo we celebrate diversity, and the creativity that
                        it generates. We are proud to offer equal opportunities
                        regardless of race, religion, nationality, sexual
                        orientation, age, disability, gender identity, family
                        status, and any other ways that people identify. We
                        welcome applications for our First Mile programe from
                        any background.
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
