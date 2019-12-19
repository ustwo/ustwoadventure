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
