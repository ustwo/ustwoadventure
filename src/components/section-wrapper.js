import { styled } from "linaria/react";

const SectionWrapper = styled.section`
    margin: 30px 0;
    display: subgrid;
    display: ${props => (props.grid ? "grid" : "block")};
    grid-template-columns: ${props => `repeat(${props.grid}, 1fr)`};
`;

export default SectionWrapper;
