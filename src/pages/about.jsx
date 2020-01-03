import React from "react";
import { styled } from "linaria/react";

import SEO from "../components/seo";
import MainWrapper from "../components/main-wrapper";
import TextBlock from "../components/text-block";
import InlineVideo from "../components/inline-video";
import SectionWrapper from "../components/section-wrapper";
import Button from "../components/button";

import justinPhoto from "../assets/about/justin.jpg";
import neefPhoto from "../assets/about/neef.jpg";

const StyledAboutPage = styled(MainWrapper)`
    h1:first-of-type {
        grid-column: 1 / 4;

        @media (max-width: 500px) {
            grid-column: 1 / -1;
        }
    }

    section:not(:first-child) {
        margin-top: 90px;

        @media (max-width: 870px) {
            margin-top: 60px;
        }

        @media (max-width: 700px) {
            margin-top: 50px;
        }

        @media (max-width: 600px) {
            margin-top: 40px;
        }

        @media (max-width: 600px) {
            margin-top: 30px;
        }
    }
`;

const IntroCopy = styled(TextBlock)`
    margin-bottom: 20px;

    @media (max-width: 769px) {
        margin-top: 50px;
    }

    @media (max-width: 600px) {
        margin-top: 35px;
    }
`;

const AboutH3 = styled.h3`
    font-size: 1.9em;
    line-height: 140%;
    margin-top: -0.1em;

    @media (max-width: 769px) {
        font-size: 1.7em;
    }
`;

const TeamAdventureCopy = styled.div`
    grid-column: 1 / 6;

    @media (max-width: 1100px) {
        grid-column: 1 / 7;
        margin-right: 40px;
    }

    @media (max-width: 920px) {
        margin-right: 30px;
    }

    @media (max-width: 870px) {
        grid-column: 1 / 9;
        margin-right: 0;
    }

    @media (max-width: 630px) {
        grid-column: 1 / 11;
    }
`;

// postcss-subgrid won't work here as it's not full-width
const TeamMemberWrapper = styled.div`
    grid-column: 7 / -1;
    display: grid;
    grid-gap: inherit;
    grid-template-columns: repeat(6, 1fr);

    @media (max-width: 870px) {
        margin-top: 15px;
        grid-column: 6 / 12;
    }

    @media (max-width: 680px) {
        margin-top: 0;
        grid-column: 4 / 11;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media (max-width: 650px) {
        margin-top: 5px;
        grid-column: 5 / 13;
    }

    @media (max-width: 610px) {
        margin-top: 10px;
    }

    @media (max-width: 570px) {
        margin-top: 0;
        grid-column: 4 / -1;
    }

    @media (max-width: 500px) {
        margin-top: 20px;
        width: 77%;
    }

    @media (max-width: 420px) {
        width: 100%;
    }
`;

const TeamMember = styled.div`
    grid-column: span 3;

    p:first-child {
        font-size: 1.18em;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--piglet);
        margin-bottom: 0.26em;
    }

    img {
        object-fit: cover;
        width: 100%;
    }

    @media (max-width: 680px) {
        width: 46%;

        p:first-child {
            font-size: 1.1em;
        }
    }
`;

const AboutUstwoCopy = styled.div`
    grid-column: 7 / -1;
    margin-top: 8vw;

    @media (min-width: 1280px) {
        margin-top: 110px;
    }

    @media (max-width: 965px) {
        grid-column: 6 / -1;
    }

    @media (max-width: 769px) {
        margin-top: 4vw;
    }

    @media (max-width: 680px) {
        grid-column: 3 / -1;
        margin-top: 0;
    }

    @media (max-width: 540px) {
        grid-column: 1 / -1;
    }
`;

const AboutUstwoVideo = styled(InlineVideo)`
    grid-column: 1 / 6;
    width: 100%;

    @media (max-width: 1025px) {
        grid-column: 1 / 7;
        margin-right: 30px;
        width: calc(100% - 30px);
    }

    @media (max-width: 965px) {
        grid-column: 1 / 6;
    }

    @media (max-width: 769px) {
        margin-right: 15px;
        width: calc(100% - 15px);
    }

    @media (max-width: 680px) {
        display: none;
    }
`;

const Portfolio = () => (
    <StyledAboutPage>
        <SEO
            title="About"
            description="About ustwo Adventure — Investing in creative companies, differently."
        />

        <h1>About</h1>

        <IntroCopy largeHeader>
            <AboutH3>
                ustwo Adventure exists to support early-stage companies that
                have values and creativity at their core.
            </AboutH3>

            <p>
                Since 2014, we’ve supported young businesses on their journeys.
                From launching a company, to running a collaborative workspace,
                to what we do today, Adventure is an expression of ustwo’s
                values applied to the world of investment and company building.
                We pride ourselves on working with companies and people that
                enable creativity to thrive.
            </p>
        </IntroCopy>

        <SectionWrapper>
            <TeamAdventureCopy>
                <h2>Team Adventure</h2>
                <p>
                    Adventure is a small team inside of ustwo, here to support
                    you and connect you across our network.
                </p>

                <p>
                    Alongside our community of 250+ ustwobies, these are the
                    people you’ll work with to build your business.
                </p>
            </TeamAdventureCopy>

            <TeamMemberWrapper>
                <TeamMember>
                    <p>Justin</p>
                    <img src={justinPhoto} alt="Justin Michaels headshot" />
                    <p>Adventure Director</p>
                </TeamMember>

                <TeamMember>
                    <p>Neef</p>
                    <img src={neefPhoto} alt="Neef Rehman headshot" />
                    <p>Designer & web developer</p>
                </TeamMember>
            </TeamMemberWrapper>
        </SectionWrapper>

        <SectionWrapper>
            <AboutUstwoVideo
                // hasSound
                src="https://player.vimeo.com/external/189642924.sd.mp4?s=2dafa1fb7c8ef594412e9fa7fd4be182163d7f71&profile_id=165"
                poster="https://images.ctfassets.net/gw5wr8vzz44g/1U3hetCC84dw7qCUwdUjiL/fdf3a817455b6f0049c3e29d4544366e/sinx-presentation-ustwo-studio.jpg?w=600&fm=webp"
            />

            <AboutUstwoCopy>
                <h2>About ustwo</h2>
                <p>
                    Founded in 2004 by two best friends, ustwo started as a
                    digital design studio with a mission to make a meaningful
                    impact on the world. Along the way, we expanded to new
                    markets, created an award-winning games studio, and launched
                    Adventure to support other creative businesses.
                </p>

                <Button external href="https://ustwo.com">
                    ustwo.com
                </Button>
            </AboutUstwoCopy>
        </SectionWrapper>
    </StyledAboutPage>
);

export default Portfolio;
