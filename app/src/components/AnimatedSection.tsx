import { useInView } from '@/hooks/useInView';
import { type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const transforms: Record<string, string> = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedStagger({
  children,
  className = '',
  staggerDelay = 80,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ?
        children.map((child, i) => (
          <div
            key={i}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}ms`,
              willChange: 'opacity, transform',
            }}
          >
            {child}
          </div>
        )) : (
          <div
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
            }}
          >
            {children}
          </div>
        )
      }
    </div>
  );
}
