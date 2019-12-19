import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";

import UstwoLogo from "../../assets/ustwo-logo";
import OrbitLetters from "./orbit-letters";

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85px;
    width: calc(130px + 9.8vw);
    max-width: 250px;

    transform: rotate(-10deg);
    transition: transform 12s;

    --logoScale: 1;

    svg {
        position: absolute;
        width: 15vw;
        max-width: 85px;
        min-width: 65px;

        transform: rotate(10deg);
        transition: transform 12s;
    }

    &:hover {
        transform: rotate(335deg);
        transition: transform 16s cubic-bezier(0.6, 0, 0.5, 1);

        svg {
            transform: rotate(-335deg);
            transition: transform 16s cubic-bezier(0.6, 0, 0.5, 1);
        }

        @media (pointer: coarse) {
            transform: rotate(-10deg);

            svg {
                transform: rotate(10deg);
            }

            svg,
            ul {
                transition: transform 5s cubic-bezier(0.6, 0, 0.5, 1);
            }
        }
    }
`;

const OrbitLogo = () => {
    const logoRef = useRef(); // TODO: Use refs with function components so I don't have to querySelector() below
    let svgEl;

    const tiltLogo = tilt => {
        const cappedTilt = Math.max(-35, Math.min(15, tilt * 0.65));
        logoRef.current.style.transform = `rotate(${-(cappedTilt + 10)}deg)`;
        svgEl.style.transform = `rotate(${cappedTilt + 10}deg)`;
    };

    useEffect(() => {
        svgEl = logoRef.current.querySelector("svg");

        if ("ontouchstart" in document.documentElement) {
            window.addEventListener("deviceorientation", e => {
                tiltLogo(
                    window.innerHeight > window.innerWidth ? e.gamma : e.beta
                );
            });
        }
    }, []);

    return (
        <Link to="/">
            <LogoWrapper ref={logoRef}>
                <UstwoLogo />
                <OrbitLetters />
            </LogoWrapper>
        </Link>
    );
};

export default OrbitLogo;
