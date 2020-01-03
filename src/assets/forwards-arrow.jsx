import React from "react";

const ForwardsArrow = ({ style, className, fill = "#ffffff" }) => (
    <svg
        style={style}
        className={className}
        viewBox="0 0 32 26"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect fill={fill} x="0" y="11" width="28" height="4" />
        <polygon
            fill={fill}
            transform="translate(18.727922, 13.000000) scale(-1, 1) rotate(45.000000) translate(-18.727922, -13.000000) "
            points="13.7279221 18 13.7279221 4.00000001 9.72792204 4.00000001 9.72792204 20 9.72792204 22 27.7279221 22 27.7279221 18"
        />
    </svg>
);

export default ForwardsArrow;
