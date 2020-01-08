import React, { useState, useRef, useEffect } from "react";
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

    div {
        transition: height 100ms;

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
    }

    @media (max-width: 740px) {
        margin-right: 0;
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

    @media (max-width: 740px) {
        grid-column: 1 / -1;
        margin: 20px 0;
    }

    @media (max-width: 500px) {
        margin-top: 25px;
    }
`;

const EmailInput = styled(Input)`
    margin-bottom: 0.9em;

    > input + label {
        top: -0.97em;
    }

    > input:not(:placeholder-shown) {
        transform: translateY(0);
        padding: 0.86em;
        margin-bottom: 0;

        + label {
            top: -1.65em;
        }

        @media (max-width: 740px) {
            transform: scaleY(0.95) translateY(2px);

            + label {
                top: -1.4em;
            }
        }
    }
`;

const NewsletterSubscribe = () => {
    const [email, setEmail] = useState("");
    const [sending, setSending] = useState(false);
    const [response, setResponse] = useState();
    const [height, setHeight] = useState();

    const responseCopyRef = useRef();
    const initialCopyRef = useRef();

    useEffect(() => {
        const initialCopyEl = initialCopyRef.current;
        setHeight(initialCopyEl.clientHeight);
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        setSending(true);
        const serverResponse = await addToMailchimp(email);

        setTimeout(() => {
            setResponse(serverResponse);
            const responseCopyEl = responseCopyRef.current;
            setHeight(responseCopyEl.clientHeight);
            setSending(false);
        }, 180);
    };

    return (
        <StyledCTAWrapper className={response ? "response" : undefined}>
            <CopyWrapper>
                <h2>We hope you like newsletters</h2>
                <div style={{ height }}>
                    {response ? (
                        <p
                            ref={responseCopyRef}
                            className={sending ? "transition" : undefined}
                            dangerouslySetInnerHTML={{ __html: response.msg }}
                        />
                    ) : (
                        <p
                            ref={initialCopyRef}
                            className={sending ? "transition" : undefined}
                        >
                            Sign up for a monthly update from Adventure and our
                            community of creative companies.
                        </p>
                    )}
                </div>
            </CopyWrapper>

            <StyledForm onSubmit={handleSubmit}>
                <EmailInput
                    type="email"
                    value={email}
                    name="email"
                    label="Email Address"
                    handleChange={e => setEmail(e.target.value)}
                />
                <Button
                    white
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
