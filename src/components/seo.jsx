import React from "react";
import { Helmet } from "react-helmet";

import useSiteMetadata from "../hooks/use-site-metadata";

const SEO = ({ title, description }) => {
    const {
        siteUrl,
        siteTitle,
        siteDescription,
        image,
        twitter,
        name
    } = useSiteMetadata();

    const pageTitle = title ? `${title} — ${siteTitle}` : siteTitle;
    const pageDescription = description || siteDescription;

    return (
        <Helmet>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="author" content={name} />
            {/* <link rel="canonical" href={siteUrl} /> */}

            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={image} />

            <link rel="preconnect" src="https://use.typekit.net" />
            <link rel="stylesheet" href="https://use.typekit.net/hoo6hst.css" />

            {/* {keywords && (
                <meta
                    name="keywords"
                    content={keywords.toString().replace(/,/g, ", ")}
                />
            )} */}
        </Helmet>
    );
};

export default SEO;
