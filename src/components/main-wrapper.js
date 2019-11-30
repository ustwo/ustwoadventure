import { styled } from "linaria/react";

const MainWrapper = styled.main`
    margin-top: 170px;
    display: subgrid;

    transform-origin: top;
    transition: opacity 160ms, transform 160ms ease-in-out;

    .transition {
        opacity: 0;
        transform: translate(0, 3px);
    }
`;

// TODO: add transitions here?

export default MainWrapper;
