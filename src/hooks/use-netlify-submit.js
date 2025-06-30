import React, { useState } from "react";

const encode = data => {
    return Object.keys(data)
        .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
};

export default () => {
    const [sending, setSending] = useState(false);
    const [response, setResponse] = useState(false);

    const handleNetlifySubmit = data => {
        setSending(true);
        setTimeout(() => setSending(false), 300);

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encode(data)
        })
            .then(() => setTimeout(() => setResponse(true), 200))
            .catch(err => setTimeout(() => setResponse(err.code), 200));
    };

    const NetlifyRequiredInputs = ({ formName }) => (
        <>
            <input type="hidden" name="form-name" value={formName} />
            <label htmlFor="bot-field" style={{ display: "none" }}>
                Don’t fill this out:
                <input name="bot-field" />
            </label>
        </>
    );

    const errorCopy = `Looks like there has been a ${response} server error when sending the form. Sorry! Please try again, or email us at hello.adventure@ustwo.com.`;

    return {
        sending,
        response,
        handleNetlifySubmit,
        NetlifyRequiredInputs,
        errorCopy
    };
};
