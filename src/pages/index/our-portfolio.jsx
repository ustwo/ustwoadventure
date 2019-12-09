import React from "react";
import { styled } from "linaria/react";

import SectionWrapper from "../../components/section-wrapper";
import Button from "../../components/button";
import PortfolioGridWrapper from "../../components/portfolio-grid";
import PortfolioItem from "../../components/portfolio-item";
import portfolioArray from "../../data/portfolio-array";
import shuffle from "../../utils/shuffle";

const portfolioMinusLatest = portfolioArray.slice(0, portfolioArray.length - 1);
const livePortfolioMinusLatest = portfolioMinusLatest.filter(
    obj => obj.status === "LIVE"
);
const portfolioPreviewItems = shuffle(livePortfolioMinusLatest).slice(0, 5);

const OurPortfolio = () => {
    const OurPortfolioSection = styled(SectionWrapper)`
        margin-top: -110px;

        @media (max-width: 880px) {
            margin-top: -80px;
        }

        @media (max-width: 825px) {
            margin-top: -50px;
        }

        @media (max-width: 740px) {
            margin-top: 15px;
        }
    `;

    const StyledPortfolioCopy = styled.div`
        grid-column: 1 / 9;
        max-width: 350px;
    `;

    const PortfolioPreviewGridWrapper = styled(PortfolioGridWrapper)`
        margin-top: 15px;
        position: relative;

        @media (max-width: 380px) {
            margin-top: 25px;
        }

        a {
            &:nth-child(1) {
                margin-top: 135px;
            }
            &:nth-child(2) {
                margin-top: 0px;
            }
            &:nth-child(3) {
                margin-top: 380px;
            }
            &:nth-child(4) {
                margin-top: 220px;
            }
            &:nth-child(5) {
                margin-top: -215px;
            }

            @media (--for-up-to-large-tablet) {
                &:nth-child(3) {
                    margin-top: 300px;
                }
                &:nth-child(4) {
                    margin-top: -150px;
                }
                &:nth-child(5) {
                    display: none;
                }
            }

            @media (max-width: 965px) {
                &:nth-child(1) {
                    margin-top: 110px;
                }
                &:nth-child(2) {
                    margin-top: 0;
                }
                &:nth-child(3) {
                    margin-top: 220px;
                }
                &:nth-child(4) {
                    display: none;
                }
            }

            @media (max-width: 710px) {
                &:nth-child(1) {
                    margin-top: 75px;
                }
                &:nth-child(2) {
                    margin-top: -50px;
                }
                &:nth-child(3) {
                    margin-top: -10px;
                }
                &:nth-child(4) {
                    margin-top: -100px;
                    display: block;
                }
            }

            @media (max-width: 380px) {
                &:nth-child(1),
                &:nth-child(2),
                &:nth-child(3) {
                    margin-top: 0;
                }
                &:nth-child(4) {
                    display: none;
                }
            }
        }
    `;

    const PortfolioPreviewBackground = styled.div`
        background-color: var(--nonWhite);
        width: 100vw;
        max-width: 1520px;
        height: 74%;
        position: absolute;
        z-index: -1;
        left: 50%;
        top: 10%;
        transform: translateX(-50%);

        @media (min-width: 1520px) {
            max-width: 1320px;
        }

        @media (max-width: 965px) {
            height: 68.3%;
            top: 14%;
        }

        @media (max-width: 710px) {
            height: 70%;
            top: 5%;
        }

        @media (max-width: 520px) {
            height: 67%;
        }

        @media (max-width: 380px) {
            height: 76%;
            top: 10%;
        }
    `;

    return (
        <OurPortfolioSection subgrid>
            <StyledPortfolioCopy>
                <h2>Our Portfolio</h2>
                <p>
                    We are proud to back great people and companies that put
                    their values first.
                </p>
                <Button href="/portfolio">See all</Button>
            </StyledPortfolioCopy>

            <PortfolioPreviewGridWrapper>
                {portfolioPreviewItems.map(company => {
                    return (
                        <PortfolioItem
                            key={company.name}
                            name={company.name}
                            image={company.image}
                            oneLiner={company.oneLiner}
                            hasArrows
                        />
                    );
                })}
                <PortfolioPreviewBackground />
            </PortfolioPreviewGridWrapper>
        </OurPortfolioSection>
    );
};

export default OurPortfolio;
