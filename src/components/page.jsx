import React from "react";
import { styled } from "linaria/react";

import "../styles/base.css";
import "../styles/custom-properties.css";
import "../styles/custom-media.css";
import "../styles/type.css";
import "../styles/globals.css";

import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";

const Page = ({ title, description, children }) => {
    const PageWrapper = styled.div`
        display: grid;
        grid-template-columns: repeat(12, 12fr);
        column-gap: 36px;

        @media (--for-up-to-tablet) {
            column-gap: 24px;
        }

        @media (--for-up-to-mobile) {
            column-gap: 24px;
        }
    `;

    return (
        <>
            <SEO title={title} description={description} />

            <PageWrapper>
                <Header />
                <main>{children}</main>
                <Footer />
            </PageWrapper>
        </>
    );
};

export default Page;
