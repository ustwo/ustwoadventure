import React from "react";

const InlineVideo = ({ style, className, src, poster }) => {
    return (
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
};

export default InlineVideo;
