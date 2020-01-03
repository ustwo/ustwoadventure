/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import Button from "../components/button";

export default (pageCount = 1) => {
    const [currentStep, setCurrentStep] = useState(1);
    const nextStep = () => setCurrentStep(currentStep + 1);
    const previousStep = () => setCurrentStep(currentStep - 1);

    const BackButton = () => <Button onClick={() => previousStep()} />;

    const NextButton = ({ success, disabled }) => (
        <Button white submit success={success} disabled={disabled}>
            {currentStep < pageCount ? "Next" : "Submit"}
        </Button>
    );

    const StepIndicator = () =>
        pageCount !== 1 && (
            <p>
                {currentStep <= pageCount
                    ? `${currentStep}/${pageCount}`
                    : ":—)"}
            </p>
        );

    return {
        pageCount,
        currentStep,
        nextStep,
        previousStep,
        BackButton,
        NextButton,
        StepIndicator
    };
};
