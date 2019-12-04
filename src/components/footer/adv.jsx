import React from "react";
import { styled } from "linaria/react";

const ADV = () => {
    const ADVWrapper = styled.div`
        grid-column: 1/4;

        @media (--for-up-to-mobile) {
            grid-column: 1/1;
        }
    `;

    const LetterContainer = styled.span`
        font-family: var(--futuraBold);
        font-size: 2.46em;
        line-height: 1;
        letter-spacing: -3px;
        color: var(--piglet);
        display: inline-block;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        @media (--for-up-to-mobile) {
            font-size: 2.15em;
        }

        @media (--for-up-to-small-mobile) {
            display: none;
        }
    `;

    // TODO: get moveLetter working
    const moveLetter = e => {
        const x = 10 * Math.floor(Math.random() * 4) - 10;
        const y = 10 * Math.floor(Math.random() * 4) - 10;

        e.target.transform = `translate(${x}px, ${y}px)`;
    };

    return (
        <ADVWrapper>
            <LetterContainer
                onMouseOver={moveLetter}
                onFocus={moveLetter}
                onClick={moveLetter}
            >
                A
            </LetterContainer>
            <LetterContainer
                onMouseOver={moveLetter}
                onFocus={moveLetter}
                onClick={moveLetter}
            >
                D
            </LetterContainer>
            <LetterContainer
                onMouseOver={moveLetter}
                onFocus={moveLetter}
                onClick={moveLetter}
            >
                V
            </LetterContainer>
        </ADVWrapper>
    );
};

export default ADV;
