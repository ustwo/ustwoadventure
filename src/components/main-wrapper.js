import { styled } from "linaria/react";

const MainWrapper = styled.main`
    margin-top: 170px;
    margin-bottom: 90px;
    display: subgrid;

    transform-origin: top;
    transition: opacity 160ms, transform 160ms ease-in-out;

    @media (max-width: 830px) {
        margin-top: 150px;
    }

    @media (max-width: 605px) {
        margin-top: 110px;
        margin-bottom: 80px;
    }

    @media (max-width: 570px) {
        margin-top: 90px;
    }
`;

export default MainWrapper;
