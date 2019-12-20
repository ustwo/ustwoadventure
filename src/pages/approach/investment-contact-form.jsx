import React, { useState } from "react";
import { styled } from "linaria/react";

import CTAWrapper from "../../components/cta-wrapper";
import { StyledForm, StepWrapper, Input } from "../../components/form-elements";
import Button from "../../components/button";

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
        transition: all 180ms;

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
    const pageCount = 1;

    const [step, setStep] = useState(1);
    const [sending, setSending] = useState(false);
    const [response, setResponse] = useState(false);

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

    const encode = data => {
        return Object.keys(data)
            .map(
                key =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(
                        data[key]
                    )}`
            )
            .join("&");
    };

    const handleSubmit = e => {
        setStep(step + 1);

        setSending(true);
        setTimeout(() => setSending(false), 180);

        const data = {
            "form-name": "investment-contact",
            companyName,
            website,
            companyDescription,
            companyStage,
            companyRevenue,
            roundSize,
            contactName,
            contactEmail
        };

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(data)
        })
            .then(() => setResponse(true))
            .catch(error => setResponse(error.code));

        e.preventDefault();
    };

    return (
        <StyledCTAWrapper>
            <CopyWrapper>
                <h2>Do you want some money?</h2>
                <p className={sending && "transition"}>
                    {response
                        ? response === true
                            ? "Thanks! We'll read through what you've sent us and follow up via e-mail as soon as possible. Have a great day."
                            : `Looks like there has been a ${response} server error with sending the form. Sorry! Please try again, or email via the address in our footer.`
                        : "If you’d like to get in touch with us about an investment opportunity, fill out the form and we’ll get back to you as soon as possible. Please also make sure to read our FAQs below."}
                </p>
            </CopyWrapper>

            <StyledForm
                name="investment-contact"
                method="POST"
                onSubmit={handleSubmit}
                data-netlify="true"
                netlify-honeypot="bot-field"
            >
                <input
                    type="hidden"
                    name="form-name"
                    value="investment-contact"
                />
                <label htmlFor="bot-field" style={{ display: "none" }}>
                    Don’t fill this out:
                    <input name="bot-field" />
                </label>

                <StepWrapper>
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
                </StepWrapper>

                <StepWrapper>
                    <Input
                        label="What stage are you currently at?"
                        name="companyStage"
                        handleChange={handleChange}
                    />

                    <Input
                        label="What current revenue are you generating?"
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
                </StepWrapper>

                <Button submit success={response === true}>
                    Submit
                </Button>

                {pageCount !== 1 && (
                    <p>{step <= pageCount ? `${step}/${pageCount}` : ":—)"}</p>
                )}
            </StyledForm>
        </StyledCTAWrapper>
    );
};

export default InvestmentContactForm;
