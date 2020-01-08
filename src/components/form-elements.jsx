import React, { useEffect, useState } from "react";
import { styled } from "linaria/react";
import { cx } from "linaria";

export const StyledForm = styled.form`
    grid-column: 7 / 12;
    height: 100%;
    min-height: 372px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 0.92em;
    }

    @media (max-width: 810px) {
        input[type="submit"] {
            width: 100%;
        }
    }

    @media (max-width: 740px) {
        grid-column: 1 / -1;
    }
`;

const StepWrapper = styled.div`
    min-height: 365px;
    display: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    opacity: 0;
    transform: translateY(5px);
    transition: opacity 300ms, transform 300ms;

    &.active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 300ms 300ms, transform 300ms 300ms;
    }

    &.visible {
        display: flex;
    }
`;

export const FormStep = ({ isActive, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(isActive);
        }, 250);
    }, [isActive]);

    const classes = cx(isActive && "active", isVisible && "visible");

    return <StepWrapper className={classes}>{children}</StepWrapper>;
};

const InputWrapper = styled.div`
    position: relative;
    width: ${props => (props.halfWidth ? "47%" : "100%")};
    margin-bottom: 1.5em;

    input,
    textarea {
        padding: 0.86em;
        font-size: 16px;
        color: #ffffff;
        font-family: var(--pxGrotesk);
        font-weight: 400;
        line-height: 20px;
        border: none;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.18);
        box-shadow: none;
        transition: background-color 0.15s, transform 150ms, padding 150ms,
            margin-bottom 150ms;
        width: 100%;

        ::placeholder {
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.4;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.225);
        }

        &:focus {
            outline: none;
            background-color: rgba(0, 0, 0, 0.31);
        }

        &.invalid {
            background-color: rgba(120, 0, 0, 0.2);

            :hover {
                background-color: rgba(100, 0, 0, 0.225);
            }

            :focus {
                background-color: rgba(80, 0, 0, 0.31);
            }
        }
    }

    label {
        color: #ffffff;
        font-family: var(--pxGrotesk);
        display: block;
        position: absolute;
        opacity: 0;
        font-size: 0.92em;
        transition: opacity 100ms, top 150ms;
        top: -0.8em;
        left: 2px;
    }

    input:not(:placeholder-shown),
    textarea:not(:placeholder-shown) {
        transform: translateY(9px);
        transform-origin: bottom;
        padding: 0.68em 0.86em 0.68em 0.86em;
        margin-bottom: 0.38em;

        + label {
            top: -1em;
            z-index: 1;
            opacity: 1;
        }
    }

    textarea {
        height: 11em;
        resize: none;

        + label {
            top: -0.65em;
        }

        &:not(:placeholder-shown) {
            transform: scaleY(0.97) translateY(7px);
            margin-bottom: 0;

            + label {
                top: -0.85em;
            }
        }
    }

    @media (max-width: 960px) {
        width: 100%;
    }
`;

export const Input = ({
    style,
    className,
    label,
    name,
    type = "text",
    required = true,
    halfWidth,
    handleChange
}) => {
    const [processedLabel, setProcessedLabel] = useState(label);

    const handleBlur = e => {
        if (!e.target.checkValidity()) {
            e.target.classList = "invalid";
            setProcessedLabel(
                `${label} ${
                    e.target.value.length === 0 ? "(required)" : "(invalid)"
                }`
            );
        } else {
            e.target.classList = undefined;
            setProcessedLabel(label);
        }
    };

    return (
        <InputWrapper halfWidth={halfWidth} style={style} className={className}>
            {type === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    required={required}
                    placeholder={processedLabel}
                    onChange={handleChange}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    required={required}
                    placeholder={processedLabel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            )}
            <label htmlFor={name}>{processedLabel}</label>
        </InputWrapper>
    );
};
