import React from "react";
import { styled } from "linaria/react";

import subgrid from "../../utils/subgrid-full-width";
import FooterLinks from "./footer-links";
import ADV from "./adv";

const Footer = () => {
    const StyledFooter = styled.footer`
        margin: 65px 0 55px 0;
        color: var(--grey04);

        a,
        a:visited {
            color: var(--grey04);
            width: max-content;
        }

        a:hover {
            font-style: italic;
        }

        ${subgrid}
    `;

    return (
        <StyledFooter>
            <ADV />
            <FooterLinks />
        </StyledFooter>
    );
};

export default Footer;
