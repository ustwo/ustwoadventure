import React from "react";
import { styled } from "linaria/react";

import SEO from "../../components/seo";
import SectionWrapper from "../../components/section-wrapper";
import MainWrapper from "../../components/main-wrapper";
import TextBlock from "../../components/text-block";
import PrincipleElement from "./principle-element";
import principleContent from "../../data/approach-principles";
import Applicationform from "./application-form";
import FaqSection from "../../components/faqs";
import faqContent from "../../data/approach-faqs";

const ApproachPage = styled(MainWrapper)`
    h1 {
        grid-column: 1 / -1;
    }
`;

const PrinciplesH3 = styled.h3`
    grid-column: 2 / 5;

    @media (max-width: 1100px) {
        grid-column: 2 / 7;
    }

    @media (max-width: 845px) {
        grid-column: 1 / 6;
        margin-bottom: 15px;
    }

    @media (max-width: 645px) {
        grid-column: 1 / 8;
    }

    @media (--for-up-to-small-tablet) {
        grid-column: 1 / 10;
    }
`;

const PrincipleFlexContainer = styled.ol`
    margin: 40px auto -20px auto;
    max-width: 1050px;
    grid-column: 1 / -1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 890px) {
        justify-content: space-around;
    }

    @media (max-width: 500px) {
        margin-top: 20px;
    }
`;

const Wideh3 = styled.h3`
    grid-column: 2 / 11;
    margin-bottom: 80px;

    @media (--for-up-to-large-tablet) {
        grid-column: 2 / -1;
        margin-bottom: 70px;
    }

    @media (max-width: 845px) {
        grid-column: 1 / -1;
        margin-bottom: 60px;
    }

    @media (--for-up-to-tablet) {
        margin-bottom: 50px;
    }

    @media (max-width: 635px) {
        margin-top: 30px;
        margin-bottom: 40px;
    }
`;

const Index = () => (
    <ApproachPage>
        <SEO
            title="Approach"
            description="We invest in companies that prioritise sustainability, inclusivity and deep care, and founders with true heart and ambition."
        />
        <h1>Approach</h1>
        <SectionWrapper subgrid>
            <TextBlock tight>
                <h3>
                    We invest £25-75k in early-stage creative companies, and
                    support them with our experience and network.
                </h3>

                <p>
                    In ustwo’s 15 years, we’ve learned that there is no single
                    path to success. But there are things that make a difference
                    in the end. Above all, we know that authenticity and values
                    matter.
                </p>

                <p>
                    Adventure is our platform for backing founders and teams who
                    understand this, and helping them on their journey.
                </p>
            </TextBlock>
        </SectionWrapper>
        <SectionWrapper subgrid>
            <PrinciplesH3>
                There are six principles that guide our investments:
            </PrinciplesH3>
            <PrincipleFlexContainer>
                {principleContent.map((principle, i) => (
                    <PrincipleElement
                        key={principle.title}
                        title={principle.title}
                        copy={principle.copy}
                        index={i + 1}
                    />
                ))}
            </PrincipleFlexContainer>
        </SectionWrapper>
        <SectionWrapper subgrid>
            <Wideh3>
                We partner closely with our portfolio — offering our support and
                guidance beyond investment, to foster growth in a way that works
                for them.
            </Wideh3>
            <TextBlock>
                <b>A belief Factory</b>
                <p>
                    You may come for the capital, but we want you to stay for
                    the belief. We offer the perspective and support to help you
                    forge your path.
                </p>

                <b>A flexible view on growth</b>
                <p>
                    The way companies grow is changing, and Venture Capital
                    isn’t the best fit for everyone. We invest via revenue-share
                    agreements alongside traditional equity, whichever is right
                    for you.
                </p>

                <b>A community of experts</b>
                <p>
                    ustwo is home to over 250 designers, developers, strategists
                    and operators. We’re here to bring that expertise to bear
                    and expand your thinking around what’s next.
                </p>
            </TextBlock>
        </SectionWrapper>

        <Applicationform />

        <FaqSection faqArray={faqContent} />
    </ApproachPage>
);

export default Index;
