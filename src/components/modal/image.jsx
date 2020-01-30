import React from "react";
import { styled } from "linaria/react";

import CompanyLink from "./company-link";

const ImageWrapper = styled.div`
    position: relative;
    order: 1;
    overflow: hidden;

    > img {
        height: 100%;
        width: 100%;
        display: block;
        object-fit: cover;
        object-position: 50% 50%;
        filter: contrast(95%) brightness(90%);
    }

    > a > img {
        position: absolute;
        bottom: 25px;
        left: 25px;
        max-width: 160px;
        max-height: 60px;
        z-index: 2;
    }

    @media (max-width: 640px) {
        > a > img {
            max-height: 55px;
            max-width: 140px;
        }
    }

    @media (max-width: 379px) {
        > a > img {
            max-width: 120px;
            max-height: 45px;
            bottom: 21px;
            left: 21px;
        }
    }
`;

const ModalImage = ({ name, image, logo, url }) => (
    <ImageWrapper>
        <img src={image} alt={`${name}'s company`} />
        <CompanyLink url={url}>
            <img src={logo} alt="" />
        </CompanyLink>
    </ImageWrapper>
);

export default ModalImage;
