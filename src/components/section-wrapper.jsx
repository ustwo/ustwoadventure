import { styled } from "linaria/react";

const SectionWrapper = styled.section`
    margin: 30px 0;
    display: subgrid;
    display: ${props =>
        props.grid || props.subgrid ? "grid" : props.flex ? "flex" : "block"};
`;

export default SectionWrapper;

// TODO: More complex defaults and styling?
// import React from "react";
// import { styled } from "linaria/react";
// import { cx } from "linaria";

// const SectionWrapper = ({ grid, subgrid, flex, children }) => {
//     const StyledSection = styled.section`
//         margin: 30px 0;
//         display: block;
//         grid-column: 1 / -1;

//         &.subgrid {
//             display: subgrid;
//         }

//         &.grid {
//             display: grid;
//             grid-template-columns: ${props => `repeat(${props.grid}, 1fr)`};
//         }

//         &.flex {
//             display: flex;
//         }
//     `;

//     return (
//         <StyledSection
//             className={cx(grid && "grid", subgrid && "subgrid", flex && "flex")}
//             grid={grid}
//         >
//             {children}
//         </StyledSection>
//     );
// };
