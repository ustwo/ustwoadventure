import React from "react";
import { styled } from "linaria/react";

import LetterItem from "./orbit-letters-loops";

const OrbitLetters = ({ string = "adventure" }) => {
    const LetterList = styled.ul`
        position: relative;
        margin: 0;
        list-style: none;

        transform-style: preserve-3d;
        --rotationDuration: 16s;
        animation: ring-rotate-3d var(--rotationDuration) linear infinite;

        @keyframes ring-rotate-3d {
            0% {
                transform: rotateX(-100deg) rotate(0);
            }
            100% {
                transform: rotateX(-100deg) rotate(-360deg);
            }
        }
    `;

    const StyledLetters = styled(LetterItem)`
        position: absolute;
        top: 50%;
        left: 50%;

        font-family: var(--futuraBold);
        font-size: calc(2.5em + 0.7vw);
        font-weight: bold;
        color: var(--piglet);
        -webkit-text-stroke: 0.02em var(--piglet);

        --translateY: calc(-75px - 3.15vw);

        transition: opacity 0.2s;
        &.transition {
            opacity: 0;
        }

        @media (--for-over-desktop) {
            font-size: 2.9em;
            --translateY: calc(-110px);
        }

        @media (--for-up-to-tablet) {
            --translateY: calc(-75px - 2.4vw);
        }

        @media (--for-up-to-mobile) {
            --translateY: calc(-75px - 1.4vw);
        }
    `;

    const capitalLetters = string.toUpperCase();
    const letters =
        capitalLetters.length < 9
            ? capitalLetters.padEnd(9, "-")
            : capitalLetters.substr(0, 9);

    // TODO: error letters
    // orbitLetters.forEach(letter => letter.classList.add("transition"));
    // setTimeout(() => {
    //     for (let i = 0; i < orbitLetters.length; i++) {
    //         orbitLetters[i].textContent = string[i];
    //     }
    //     orbitLetters.forEach(letter => letter.classList.remove("transition"));
    // }, 200);

    const { map } = Array.prototype;

    return (
        <LetterList>
            {map.call(letters, (individualLetter, i) => (
                <StyledLetters key={i}>{individualLetter}</StyledLetters>
            ))}
        </LetterList>
    );
};

export default OrbitLetters;
