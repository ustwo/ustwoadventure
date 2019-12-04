import React from "react";
import { styled } from "linaria/react";

import SectionWrapper from "../../components/section-wrapper";
import Button from "../../components/button";
import PortfolioGridWrapper from "../../components/portfolio-grid";
import PortfolioItem from "../../components/portfolio-item";
import portfolioArray from "../../data/portfolioArray";
import shuffle from "../../utils/shuffle";

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

        a {
            &:nth-child(1) {
                margin-top: 130px;
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
                margin-top: -210px;
            }

            @media (--for-up-to-large-tablet) {
                &:nth-child(3) {
                    margin-top: 300px;
                }
                &:nth-child(4) {
                    margin-top: -170px;
                }
                &:nth-child(5) {
                    display: none;
                }
            }

            @media (max-width: 965px) {
                &:nth-child(1) {
                    margin-top: 130px;
                }
                &:nth-child(2) {
                    margin-top: 0;
                }
                &:nth-child(3) {
                    margin-top: 200px;
                }
                &:nth-child(4) {
                    display: none;
                }
            }

            @media (max-width: 710px) {
                &:nth-child(1) {
                    margin-top: 80px;
                }
                &:nth-child(2) {
                    margin-top: -40px;
                }
                &:nth-child(3) {
                    margin-top: 0;
                }
                &:nth-child(4) {
                    margin-top: -110px;
                    display: block;
                }
            }

            @media (max-width: 380px) {
                &:nth-child(1) {
                    margin-top: 0;
                }
                &:nth-child(2) {
                    margin-top: 0;
                }
                &:nth-child(3) {
                    margin-top: 0;
                }
                &:nth-child(4) {
                    display: none;
                }
            }
        }
    `;

    const portfolioMinusLatest = portfolioArray.slice(
        0,
        portfolioArray.length - 1
    );
    const livePortfolioMinusLatest = portfolioMinusLatest.filter(
        obj => obj.status === "LIVE"
    );
    const portfolioPreviewItems = shuffle(livePortfolioMinusLatest).slice(0, 5);

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
            </PortfolioPreviewGridWrapper>
        </OurPortfolioSection>
    );
};

export default OurPortfolio;
