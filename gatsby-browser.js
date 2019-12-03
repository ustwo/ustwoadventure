/* eslint-disable react/jsx-filename-extension */
const React = require("react");
const Layout = require("./src/components/layout").default;

exports.wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Layout {...props}>{element}</Layout>;
};
