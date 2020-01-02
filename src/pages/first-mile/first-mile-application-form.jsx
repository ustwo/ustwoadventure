import React, { useState } from "react";
import { styled } from "linaria/react";

import CTAWrapper from "../../components/cta-wrapper";
import { StyledForm, FormStep, Input } from "../../components/form-elements";
import Button from "../../components/button";
import useNetlifySubmit from "../../hooks/use-netlify-submit";

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

    p {
        transition: all 200ms;

        &.transition {
            opacity: 0;
            transform: translateY(3px);
        }
    }

    @media (max-width: 1080px) {
        grid-column: 2 / 7;
        margin-right: 40px;
    }

    @media (max-width: 715px) {
        margin-right: 0;
        margin-bottom: 60px;
        grid-column: 1 / -1;

        h2 {
            margin-bottom: 25px;
        }
    }
`;

const FirstMileApplicationForm = () => {
    const formName = "investment-contact";
    const pageCount = 2;

    const {
        sending,
        response,
        handleNetlifySubmit,
        NetlifyRequiredInputs
    } = useNetlifySubmit();

    const [step, setStep] = useState(1);

    const [companyName, setCompanyName] = useState("");
    const [website, setWebsite] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");
    const [companyStage, setCompanyStage] = useState("");
    const [companyRevenue, setCompanyRevenue] = useState("");
    const [roundSize, setRoundSize] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const handleChange = e => {
        const { name, value } = e.target;

        if (name === "companyName") setCompanyName(value);
        if (name === "website") setWebsite(value);
        if (name === "companyDescription") setCompanyDescription(value);
        if (name === "companyStage") setCompanyStage(value);
        if (name === "companyRevenue") setCompanyRevenue(value);
        if (name === "roundSize") setRoundSize(value);
        if (name === "contactName") setContactName(value);
        if (name === "contactEmail") setContactEmail(value);
    };

    // const handleBack = e => {
    //     setStep(step - 1);
    //     console.log(step);
    //     e.preventDefault();
    // };

    const handleSubmit = e => {
        if (step === pageCount) {
            const data = {
                "form-name": formName,
                companyName,
                website,
                companyDescription,
                companyStage,
                companyRevenue,
                roundSize,
                contactName,
                contactEmail
            };

            handleNetlifySubmit(data);
        }
        setStep(step + 1);
        e.preventDefault();
    };

    return (
        <StyledCTAWrapper>
            <CopyWrapper>
                <h2>Do you want some money?</h2>
                <p className={sending ? "transition" : undefined}>
                    {response
                        ? response === true
                            ? "Thanks! We'll read through what you've sent us and follow up via e-mail as soon as possible. Have a great day."
                            : `Looks like there has been a ${response} server error with sending the form. Sorry! Please try again, or email us at hello.adventure@ustwo.com.`
                        : "If you’d like to get in touch with us about an investment opportunity, fill out the form and we’ll get back to you as soon as possible. Please also make sure to read our FAQs below."}
                </p>
            </CopyWrapper>

            <StyledForm
                noValidate
                name={formName}
                method="POST"
                onSubmit={handleSubmit}
                data-netlify="true"
                netlify-honeypot="bot-field"
            >
                <NetlifyRequiredInputs formName={formName} />

                <FormStep isActive={step === 1}>
                    <Input
                        halfWidth
                        label="Company Name"
                        name="companyName"
                        handleChange={handleChange}
                    />

                    <Input
                        halfWidth
                        label="Website"
                        name="website"
                        handleChange={handleChange}
                    />

                    <Input
                        label="Tell us about what you do"
                        type="textarea"
                        name="companyDescription"
                        handleChange={handleChange}
                    />

                    <Input
                        label="What stage are you at?"
                        name="companyStage"
                        handleChange={handleChange}
                    />
                </FormStep>

                <FormStep isActive={step >= 2}>
                    <Input
                        label="What are your revenue and user metrics?"
                        type="textarea"
                        name="companyRevenue"
                        handleChange={handleChange}
                    />

                    <Input
                        label="How much are you looking to raise?"
                        name="roundSize"
                        handleChange={handleChange}
                    />

                    <Input
                        halfWidth
                        label="Your Name"
                        name="contactName"
                        handleChange={handleChange}
                    />

                    <Input
                        halfWidth
                        label="Email"
                        type="email"
                        name="contactEmail"
                        handleChange={handleChange}
                    />
                </FormStep>

                <div>
                    {/* {step > 1 && (
                        <Button href="" white back onClick={handleBack}>
                            Back
                        </Button>
                    )} */}
                    <Button
                        white
                        submit
                        success={response === true}
                        disabled={response === true}
                    >
                        {step < pageCount ? "Next" : "Submit"}
                    </Button>
                </div>

                {pageCount !== 1 && (
                    <p>{step <= pageCount ? `${step}/${pageCount}` : ":—)"}</p>
                )}
            </StyledForm>
        </StyledCTAWrapper>
    );
};

export default FirstMileApplicationForm;
