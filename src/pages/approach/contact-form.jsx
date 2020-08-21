import React, { useState } from "react";

import FormWrapper from "../../components/form-wrapper";
import { StyledForm, FormStep, Input } from "../../components/form-elements";
import useNetlifySubmit from "../../hooks/use-netlify-submit";
import useMultiStepForm from "../../hooks/use-multi-step-form";

const InvestmentContactForm = () => {
    const formName = "investment-contact";

    const {
        stepCount,
        currentStep,
        nextStep,
        SubmitButtons
    } = useMultiStepForm({ stepCount: 2 });

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
        else if (name === "website") setWebsite(value);
        else if (name === "companyDescription") setCompanyDescription(value);
        else if (name === "roundSize") setRoundSize(value);
        else if (name === "productMotivations") setProductMotivations(value);
        else if (name === "companyRevenue") setCompanyRevenue(value);
        else if (name === "contactName") setContactName(value);
        else if (name === "contactEmail") setContactEmail(value);
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
        <FormWrapper
            sending={sending}
            title={
                response
                    ? response === true
                        ? "Thanks!"
                        : "Error"
                    : // : "Do you want some money?"
                      "Currently: not investing"
            }
            copy={
                response
                    ? response === true
                        ? "Thanks! We'll take a read through what you've sent us and follow up via e-mail as soon as possible. Have a great day."
                        : errorCopy
                    : // : "If you’d like to get in touch with us about an investment opportunity, please fill out the form and we’ll get back to you as soon as possible. Don't forget to also read our FAQs below."
                      "We're currently not looking for new investment opportunities. If you have any questions in the meantime, please reach out to us via the email address in the footer."
            }
        >
            <StyledForm
                style={{ pointerEvents: "none", opacity: "0.7" }} // TODO: remove style
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
                        label="How much revenue are you generating?"
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
        </FormWrapper>
    );
};

export default InvestmentContactForm;
