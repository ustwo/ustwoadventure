import React from "react";
import { styled } from "linaria/react";

import Page from "../../components/page";
import SectionWrapper from "../../components/section-wrapper";
import MainWrapper from "../../components/main-wrapper";

const Index = () => {
    const HomePage = styled(MainWrapper)`
        h1 {
            margin: 0 0 140px auto;
            max-width: 710px;
            grid-column: 5 / -1;
        }
    `;

    return (
        <Page>
            <HomePage>
                <h1>
                    ustwo Adventure invests in creative companies, differently
                </h1>
                <SectionWrapper grid="4" />
            </HomePage>
        </Page>
    );
};

export default Index;
