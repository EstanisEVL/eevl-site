import { useEffect, useRef, useState } from "react";

const useMultiObserver = (options) => {
  const [intersectingRefs, setIntersectingRefs] = useState([]);
  const refElements = useRef([]);

  const observeRef = (el) => {
    if (el && !refElements.current.some((ref) => ref.ref === el)) {
      refElements.current.push({ ref: el, isIntersecting: false });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const refObj = refElements.current.find(
          (ref) => ref.ref === entry.target
        );

        if (entry.isIntersecting && refObj && !refObj.isIntersecting) {
          refObj.isIntersecting = true;
          setIntersectingRefs((prevRefs) => prevRefs.concat(refObj.ref));
          observer.unobserve(entry.target);
        }
      });
    }, options);

    refElements.current.forEach((refObj) => {
      observer.observe(refObj.ref);
    });

    return () => {
      refElements.current.forEach((refObj) => {
        observer.unobserve(refObj.ref);
      });
    };
  }, [options]);

  return { intersectingRefs, observeRef };
};
export default useMultiObserver;
