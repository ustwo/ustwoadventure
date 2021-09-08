import React from "react";
import { styled } from "linaria/react";

import SectionWrapper from "../../components/section-wrapper";

const StyledIntroCopy = styled.div`
    grid-column: 1 / 7;

    h2 {
        max-width: 360px;
    }

    p {
        max-width: 470px;
    }

    @media (max-width: 1025px) {
        grid-column: 1 / 8;

        h2 {
            max-width: 330px;
        }
    }

    @media (max-width: 740px) {
        grid-column: 1 / 10;
    }

    @media (max-width: 580px) {
        grid-column: 1 / 12;

        h2 {
            max-width: 310px;
        }
    }
`;

const Intro = () => (
    <SectionWrapper style={{ marginTop: 0 }} subgrid>
        <StyledIntroCopy>
            <p>
                Between 2014 and 2020, we offered experience, advice and funding
                assistance to companies including:
            </p>
        </StyledIntroCopy>
    </SectionWrapper>
);

export default Intro;
