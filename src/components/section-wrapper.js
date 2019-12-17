import { styled } from "linaria/react";

const SectionWrapper = styled.section`
    margin: 40px 0;
    display: subgrid;
    display: ${props =>
        props.grid || props.subgrid ? "grid" : props.flex ? "flex" : "block"};

    @media (max-width: 1025px) {
        margin: 30px 0;
    }

    @media (max-width: 769px) {
        margin: 25px 0;
    }

    @media (max-width: 500px) {
        margin: 20px 0;
        grid-column: 1 / -1;
        grid-template-columns: repeat(1, 1fr);

        > * {
            grid-column: 1 / -1 !important;
        }
    }
`;

export default SectionWrapper;
