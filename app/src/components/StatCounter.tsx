import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StatCounterProps {
  value: string;
  label: string;
}

export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: numericPart,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            setDisplayValue(Number.isInteger(numericPart) ? Math.round(obj.val) + suffix : obj.val.toFixed(1) + suffix);
          },
        });
      },
    });

    return () => { trigger.kill(); };
  }, [value]);

  return (
    <div ref={ref}>
      <span className="block font-display text-3xl text-dortex-cyan">{displayValue}</span>
      <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-dortex-gray mt-1">{label}</span>
    </div>
  );
}
