import React from "react";
import { styled } from "linaria/react";

import "../styles/base.css";
import "../styles/custom-properties.css";
import "../styles/custom-media.css";
import "../styles/type.css";
import "../styles/globals.css";

import Header from "./header";
import Footer from "./footer";
import TransitionWrapper from "./transition";

const PageWrapper = styled.div`
    --column-gap: 36px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: repeat(12, 12fr);
    column-gap: var(--column-gap);

    @media (--for-up-to-tablet) {
        --column-gap: 30px;
    }

    @media (--for-up-to-small-tablet) {
        --column-gap: 24px;
    }

    @media (--for-up-to-mobile) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Layout = ({ children, location }) => (
    <PageWrapper>
        <Header />
        <TransitionWrapper location={location}>{children}</TransitionWrapper>
        <Footer />
    </PageWrapper>
);

export default Layout;
