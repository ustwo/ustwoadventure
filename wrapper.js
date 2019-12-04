/* eslint-disable react/jsx-filename-extension */
const React = require("react");
const Layout = require("./src/components/layout").default;

module.exports = ({ element, props }) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Layout {...props}>{element}</Layout>;
};
