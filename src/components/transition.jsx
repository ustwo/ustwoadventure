import React from "react";
import { css } from "linaria";
import {
    Transition as ReactTransition,
    TransitionGroup
} from "react-transition-group";

const duration = 500;

const defaultStyle = {
    transition: `opacity ${duration}ms, transform ${duration}ms ease-in-out`
};

const transitionStyles = {
    entering: { opacity: 1, transform: "translateY(0px)" },
    entered: { opacity: 1, transform: "translateY(0px)" },
    exiting: { opacity: 0, transform: "translateY(3px)" },
    exited: { opacity: 0, transform: "translateY(3px)" }
};

const subgrid = css`
    display: subgrid;
`;

// TODO: Test why the perf on this is bad and it changes orbit-letter transparency?

const TransitionWrapper = ({ children, location }) => (
    <TransitionGroup className={subgrid}>
        <ReactTransition timeout={duration} key={location.pathname}>
            {status => (
                <div
                    className={subgrid}
                    style={{
                        ...defaultStyle,
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
