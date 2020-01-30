import React, { createContext, useState } from "react";
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

    @media (max-width: 769px) {
        --column-gap: 30px;
    }

    @media (max-width: 580px) {
        --column-gap: 24px;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const setIs404Context = createContext(null);

const Layout = ({ children, location }) => {
    const [is404, setIs404] = useState(false);

    return (
        <setIs404Context.Provider value={setIs404}>
            <PageWrapper>
                <Header is404={is404} />

                <TransitionWrapper location={location}>
                    {children}
                </TransitionWrapper>

                <Footer />
            </PageWrapper>
        </setIs404Context.Provider>
    );
};

export default Layout;
