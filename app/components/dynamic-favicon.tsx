"use client";

import { useEffect } from "react";

const DynamicFavicon = () => {
  useEffect(() => {
    const setFavicon = () => {
      const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      const favicon = document.getElementById(
        "dynamic-favicon"
      ) as HTMLLinkElement;
      const faviconAlternate = document.getElementById(
        "dynamic-favicon-alternate"
      ) as HTMLLinkElement;

      if (theme === "dark") {
        favicon.href = "/favicons/dark.svg";
        faviconAlternate.href = "/favicons/dark.png";
      } else {
        favicon.href = "/favicons/light.svg";
        faviconAlternate.href = "/favicons/light.png";
      }
    };

    setFavicon();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", setFavicon);

    // Cleanup listener on component unmount
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", setFavicon);
    };
  }, []);

  return (
    <>
      <link
        rel="icon"
        id="dynamic-favicon"
        href="/favicons/default.svg"
        type="image/svg+xml"
      />
      <link
        rel="alternate icon"
        id="dynamic-favicon-alternate"
        href="/favicons/default.png"
        type="image/png"
      />
    </>
  );
};

export default DynamicFavicon;
