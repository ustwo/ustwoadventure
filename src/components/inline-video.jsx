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
        display: block;
        top: 50%;
        left: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
        background-image: url(${tick});
        ${"" /* width: 100%;
        height: 100%;
        background-size: 20px auto;
        background-repeat: no-repeat;
        background-position: 50% 50%; */}

        &:hover {
            filter: brightness(80%);
        }
    }

    &:hover {
        filter: brightness(85%);
    }
`;

const InlineVideo = ({ style, className, src, poster, hasSound, controls }) => {
    const [muted, setMute] = useState(true);

    const hasMouse = matchMedia("(pointer: fine)").matches;
    const isClickable = hasSound && hasMouse;

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
            onClick={isClickable && toggleMute}
            src={src}
            poster={poster}
            controls={controls}
        />
    );
};

export default InlineVideo;
