import React from "react";

const InlineVideo = ({ style, className, src, poster }) => (
    <video
        style={style}
        className={className}
        autoPlay
        playsinline
        loop
        muted
        src={src}
        poster={poster}
    />
);

export default InlineVideo;
