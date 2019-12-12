import React from "react";
import { Link } from "gatsby";
// import { styled } from "linaria/react";
import { css, cx } from "linaria";

import {
    arrow,
    backArrow,
    externalArrow,
    externalArrowHover,
    tick
} from "../assets/inline-icons";

const StyledButton = css`
    display: inline-block;
    margin-top: 5px;
    margin-right: 16px;

    padding: 9px 40px 9px 12px;
    box-sizing: border-box;
    border: 1px solid var(--nonBlack);

    font-size: 0.88em;
    text-transform: uppercase;

    background-repeat: no-repeat;
    transition: background-position 90ms;

    &:hover {
        box-shadow: inset 0 0 0 0.5px var(--nonBlack);
    }

    &.internal,
    &.submit {
        background-image: url(${arrow});
        background-size: 15px auto;
        background-position: calc(100% - 14px) 50%;

        &:hover {
            background-position: calc(100% - 11px) 50%;
        }
    }

    &.back {
        background-image: url(${backArrow});
        background-size: 15px auto;
        background-position: 14px 50%;
        padding-right: 15px;
        padding-left: 40px;

        &:hover {
            background-position: 11px 50%;
        }
    }

    &.external {
        background-image: url(${externalArrow});
        background-size: 13px auto;
        background-position: calc(100% - 14px) 50%;
        transition: background-position 0s;

        &:hover {
            background-image: url(${externalArrowHover});
            background-size: 14px auto;
            background-position: calc(100% - 13px) 50%;
        }
    }

    &.submit,
    &.next {
        border: none;
        background-color: #ffffff;
        padding-top: 12px;
        padding-bottom: 12px;
        color: var(--piglet);
        min-width: 110px;

        &:hover {
            cursor: pointer;
            box-shadow: none;
        }

        &.success {
            background-image: url(${tick});

            &:hover {
                background-position: calc(100% - 14px) 50%;
            }
        }
    }

    @media (--for-up-to-large-tablet) {
        font-size: 0.82em;
        padding: 8px 36px 9px 11px;
    }

    @media (max-width: 346px) {
        &:not(:first-of-type) {
            margin-top: 15px;
        }
    }
`;

const Button = ({ children, external, back, href, submit, success, next }) => {
    const classes = cx(
        StyledButton,
        external ? "external" : "internal",
        back && "back",
        submit && "submit",
        next && "next",
        success && "success"
    );

    // TODO: refactor away from so many ternaries??
    return external ? (
        <a
            className={classes}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    ) : submit ? (
        <input className={classes} type="submit" value={children} />
    ) : (
        <Link className={classes} to={href}>
            {children}
        </Link>
    );
};

export default Button;
