import { PageMeta } from '@/components/PageMeta';
import { AnimatedSection, AnimatedStagger } from '@/components/AnimatedSection';
import { Heart, Bus, Building2, GraduationCap, Briefcase, Utensils, Home, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const INDUSTRIES = [
  { icon: Heart, name: 'Healthcare', desc: 'Cleanroom-ready hardware for hospitals, clinics, and medical spaces.' },
  { icon: Bus, name: 'Public Transport', desc: 'Durable hardware for stations, terminals, and transit spaces.' },
  { icon: Building2, name: 'Government', desc: 'Reliable hardware solutions for public and administrative buildings.' },
  { icon: GraduationCap, name: 'Education', desc: 'Strong and safe hardware for schools, colleges, and institutions.' },
  { icon: Briefcase, name: 'Corporates', desc: 'Premium finishing and durable hardware for modern office environments.' },
  { icon: Utensils, name: 'Hospitality', desc: 'Elegant and long-lasting hardware for hotels and commercial spaces.' },
  { icon: Home, name: 'Residential', desc: 'Functional and stylish hardware for modern homes and apartments.' },
  { icon: Users, name: 'Public Places', desc: 'Heavy-duty solutions for high-traffic public environments.' },
];

const TRUST_POINTS = [
  'GMP & cleanroom compliant materials',
  'Corrosion-resistant SS 304 / 316 grade',
  'Fire-rated and safety-certified options',
  'Custom sizing for every project type',
];

export default function Industries() {
  return (
    <>
      <PageMeta title="Industries We Serve | Dortex India" description="Dortex hardware solutions are designed for high-performance spaces where durability, safety, hygiene, and long-term reliability matter." />

      {/* Page Header */}
      <div className="relative overflow-hidden bg-white" style={{ padding: 'clamp(5rem, 12vh, 7rem) clamp(1rem, 4vw, 2.5rem) clamp(2rem, 5vh, 3rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-4">
              <Building2 size={14} className="text-dortex-cyan" />
              <span className="font-heading text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Industries</span>
            </div>
            <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] text-dortex-black">
              Industries We <span className="text-dortex-cyan">Serve</span>
            </h1>
            <p className="mt-3 text-[15px] text-dortex-gray leading-relaxed max-w-[560px]">
              Dortex hardware solutions are designed for high-performance spaces where durability, safety, hygiene, and long-term reliability matter.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content: Left intro + Right cards */}
      <section className="bg-dortex-light relative" style={{ padding: 'clamp(2rem, 5vh, 3rem) clamp(1rem, 4vw, 2.5rem) clamp(4rem, 10vh, 6rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

            {/* LEFT: Intro + Trust Points */}
            <AnimatedSection className="lg:w-[30%] lg:shrink-0">
              <div className="lg:sticky lg:top-32">
                <h2 className="font-display text-[clamp(1.3rem,2.5vw,1.6rem)] text-dortex-black leading-tight mb-3">
                  Trusted Across <span className="text-dortex-cyan">Sectors</span>
                </h2>
                <p className="text-[14px] text-dortex-gray leading-relaxed mb-6">
                  From healthcare cleanrooms to high-traffic public infrastructure, our hardware is engineered to perform where precision and reliability are non-negotiable.
                </p>

                {/* Trust Points */}
                <div className="space-y-3 mb-8">
                  {TRUST_POINTS.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-dortex-cyan mt-0.5 shrink-0" />
                      <span className="text-[13px] text-dortex-black">{point}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link to="/contact" className="group inline-flex items-center gap-2 font-heading text-[11px] uppercase tracking-wider text-white bg-gradient-to-r from-dortex-orange to-[#E08A15] rounded-full px-6 py-3 hover:shadow-[0_6px_24px_rgba(245,154,35,0.3)] transition-all">
                  Discuss Your Project <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>

            {/* RIGHT: Industry Cards Grid */}
            <div className="lg:w-[70%]">
              <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={80}>
                {INDUSTRIES.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <div
                      key={industry.name}
                      className="group bg-white rounded-2xl border border-dortex-border p-5 hover:border-dortex-cyan/30 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-400"
                    >
                      {/* Top: icon + orange line */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dortex-cyan-light to-[#D4F1F4] border border-dortex-cyan/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-dortex-cyan/40 transition-all duration-300">
                          <Icon size={18} strokeWidth={1.5} className="text-dortex-cyan" />
                        </div>
                        <div className="flex-1">
                          <div className="w-5 h-[2px] bg-dortex-orange rounded-full mb-1 group-hover:w-8 transition-all duration-300" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-[15px] font-semibold text-dortex-black mb-1.5 group-hover:text-dortex-cyan transition-colors duration-200">
                        {industry.name}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] text-dortex-gray leading-relaxed">
                        {industry.desc}
                      </p>
                    </div>
                  );
                })}
              </AnimatedStagger>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-white border-t border-dortex-border" style={{ padding: 'clamp(2.5rem, 6vh, 3.5rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-[clamp(1.1rem,2vw,1.4rem)] text-dortex-black">Need hardware for a specific industry?</h3>
            <p className="text-[13px] text-dortex-gray mt-1">Our team will help you select the right products for your project requirements.</p>
          </div>
          <Link to="/contact" className="group inline-flex items-center gap-2 font-heading text-[11px] uppercase tracking-wider text-white bg-dortex-cyan rounded-full px-6 py-3 hover:bg-[#0A8A99] transition-all shadow-[0_4px_16px_rgba(15,164,181,0.2)] whitespace-nowrap">
            Get in Touch <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
