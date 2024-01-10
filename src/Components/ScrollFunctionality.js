import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollFunctionality() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLayoutEffect(() => {
    const id = window.location.hash.substring(1);

    if (id) {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return null;
}

export default ScrollFunctionality;
