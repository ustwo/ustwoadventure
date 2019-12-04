import { styled } from "linaria/react";

const SectionWrapper = styled.section`
    margin: 40px 0;
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

// TODO: More complex defaults and styling?
// import React from "react";
// import { styled } from "linaria/react";
// import { cx, css } from "linaria";

// const SectionWrapper = ({ grid, subgrid, flex, children }) => {
//     const StyledSection = styled.section`
//         margin: 30px 0;
//         display: block;
//         grid-column: 1 / -1;
//     `;

//     const subgridStyle = css`
//         display: subgrid;
//     `;

//     const gridStyle = css`
//         display: grid;
//         grid-template-columns: ${props => `repeat(${props.grid}, 1fr)`};
//     `;

//     const flexStyle = css`
//         display: flex;
//     `;

//     return (
//         <StyledSection
//             className={cx(
//                 grid && gridStyle,
//                 subgrid && subgridStyle,
//                 flex && flexStyle
//             )}
//             grid={grid}
//         >
//             {children}
//         </StyledSection>
//     );
// };

export default SectionWrapper;
