import React from "react";

const InlineVideo = ({ style, className, src, poster }) => (
    <video
        style={style}
        className={className}
        autoPlay
        playsInline
        loop
        muted
        src={src}
        poster={poster}
    />
);

export default InlineVideo;
