import React from "react";
import { styled } from "linaria/react";

import Button from "../components/button";
import SEO from "../components/seo";
import SectionWrapper from "../components/section-wrapper";

const StyledMain = styled.div`
    h1 {
        grid-column: 2 / 12;
        margin-bottom: 80px;
        margin-left: auto;
        width: max-content;
    }

    a {
        grid-column: 2 / 12;
        margin-bottom: 50px;
        width: 130px;
    }

    @media (max-width: 500px) {
        h1 {
            margin-right: 10%;
        }

        a {
            margin-left: 10%;
            width: 120px;
        }
    }
`;

const FourOhFour = () => {
    return (
        <StyledMain>
            <SEO />

            <SectionWrapper>
                <h1>Page not found</h1>

                <h1>¯\_(ツ)_/¯</h1>

                <Button back href="/">
                    Go home
                </Button>
            </SectionWrapper>
        </StyledMain>
    );
};

export default FourOhFour;
