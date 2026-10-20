import { useEffect, useState } from "react";

export default function useTyping(text, speed = 60) {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const [shown, setShown] = useState(reduceMotion ? text : "");

  useEffect(() => {
    if (reduceMotion) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, reduceMotion]);

  return shown;
}
