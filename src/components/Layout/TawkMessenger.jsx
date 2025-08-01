// src/components/TawkMessenger.jsx
import { useEffect } from "react";

const TawkMessenger = () => {
  useEffect(() => {
    const Tawk_API = window.Tawk_API || {};
    const Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/688b7521ee33f519268715d7/1j1gc33hg"; // Replace with your actual Tawk.to embed URL
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode.insertBefore(s1, s0);
  }, []);

  return null; // No UI, script only
};

export default TawkMessenger;
