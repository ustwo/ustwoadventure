/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import { styled } from "linaria/react";
import { cx, css } from "linaria";

const VideoContainer = styled.div`
    position: relative;
    height: max-content;

    video {
        width: 100%;
        display: block;
        transition: filter 150ms;

        &:focus {
            outline: none;
        }
    }
`;

const muteToggleStyles = css`
    p {
        position: absolute;
        top: 50%;
        left: 50%;
        font-family: var(--futura);
        font-size: 3em;
        text-align: center;
        text-transform: uppercase;
        line-height: 0.8;
        margin-bottom: 0;
        transform: translate(-50%, -33.33%);
        color: #ffffff;
        opacity: 0;
        transition: opacity 150ms;

        :hover {
            cursor: pointer;
            color: var(--piglet);
        }
    }

    :hover {
        video {
            filter: brightness(75%);
        }

        p {
            opacity: 1;
        }
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

    const handleKeyDown = e => e.key === "m" && setMute(!muted);

    const classes = cx(className, hasSound && muteToggleStyles);

    return (
        <VideoContainer className={classes}>
            <video
                style={style}
                autoPlay
                playsInline
                loop
                muted={muted}
                src={src}
                poster={poster}
                controls={controls}
            />
            {hasSound && (
                <p
                    onClick={isClickable && toggleMute}
                    onKeyDown={handleKeyDown}
                >
                    {muted ? "UNMUTE" : "MUTE"}
                </p>
            )}
        </VideoContainer>
    );
};

export default InlineVideo;
