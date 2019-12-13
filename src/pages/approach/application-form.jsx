import React from "react";
import { styled } from "linaria/react";

import CTAWrapper from "../../components/cta-wrapper";
import { NetlifyForm, Input } from "../../components/netlify-form";

const StyledCTAWrapper = styled(CTAWrapper)`
    margin-top: 60px;

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

const Applicationform = () => {
    // TODO: sort out error and success validation via state -> update <p> copy in CopyWrapper
    // add success prop to Button on success
    // https://github.com/revolunet/react-mailchimp-subscribe/tree/master/src
    return (
        <StyledCTAWrapper>
            <CopyWrapper>
                <h2>Do you want some money?</h2>
                <p>
                    If you’d like to get in touch with us about an investment
                    opportunity, fill out the form and we’ll get back to you as
                    soon as possible. Please also make sure to read our FAQs
                    below.
                </p>
            </CopyWrapper>

            <NetlifyForm pages={3}>
                <Input halfWidth label="Company Name" name="company" />

                <Input halfWidth label="Website" name="website" />

                <Input
                    label="Tell us about what you do"
                    type="textarea"
                    name="description"
                />

                <Input label="What stage are you currently at?" name="stage" />

                <Input label="Are you generating any revenue?" name="revenue" />

                <Input
                    label="How much are you looking to raise?"
                    name="amount raising"
                />

                <Input halfWidth label="Your Name" name="name" />

                <Input halfWidth label="Email" type="email" name="email" />
            </NetlifyForm>
        </StyledCTAWrapper>
    );
};

export default Applicationform;
