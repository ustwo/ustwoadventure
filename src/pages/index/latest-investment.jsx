import React from "react";
import { styled } from "linaria/react";

import portfolioArray from "../../data/portfolio-array";
import ForwardsArrow from "../../assets/forwards-arrow";
import Modal from "../../components/modal";
import useModal from "../../hooks/use-modal";

const LatestInvestmentLink = styled.div`
    cursor: pointer;

    p.tag {
        margin-bottom: 10px;
        margin-left: -28px;
        font-size: 0.9em;
        line-height: 1;
        padding: 4px;
        background-color: var(--piglet);
        color: #fff;
        width: max-content;
    }

    div.image-container {
        position: relative;
        z-index: -1;

        img.company-image {
            display: block;
            width: 100%;
            height: 25vw;
            max-height: 300px;
            object-fit: cover;
            transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
        }

        svg {
            position: absolute;
            top: 17px;
            right: 18px;
            width: 24px;
            transition: transform 0.2s;
        }
    }

    h1 {
        font-size: 62px;
        -webkit-text-stroke: 1.5px;
        -webkit-text-stroke-color: var(--piglet);
        -webkit-text-fill-color: transparent;
        width: max-content;
        margin: -22px 0 0 auto;
        padding: 0 5px;
        text-align: right;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    p.copy {
        margin-right: 5px;
        line-height: 1.5;
        text-align: right;
    }

    &:hover,
    &.active {
        div.image-container {
            img.company-image {
                box-shadow: -4px 4px 0px 0px var(--piglet);
                transform: translate(4px, -4px);
                filter: brightness(104%);
            }

            svg {
                transform: translate(7px, -4px);

                &:hover {
                    transform: translate(10px, -4px);
                }
            }
        }

        h1 {
            -webkit-text-stroke: 0px;
            -webkit-text-stroke-color: #fff;
            -webkit-text-fill-color: #fff;
            background-color: var(--piglet);
            box-shadow: -7px 7px 0px -1px var(--grey04);
            transform: translate(7px, -7px);
        }
    }

    @media (max-width: 1025px) {
        h1 {
            -webkit-text-stroke: 1.2px;
            margin-top: -22px;
            font-size: 54px;
        }
    }

    @media (max-width: 769px) {
        h1 {
            margin-top: -20px;
            font-size: 48px;
        }
    }
`;

const latestInvestment = portfolioArray[portfolioArray.length - 1];
const { name, url, tidyurl, oneLiner, copy, image, logo } = latestInvestment;

const LatestInvestment = ({ className, style }) => {
    const [modalIsOpen, setModalIsOpen] = useModal();

    return (
        <LatestInvestmentLink
            onClick={() => setModalIsOpen(true)}
            className={className}
            style={style}
        >
            <p className="tag">Latest investment:</p>
            <div className="image-container">
                <img className="company-image" src={image} alt={name} />
                <ForwardsArrow />
            </div>
            <h1>{name}</h1>
            <p className="copy">{oneLiner}</p>

            <Modal
                name={name}
                url={url}
                tidyUrl={tidyurl}
                oneLiner={oneLiner}
                description={copy}
                image={image}
                logo={logo}
                isOpen={modalIsOpen}
                handleClose={() => setModalIsOpen(false)}
            />
        </LatestInvestmentLink>
    );
};

export default LatestInvestment;
