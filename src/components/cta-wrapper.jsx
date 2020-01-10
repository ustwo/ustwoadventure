import React from "react";
import { styled } from "linaria/react";

import SectionWrapper from "./section-wrapper";

const CTABackground = styled(SectionWrapper)`
    background-color: var(--piglet);
    box-shadow: var(--card-shadow);
    border-radius: 1px;

    --side-margin: -1.2em;
    margin-left: var(--side-margin);
    margin-right: var(--side-margin);
    padding: 65px 0; /* was calc(var(--side-margin) * -1) to keep inline with page grid, but didn't look good */

    @media (max-width: 740px) {
        --side-margin: 0;
        padding: 40px 32px;
        grid-template-columns: repeat(1, 1fr);
    }
`;

const CTAInner = styled.div`
    display: subgrid;

    h2,
    p {
        color: #ffffff;
    }

    h2 {
        margin-bottom: 25px;
    }

    p:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 740px) {
        text-align: center;
        width: 75%;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 610px) {
        width: 85%;
    }

    @media (max-width: 540px) {
        width: 100%;
    }
`;

const CTAWrapper = ({ as, children, className, style, onClick }) => (
    <CTABackground
        as={as}
        subgrid
        className={className}
        style={style}
        onClick={onClick}
    >
        <CTAInner>{children}</CTAInner>
    </CTABackground>
);

export default CTAWrapper;
