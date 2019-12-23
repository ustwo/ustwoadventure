import React from "react";
import { css } from "linaria";
import {
    Transition as ReactTransition,
    TransitionGroup
} from "react-transition-group";

const duration = 200;

const transitionStyles = {
    entering: {
        position: "absolute",
        opacity: 0,
        transform: "translateY(4px)"
    },
    entered: {
        transition: `all ${duration}ms ease-out`,
        opacity: 1
    },
    exiting: {
        transition: `all ${duration}ms ease-in`,
        opacity: 0,
        transform: "translateY(4px)"
    }
};

// Repeated here as well as in Layout as inheriting the grid so many times causes perf issues
// TODO: maybe remove and go back to subgrid once it has better support
const pageGrid = css`
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: repeat(12, 12fr);
    column-gap: var(--column-gap);
    @media (max-width: 769px) {
        --column-gap: 30px;
    }
    @media (max-width: 580px) {
        --column-gap: 24px;
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const TransitionWrapper = ({ children, location }) => (
    <TransitionGroup className={pageGrid}>
        <ReactTransition timeout={duration} key={location.pathname}>
            {status => (
                <div
                    className={pageGrid}
                    style={{
                        ...transitionStyles[status]
                    }}
                >
                    {children}
                </div>
            )}
        </ReactTransition>
    </TransitionGroup>
);

export default TransitionWrapper;
