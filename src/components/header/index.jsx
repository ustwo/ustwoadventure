import React from "react";
import { styled } from "linaria/react";

import UstwoLogo from "../../assets/ustwo-logo";

const StyledHeader = styled.header`
    margin: 40px 0 0 0;
    width: 160px;

    @media (min-width: 1023px) {
        width: 220px;
    }
`;

const Header = () => (
    <StyledHeader>
        <a href="https://ustwo.com/">
            <UstwoLogo />
        </a>
    </StyledHeader>
);

export default Header;
