/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { css } from "linaria";
import { styled } from "linaria/react";

import Button from "../components/button";
import { backArrow } from "../assets/inline-icons";

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

const smallBackButton = css`
    &.back.external {
        margin-top: 0;
        padding: 20.5px;
        transition: background-position 90ms;
        min-width: initial;
        background-position: 50% 50%;

        &:hover {
            background-image: url(${backArrow});
            background-position: calc(50% - 2px) 50%;
            background-size: 15px auto;
        }
    }
`;

export default ({ stepCount = 1 }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const nextStep = () => setCurrentStep(currentStep + 1);
    const previousStep = () =>
        setCurrentStep(currentStep > 1 ? currentStep - 1 : currentStep);

    const BackButton = () => (
        <Button
            white
            back
            external
            className={smallBackButton}
            disabled={currentStep === 1}
            onClick={e => {
                previousStep();
                e.preventDefault();
            }}
        />
    );

    const NextButton = ({ success, disabled }) => (
        <Button white submit success={success} disabled={disabled}>
            {currentStep < stepCount ? "Next" : "Submit"}
        </Button>
    );

    const SubmitButtons = ({ success }) => (
        <>
            <ButtonContainer>
                {stepCount !== 1 && <BackButton />}
                <NextButton
                    success={success}
                    disabled={success && currentStep >= stepCount}
                />
            </ButtonContainer>

            {stepCount !== 1 && (
                <p>{!success ? `${currentStep}/${stepCount}` : ":—)"}</p>
            )}
        </>
    );

    return {
        stepCount,
        currentStep,
        nextStep,
        SubmitButtons
    };
};
