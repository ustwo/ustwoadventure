import React from "react";

import { StepWrapper, Input } from "../../components/form-elements";
import ApplicationForm from "../../components/application-form";

const InvestmentContactForm = () => {
    return (
        <ApplicationForm
            name="investment-contact"
            title="Do you want some money?"
            copy="If you’d like to get in touch with us about an investment
                    opportunity, fill out the form and we’ll get back to you as
                    soon as possible. Please also make sure to read our FAQs
                    below."
            pages={3}
        >
            <StepWrapper>
                <Input halfWidth label="Company Name" name="company" />

                <Input halfWidth label="Website" name="website" />

                <Input
                    label="Tell us about what you do"
                    type="textarea"
                    name="description"
                />
            </StepWrapper>

            {/* <StepWrapper>
                    <Input
                        label="What stage are you currently at?"
                        name="stage"
                    />

                    <Input
                        label="What current revenue are you generating?"
                        name="revenue"
                    />

                    <Input
                        label="How much are you looking to raise?"
                        name="amount raising"
                    />

                    <Input halfWidth label="Your Name" name="name" />

                    <Input halfWidth label="Email" type="email" name="email" />
                </StepWrapper> */}
        </ApplicationForm>
    );
};

export default InvestmentContactForm;
