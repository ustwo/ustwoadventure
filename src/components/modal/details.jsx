import React from "react";
import { styled } from "linaria/react";

import CompanyLink from "./company-link";
import { externalArrow, externalArrowHover } from "../../assets/inline-icons";

const DetailsWrapper = styled.div`
    padding: 35px;
    overflow: auto;

    h2 {
        --h2FontSize: 60px;
        font-size: var(--h2FontSize);
        font-size: 3.33em;
        margin-bottom: 8px;
        font-family: var(--futuraBold);
        font-weight: 800;
        text-transform: uppercase;
        font-size: 60px;
        line-height: 1;
    }

    a {
        display: inline-block;
        margin-bottom: 23px;
        font-size: 24px;
        color: var(--grey04);

        &::after {
            content: "";
            background-image: url(${externalArrow});

            background-size: 14px auto;
            background-repeat: no-repeat;
            display: inline-block;
            width: 14px;
            height: 14px;
            margin-left: 14px;
        }

        &:hover {
            font-style: italic;

            &::after {
                background-image: url(${externalArrowHover});

                background-size: 15px auto;
                width: 15px;
                height: 15px;
            }
        }
    }

    a:nth-of-type(2) {
        display: none;
    }

    p:first-of-type {
        margin-bottom: 15px;
        font-size: 24px;
        line-height: 1.4;
        color: var(--nonBlack);
    }

    p:nth-of-type(2) {
        line-height: 1.6;
        word-spacing: normal;
        color: var(--grey04);
    }

    @media (max-width: 880px) {
        h2 {
            font-size: 3.11em;
            word-wrap: break-word;
            hyphens: auto;
        }
    }

    @media (max-width: 880px) {
        h2 {
            --h2FontSize: 56px;
            word-wrap: break-word;
            hyphens: auto;
        }
    }

    @media (max-width: 780px) {
        h2 {
            --h2FontSize: 52px;
        }
    }

    @media (max-width: 640px) {
        padding: 30px;

        h2 {
            --h2FontSize: 44px;
        }

        p:first-of-type {
            font-size: 20px;
        }
    }

    @media (max-width: 500px) {
        padding: 24px;

        h2 {
            display: none;
        }

        a:first-of-type {
            display: none;
        }

        a:nth-of-type(2) {
            display: inline-block;
            margin-bottom: 15px;
            font-size: 25px;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--nonBlack);

            &::after {
                margin-bottom: 1px;
            }
        }

        p:first-of-type {
            margin-bottom: 11px;
        }
    }

    @media (max-width: 379px) {
        padding: 19px;

        a:nth-of-type(2) {
            margin-bottom: 12px;
            font-size: 24px;
        }

        p:first-of-type {
            font-size: 18px;
        }

        p:nth-of-type(2) {
            font-size: 0.97em;
        }
    }
`;

const ModalDetails = ({ name, tidyUrl, oneLiner, description, url }) => (
    <DetailsWrapper>
        <h2>{name}</h2>
        <CompanyLink url={url}>{tidyUrl}</CompanyLink>
        <CompanyLink url={url}>{name}</CompanyLink>
        <p>{oneLiner}</p>
        <p>{description}</p>
    </DetailsWrapper>
);

export default ModalDetails;
