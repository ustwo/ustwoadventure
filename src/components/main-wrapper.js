import { styled } from "linaria/react";

const MainWrapper = styled.main`
    margin-top: 170px;
    margin-bottom: 65px;
    display: subgrid;

    transform-origin: top;
    transition: opacity 160ms, transform 160ms ease-in-out;

    .transition {
        opacity: 0;
        transform: translate(0, 3px);
    }

    @media (max-width: 605px) {
        margin-top: 120px;
        margin-bottom: 50px;
    }

    @media (max-width: 570px) {
        margin-top: 100px;
    }
`;

// TODO: add transitions here?

export default MainWrapper;
