import React from "react";
import { styled } from "linaria/react";

const StyledLi = styled.li`
    width: 28%;
    position: relative;
    margin-bottom: 70px;
    counter-increment: step-counter;

    h2 {
        top: -3px;
        left: -25px;
        z-index: -1;
        font-family: var(--futuraBold);
        font-size: 72px;
        opacity: 0.8;
        -webkit-text-stroke: 1.2px;
        -webkit-text-fill-color: transparent;
        position: relative;

        &::after {
            content: counter(step-counter);
            -webkit-text-stroke: 0;
            -webkit-text-fill-color: var(--piglet);
            position: absolute;
            top: -0px;
            left: 0px;
            opacity: 0;
            transition: top 180ms, left 180ms;
        }
    }

    b {
        display: block;
        margin-top: -52px;
        margin-bottom: 0;
        font-weight: 700;
        font-size: 1em;
    }

    p {
        margin-top: 5px;
        font-size: 0.97em;
    }

    &:hover,
    &.scrolled {
        h2 {
            font-style: italic;

            &::after {
                opacity: 1;
                top: -4px;
                left: -4px;
            }
        }
    }

    @media (max-width: 890px) {
        margin-bottom: 45px;
        width: 39%;
    }

    @media (max-width: 710px) {
        width: 43%;
    }

    @media (max-width: 760px) {
        b {
            margin-top: -42px;
        }
    }

    @media (max-width: 635px) {
        margin-bottom: 35px;
        width: 65%;

        &:nth-child(6) {
            margin-bottom: 0;
        }
    }

    @media (--for-up-to-mobile) {
        margin-bottom: 30px;
    }

    @media (max-width: 425px) {
        width: 76%;
    }

    @media (--for-up-to-small-mobile) {
        width: 85%;
    }
`;

const PrincipleElement = ({ title, copy, index }) => {
    // TODO: Scrolling
    // if (
    //     window.innerWidth < 635 &&
    //     window.matchMedia("(pointer: coarse)").matches
    // ) {
    //     const onIntersection = entries => {
    //         entries.forEach(entry => {
    //             if (entry.intersectionRatio > 0) {
    //                 observer.unobserve(entry.target);
    //                 stageScrolled(entry.target);
    //             }
    //         });
    //     };
    //     const observer = new IntersectionObserver(onIntersection, {
    //         rootMargin: "-25%",
    //         threshold: 0.5
    //     });
    //     const stageScrolled = stage => {
    //         stage.classList.add("scrolled");
    //     };
    //     approachStages.forEach(stage => observer.observe(stage));
    // }

    return (
        <StyledLi>
            <h2>{index}</h2>
            <b>{title}</b>
            <p>{copy}</p>
        </StyledLi>
    );
};

export default PrincipleElement;
