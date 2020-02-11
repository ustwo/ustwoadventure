import React, { useState } from "react";

import { StyledForm, FormStep, Input } from "../../components/form-elements";
import FormWrapper from "../../components/form-wrapper";
import useMultiStepForm from "../../hooks/use-multi-step-form";
import useNetlifySubmit from "../../hooks/use-netlify-submit";

import { deadline, startDate } from "./open-indicator";

const InvestmentContactForm = () => {
    const formName = "first-mile-application";

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
    const [creativityRole, setCreativityRole] = useState("");
    const [referral, setReferral] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const handleChange = e => {
        const { name, value } = e.target;

        if (name === "companyName") setCompanyName(value);
        else if (name === "website") setWebsite(value);
        else if (name === "companyDescription") setCompanyDescription(value);
        else if (name === "companyDuration") setCompanyDuration(value);
        else if (name === "likeToAchieve") setLikeToAchieve(value);
        else if (name === "neededSupport") setNeededSupport(value);
        else if (name === "location") setLocation(value);
        else if (name === "creativityRole") setCreativityRole(value);
        else if (name === "referral") setReferral(value);
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
                companyDuration,
                likeToAchieve,
                neededSupport,
                location,
                creativityRole,
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
                            ? `Thanks! We'll take a read through what you've sent us and follow up via e-mail on between ${deadline} and ${startDate}. Have a great day.`
                            : errorCopy
                        : "To apply to be a part of our First Mile programme, please fill out the form and we’ll get back to you shortly after the application deadline. Don't forget to also read our FAQs below."}
                </p>
            }
        >
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
                        required={false}
                    />

                    <Input
                        label="Tell us about yourself and the company"
                        type="textarea"
                        name="companyDescription"
                        handleChange={handleChange}
                        required={currentStep === 1}
                    />

                    <Input
                        label="When did you start the company?"
                        type="month"
                        value={companyDuration || "2018-01"}
                        name="companyDuration"
                        handleChange={handleChange}
                        required={currentStep === 2}
                    />
                </FormStep>

                <FormStep isActive={currentStep === 2}>
                    <Input
                        label="Where would you like the business to be in a year?"
                        type="textarea"
                        name="likeToAchieve"
                        handleChange={handleChange}
                        required={currentStep === 2}
                    />

                    <Input
                        label="Where do you most need support?"
                        name="neededSupport"
                        handleChange={handleChange}
                        required={currentStep === 2}
                    />

                    <Input
                        label="Where are you located?"
                        name="location"
                        handleChange={handleChange}
                        required={currentStep === 2}
                    />
                </FormStep>

                <FormStep isActive={currentStep >= 3}>
                    <Input
                        label="How does creativity play a role in your company?"
                        type="textarea"
                        name="creativityRole"
                        handleChange={handleChange}
                        required={currentStep === 3}
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
