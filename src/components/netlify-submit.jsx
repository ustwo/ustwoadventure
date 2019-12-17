import React from "react";

export const NetlifyInputs = ({ name }) => (
    <>
        <input type="hidden" name="form-name" value={name} />
        <label htmlFor="bot-field" style={{ display: "none" }}>
            Don’t fill this out:
            <input name="bot-field" />
        </label>
    </>
);

export const netlifyFormSubmit = (formName, formData) => {
    const encode = data =>
        Object.keys(data)
            .map(
                key =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(
                        data[key]
                    )}`
            )
            .join("&");

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": formName, ...formData })
    })
        .then(() => {})
        .catch(error => {
            console.log(error);
        });
};
