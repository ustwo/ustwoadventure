import React, { useState } from "react";
import { styled } from "linaria/react";

import CTAWrapper from "./cta-wrapper";
import { StyledForm } from "./form-elements";
import Button from "./button";

const StyledCTAWrapper = styled(CTAWrapper)`
    margin-top: 50px;

    @media (max-width: 769px) {
        margin-top: 40px;
    }

    @media (max-width: 580px) {
        margin-top: 30px;
    }
`;

const CopyWrapper = styled.div`
    grid-column: 2 / 6;

    @media (max-width: 715px) {
        margin-bottom: 40px;
        grid-column: 1 / -1;

        h2 {
            margin-bottom: 20px;
        }

        p {
            transition: opacity 200ms;

            &.transition {
                opacity: 0;
            }
        }
    }
`;

// TODO: Is a HOC the best way to do this? - fiddly to pass state up on submit to change copy on parent component
// Array method to paginate also not that good? Feels hacky
// Make reusbale hooks like useStep? -> {step === n && (<StepWrapper>nth step inputs here</StepWrapper>)}
const Applicationform = ({
    name,
    title,
    copy,
    children,
    style,
    className,
    pages = 1
}) => {
    const [step, setStep] = useState(1);
    const [response, setResponse] = useState(false);

    // TODO: handleSubmit and handleNext - merge to one function?
    const handleNext = e => {
        setStep(step + 1);
        console.log("step"); // Not working?
        e.preventDefault();
    };

    const handleSubmit = e => {
        // setStep(step + 1);

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
            body: encode(/* data */) // https://github.com/futuregerald/react-netlify-form-file/blob/afd730bf0fcc9b9cd78ebd85dac7a555d22dfd9b/src/App.js#L27
        })
            .then(() => setResponse(true))
            .catch(error => setResponse(error.code));

        e.preventDefault();
    };

    return (
        <StyledCTAWrapper>
            <CopyWrapper>
                <h2>{title}</h2>
                <p className={response && "transition"}>
                    {response
                        ? response === true
                            ? "Thanks! We'll read through what you've sent us and follow up via e-mail as soon as possible. Have a great day."
                            : `Looks like there has been a ${response} server error with sending the form. Sorry! Please try again, or email via the address in our footer.`
                        : copy}
                </p>
            </CopyWrapper>

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
                    <Button
                        submit
                        success={response && response.result === "success"}
                    >
                        Submit
                    </Button>
                ) : (
                    <Button external next onClick={handleNext}>
                        Next
                    </Button>
                )}

                {pages !== 1 && (
                    <p>{step <= pages ? `${step}/${pages}` : ":—)"}</p>
                )}
            </StyledForm>
        </StyledCTAWrapper>
    );
};

export default Applicationform;
