import { useEffect, useRef, useState } from "react";

const useObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const element = fromRef.current;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { isIntersecting, fromRef };
};
export default useObserver;
