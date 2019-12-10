import React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";

const StyledNav = styled.nav`
    --hitBoxPadding: 0.4em;

    a,
    a:visited {
        margin-left: 4.1vw;
        padding: var(--hitBoxPadding);

        font-size: 1.12em;
        line-height: 1.6;
        color: var(--grey04);

        &:hover {
            font-style: italic;
        }

        &:last-child {
            margin-right: calc(-1 * var(--hitBoxPadding));
        }

        @media (--for-over-desktop) {
            margin-left: 50px;
        }

        @media (--for-up-to-small-tablet) {
            --hitBoxPadding: 0.1em;
            display: block;
            margin: -0.1em 0;
            text-align: right;

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;

const Nav = () => (
    <StyledNav>
        <Link to="/approach">Approach</Link>
        <Link to="/portfolio">Portfolio</Link>
        {/* <Link to="/first-mile">First Mile</Link> */}
        <Link to="/about">About</Link>
    </StyledNav>
);

export default Nav;
