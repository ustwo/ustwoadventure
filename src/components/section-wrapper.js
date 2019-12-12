import { styled } from "linaria/react";

const SectionWrapper = styled.section`
    margin: ${props =>
        props.marginTop ? `${props.marginTop} 0 30px 0` : "30px 0"};
    display: subgrid;
    display: ${props =>
        props.grid || props.subgrid ? "grid" : props.flex ? "flex" : "block"};

    @media (--for-up-to-large-tablet) {
        margin: ${props =>
            props.marginTop
                ? `calc(${props.marginTop} * 0.9) 0 25px 0`
                : "25px 0"};
    }

    @media (--for-up-to-tablet) {
        margin: ${props =>
            props.marginTop
                ? `calc(${props.marginTop} * 0.77) 0 25px 0`
                : "25px 0"};
    }

    @media (--for-up-to-mobile) {
        margin: ${props =>
            props.marginTop
                ? `calc(${props.marginTop} * 0.667) 0 25px 0`
                : "20px 0"};
        grid-column: 1 / -1;
        grid-template-columns: repeat(1, 1fr);

        > * {
            grid-column: 1 / -1 !important;
        }
    }
`;

export default SectionWrapper;
