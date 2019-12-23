import React from "react";
import { styled } from "linaria/react";

import MainWrapper from "../components/main-wrapper";
import Button from "../components/button";
import SEO from "../components/seo";
import SectionWrapper from "../components/section-wrapper";

const StyledMain = styled(MainWrapper)`
    h1 {
        margin-bottom: 80px;
        margin-right: 10%;
        margin-left: auto;
        width: max-content;
    }

    a {
        margin-left: 10%;
        margin-bottom: 50px;
    }
`;

const Shruggie = styled.h1``;

const FourOhFour = () => (
    <StyledMain>
        <SEO />

        <SectionWrapper style={{ display: "block" }}>
            <h1>Page not found</h1>

            <Shruggie>¯\\_(ツ)_/¯</Shruggie>

            <Button back href="/">
                Go home
            </Button>
        </SectionWrapper>
    </StyledMain>
);

export default FourOhFour;
