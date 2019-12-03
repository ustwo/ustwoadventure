import React from "react";
import { styled } from "linaria/react";
import { Link } from "gatsby";

import { arrow } from "../../assets/inline-arrows";
import CopyRight from "./copyright";

const FooterLinks = () => {
    const RightFooterWrapper = styled.div`
        grid-column: 4/-1;

        .links {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;

            a {
                display: block;
                font-size: 1.1em;

                &:not(:last-child) {
                    margin-bottom: 0.9em;
                }

                &[target="_blank"] {
                    &::after {
                        content: "";
                        background-image: url(${arrow});
                        transform: rotate(-45deg);

                        background-size: 0.73em;
                        background-repeat: no-repeat;
                        display: inline-block;
                        width: 0.8em;
                        height: 0.8em;
                        margin-left: 7px;
                    }

                    &:hover::after {
                        transform: translate(1px, -1px) rotate(-45deg);
                        transition: transform 0.07s;
                    }
                }
            }
        }

        @media (--for-up-to-large-tablet) {
            .links a {
                font-size: 1em;
            }
        }

        @media (--for-up-to-tablet) {
            grid-column: 6/-1;

            .links {
                div {
                    width: 34%;

                    &:first-child {
                        margin-bottom: 3em;
                    }
                }
            }
        }

        @media (--for-up-to-small-tablet) {
            grid-column: 5/-1;
            font-size: 0.98em;
        }

        @media (--for-up-to-mobile) {
            grid-column: 2/-1;
        }

        @media (--for-up-to-small-mobile) {
            grid-column: 1/-1;

            .links div {
                width: 50%;
            }
        }
    `;

    return (
        <RightFooterWrapper>
            <div className="links">
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/approach">Approach</Link>
                    <Link to="/portfolio">Portfolio</Link>
                </div>
                <div>
                    <Link to="/first-mile">First Mile</Link>
                    <Link to="/about">About</Link>
                    <a
                        href="https://job.garden/b/ustwoadventure"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Jobs
                    </a>
                </div>
                <div>
                    <a
                        href="https://twitter.com/ustwoadventure"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://instagram.com/ustwoadventure/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <a
                        href="mailto:hello.adventure@ustwo.com?subject=Hello, Adventure!"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Email
                    </a>
                </div>
                <div>
                    <a
                        href="https://ustwo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Studios
                    </a>
                    <a
                        href="https://ustwogames.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Games
                    </a>
                </div>
            </div>
            <CopyRight />
        </RightFooterWrapper>
    );
};

export default FooterLinks;
