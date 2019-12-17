import React, { useState } from "react";
import { styled } from "linaria/react";

import Button from "./button";

export const StyledForm = styled.form`
    grid-column: 7 / 12;
    height: 100%;
    min-height: 330px;
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

export const StepWrapper = styled.div`
    min-height: 15em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`;

// TODO: Is a HOC the best way to do this? - fiddly to pass state up on submit to change copy on parent component
// Array method to paginate also not that good? Feels hacky
// Make reusbale hooks like useStep? -> {step === n && (<StepWrapper>nth step inputs here</StepWrapper>)}

export const Form = ({ children, name, style, className, pages = 1 }) => {
    const [step, setStep] = useState(1);

    // TODO: handleSubmit and handleNext - merge to one function?
    const handleNext = e => {
        setStep(step + 1);
        console.log("step"); // Not working?
        e.preventDefault();
    };

    const handleSubmit = e => {
        setStep(step + 1);

        const encode = data => {
            const formData = new FormData();
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });
            return formData;
        };

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data; boundary=random"
            },
            body: encode({
                "form-name": name /* , ...stateFromParent */
            })
        })
            .then(() => {}) // Pass up to parent component to change copy etc?
            .catch((/* error */) => {}); // Pass up to parent component to change copy etc?

        e.preventDefault();
    };

    return (
        <StyledForm
            style={style}
            className={className}
            name={name}
            method="POST"
            onSubmit={handleSubmit}
            data-netlify="true"
            netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value={name} />
            <label htmlFor="bot-field" style={{ display: "none" }}>
                Don’t fill this out:
                <input name="bot-field" />
            </label>

            {children}

            {step === pages ? (
                <Button submit>Submit</Button>
            ) : (
                <Button external next onClick={handleNext}>
                    Next
                </Button>
            )}

            {pages !== 1 && <p>{step <= pages ? `${step}/${pages}` : ":—)"}</p>}
        </StyledForm>
    );
};

const InputWrapper = styled.div`
    position: relative;
    width: ${props => (props.halfWidth ? "47%" : "100%")};
    margin-bottom: 1.5em;

    label {
        display: block;
        position: absolute;
        opacity: 0;
        transition: opacity 0.1s;
        top: -1.7em;
        left: 1px;
    }

    input:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
        z-index: 1;
        opacity: 1;
    }

    input,
    textarea {
        width: 100%;
        box-sizing: border-box;
    }

    textarea {
        height: 11em;
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
