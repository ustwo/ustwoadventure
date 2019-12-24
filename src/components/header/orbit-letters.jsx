import React, { useRef, useLayoutEffect } from "react";
import { styled } from "linaria/react";

const letterCount = 9;

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

const createLoopLetterStyles = () => {
    let LetterStyleString = "";

    for (let i = 0; i <= letterCount; i++) {
        LetterStyleString += `
                &:nth-child(${i}) {
                    transform: translate(-50%, -50%)
                        rotate(${i * (360 / letterCount) -
                            360 / letterCount}deg)
                        translateY(var(--translateY)) rotateX(90deg);
                    animation: circle-orbit-${i} var(--rotationDuration) linear
                        infinite;
                }
            `;
        // TODO: steps to stop fading on webkit - instead of linear
        //  https://stackoverflow.com/questions/4503195/css3-sprite-animation-without-tweening
    }

    for (let i = 8; i <= letterCount; i++) {
        LetterStyleString += `
                &:nth-child(${i}) {
                    -webkit-text-fill-color: #ffffff;
                }
                @keyframes circle-orbit-${i} {
                    ${(i - 8) * (100 / (letterCount / 2)) + 6}% {
                        -webkit-text-fill-color: transparent;
                    }
                }
            `;
    }

    for (let i = 1; i <= 3; i++) {
        LetterStyleString += `
                &:nth-child(${i}) {
                    -webkit-text-fill-color: #ffffff;
                }
                @keyframes circle-orbit-${i} {
                    ${(i - 1) * (100 / (letterCount / 2)) + 50}% {
                        -webkit-text-fill-color: transparent;
                    }
                }
            `;
    }

    for (let i = 4; i <= 7; i++) {
        LetterStyleString += `
                &:nth-child(${i}) {
                    -webkit-text-fill-color: #ffffff00;
                }
                @keyframes circle-orbit-${i} {
                    ${(i - 4) * (100 / (letterCount / 2)) + 18}% {
                        -webkit-text-fill-color: #ffffff;
                    }
                }
            `;
    }

    return LetterStyleString;
};

const StyledLetters = styled.li`
    position: absolute;
    top: 50%;
    left: 50%;
    font-family: var(--futuraBold);
    font-size: calc(2.5em + 0.7vw);
    font-weight: bold;
    color: var(--piglet);
    -webkit-text-stroke: 0.02em var(--piglet);
    --translateY: calc(-75px - 3.15vw);
    transition: opacity 250ms;

    &.transition {
        opacity: 0;
    }

    ${createLoopLetterStyles()}

    @media (min-width: 1280px) {
        font-size: 2.9em;
        --translateY: calc(-110px);
    }

    @media (max-width: 769px) {
        --translateY: calc(-75px - 2.4vw);
    }

    @media (max-width: 500px) {
        --translateY: calc(-75px - 1.4vw);
    }
`;

const OrbitLetters = ({ is404 }) => {
    const ulRef = useRef();
    const { map } = Array.prototype;

    useLayoutEffect(() => {
        const string = is404 ? "404ERROR—" : "ADVENTURE";
        const orbitLetters = ulRef.current.querySelectorAll("li");

        orbitLetters.forEach((letter, i) => {
            setTimeout(() => letter.classList.add("transition"), i * 120);
        });
        orbitLetters.forEach((letter, i) => {
            setTimeout(() => {
                letter.classList.remove("transition");
                orbitLetters[i].textContent = string[i];
            }, 280 + i * 120);
        });
    }, [is404]);

    return (
        <LetterList ref={ulRef}>
            {map.call("         ", (letter, i) => (
                <StyledLetters key={i}>{letter}</StyledLetters>
            ))}
        </LetterList>
    );
};

export default OrbitLetters;
