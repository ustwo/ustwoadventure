import React, { useState } from "react";
import { styled } from "linaria/react";
import addToMailchimp from "gatsby-plugin-mailchimp";

import CTAWrapper from "../../components/cta-wrapper";
import Button from "../../components/button";
import { Input } from "../../components/form-elements";

const StyledCTAWrapper = styled(CTAWrapper)`
    margin-top: 90px;

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
        transition: all 180ms;

        &.transition {
            opacity: 0;
            transform: translateY(3px);
        }
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
        width: 100%;
        box-sizing: border-box;
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

const EmailInput = styled(Input)`
    margin-bottom: 0.9em;
`;

const NewsletterSubscribe = () => {
    const [email, setEmail] = useState("");
    const [sending, setSending] = useState(false);
    const [response, setResponse] = useState();

    const handleSubmit = async e => {
        setSending(true);
        setTimeout(() => setSending(false), 180);
        e.preventDefault();
        const serverResponse = await addToMailchimp(email);
        setResponse(serverResponse);
    };

    return (
        <StyledCTAWrapper className={response && "response"}>
            <CopyWrapper>
                <h2>We hope you like newsletters</h2>
                {response ? (
                    <p
                        className={sending && "transition"}
                        dangerouslySetInnerHTML={{ __html: response.msg }}
                    /> // TODO: Get animated height working or force static
                ) : (
                    <p className={sending && "transition"}>
                        Sign up for a monthly update from Adventure and our
                        community of creative companies.
                    </p>
                )}
            </CopyWrapper>

            <StyledForm onSubmit={handleSubmit}>
                <EmailInput
                    type="email"
                    value={email}
                    name="email"
                    label="Email Address"
                    onChange={e => setEmail(e.target.value)}
                />
                <Button
                    submit
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
