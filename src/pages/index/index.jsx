import React from "react";
import { styled } from "linaria/react";

import SEO from "../../components/seo";
import MainWrapper from "../../components/main-wrapper";
import Intro from "./intro";
import OurPortfolio from "./our-portfolio";
import CollectiveGenius from "./collective-genius";

const Index = () => {
    const HomePageHeader = styled.h1`
        margin: 0 0 130px auto;
        max-width: calc(400px + 31vw);
        grid-column: 1 / -1;

        @media (--for-over-desktop) {
            max-width: 710px;
        }

        @media (--for-up-to-large-tablet) {
            max-width: calc(400px + 20vw);
        }

        @media (--for-up-to-tablet) {
            margin: 0 0 110px auto;
        }
    `;

    return (
        <MainWrapper>
            <SEO />

            <HomePageHeader>
                ustwo Adventure invests in creative companies, differently
            </HomePageHeader>

            <Intro />
            <OurPortfolio />
            <CollectiveGenius />
        </MainWrapper>
    );
};

export default Index;
