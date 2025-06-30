import React from "react";

export function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      async
      defer
      src="https://app.rybbit.io/api/script.js"
      data-site-id="1217"
      key="rybbit-script"
    />,
  ]);
};
