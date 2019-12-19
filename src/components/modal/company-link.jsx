import React from "react";

const CompanyLink = ({ url, children, className, style }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
    >
        {children}
    </a>
);

export default CompanyLink;
