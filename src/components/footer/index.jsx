import React from "react";
import { styled } from "linaria/react";

import FooterLinks from "./footer-links";
import ADV from "./adv";

const StyledFooter = styled.footer`
    margin-bottom: 40px;
    color: var(--grey04);
    display: subgrid;

    a,
    a:visited {
        color: var(--grey04);
        width: max-content;
    }

    a:hover {
        font-style: italic;
    }

    @media (--for-up-to-mobile) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Footer = () => (
    <StyledFooter>
        <ADV />
        <FooterLinks />
    </StyledFooter>
);

export default Footer;
