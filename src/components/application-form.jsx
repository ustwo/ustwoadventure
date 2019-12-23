import React, { useState } from "react";
import { styled } from "linaria/react";

import CTAWrapper from "./cta-wrapper";
import { StyledForm } from "./form-elements";
import Button from "./button";
import useNetlifySubmit from "../hooks/use-netlify-submit";

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
    successCopy,
    children,
    style,
    className,
    pages = 1
}) => {
    const [step, setStep] = useState(1);

    const [
        sending,
        response,
        handleNetlifySubmit,
        NetlifyRequiredInputs
    ] = useNetlifySubmit();

    const handleNext = e => {
        setStep(step + 1);
        console.log("step"); // Not working?
        e.preventDefault();
    };

    const handleSubmit = e => {
        setStep(step + 1);

        handleNetlifySubmit(/* data */);

        e.preventDefault();
    };

    return (
        <StyledCTAWrapper>
            <CopyWrapper>
                <h2>{title}</h2>
                <p className={sending ? "transition" : undefined}>
                    {response
                        ? response === true
                            ? successCopy ||
                              "Thanks! We'll read through what you've sent us and follow up via e-mail as soon as possible. Have a great day."
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
                <NetlifyRequiredInputs formName={name} />

                {children}

                <Button submit success={response === true}>
                    Submit
                </Button>

                {pages !== 1 && (
                    <p>{step <= pages ? `${step}/${pages}` : ":—)"}</p>
                )}
            </StyledForm>
        </StyledCTAWrapper>
    );
};

export default Applicationform;
