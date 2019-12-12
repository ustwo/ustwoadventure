import React, { useState } from "react";
import { styled } from "linaria/react";

import Button from "./button";

const StyledForm = styled.form`
    grid-column: 7 / 12;
    height: 100%;
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

export const NetlifyForm = ({ children, style, className, pages = 1 }) => {
    const [step, setStep] = useState(1);

    // TODO: handleSubmit and handleNext
    const handleNext = e => {
        setStep(step + 1);
        e.preventDefault();
    };

    const handleSubmit = e => {
        setStep(step + 1);
        e.preventDefault();
    };

    return (
        <StyledForm
            style={style}
            className={className}
            name="investment-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="investment-contact" />
            <label htmlFor="bot-field" style={{ display: "none" }}>
                Don’t fill this out:
                <input name="bot-field" />
            </label>

            {children}

            {step === pages ? (
                <Button submit onClick={handleSubmit}>
                    Submit
                </Button>
            ) : (
                <Button next href={undefined} onClick={handleNext}>
                    Next
                </Button>
            )}

            {pages !== 1 &&
                (step <= pages ? (
                    <p>
                        {step}/{pages}
                    </p>
                ) : (
                    <p>:—)</p>
                ))}
        </StyledForm>
    );
};

const InputWrapper = styled.div`
    position: relative;
    width: ${props => (props.halfWidth ? "48%" : "100%")};

    label {
        display: block;
        position: absolute;
        opacity: 0;
        transition: opacity 0.1s;
        top: -1.5em;
    }

    input:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
        z-index: 1;
        opacity: 1;
    }

    input,
    textarea {
        width: calc(100% - 2 * var(--input-padding));
        margin-bottom: 1.4em;
    }

    @media (max-width: 960px) {
        width: 100%;
    }
`;

export const Input = ({
    label,
    name,
    type = "text",
    required = true,
    halfWidth
}) => (
    <InputWrapper halfWidth={halfWidth}>
        {type === "textarea" ? (
            <textarea
                rows="10"
                name={name}
                required={required}
                placeholder={label}
            />
        ) : (
            <input
                id={name}
                type={type}
                name={name}
                required={required}
                placeholder={label}
            />
        )}
        <label htmlFor={name}>{label}</label>
    </InputWrapper>
);
