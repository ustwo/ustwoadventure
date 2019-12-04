import React from "react";
import { Link } from "gatsby";
// import { styled } from "linaria/react";
import { css, cx } from "linaria";

import {
    arrow,
    backArrow,
    externalArrow,
    externalArrowHover
} from "../assets/inline-arrows";

const Button = ({ children, external, back, href }) => {
    const StyledButton = css`
        display: inline-block;
        margin-top: 5px;
        margin-right: 20px;

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

        &.internal {
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

        @media (--for-up-to-large-tablet) {
            font-size: 0.82em;
            padding: 8px 37px 9px 12px;
        }
    `;

    const classes = cx(
        StyledButton,
        external ? "external" : "internal",
        back && "back"
    );

    return external ? (
        <a
            className={classes}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    ) : (
        <Link className={classes} to={href}>
            {children}
        </Link>
    );
};

export default Button;
