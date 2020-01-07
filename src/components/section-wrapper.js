import { styled } from "linaria/react";

const SectionWrapper = styled.section`
    margin: 36px 0;
    display: subgrid;

    @media (max-width: 1025px) {
        margin: 30px 0;
    }

    @media (max-width: 769px) {
        margin: 25px 0;
    }

    @media (max-width: 500px) {
        grid-column: 1 / -1;
        grid-template-columns: repeat(1, 1fr);

        > * {
            grid-column: 1 / -1 !important;
        }
    }
`;

export default SectionWrapper;
