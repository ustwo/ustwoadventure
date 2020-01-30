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
    } = useMultiStepForm({ stepCount: 3 });

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
    const [companyDuration, setCompanyDuration] = useState("");
    const [likeToAchieve, setLikeToAchieve] = useState("");
    const [neededSupport, setNeededSupport] = useState("");
    const [location, setLocation] = useState("");
    const [supportToDate, setSupportToDate] = useState("");
    const [referral, setReferral] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const handleChange = e => {
        const { name, value } = e.target;

        if (name === "companyName") setCompanyName(value);
        if (name === "website") setWebsite(value);
        if (name === "companyDescription") setCompanyDescription(value);
        if (name === "companyDuration") setCompanyDuration(value);
        if (name === "likeToAchieve") setLikeToAchieve(value);
        if (name === "neededSupport") setNeededSupport(value);
        if (name === "location") setLocation(value);
        if (name === "supportToDate") setSupportToDate(value);
        if (name === "referral") setReferral(value);
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
                companyDuration,
                likeToAchieve,
                neededSupport,
                location,
                supportToDate,
                referral,
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
            title="Sound like it's for you?"
            copy={
                <p className={sending ? "transition" : undefined}>
                    {response
                        ? response === true
                            ? "Thanks! We'll take a read through what you've sent us and follow up via e-mail as soon as possible. Have a great day."
                            : errorCopy
                        : "To apply to be a part of our First Mile programme, please fill out the form and we’ll get back to you shortly after the application deadline. Don't forget to also read our FAQs below."}
                </p>
            }
        >
            <StyledForm
                noValidate
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
                        required={false}
                    />

                    <Input
                        label="Tell us about you and the company"
                        type="textarea"
                        name="companyDescription"
                        handleChange={handleChange}
                        required={currentStep === 1}
                    />

                    <Input
                        label="How long has the company been running?"
                        name="companyDuration"
                        handleChange={handleChange}
                        required={currentStep === 2}
                    />
                </FormStep>

                <FormStep isActive={currentStep === 2}>
                    <Input
                        label="Where you like the business to be in a year?"
                        type="textarea"
                        name="likeToAchieve"
                        handleChange={handleChange}
                        required={currentStep === 3}
                    />

                    <Input
                        label="What do you most need support with?"
                        name="neededSupport"
                        handleChange={handleChange}
                        required={currentStep === 2}
                    />

                    <Input
                        label="Where are you based?"
                        name="location"
                        handleChange={handleChange}
                        required={currentStep === 1}
                    />
                </FormStep>

                <FormStep isActive={currentStep >= 3}>
                    <Input
                        label="What support or investment have you had (if any)?"
                        type="textarea"
                        name="supportToDate"
                        handleChange={handleChange}
                        required={false}
                    />

                    <Input
                        label="How did you hear about First Mile?"
                        name="referral"
                        handleChange={handleChange}
                        required={currentStep === 3}
                    />

                    <Input
                        halfWidth
                        label="Your Name"
                        name="contactName"
                        handleChange={handleChange}
                        required={currentStep === 3}
                    />

                    <Input
                        halfWidth
                        label="Email"
                        type="email"
                        name="contactEmail"
                        handleChange={handleChange}
                        required={currentStep === 3}
                    />
                </FormStep>

                <SubmitButtons success={response === true} />
            </StyledForm>
        </FormWrapper>
    );
};

export default InvestmentContactForm;
