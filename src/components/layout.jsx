import React from "react";
import { styled } from "linaria/react";

import "../styles/base.css";
import "../styles/custom-properties.css";
import "../styles/custom-media.css";
import "../styles/type.css";
import "../styles/globals.css";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    const PageWrapper = styled.div`
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: repeat(12, 12fr);
        column-gap: 36px;

        @media (--for-up-to-tablet) {
            column-gap: 24px;
        }

        @media (--for-up-to-mobile) {
            grid-template-columns: repeat(1, 1fr);
        }
    `;

    return (
        <PageWrapper>
            <Header />
            {children}
            <Footer />
        </PageWrapper>
    );
};

export default Layout;
