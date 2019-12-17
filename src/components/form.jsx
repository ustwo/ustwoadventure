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

// TODO: Is a HOC the best way to do this? - fiddly to pass state up on submit to change copy on parent component
// Array method to paginate also not that good? Feels hacky
// Make reusbale hooks like useStep? And reusable function like netlifyFormSubmit?
// and NetlifyInputs as component? -> ./netlify-submit.jsx
// {step === n && (<div>nth step</div>)}

export const Form = ({
    children,
    netlify,
    name,
    style,
    className,
    pages = 1
}) => {
    const [step, setStep] = useState(1);

    // TODO: handleSubmit and handleNext - merge to one function?
    const handleNext = e => {
        setStep(step + 1);
        e.preventDefault();
    };

    const handleSubmit = e => {
        setStep(step + 1);

        const encode = data =>
            Object.keys(data)
                .map(
                    key =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            data[key]
                        )}`
                )
                .join("&");

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": name /* , ...state */ })
        })
            .then(() => {})
            .catch((/* error */) => {});

        e.preventDefault();
    };

    return (
        <StyledForm
            style={style}
            className={className}
            name={name}
            method="POST"
            data-netlify={netlify}
            netlify-honeypot={netlify && "bot-field"}
        >
            {netlify && (
                <>
                    <input type="hidden" name="form-name" value={name} />
                    <label htmlFor="bot-field" style={{ display: "none" }}>
                        Don’t fill this out:
                        <input name="bot-field" />
                    </label>
                </>
            )}

            {children}

            {step === pages ? (
                <Button submit onClick={handleSubmit}>
                    Submit
                </Button>
            ) : (
                <Button next onClick={handleNext}>
                    Next
                </Button>
            )}

            {pages !== 1 && <p>{step <= pages ? `${step}/${pages}` : ":—)"}</p>}
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
                id={name}
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
