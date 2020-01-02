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
                        siteImage
                        twitter
                        name
                    }
                }
            }
        `
    );

    return site.siteMetadata;
};
