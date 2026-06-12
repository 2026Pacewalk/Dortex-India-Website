import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const ref = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.8 });

  return (
    <div
      ref={ref}
      className={`${align === 'center' ? 'text-center' : 'text-left'} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
    >
      <span
        className={`inline-block font-mono text-[11px] font-normal uppercase tracking-[0.18em] mb-3 ${
          light ? 'text-white/70' : 'text-dortex-cyan'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] ${
          light ? 'text-white' : 'text-dortex-black'
        }`}
        dangerouslySetInnerHTML={{ __html: headline.replace(/\n/g, '<br/>') }}
      />
      {subheadline && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? 'text-white/70' : 'text-dortex-gray'
          }`}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
