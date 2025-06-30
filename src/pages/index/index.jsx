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
    margin-bottom: 100px;

    @media (min-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 767px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1023px) {
        grid-template-columns: repeat(6, 1fr);
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
    position: relative;
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

const Shape1 = styled.div`
    position: absolute;
    border-radius: 50%;
    background: #1d2677;
    width: 80vw;
    height: 68vw;
    left: 31vw;
    top: -41vw;
    transform: rotate(15deg) scaleY(0.5);
`;

const Shape2 = styled.div`
    position: absolute;
    right: 2vw;
    top: 14vw;

    svg {
        width: 70px;
        stroke: #5ee0f7;
        stroke-width: 1px;
        fill: transparent;
    }

    @media (min-width: 830px) {
        right: 8vw;
        top: 9vw;

        svg {
            width: 120px;
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

        <Shape1 />

        <Shape2>
            <svg
                viewBox="0 0 124 124"
                preserveAspectRatio="xMinYMax meet"
                xmlns="http://www.w3.org/2000/svg"
                role="presentation"
            >
                <path d="M123.516 61.4045C123.516 63.6793 121.089 65.8019 120.842 68.0196C120.594 70.2755 122.479 72.8835 121.993 75.0536C121.489 77.2618 118.652 78.7942 117.92 80.8977C117.177 83.0298 118.434 85.9995 117.463 88.0078C116.482 90.0447 113.379 90.9014 112.18 92.7955C110.981 94.6991 111.552 97.8687 110.143 99.6295C108.735 101.39 105.517 101.533 103.928 103.123C102.338 104.712 102.196 107.929 100.435 109.338C98.6834 110.737 95.5138 110.166 93.6006 111.375C91.7065 112.574 90.8499 115.677 88.813 116.658C86.7951 117.628 83.835 116.372 81.7029 117.114C79.5899 117.857 78.067 120.693 75.8587 121.188C73.6791 121.683 71.0806 119.789 68.8248 120.036C66.6166 120.284 64.494 122.711 62.2192 122.711C59.9443 122.711 57.8218 120.284 55.6041 120.036C53.3483 119.789 50.7403 121.674 48.5701 121.188C46.3619 120.684 44.8295 117.847 42.726 117.114C40.5939 116.372 37.6242 117.628 35.6159 116.658C33.579 115.677 32.7224 112.574 30.8282 111.375C28.9246 110.176 25.7551 110.747 23.9942 109.338C22.2333 107.929 22.0905 104.712 20.501 103.123C18.9115 101.533 15.6943 101.39 14.2856 99.6295C12.8865 97.8782 13.4575 94.7086 12.2487 92.7955C11.0494 90.9014 7.94653 90.0447 6.96616 88.0078C5.99531 85.99 7.25171 83.0298 6.50929 80.8977C5.76687 78.7847 2.93046 77.2618 2.43551 75.0536C1.94057 72.8739 3.83468 70.2755 3.5872 68.0196C3.33973 65.8114 0.912598 63.6889 0.912598 61.414C0.912598 59.1392 3.33973 57.0166 3.5872 54.7989C3.83468 52.5431 1.95009 49.9351 2.43551 47.765C2.93998 45.5567 5.77639 44.0243 6.50929 41.9208C7.25171 39.7887 5.99531 36.8191 6.96616 34.8107C7.94653 32.7738 11.0494 31.9172 12.2487 30.0231C13.448 28.1194 12.877 24.9499 14.2856 23.189C15.6943 21.4281 18.9115 21.2854 20.501 19.6959C22.0905 18.1063 22.2333 14.8892 23.9942 13.4805C25.7455 12.0813 28.9151 12.6524 30.8282 11.4436C32.7224 10.2443 33.579 7.14137 35.6159 6.161C37.6337 5.19015 40.5939 6.44653 42.726 5.70412C44.839 4.9617 46.3619 2.12528 48.5701 1.63034C50.7498 1.13539 53.3483 3.0295 55.6041 2.78203C57.8123 2.53456 59.9348 0.107422 62.2097 0.107422C64.4845 0.107422 66.6071 2.53456 68.8248 2.78203C71.0806 3.0295 73.6886 1.14491 75.8587 1.63034C78.067 2.1348 79.5994 4.97122 81.7029 5.70412C83.835 6.44653 86.8046 5.19015 88.813 6.161C90.8499 7.14137 91.7065 10.2443 93.6006 11.4436C95.5043 12.6429 98.6738 12.0718 100.435 13.4805C102.196 14.8892 102.338 18.1063 103.928 19.6959C105.517 21.2854 108.735 21.4281 110.143 23.189C111.542 24.9404 110.971 28.1099 112.18 30.0231C113.379 31.9172 116.482 32.7738 117.463 34.8107C118.434 36.8286 117.177 39.7887 117.92 41.9208C118.662 44.0338 121.498 45.5567 121.993 47.765C122.488 49.9446 120.594 52.5431 120.842 54.7989C121.089 57.0071 123.516 59.1297 123.516 61.4045Z" />
            </svg>
        </Shape2>

        <HomePageHeader>
            We created{" "}
            <span style={{ color: "#F7E300" }}>ustwo Adventures</span> to
            support early-stage initiatives grounded in creativity and the
            desire to make a positive impact.
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
            {companiesInHomePageRotation.map(item => {
                const image = (
                    <img src={item.logo} alt="" style={{ width: "100%" }} />
                );
                if (item.url) {
                    return (
                        <Item>
                            <a href={item.url}>{image}</a>
                        </Item>
                    );
                }
                return <Item>{image}</Item>;
            })}
        </ItemsGrid>
        <p
            style={{
                margin: "0 0 50px 0",
                maxWidth: "700px",
                position: "relative"
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
