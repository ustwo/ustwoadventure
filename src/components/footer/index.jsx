import React from "react";
import { styled } from "linaria/react";

import subgrid from "../../utils/subgrid-full-width";
import FooterLinks from "./footer-links";
import ADV from "./adv";

const Footer = () => {
    const StyledFooter = styled.footer`
        margin-bottom: 55px;
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

        @media (--for-up-to-mobile) {
            grid-template-columns: repeat(3, 1fr);
        }
    `;

    return (
        <StyledFooter>
            <ADV />
            <FooterLinks />
        </StyledFooter>
    );
};

export default Footer;
