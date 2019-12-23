import React, { useEffect, useContext } from "react";
import { styled } from "linaria/react";

import MainWrapper from "../components/main-wrapper";
import Button from "../components/button";
import SEO from "../components/seo";
import SectionWrapper from "../components/section-wrapper";
import { setIs404Context } from "../components/layout";

const StyledMain = styled(MainWrapper)`
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
    const setIs404 = useContext(setIs404Context);

    useEffect(() => {
        setIs404(true);

        return () => {
            setIs404(false);
        };
    });

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
