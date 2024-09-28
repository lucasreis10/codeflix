import { useEffect, useState } from "react";

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handlerScroll);

    return () => window.removeEventListener("scroll", handlerScroll);
  }, []);

  return isScrolled;
};
