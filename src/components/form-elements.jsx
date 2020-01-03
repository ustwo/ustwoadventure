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

    @media (max-width: 715px) {
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

    label {
        display: block;
        position: absolute;
        opacity: 0;
        transition: opacity 100ms, top 200ms;
        top: -0.8em;
        left: 2px;
    }

    textarea + label {
        top: -0.46em;
    }

    input:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
        top: -0.97em;
        z-index: 1;
        opacity: 1;
    }

    textarea:not(:placeholder-shown) + label {
        top: -0.63em;
    }

    input:not(:placeholder-shown),
    textarea:not(:placeholder-shown) {
        transform: scaleY(0.97) translateY(9px);
        transform-origin: bottom;
        padding: 0.7em 0.86em 0.7em 0.86em;
        margin-bottom: 0.32em;
    }

    textarea:not(:placeholder-shown) {
        transform: scaleY(0.95) translateY(9px);
        margin-bottom: 0;
    }

    input,
    textarea {
        transition: transform 200ms, padding 200ms, margin-bottom 200ms;
        width: 100%;
        box-sizing: border-box;
    }

    textarea {
        height: 11em;
        resize: none;
    }

    input.invalid,
    textarea.invalid {
        background-color: rgba(120, 0, 0, 0.2);
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
