import React from "react";
// import { styled } from "linaria/react";

import "../styles/base.css";
import "../styles/custom-properties.css";
import "../styles/custom-media.css";
import "../styles/type.css";
import "../styles/globals.css";

import Header from "./header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
