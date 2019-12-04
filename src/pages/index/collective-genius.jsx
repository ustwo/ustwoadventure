import React from "react";
import { styled } from "linaria/react";

import SectionWrapper from "../../components/section-wrapper";
import Button from "../../components/button";
import InlineVideo from "../../components/inline-video";

const OurPortfolio = () => {
    const CollectiveGeniusCopy = styled.div`
        grid-column: 1 / 7;
    `;

    return (
        <SectionWrapper subgrid>
            <CollectiveGeniusCopy>
                <h2>Collective genius</h2>
                <p>
                    ustwo builds products, services and companies that make a
                    meaningful impact on the world. By caring deeply for our
                    people, clients, and partners, we believe that we can
                    unleash the collective genius of all of us.
                </p>
                <Button external href="https://ustwo.com">
                    ustwo.com
                </Button>
            </CollectiveGeniusCopy>

            <InlineVideo
                src="https://player.vimeo.com/external/310346824.sd.mp4?s=5907d9389a6114dec39081532a102d4101c32c6d&profile_id=164"
                poster="images/monument-valley.jpg"
            />
        </SectionWrapper>
    );
};

export default OurPortfolio;
