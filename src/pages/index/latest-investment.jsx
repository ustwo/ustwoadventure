import React from "react";
import { styled } from "linaria/react";

const LatestInvestment = ({ companyName, companyPhoto, companyShortCopy }) => {
    const LatestInvestmentLink = styled.a``;

    return (
        <LatestInvestmentLink>
            <p className="tag">Latest investment:</p>
            <div className="image-container">
                <img
                    className="company-image"
                    data-src={companyPhoto}
                    alt={companyName}
                />
                <img
                    className="arrow"
                    data-src="images/arrow_white.svg"
                    alt=""
                />
            </div>
            <h1>{companyName}</h1>
            <p className="copy">${companyShortCopy}</p>
        </LatestInvestmentLink>
    );
};

export default LatestInvestment;
