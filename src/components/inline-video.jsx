/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import { css, cx } from "linaria";
import { tick } from "../assets/inline-icons";

const noOutline = css`
    &:focus {
        outline: none;
    }
    video {
        width: 100%;
        display: block;
    }
`;

const muteToggleStyles = css`
    transition: filter 150ms;
    position: relative;

    video {
        width: 100%;
        display: block;
    }
    .inline-video-container {
        position: relative;
    }
    .inline-video-hover-background {
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
    }
    .inline-video-hover-icon {
        content: "";
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        width: 3em;
        height: 3em;
        z-index: 100;
        background-size: cover;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-image: url(${tick});    
    }

    .inline-video-container:hover .inline-video-hover-background {
        display: block;
    }
`;

const InlineVideo = ({ style, className, src, poster, hasSound, controls }) => {
    const [muted, setMute] = useState(true);

    const hasMouse =
        typeof window !== "undefined"
            ? window.matchMedia("(pointer: fine)").matches
            : null;
    const isClickable = hasSound && hasMouse;

    const toggleMute = e => {
        setMute(!muted);
        e.preventDefault();
    };

    const classes = cx(noOutline, className, hasSound && muteToggleStyles);

    return (
        <div className={classes}>
            <div className="inline-video-container">
                <video
                    style={style}
                    autoPlay
                    playsInline
                    loop
                    muted={muted}
                    onClick={isClickable && toggleMute}
                    src={src}
                    poster={poster}
                    controls={controls}
                />
                <div className="inline-video-hover-background">
                    <div className="inline-video-hover-icon" />
                </div>
            </div>
        </div>
    );
};

export default InlineVideo;
