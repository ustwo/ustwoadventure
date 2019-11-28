import { useStaticQuery, graphql } from "gatsby";

export default () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        siteUrl
                        siteTitle
                        siteDescription
                        image
                        twitter
                        name
                    }
                }
            }
        `
    );

    return site.siteMetadata;
};
