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

    @media (max-width: 715px) {
        margin-bottom: 40px;
        grid-column: 1 / -1;

        h2 {
            margin-bottom: 20px;
        }
    }
`;

const InvestmentContactForm = () => {
    const pageCount = 1;

    const [companyName, setCompanyName] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");
    const [companyStage, setCompanyStage] = useState("");
    const [companyRevenue, setCompanyRevenue] = useState("");
    const [companyInvestmentSize, setCompanyInvestmentSize] = useState("");
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const [step, setStep] = useState(1);
    const [response, setResponse] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;

        if (name === "company") setCompanyName(value);
        if (name === "website") setCompanyWebsite(value);
        if (name === "description") setCompanyDescription(value);
        if (name === "stage") setCompanyStage(value);
        if (name === "revenue") setCompanyRevenue(value);
        if (name === "amount raising") setCompanyInvestmentSize(value);
        if (name === "name") setContactName(value);
        if (name === "email") setContactEmail(value);
    };

    const encode = data => {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        return formData;
    };

    const handleSubmit = e => {
        setStep(step + 1);

        const data = {
            "form-name": "investment-contact",
            companyName,
            companyWebsite,
            companyDescription,
            companyStage,
            companyRevenue,
            companyInvestmentSize,
            contactName,
            contactEmail
        };

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data; boundary=random"
            },
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
                <p>
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
                        name="company"
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
                        name="description"
                        handleChange={handleChange}
                    />
                </StepWrapper>

                {/* <StepWrapper> */}
                <Input
                    label="What stage are you currently at?"
                    name="stage"
                    handleChange={handleChange}
                />

                <Input
                    label="What current revenue are you generating?"
                    name="revenue"
                    handleChange={handleChange}
                />

                <Input
                    label="How much are you looking to raise?"
                    name="amount raising"
                    handleChange={handleChange}
                />

                <Input
                    halfWidth
                    label="Your Name"
                    name="name"
                    handleChange={handleChange}
                />

                <Input
                    halfWidth
                    label="Email"
                    type="email"
                    name="email"
                    handleChange={handleChange}
                />
                {/* </StepWrapper> */}

                <Button
                    submit
                    success={response && response.result === "success"}
                >
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
