import React from "react";
import { styled } from "linaria/react";

// import SectionWrapper from "../../components/section-wrapper";
import portfolioArray, { PORTFOLIO_STATUS } from "../../data/portfolio-array";

const StyledPortfolioCopy = styled.div`
    max-width: 350px;
`;

const companiesInHomePageRotation = portfolioArray.filter(
    (company, index) =>
        index !== portfolioArray.length - 1 &&
        company.status === PORTFOLIO_STATUS.LIVE &&
        company.isInHomePageRotation === true
);

const OurPortfolio = () => (
    <div>
        <StyledPortfolioCopy>
            <h2>Our Portfolio</h2>
            <p>
                We are proud to back great people and companies that put their
                values first.
            </p>
        </StyledPortfolioCopy>
        <div style={{ backgroundColor: "black" }}>
            {companiesInHomePageRotation.map(item => (
                <img src={item.logo} alt="" />
            ))}
        </div>
    </div>
);

export default OurPortfolio;
