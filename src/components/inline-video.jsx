import React from "react";

const InlineVideo = ({ src, poster }) => {
    return <video autoPlay playsinline loop muted src={src} poster={poster} />;
};

export default InlineVideo;
