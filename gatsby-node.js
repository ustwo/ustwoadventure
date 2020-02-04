// const path = require("path");

// exports.onCreateWebpackConfig = ({ actions }) => {
//     actions.setWebpackConfig({
//         resolve: {
//             alias: {
//                 Utils: path.resolve(__dirname, "src/utils/")
//             }
//         }
//     });
// };
// TODO: implement with https://github.com/benmosher/eslint-plugin-import#resolvers

exports.onCreatePage = ({ page, actions }) => {
    const { deletePage, createPage } = actions;

    return new Promise(resolve => {
        if (page.componentPath === `${__dirname}/src/pages/index/index.jsx`) {
            deletePage(page);
            createPage({
                ...page,
                path: "/"
            });
        }
        resolve();
    });
};
