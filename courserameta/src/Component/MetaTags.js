import React from "react";
import logo from "../icons_assets/Logo.svg";

const MetaTags = () => {
  return (
    <head>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="og:description" content="This is the home page for Little Lemon Restaurant"/>
        <meta name="og:image" content={logo}/>
    </head>
  );
};
export default MetaTags;
