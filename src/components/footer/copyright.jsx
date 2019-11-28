import React from "react";
import { styled } from "linaria/react";

const CopyRight = () => {
    const CopyrightWrapper = styled.div`
        margin-top: 5em;
        font-size: 0.84em;
        grid-column: 4 / -1;

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

        @media (--for-up-to-tablet) {
            margin-top: 3.2em;
        }

        @media (--for-up-to-small-tablet) {
            grid-column: 2/-1;
        }
    `;

    return (
        <CopyrightWrapper>
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
        </CopyrightWrapper>
    );
};

export default CopyRight;
