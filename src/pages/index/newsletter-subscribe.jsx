import React from "react";
import { styled } from "linaria/react";
// import addToMailchimp from "gatsby-plugin-mailchimp";

import CTAWrapper from "../../components/cta-wrapper";
import Button from "../../components/button";

const StyledCTAWrapper = styled(CTAWrapper)`
    margin-top: 90px;

    @media (--for-up-to-tablet) {
        margin-top: 60px;
    }

    @media (--for-up-to-small-tablet) {
        margin-top: 40px;
    }
`;

const CopyWrapper = styled.div`
    grid-column: 2 / 7;
    margin-right: 15px;

    @media (max-width: 715px) {
        margin-right: 0;
        margin-bottom: 30px;
        grid-column: 1 / -1;
    }
`;

const StyledForm = styled.form`
    grid-column: 8 / 12;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    input[type="email"] {
        width: calc(100% - 2 * var(--input-padding));
    }

    @media (max-width: 950px) {
        grid-column: 7 / 12;
    }

    @media (max-width: 810px) {
        input[type="submit"] {
            width: 100%;
        }
    }

    @media (max-width: 715px) {
        grid-column: 1 / -1;
    }
`;

const NewsletterSubscribe = () => {
    // TODO: sort out error and success validation via state -> update <p> copy in CopyWrapper
    // add success prop to Button on success
    // https://github.com/revolunet/react-mailchimp-subscribe/tree/master/src
    const MailchimpForm = () => {
        const handleSubmit = async e => {
            e.preventDefault();
            // const result = await addToMailchimp(email, listFields);
            // I recommend setting `result` to React state
            // but you can do whatever you want
        };

        return (
            <StyledForm onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email Address" />
                <Button submit type="submit">
                    Subscribe
                </Button>
            </StyledForm>
        );
    };

    return (
        <StyledCTAWrapper>
            <CopyWrapper>
                <h2>We hope you like newsletters</h2>
                <p>
                    Sign up for a monthly update from Adventure and our
                    community of creative companies.
                </p>
            </CopyWrapper>
            <MailchimpForm />
        </StyledCTAWrapper>
    );
};

export default NewsletterSubscribe;
