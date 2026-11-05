import { RefObject, useEffect, useState } from 'react';

// Scales a fixed-width A4 stack down to fit narrow screens. Never scales up.
export function useFitScale(ref: RefObject<HTMLElement>, baseWidth: number, gutter = 32) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const available = el.clientWidth - gutter;
      setScale(Math.min(1, Math.max(0.3, available / baseWidth)));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, baseWidth, gutter]);

  return scale;
}