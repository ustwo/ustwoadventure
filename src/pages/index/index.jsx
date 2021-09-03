import React from "react";
import { styled } from "linaria/react";

import SEO from "../../components/seo";
import portfolioArray, { PORTFOLIO_STATUS } from "../../data/portfolio-array";
import IconFacebook from "../../assets/IconFacebook";
import IconInstagram from "../../assets/IconInstagram";
import IconLinkedIn from "../../assets/IconLinkedIn";
import IconTwitter from "../../assets/IconTwitter";

const ItemsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    align-items: center;
    margin-bottom: 160px;

    @media (min-width: 767px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1023px) {
        grid-template-columns: repeat(5, 1fr);
    }
`;

const Item = styled.div`
    margin: 0;
`;

const MainWrapper = styled.main`
    margin-top: 160px;
    margin-bottom: 90px;

    @media (max-width: 830px) {
        margin-top: 150px;
    }

    @media (max-width: 605px) {
        margin-top: 110px;
        margin-bottom: 80px;
    }

    @media (max-width: 570px) {
        margin-top: 90px;
    }
`;

const HomePageHeader = styled.h1`
    margin-bottom: 60px;
`;

const SocialIcons = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    line-height: 36px;
    padding: 0;
    margin: 0;

    li {
        margin-right: 15px;

        svg {
            fill: white;
            width: 20px;
            height: 20px;
        }
    }
`;

const companiesInHomePageRotation = portfolioArray.filter(
    (company, index) =>
        index !== portfolioArray.length - 1 &&
        company.status === PORTFOLIO_STATUS.LIVE
);

const Index = () => (
    <MainWrapper>
        <SEO />

        <HomePageHeader>
            We created <span style={{ color: "#F7E300" }}>ustwo Adventure</span>{" "}
            to support early-stage initiatives grounded in creativity and the
            desire to make a positive impact. The programme is now paused
            indefinitely.
        </HomePageHeader>

        <p
            style={{
                margin: "0 0 30px 0",
                maxWidth: "600px"
                // textAlign: "center"
            }}
        >
            Between 2014 and 2020, we offered experience, advice and funding
            assistance to companies including:
        </p>
        <ItemsGrid>
            {companiesInHomePageRotation.map(item => (
                <Item>
                    <a href={item.url}>
                        <img src={item.logo} alt="" style={{ width: "100%" }} />
                    </a>
                </Item>
            ))}
        </ItemsGrid>
        <p
            style={{
                margin: "0 0 50px 0",
                maxWidth: "600px"
                // textAlign: "center"
            }}
        >
            To find out more about ustwo or to get in touch, visit our{" "}
            <a href="https://ustwo.com">main site</a>. You can also follow our
            social channels.
        </p>
        <SocialIcons>
            <li>
                <a
                    href="https://www.facebook.com/pages/ustwo/127618770359"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconFacebook />
                </a>
            </li>
            <li>
                <a
                    href="http://www.twitter.com/ustwo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconTwitter />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/company/ustwo-"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconLinkedIn />
                </a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com/ustwo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconInstagram />
                </a>
            </li>
        </SocialIcons>
        <div style={{ margin: "50px 0", fontSize: "0.8em", opacity: 0.5 }}>
            <p>
                ustwo is a{" "}
                <a
                    href="https://www.ustwo.com/b-corp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    certified B Corp
                </a>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <a
                    href="https://www.iubenda.com/privacy-policy/322454/cookie-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Cookie
                </a>
                &nbsp;&amp;&nbsp;
                <a
                    href="https://www.ustwo.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Privacy policy
                </a>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;© ustwo{" "}
                {new Date().getFullYear()}
            </p>
        </div>
    </MainWrapper>
);

export default Index;
