import { styled } from "linaria/react";

export const ModalContainer = styled.div`
    cursor: initial;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    box-sizing: border-box;
    text-align: center;

    &:before {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    &.show {
        display: block;
    }

    &#modal-seed-and-spark > div > div > div > h2 {
        font-size: calc(var(--h2FontSize) * 0.87);
        @media (max-width: 880px) {
            font-size: calc(var(--h2FontSize) * 0.8);
        }
        @media (max-width: 697px) {
            font-size: calc(var(--h2FontSize) * 0.72);
        }
        @media (max-width: 640px) {
            font-size: calc(var(--h2FontSize) * 0.96);
        }
    }
`;

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.75);
`;
