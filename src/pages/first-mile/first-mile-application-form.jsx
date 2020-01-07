import React, { useState } from "react";
import { styled } from "linaria/react";

import CTAWrapper from "../../components/cta-wrapper";
import { StyledForm, FormStep, Input } from "../../components/form-elements";
import useNetlifySubmit from "../../hooks/use-netlify-submit";
import useMultiStepForm from "../../hooks/use-multi-step-form";

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

const InvestmentContactForm = () => {
    const formName = "investment-contact";

    const {
        stepCount,
        currentStep,
        nextStep,
        SubmitButtons
    } = useMultiStepForm(2);

    const {
        sending,
        response,
        handleNetlifySubmit,
        NetlifyRequiredInputs,
        errorCopy
    } = useNetlifySubmit();

    const [companyName, setCompanyName] = useState("");
    const [website, setWebsite] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");
    const [roundSize, setRoundSize] = useState("");
    const [productMotivations, setProductMotivations] = useState("");
    const [companyRevenue, setCompanyRevenue] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const handleChange = e => {
        const { name, value } = e.target;

        if (name === "companyName") setCompanyName(value);
        if (name === "website") setWebsite(value);
        if (name === "companyDescription") setCompanyDescription(value);
        if (name === "roundSize") setRoundSize(value);
        if (name === "productMotivations") setProductMotivations(value);
        if (name === "companyRevenue") setCompanyRevenue(value);
        if (name === "contactName") setContactName(value);
        if (name === "contactEmail") setContactEmail(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (currentStep === stepCount) {
            const data = {
                "form-name": formName,
                companyName,
                website,
                companyDescription,
                productMotivations,
                companyRevenue,
                roundSize,
                contactName,
                contactEmail
            };
            handleNetlifySubmit(data);
        } else {
            nextStep();
        }
    };

    return (
        <StyledCTAWrapper>
            <CopyWrapper>
                <h2>Do you want some money?</h2>
                <p className={sending ? "transition" : undefined}>
                    {response
                        ? response === true
                            ? "Thanks! We'll read through what you've sent us and follow up via e-mail as soon as possible. Have a great day."
                            : errorCopy
                        : "If you’d like to get in touch with us about an investment opportunity, please fill out the form and we’ll get back to you as soon as possible. Don't forget to also read our FAQs below."}
                </p>
            </CopyWrapper>

            <StyledForm
                name={formName}
                method="POST"
                onSubmit={handleSubmit}
                data-netlify="true"
                netlify-honeypot="bot-field"
            >
                <NetlifyRequiredInputs formName={formName} />

                <FormStep isActive={currentStep === 1}>
                    <Input
                        halfWidth
                        label="Company Name"
                        name="companyName"
                        handleChange={handleChange}
                        required={currentStep === 1}
                    />

                    <Input
                        halfWidth
                        label="Website"
                        name="website"
                        handleChange={handleChange}
                        required={currentStep === 1}
                    />

                    <Input
                        label="Tell us about the company"
                        type="textarea"
                        name="companyDescription"
                        handleChange={handleChange}
                        required={currentStep === 1}
                    />

                    <Input
                        label="How much are you raising?"
                        name="roundSize"
                        handleChange={handleChange}
                        required={currentStep === 1}
                    />
                </FormStep>

                <FormStep isActive={currentStep >= 2}>
                    <Input
                        label="What motivates you to build the product?"
                        type="textarea"
                        name="productMotivations"
                        handleChange={handleChange}
                        required={currentStep === 2}
                    />

                    <Input
                        label="What revenue are you generating?"
                        name="companyRevenue"
                        handleChange={handleChange}
                        required={currentStep === 2}
                    />

                    <Input
                        halfWidth
                        label="Your Name"
                        name="contactName"
                        handleChange={handleChange}
                        required={currentStep === 2}
                    />

                    <Input
                        halfWidth
                        label="Email"
                        type="email"
                        name="contactEmail"
                        handleChange={handleChange}
                        required={currentStep === 2}
                    />
                </FormStep>

                <SubmitButtons success={response === true} />
            </StyledForm>
        </StyledCTAWrapper>
    );
};

export default InvestmentContactForm;
