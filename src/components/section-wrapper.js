import { styled } from "linaria/react";

const SectionWrapper = styled.section`
    margin: ${props => (props.noMarginTop ? "0 0 40px 0" : "40px 0")};
    display: subgrid;
    display: ${props =>
        props.grid || props.subgrid ? "grid" : props.flex ? "flex" : "block"};

    @media (--for-up-to-mobile) {
        grid-column: 1 / -1;
        grid-template-columns: repeat(1, 1fr);

        > * {
            grid-column: 1 / -1 !important;
        }
    }
`;

export default SectionWrapper;
