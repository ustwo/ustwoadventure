import React from "react";
import { styled } from "linaria/react";

import SEO from "../../components/seo";
import MainWrapper from "../../components/main-wrapper";
import Intro from "./intro";
import OurPortfolio from "./our-portfolio";
import CollectiveGenius from "./collective-genius";
import NewsletterSubscribe from "./newsletter-subscribe";

const HomePageHeader = styled.h1`
    margin: 0 0 130px auto;
    max-width: 710px;
    grid-column: 1 / -1;

    @media (max-width: 1025px) {
        max-width: 600px;
    }

    @media (max-width: 769px) {
        margin-bottom: 110px;
        max-width: 520px;
    }

    @media (max-width: 500px) {
        margin-bottom: 100px;
    }
`;

const Index = () => (
    <MainWrapper>
        <SEO />

        <HomePageHeader>
            ustwo Adventure invests in creative companies, differently
        </HomePageHeader>

        <Intro />
        <OurPortfolio />
        <CollectiveGenius />
        <NewsletterSubscribe />
    </MainWrapper>
);

export default Index;
