/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from "react";
import { css, cx } from "linaria";
/** tick icon is not working */
/* import { tick } from "../assets/inline-icons"; */

const noOutline = css`
    &:focus {
        outline: none;
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
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIzMXB4IiBoZWlnaHQ9IjI2cHgiIHZpZXdCb3g9IjAgMCAzMSAyNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48IS0tR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoLS0+PHRpdGxlPmRvd25sb2FkPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBpZD0iV2ViIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBpZD0iSG9tZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0OS4wMDAwMDAsIC0yODk2LjAwMDAwMCkiIGZpbGw9IiNGMzJEOTQiPjxnIGlkPSJkb3dubG9hZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzY0LjUwMDAwMCwgMjkwOS4wMDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTM2NC41MDAwMDAsIC0yOTA5LjAwMDAwMCkgdHJhbnNsYXRlKDM0OS4wMDAwMDAsIDI4OTYuMDAwMDAwKSI+PHJlY3QgaWQ9IlJlY3RhbmdsZS02IiB4PSIwIiB5PSIxMSIgd2lkdGg9IjI3IiBoZWlnaHQ9IjQiLz48cG9seWdvbiBpZD0iQ29tYmluZWQtU2hhcGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3LjcyNzkyMiwgMTMuMDAwMDAwKSBzY2FsZSgtMSwgMSkgcm90YXRlKDQ1LjAwMDAwMCkgdHJhbnNsYXRlKC0xNy43Mjc5MjIsIC0xMy4wMDAwMDApICIgcG9pbnRzPSIxMi43Mjc5MjIxIDE4IDEyLjcyNzkyMjEgNC4wMDAwMDAwMSA4LjcyNzkyMjA0IDQuMDAwMDAwMDEgOC43Mjc5MjIwNCAyMCA4LjcyNzkyMjA0IDIyIDI2LjcyNzkyMjEgMjIgMjYuNzI3OTIyMSAxOCIvPjwvZz48L2c+PC9nPjwvc3ZnPg==);
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
