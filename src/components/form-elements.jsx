import React from "react";
import { styled } from "linaria/react";

export const StyledForm = styled.form`
    grid-column: 7 / 12;
    height: 100%;
    min-height: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 0.92em;
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

export const StepWrapper = styled.div`
    min-height: 15em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`;

const InputWrapper = styled.div`
    position: relative;
    width: ${props => (props.halfWidth ? "47%" : "100%")};
    margin-bottom: 1.5em;

    label {
        display: block;
        position: absolute;
        opacity: 0;
        transition: opacity 0.1s;
        top: -1.7em;
        left: 2px;
    }

    input:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
        z-index: 1;
        opacity: 1;
    }

    input,
    textarea {
        width: 100%;
        box-sizing: border-box;
    }

    textarea {
        height: 11em;
    }

    @media (max-width: 960px) {
        width: 100%;
    }
`;

export const Input = ({
    style,
    className,
    label,
    name,
    type = "text",
    required = true,
    halfWidth,
    handleChange
}) => {
    return (
        <InputWrapper halfWidth={halfWidth} style={style} className={className}>
            {type === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    required={required}
                    placeholder={label}
                    onChange={handleChange}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    required={required}
                    placeholder={label}
                    onChange={handleChange}
                />
            )}
            <label htmlFor={name}>{label}</label>
        </InputWrapper>
    );
};
