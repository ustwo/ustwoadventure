import React from "react";
import { Link } from "gatsby";
import { styled } from "linaria/react";

import UstwoLogo from "../../assets/ustwo-logo";
import OrbitLetters from "./orbit-letters";

const OrbitLogo = () => {
    const LogoWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85px;
        width: calc(132px + 9.8vw);
        max-width: 250px;

        transform: rotate(-10deg);
        transition: transform 12s;

        --logoScale: 1;

        svg {
            position: absolute;
            width: 15vw;
            max-width: 80px;
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
                transform: rotate(10deg);

                img {
                    transform: rotate(-10deg);
                }
            }
        }
    `;

    // TODO: reintroduce deviceoriantaion for logo
    // const tiltLogo = tilt => {
    //     logoRing.style.transform = `rotate(${-(tilt + 10)}deg)`;
    //     logoUstwo.style.transform = `rotate(${tilt + 10}deg)`;
    // };

    // if ("ontouchstart" in document.documentElement) {
    //     window.addEventListener("deviceorientation", e => {
    //         logoRing.style.transition =
    //             "transform 5s cubic-bezier(0.6, 0, 0.5, 1)";
    //         logoUstwo.style.transition =
    //             "transform 5s cubic-bezier(0.6, 0, 0.5, 1)";

    //         const tilt =
    //             window.innerHeight > window.innerWidth ? e.gamma : e.beta;
    //         const cappedTilt = Math.max(-35, Math.min(15, tilt * 0.65));

    //         tiltLogo(cappedTilt);
    //     });
    // }

    return (
        <Link to="/">
            <LogoWrapper>
                <UstwoLogo />
                <OrbitLetters />
            </LogoWrapper>
        </Link>
    );
};

export default OrbitLogo;
