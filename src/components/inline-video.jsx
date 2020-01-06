/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import { css, cx } from "linaria";
import { tick } from "../assets/inline-icons";

const noOutline = css`
    &:focus {
        outline: none;
    }
`;

const muteToggleStyles = css`
    transition: filter 150ms;
    position: relative;

    ${"" /* TODO: get sound icon working? */}
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url(${tick});
        z-index: 1;
    }

    &:hover {
        filter: brightness(80%);
    }
`;

const InlineVideo = ({ style, className, src, poster, hasSound, controls }) => {
    const [muted, setMute] = useState(true);

    const toggleMute = e => {
        setMute(!muted);
        e.preventDefault();
    };

    const classes = cx(noOutline, className, hasSound && muteToggleStyles);

    return (
        <video
            style={style}
            className={classes}
            autoPlay
            playsInline
            loop
            muted={muted}
            onClick={hasSound && toggleMute}
            src={src}
            poster={poster}
            controls={!muted || controls}
        />
    );
};

export default InlineVideo;
