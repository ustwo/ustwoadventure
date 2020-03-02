import React from "react";
import { styled } from "linaria/react";

import bCorpIcon from "../../assets/b-corp-icon.png";

const AppendixWrapper = styled.div`
    margin-top: 4.6em;
    grid-column: 4 / -1;
    display: flex;
    flex-direction: row;

    > a {
        margin-right: 35px;

        img {
            width: 55px;
            margin-top: 7px;
        }
    }

    @media (max-width: 769px) {
        margin-top: 3.2em;
    }

    @media (max-width: 580px) {
        grid-column: 2 / -1;

        > a {
            margin-right: 20px;

            img {
                width: 40px;
            }
        }
    }
`;

const TextWrapper = styled.div`
    font-size: 0.84em;
    display: flex;
    flex-direction: column;
    height: 100%;

    p {
        margin: 0;
        line-height: 1.65;
    }

    a {
        text-decoration: underline;
        margin-right: 0.3em;

        &:last-child {
            margin-left: 0.3em;
        }
    }
`;

const CopyRight = () => (
    <AppendixWrapper>
        <a
            href="https://www.ustwo.com/b-corp"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={bCorpIcon} alt="B Corp certification icon" />
        </a>
        <TextWrapper>
            <p style={{ marginBottom: "0.7em" }}>
                ustwo is a{" "}
                <a
                    href="https://www.ustwo.com/b-corp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    certified B Corp
                </a>
            </p>
            <p>
                <a
                    href="https://www.iubenda.com/privacy-policy/50030836/cookie-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Cookie
                </a>
                &
                <a
                    href="https://www.ustwo.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Privacy
                </a>
                policy
            </p>
            <p>© ustwo Adventure, {new Date().getFullYear()}</p>
        </TextWrapper>
    </AppendixWrapper>
);

export default CopyRight;
