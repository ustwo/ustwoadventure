import React from "react";
import { styled } from "linaria/react";

import CTAWrapper from "./cta-wrapper";

const StyledCTAWrapper = styled(CTAWrapper)`
    margin-top: 50px;

    @media (max-width: 769px) {
        margin-top: 40px;
    }

    @media (max-width: 580px) {
        margin-top: 30px;
    }
`;

const CopyWrapper = styled.div`
    grid-column: 2 / 6;
    transition: all 200ms;

    &.transition {
        opacity: 0;
        transform: translateY(3px);
    }

    @media (max-width: 1080px) {
        grid-column: 2 / 7;
        margin-right: 40px;
    }

    @media (max-width: 860px) {
        margin-right: 20px;
    }

    @media (max-width: 715px) {
        margin-right: 0;
        margin-bottom: 60px;
        grid-column: 1 / -1;

        h2 {
            margin-bottom: 25px;
        }
    }
`;

const FormWrapper = ({ title, copy, children, className, style, sending }) => (
    <StyledCTAWrapper subgrid className={className} style={style}>
        <CopyWrapper className={sending ? "transition" : undefined}>
            <h2>{title}</h2>
            <p>{copy}</p>
        </CopyWrapper>

        {children}
    </StyledCTAWrapper>
);

export default FormWrapper;
