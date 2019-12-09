import React from "react";
import { styled } from "linaria/react";

import SectionWrapper from "../../components/section-wrapper";
import Button from "../../components/button";
import InlineVideo from "../../components/inline-video";

const CollectiveGenius = () => {
    const CollectiveGeniusSection = styled(SectionWrapper)`
        @media (--for-up-to-mobile) {
            position: relative;
            margin-bottom: 80px;

            a {
                position: absolute;
                bottom: -70px;
                left: 0;
            }
        }
    `;

    const CollectiveGeniusCopy = styled.div`
        grid-column: 1 / 7;
        margin-top: 6vw;
        margin-right: 20px;

        @media (--for-over-desktop) {
            margin-top: 90px;
        }

        @media (--for-up-to-large-tablet) {
            margin-top: 6vw;
        }

        @media (max-width: 965px) {
            margin-top: 0;
            grid-column: 1 / 8;
        }

        @media (--for-up-to-tablet) {
            grid-column: 1 / 10;
        }

        @media (--for-up-to-small-tablet) {
            grid-column: 1 / 12;
        }
    `;

    const UstwoVideo = styled(InlineVideo)`
        grid-column: 8 / -1;
        width: 100%;

        @media (--for-up-to-large-tablet) {
            grid-column: 7 / -1;
            margin-top: -40px;
            width: calc(100% - 35px);
            margin-right: 35px;
        }

        @media (max-width: 965px) {
            grid-column: 8 / -1;
            margin-top: calc(30px + 10vw);
            width: 100%;
            margin-right: 0;
        }

        @media (--for-up-to-tablet) {
            grid-column: 6 / -1;
            margin-top: -10px;
        }

        @media (--for-up-to-small-tablet) {
            grid-column: 5 / -1;
        }

        @media (max-width: 530px) {
            margin-left: 10px;
        }

        @media (--for-up-to-mobile) {
            width: 65%;
            margin-left: 35%;
            margin-top: 15px;
        }

        @media (max-width: 420px) {
            width: 84%;
            margin-left: 16%;
        }
    `;

    return (
        <CollectiveGeniusSection subgrid>
            <CollectiveGeniusCopy>
                <h2>Collective genius</h2>
                <p>
                    Since 2004 ustwo has been creating products, services and
                    companies that make a meaningful impact on the world. We
                    believe that by caring deeply for our people, clients, and
                    partners, we can unleash the collective genius of all of us.
                </p>
                <Button external href="https://ustwo.com">
                    ustwo.com
                </Button>
            </CollectiveGeniusCopy>

            <UstwoVideo
                src="https://player.vimeo.com/external/310346824.sd.mp4?s=5907d9389a6114dec39081532a102d4101c32c6d&profile_id=164"
                poster="images/monument-valley.jpg"
            />
        </CollectiveGeniusSection>
    );
};

export default CollectiveGenius;
