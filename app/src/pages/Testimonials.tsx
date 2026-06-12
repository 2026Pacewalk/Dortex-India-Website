import { useState, useEffect, useCallback, useRef } from 'react';
import { PageMeta } from '@/components/PageMeta';
import { AnimatedSection, AnimatedStagger } from '@/components/AnimatedSection';
import { TESTIMONIALS, GOOGLE_RATING } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck, Award } from 'lucide-react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const featured = TESTIMONIALS[current];
  const prevIndex = (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
  const nextIndex = (current + 1) % TESTIMONIALS.length;

  const goTo = useCallback((index: number, dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 350);
  }, [isAnimating]);

  const goNext = useCallback(() => goTo((current + 1) % TESTIMONIALS.length, 'next'), [current, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, 'prev'), [current, goTo]);

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(goNext, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [goNext]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, 6000);
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? goNext() : goPrev(); resetTimer(); }
  };

  return (
    <>
      <PageMeta
        title={`Reviews (${GOOGLE_RATING.count}) | Dortex India`}
        description={`Dortex India has ${GOOGLE_RATING.count} Google reviews with a ${GOOGLE_RATING.value} star rating. Read real customer feedback about our cleanroom hardware.`}
      />

      {/* ===== HERO HEADER ===== */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0D1F2D] via-[#122B3D] to-[#0D1F2D]" style={{ padding: 'clamp(5rem, 14vh, 8rem) clamp(1rem, 4vw, 2.5rem) clamp(3rem, 8vh, 5rem)' }}>
        {/* Subtle pattern */}
        <div className="absolute inset-0 pattern-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-dortex-cyan/5 rounded-full blur-[100px]" />

        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Google Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2 mb-6">
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
            <span className="font-mono text-[10px] tracking-wider text-white/60 uppercase">Verified Reviews</span>
          </div>

          <h1 className="font-display text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1] text-white">
            Customer <span className="text-dortex-cyan">Feedback</span>
          </h1>
          <p className="mt-4 text-[14px] text-white/45 max-w-md mx-auto">
            Authentic testimonials from clients that depend on our products on a daily basis.
          </p>

          {/* Rating Pill */}
          <div className="inline-flex items-center gap-3 mt-6 bg-white/[0.05] border border-white/[0.08] rounded-full px-6 py-2.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={15} className="text-dortex-orange fill-dortex-orange" />)}
            </div>
            <span className="text-white font-bold text-lg">{GOOGLE_RATING.value.toFixed(1)}</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="font-mono text-[11px] text-white/50">{GOOGLE_RATING.count} reviews</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="font-mono text-[10px] text-white/40 uppercase">{GOOGLE_RATING.category}</span>
          </div>
        </AnimatedSection>
      </div>

      {/* ===== CREATIVE SLIDER ===== */}
      <section className="bg-dortex-light relative overflow-hidden" style={{ padding: 'clamp(3rem, 8vh, 5rem) 0' }}>
        {/* Large decorative quote */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-[0.03]">
          <Quote size={200} className="text-dortex-cyan" />
        </div>

        <div className="relative z-10" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          {/* 3D Card Carousel */}
          <div className="relative h-[420px] md:h-[380px] flex items-center justify-center perspective-[1200px]" style={{ padding: '0 clamp(1rem, 4vw, 2.5rem)' }}>
            {/* Previous Card (left, blurred, smaller) */}
            <div
              className="absolute hidden md:block left-[5%] lg:left-[10%] w-[280px] lg:w-[320px] opacity-40 scale-90 blur-[1px] cursor-pointer transition-all duration-500"
              onClick={() => { goPrev(); resetTimer(); }}
              style={{ transform: 'translateX(-20px) rotateY(15deg)', transformStyle: 'preserve-3d' }}
            >
              <ReviewCard review={TESTIMONIALS[prevIndex]} compact />
            </div>

            {/* Next Card (right, blurred, smaller) */}
            <div
              className="absolute hidden md:block right-[5%] lg:right-[10%] w-[280px] lg:w-[320px] opacity-40 scale-90 blur-[1px] cursor-pointer transition-all duration-500"
              onClick={() => { goNext(); resetTimer(); }}
              style={{ transform: 'translateX(20px) rotateY(-15deg)', transformStyle: 'preserve-3d' }}
            >
              <ReviewCard review={TESTIMONIALS[nextIndex]} compact />
            </div>

            {/* Main Featured Card */}
            <div
              className={`relative w-full max-w-[600px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isAnimating
                  ? direction === 'next'
                    ? 'opacity-0 translate-x-12 scale-95'
                    : 'opacity-0 -translate-x-12 scale-95'
                  : 'opacity-100 translate-x-0 scale-100'
              }`}
            >
              <div className="bg-white rounded-2xl border border-dortex-border shadow-[0_8px_40px_rgba(15,164,181,0.1)] overflow-hidden">
                {/* Card Header with gradient */}
                <div className="bg-gradient-to-r from-dortex-cyan-light to-white px-6 py-4 border-b border-dortex-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(featured.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-dortex-orange fill-dortex-orange" />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] text-dortex-gray ml-1">{featured.date}</span>
                  </div>
                  <Quote size={20} className="text-dortex-cyan/30" />
                </div>

                {/* Quote */}
                <div className="px-6 py-6">
                  <p className="text-[15px] md:text-[16px] text-dortex-black leading-relaxed italic">
                    &ldquo;{featured.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="px-6 pb-5 flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-[13px] shrink-0 shadow-md"
                    style={{ backgroundColor: featured.color }}
                  >
                    {featured.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-semibold text-dortex-black truncate">{featured.name}</span>
                      <BadgeCheck size={15} className="text-dortex-cyan shrink-0" />
                    </div>
                    <span className="block font-mono text-[10px] text-dortex-gray truncate">
                      {featured.role} &middot; {featured.company}
                    </span>
                  </div>
                  {featured.badge && (
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-dortex-cyan bg-dortex-cyan-light px-2.5 py-1 rounded-full font-mono shrink-0">
                      <Award size={10} /> {featured.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-4">
            {/* Prev */}
            <button
              onClick={() => { goPrev(); resetTimer(); }}
              className="w-11 h-11 rounded-full bg-white border border-dortex-border flex items-center justify-center text-dortex-gray hover:text-dortex-cyan hover:border-dortex-cyan hover:shadow-[0_4px_16px_rgba(15,164,181,0.15)] transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dot indicators with segment progress */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { goTo(i, i > current ? 'next' : 'prev'); resetTimer(); }}
                  className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden ${
                    i === current
                      ? 'w-10 bg-dortex-cyan'
                      : i === prevIndex || i === nextIndex
                      ? 'w-2 bg-dortex-border hover:bg-dortex-gray'
                      : 'w-1.5 bg-dortex-border/60 hover:bg-dortex-gray'
                  }`}
                >
                  {i === current && (
                    <div
                      ref={progressRef}
                      className="absolute inset-0 bg-dortex-orange rounded-full origin-left animate-[progress_6s_linear]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => { goNext(); resetTimer(); }}
              className="w-11 h-11 rounded-full bg-white border border-dortex-border flex items-center justify-center text-dortex-gray hover:text-dortex-cyan hover:border-dortex-cyan hover:shadow-[0_4px_16px_rgba(15,164,181,0.15)] transition-all active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-3">
            <span className="font-mono text-[11px] text-dortex-gray">
              <span className="text-dortex-cyan font-semibold">{current + 1}</span> / {TESTIMONIALS.length}
            </span>
          </div>
        </div>
      </section>

      {/* ===== ALL REVIEWS GRID ===== */}
      <section className="bg-white relative" style={{ padding: 'clamp(3rem, 8vh, 5rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] text-dortex-black">
              All <span className="text-dortex-cyan">{TESTIMONIALS.length}</span> Reviews
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={60}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="group bg-dortex-light border border-dortex-border rounded-2xl p-5 hover:border-dortex-cyan/30 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={12} className="text-dortex-orange fill-dortex-orange" />)}
                  </div>
                  <span className="font-mono text-[10px] text-dortex-gray">{t.date}</span>
                </div>
                <p className="text-[13px] text-dortex-black leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 pt-3 border-t border-dortex-border flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-semibold text-[10px] shrink-0" style={{ backgroundColor: t.color }}>
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[12px] font-medium text-dortex-black truncate block">{t.name}</span>
                    <span className="font-mono text-[9px] text-dortex-gray truncate block">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Progress bar animation keyframes - inline style */}
      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </>
  );
}

// Compact card for side views
function ReviewCard({ review, compact }: { review: typeof TESTIMONIALS[0]; compact?: boolean }) {
  return (
    <div className="bg-white rounded-2xl border border-dortex-border shadow-soft overflow-hidden">
      <div className="px-5 py-3 bg-dortex-cyan-light/40 border-b border-dortex-border flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(review.rating)].map((_, i) => <Star key={i} size={11} className="text-dortex-orange fill-dortex-orange" />)}
        </div>
        <span className="font-mono text-[9px] text-dortex-gray">{review.date}</span>
      </div>
      <div className={`px-5 ${compact ? 'py-3' : 'py-4'}`}>
        <p className={`text-dortex-black leading-relaxed ${compact ? 'text-[12px] line-clamp-4' : 'text-[14px]'}`}>
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>
      <div className="px-5 pb-4 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-[10px] shrink-0" style={{ backgroundColor: review.color }}>
          {review.initials}
        </div>
        <div className="min-w-0">
          <span className="text-[12px] font-medium text-dortex-black truncate block">{review.name}</span>
          <span className="font-mono text-[9px] text-dortex-gray truncate block">{review.company}</span>
        </div>
      </div>
    </div>
  );
}
