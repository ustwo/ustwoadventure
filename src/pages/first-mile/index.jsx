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

const ApproachPage = styled(MainWrapper)`
    h1 {
        grid-column: 1 / -1;
    }

    ${SectionWrapper} {
        margin: 60px 0;
    }
`;

const MainIllustration = styled.img`
    grid-column: 3 / -1;
    width: 100%;
    margin: 20px 0;
    background-color: #7ea8d9;
`;

const IntroSection = styled(SectionWrapper)`
    ${TextBlock} p:last-child {
        margin-bottom: 0;
    }
`;

const DetailsSection = styled(SectionWrapper)`
    img {
        grid-column: 1 / 5;
        width: 100%;
        margin-bottom: 50px;
    }

    ${TextBlock} {
        grid-column-start: 6;

        h3 {
            margin-bottom: 40px;

            &:not(:first-child) {
                margin-top: 70px;
            }
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
    }
`;

const MoreInfoSection = styled(SectionWrapper)`
    img {
        grid-column: 1 / 4;
        width: 100%;
        margin-bottom: 50px;
    }
`;

const Index = () => (
    <ApproachPage>
        <SEO
            title="First Mile"
            description="A program for the next generation of founders who are building businesses that have creativity and culture at their core."
            image="https://adventure.ustwo.com/meta_first_mile_image.png"
        />

        <h1>First Mile</h1>

        <MainIllustration
            src={mainIllustration}
            alt="An illustration of a race start line, with various animals running together"
        />

        <IntroSection>
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
            </TextBlock>
        </IntroSection>

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
                    <li>Part-time hotdesking space in our London studio</li>
                    <li>A structured mentorship program</li>
                    <li>More...</li>
                </ul>

                <h3>The criteria</h3>
                <ul>
                    <li>First-time founder</li>
                    <li>Have a limited company set up in the UK</li>
                    <li>An additional £5,000 of services</li>
                    <li>Part-time hotdesking space in our London studio</li>
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
    </ApproachPage>
);

export default Index;
