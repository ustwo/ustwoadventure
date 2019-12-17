import React, { useState } from "react";
import { styled } from "linaria/react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import CTAWrapper from "../../components/cta-wrapper";
import Button from "../../components/button";

const StyledCTAWrapper = styled(CTAWrapper)`
    margin-top: 90px;
    max-height: 170px;
    transition: max-height 2s;

    &.response {
        max-height: 300px; /* TODO: Get animated height working or force static */
    }

    @media (max-width: 769px) {
        margin-top: 60px;
    }

    @media (max-width: 580px) {
        margin-top: 40px;
    }
`;

const CopyWrapper = styled.div`
    grid-column: 2 / 7;
    margin-right: 15px;

    p {
        min-height: calc(2em * 1.7);
    }

    a {
        color: #ffffff;
        text-decoration: underline;
    }

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
    const [email, setEmail] = useState("");
    const [response, setResponse] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const serverResponse = await addToMailchimp(email);
        setResponse(serverResponse);
    };

    return (
        <StyledCTAWrapper className={response && "response"}>
            <CopyWrapper>
                <h2>We hope you like newsletters</h2>
                {response ? (
                    <p dangerouslySetInnerHTML={{ __html: response.msg }} />
                ) : (
                    <p>
                        Sign up for a monthly update from Adventure and our
                        community of creative companies.
                    </p>
                )}
            </CopyWrapper>

            <StyledForm onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    name="email"
                    placeholder="Email Address"
                    onChange={e => setEmail(e.target.value)}
                />
                <Button
                    submit
                    type="submit"
                    success={response && response.result === "success"}
                >
                    {response && response.result === "success"
                        ? "Success"
                        : "Subscribe"}
                </Button>
            </StyledForm>
        </StyledCTAWrapper>
    );
};

export default NewsletterSubscribe;
