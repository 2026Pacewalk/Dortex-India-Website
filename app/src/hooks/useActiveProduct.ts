import { useEffect, useState, useRef } from 'react';

export function useActiveProduct(count: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const observersRef = useRef<IntersectionObserver[]>([]);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    elementsRef.current[index] = el;
  };

  useEffect(() => {
    // Clean up previous observers
    observersRef.current.forEach((obs) => obs.disconnect());
    observersRef.current = [];

    const observers = elementsRef.current.map((el, index) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      return observer;
    });

    observersRef.current = observers.filter(Boolean) as IntersectionObserver[];

    return () => {
      observersRef.current.forEach((obs) => obs.disconnect());
    };
  }, [count]);

  return { activeIndex, setRef };
}
