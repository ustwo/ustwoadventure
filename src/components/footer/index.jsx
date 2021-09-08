import React from "react";
import { styled } from "linaria/react";

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

    @media (max-width: 500px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const Footer = () => (
    <StyledFooter>
        <p>social links</p>
    </StyledFooter>
);

export default Footer;
