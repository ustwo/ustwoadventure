import { styled } from "linaria/react";

const letterCount = 9;

const LetterItem = styled.li`
    &:nth-child(1) {
        transform: translate(-50%, -50%)
            rotate(${(1 * 360) / letterCount - 360 / letterCount}deg)
            translateY(var(--translateY)) rotateX(90deg);
        animation: circle-orbit-1 var(--rotationDuration) linear infinite;
    }

    &:nth-child(2) {
        transform: translate(-50%, -50%)
            rotate(${(2 * 360) / letterCount - 360 / letterCount}deg)
            translateY(var(--translateY)) rotateX(90deg);
        animation: circle-orbit-2 var(--rotationDuration) linear infinite;
    }

    &:nth-child(3) {
        transform: translate(-50%, -50%)
            rotate(${(3 * 360) / letterCount - 360 / letterCount}deg)
            translateY(var(--translateY)) rotateX(90deg);
        animation: circle-orbit-3 var(--rotationDuration) linear infinite;
    }

    &:nth-child(4) {
        transform: translate(-50%, -50%)
            rotate(${(4 * 360) / letterCount - 360 / letterCount}deg)
            translateY(var(--translateY)) rotateX(90deg);
        animation: circle-orbit-4 var(--rotationDuration) linear infinite;
    }

    &:nth-child(5) {
        transform: translate(-50%, -50%)
            rotate(${(5 * 360) / letterCount - 360 / letterCount}deg)
            translateY(var(--translateY)) rotateX(90deg);
        animation: circle-orbit-5 var(--rotationDuration) linear infinite;
    }

    &:nth-child(6) {
        transform: translate(-50%, -50%)
            rotate(${(6 * 360) / letterCount - 360 / letterCount}deg)
            translateY(var(--translateY)) rotateX(90deg);
        animation: circle-orbit-6 var(--rotationDuration) linear infinite;
    }

    &:nth-child(7) {
        transform: translate(-50%, -50%)
            rotate(${(7 * 360) / letterCount - 360 / letterCount}deg)
            translateY(var(--translateY)) rotateX(90deg);
        animation: circle-orbit-7 var(--rotationDuration) linear infinite;
    }

    &:nth-child(8) {
        transform: translate(-50%, -50%)
            rotate(${(8 * 360) / letterCount - 360 / letterCount}deg)
            translateY(var(--translateY)) rotateX(90deg);
        animation: circle-orbit-8 var(--rotationDuration) linear infinite;
    }

    &:nth-child(9) {
        transform: translate(-50%, -50%)
            rotate(${(9 * 360) / letterCount - 360 / letterCount}deg)
            translateY(var(--translateY)) rotateX(90deg);
        animation: circle-orbit-9 var(--rotationDuration) linear infinite;
    }

    &:nth-child(8) {
        -webkit-text-fill-color: #ffffff;
    }

    @keyframes circle-orbit-8 {
        6% {
            -webkit-text-fill-color: transparent;
        }
    }

    &:nth-child(9) {
        -webkit-text-fill-color: #ffffff;
    }

    @keyframes circle-orbit-9 {
        28.22222% {
            -webkit-text-fill-color: transparent;
        }
    }

    &:nth-child(1) {
        -webkit-text-fill-color: #ffffff;
    }

    @keyframes circle-orbit-1 {
        50% {
            -webkit-text-fill-color: transparent;
        }
    }

    &:nth-child(2) {
        -webkit-text-fill-color: #ffffff;
    }

    @keyframes circle-orbit-2 {
        72.22222% {
            -webkit-text-fill-color: transparent;
        }
    }

    &:nth-child(3) {
        -webkit-text-fill-color: #ffffff;
    }

    @keyframes circle-orbit-3 {
        94.44444% {
            -webkit-text-fill-color: transparent;
        }
    }

    &:nth-child(4) {
        -webkit-text-fill-color: #ffffff00;
    }

    @keyframes circle-orbit-4 {
        18% {
            -webkit-text-fill-color: #ffffff;
        }
    }

    &:nth-child(5) {
        -webkit-text-fill-color: #ffffff00;
    }

    @keyframes circle-orbit-5 {
        40.22222% {
            -webkit-text-fill-color: #ffffff;
        }
    }

    &:nth-child(6) {
        -webkit-text-fill-color: #ffffff00;
    }

    @keyframes circle-orbit-6 {
        62.44444% {
            -webkit-text-fill-color: #ffffff;
        }
    }

    &:nth-child(7) {
        -webkit-text-fill-color: #ffffff00;
    }

    @keyframes circle-orbit-7 {
        84.66667% {
            -webkit-text-fill-color: #ffffff;
        }
    }
`;

export default LetterItem;

// TODO: Get actual loops working
// for (let i = 0; i < letterCount; ++i) {
//     return css`
//         &:nth-child(${i}) {
//             transform: translate(-50%, -50%)
//                 rotate(${i * (360 / letterCount) - 360 / letterCount}deg)
//                 translateY(var(--translateY)) rotateX(90deg);
//             animation: circle-orbit- ${i} var(--rotationDuration) linear
//                 infinite;
//         }
//     `;
// }

// for (let i = 8; i < letterCount; ++i) {
//     return css`
//         &:nth-child(${i}) {
//             -webkit-text-fill-color: #ffffff;
//         }
//         @keyframes circle-orbit-${i} {
//             ${(i - 8) * (100 / (letterCount / 2)) + 6}% {
//                 -webkit-text-fill-color: transparent;
//             }
//         }
//     `;
// }

// for (let i = 1; i < 3; ++i) {
//     return css`
//         &:nth-child(${i}) {
//             -webkit-text-fill-color: #ffffff;
//         }
//         @keyframes circle-orbit-${i} {
//             ${(i - 1) * (100 / (letterCount / 2)) + 50}% {
//                 -webkit-text-fill-color: transparent;
//             }
//         }
//     `;
// }

// for (let i = 4; i < 7; ++i) {
//     return css`
//         &:nth-child(${i}) {
//             -webkit-text-fill-color: #ffffff00;
//         }
//         @keyframes circle-orbit-${i} {
//             ${(i - 4) * (100 / (letterCount / 2)) + 18}% {
//                 -webkit-text-fill-color: transparent;
//             }
//         }
//     `;
// }
