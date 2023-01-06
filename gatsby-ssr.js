import React from "react";

export default function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      async
      defer
      src="https://scripts.withcabin.com/hello.js"
    />,
  ]);
};
