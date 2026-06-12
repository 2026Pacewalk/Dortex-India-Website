import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { PageMeta } from '@/components/PageMeta';
import { AnimatedSection, AnimatedStagger } from '@/components/AnimatedSection';
import { PRODUCTS } from '@/data/products';
import { TESTIMONIALS } from '@/data/testimonials';
import { ArrowRight, Shield, Clock, Factory, Ruler, Star, BadgeCheck, Award, Phone, Heart, Bus, Building2, GraduationCap, Briefcase, Utensils, HomeIcon, Users } from 'lucide-react';

const METRICS = [
  { value: '500+', label: 'Projects' },
  { value: '100+', label: 'Clients' },
  { value: '6+', label: 'Products' },
  { value: '10+', label: 'Industries' },
];

const previewReviews = TESTIMONIALS.slice(0, 3);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const els = hero.querySelectorAll('.hero-anim');
    els.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(30px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 300 + i * 150);
    });
  }, []);

  return (
    <>
      <PageMeta
        title="Dortex India | Cleanroom Hardware Manufacturer in Mohali, Punjab"
        description="Leading manufacturer of aluminum coving, door seals, SS hinges, corners, locks & D-handles for cleanrooms, pharma, hospitals & labs. Trusted by 100+ clients. Pan-India delivery."
        keywords="cleanroom hardware manufacturer, aluminum coving Punjab, door seal supplier India, SS 304 hinge, GMP cleanroom accessories, pharma door hardware, hospital cleanroom supplier, Dortex India Mohali"
      />

      {/* ===== CINEMATIC HERO ===== */}
      <section ref={heroRef} className="relative h-[64vh] sm:h-[68vh] md:h-[74vh] lg:h-[80vh] overflow-hidden">
        {/* Background extends to top of page, behind header */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Dortex India manufacturing facility"
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ animation: 'heroZoom 20s ease-out forwards' }}
          />
          <style>{`@keyframes heroZoom { from { transform: scale(1.12); } to { transform: scale(1); } }`}</style>
          <div className="absolute inset-0 bg-[#0A1218]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1218]/95 via-[#0A1218]/70 to-[#0A1218]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1218] via-transparent to-[#0A1218]/50" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(15,164,181,0.04) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
          <div className="absolute top-1/3 left-[15%] w-[500px] h-[500px] bg-dortex-cyan/[0.06] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-[10%] w-[300px] h-[300px] bg-dortex-cyan/[0.03] rounded-full blur-[100px]" />
        </div>

        {/* Top gradient for seamless header transition */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none" />

        {/* Content — two-column */}
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto" style={{ padding: '0 clamp(1rem, 4vw, 2.5rem)' }}>
          <div className="flex items-center gap-8 xl:gap-12 w-full pt-4 md:pt-2">

            {/* LEFT: Text */}
            <div className="flex-1 min-w-0">
              <div className="hero-anim flex items-center gap-2 mb-4 md:mb-5">
                <span className="w-5 h-px bg-dortex-cyan/50" />
                <span className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-white/40 uppercase">Est. 2021 &middot; Mohali, Punjab</span>
              </div>

              <h1 className="hero-anim font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] text-white mb-3 md:mb-4">
                Precision<br /><span className="text-dortex-cyan">Hardware</span>
              </h1>

              <p className="hero-anim text-[14px] md:text-[16px] text-white/40 leading-[1.55] max-w-[420px] mb-5 md:mb-6 font-light">
                Learn about the craft of Architectural Hardware, which transforms any place with precision, elegance, and durability.
              </p>

              <div className="hero-anim w-10 h-px bg-gradient-to-r from-dortex-cyan/50 to-transparent mb-5 md:mb-6" />

              <div className="hero-anim flex flex-wrap items-center gap-6 md:gap-10">
                {METRICS.map((m) => (
                  <div key={m.label}>
                    <span className="block font-display text-[20px] md:text-[24px] text-white/90 font-medium leading-none">{m.value}</span>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.12em] text-white/30 mt-1">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Floating product card (desktop) */}
            <div className="hidden lg:block shrink-0">
              <div className="hero-anim relative">
                <div className="absolute -inset-6 bg-dortex-cyan/10 rounded-3xl blur-2xl" />
                <div className="relative bg-white/[0.08] backdrop-blur-md border border-white/[0.12] rounded-2xl p-6 w-[440px]">
                  <img src="/images/hero-cleanroom-handle.jpg" alt="Premium cleanroom hardware" className="rounded-xl w-full aspect-[16/10] object-cover mb-5" />
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-white text-[17px] font-semibold">Premium Handles</span>
                      <span className="block text-white/40 font-mono text-[11px] uppercase tracking-wider mt-1.5">SS 304 / SS 316</span>
                    </div>
                    <Link to="/products" className="w-12 h-12 rounded-full bg-dortex-cyan flex items-center justify-center text-white hover:bg-[#0A8A99] transition-colors shadow-[0_4px_20px_rgba(15,164,181,0.35)] shrink-0">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#F5F7F9] to-transparent z-10" />
      </section>

      {/* ===== ABOUT DORTEX ===== */}
      <section className="bg-[#F5F7F9] relative" style={{ padding: 'clamp(4rem, 10vh, 6rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <AnimatedSection className="lg:w-[50%]">
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-dortex-cyan" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">About Dortex</span>
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] text-dortex-black mb-5">
              Engineering Trust,<br />
              One <span className="text-gradient-cyan">Component</span> at a Time
            </h2>
            <p className="text-[15px] text-dortex-gray leading-relaxed mb-4">
              Established in the year 2021, at Mohali, Punjab, We &ldquo;Dortex India&rdquo; is a Proprietorship Firm, engaged as the foremost Manufacturer of Aluminum Corner, Aluminum Coving, Stainless Steel Hinge, Door Seal, and many more.
            </p>
            <p className="text-[15px] text-dortex-gray leading-relaxed mb-4">
              We direct all our activities to cater the expectations of customers by providing them with excellent quality products as per their gratification. Moreover, we follow moral business policies and crystal pure transparency in all our transactions to keep healthy relations with the customers.
            </p>
            <p className="text-[15px] text-dortex-gray leading-relaxed mb-7">
              For our accomplishment story, we are grateful to our Mr. Rajesh Saharan, whose continual backing and direction have been useful to us for attaining exponential development in the current market.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dortex-cyan border border-dortex-cyan/30 rounded-full px-6 py-3 hover:bg-dortex-cyan hover:text-white transition-all">
                Learn More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center font-mono text-[11px] uppercase tracking-wider text-white bg-gradient-to-r from-dortex-orange to-[#E08A15] rounded-full px-6 py-3 hover:shadow-lg transition-all">
                Get Quote
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:w-[50%]" delay={200}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-dortex-cyan/10" />
              <img src="/images/about-facility.jpg" alt="Manufacturing facility" className="rounded-2xl w-full aspect-[4/3] object-cover border border-dortex-border shadow-lg" />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl border border-dortex-border shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-dortex-cyan-light flex items-center justify-center">
                    <Shield size={18} className="text-dortex-cyan" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase text-dortex-gray">Certified</span>
                    <span className="block text-[13px] font-semibold text-dortex-black">ISO Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-gradient-to-b from-[#F5F7F9] to-white relative" style={{ padding: 'clamp(4rem, 10vh, 6rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-dortex-cyan" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Why Choose Us</span>
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] text-dortex-black">Built for Performance</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: 'On-time delivery', desc: 'We have established a strong presence in the industry because of the exceptional quality of the product line we provide.' },
              { icon: Clock, title: 'Quality-tested range', desc: 'Our products adhere to industry standards and are reasonably priced for every customer need.' },
              { icon: Factory, title: 'Extensive distribution', desc: 'Our hired experts devote their long workdays to producing goods in accordance with precise specifications.' },
              { icon: Ruler, title: 'Industrial experience', desc: 'Extensive industrial experience in architectural and cleanroom hardware manufacturing.' },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <AnimatedSection key={f.title} delay={i * 100}>
                  <div className="group bg-white border border-dortex-border rounded-2xl p-6 hover:border-dortex-cyan/30 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dortex-cyan-light to-[#D4F1F4] border border-dortex-cyan/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} className="text-dortex-cyan" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-dortex-black mb-2">{f.title}</h3>
                    <p className="text-[13px] text-dortex-gray leading-relaxed">{f.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="bg-white relative" style={{ padding: 'clamp(4rem, 10vh, 6rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-dortex-cyan" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Our Products</span>
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] text-dortex-black mb-3">Precision-Engineered Hardware</h2>
            <p className="text-[15px] text-dortex-gray max-w-xl mx-auto">Learn about the craft of Architectural Hardware, which transforms any place with precision, elegance, and durability.</p>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={100}>
            {PRODUCTS.map((product) => (
              <Link to={`/products/${product.slug}`} key={product.slug} className="group relative bg-white rounded-2xl border border-dortex-border overflow-hidden hover:border-dortex-cyan/30 hover:shadow-[0_12px_40px_rgba(15,164,181,0.1)] transition-all duration-500 hover:-translate-y-1">
                <div className="h-[3px] bg-gradient-to-r from-dortex-cyan to-dortex-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-[16px] font-semibold text-dortex-black group-hover:text-dortex-cyan transition-colors duration-300">{product.name}</h3>
                  <p className="mt-2 text-[13px] text-dortex-gray leading-relaxed line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-dortex-orange group-hover:gap-2 transition-all flex items-center gap-1">
                      View Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </AnimatedStagger>

          <AnimatedSection className="text-center mt-10" delay={200}>
            <Link to="/products" className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-white bg-dortex-cyan rounded-full px-8 py-3.5 hover:bg-[#0A8A99] transition-all shadow-[0_4px_20px_rgba(15,164,181,0.25)] hover:shadow-[0_8px_30px_rgba(15,164,181,0.35)]">
              View All Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== INDUSTRIES WE SERVE — Elegant Light Design ===== */}
      <section className="bg-white relative" style={{ padding: 'clamp(5rem, 12vh, 8rem) clamp(1rem, 4vw, 2.5rem)' }}>
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pattern-dots opacity-[0.35]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="mb-12">
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1] text-dortex-black mb-4">
              Industries We <span className="text-dortex-cyan">Serve</span>
            </h2>
            <p className="text-[15px] text-dortex-gray leading-relaxed max-w-[580px]">
              Dortex architectural and cleanroom hardware solutions are trusted across industries where durability, hygiene, safety, and precision matter the most.
            </p>
          </AnimatedSection>

          {/* Industry Cards — 4 columns */}
          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={80}>
            {[
              { icon: Heart, name: 'Healthcare', desc: 'Cleanroom-ready hardware for hospitals, clinics, and medical spaces.' },
              { icon: Bus, name: 'Public Transport', desc: 'Durable architectural hardware for stations, terminals, and transit spaces.' },
              { icon: Building2, name: 'Government', desc: 'Reliable hardware solutions for public and administrative buildings.' },
              { icon: GraduationCap, name: 'Education', desc: 'Strong and safe hardware for schools, colleges, and institutions.' },
              { icon: Briefcase, name: 'Corporates', desc: 'Premium finishing and durable hardware for modern office environments.' },
              { icon: Utensils, name: 'Hospitality', desc: 'Elegant and long-lasting hardware for hotels and commercial spaces.' },
              { icon: HomeIcon, name: 'Residential', desc: 'Functional and stylish hardware for modern homes and apartments.' },
              { icon: Users, name: 'Public Places', desc: 'Heavy-duty solutions for high-traffic public environments.' },
            ].map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  to="/industries"
                  key={industry.name}
                  className="group block rounded-2xl border border-dortex-border bg-dortex-light p-6 hover:border-dortex-cyan/30 hover:shadow-[0_8px_30px_rgba(15,164,181,0.08)] transition-all duration-400 hover:-translate-y-1"
                >
                  {/* Icon with colored background */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E8F8F9] to-[#D4F1F4] border border-dortex-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} strokeWidth={1.5} className="text-dortex-cyan" />
                  </div>

                  {/* Name */}
                  <h3 className="text-[15px] font-semibold text-dortex-black mb-1.5 group-hover:text-dortex-cyan transition-colors duration-200">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-dortex-gray leading-relaxed">
                    {industry.desc}
                  </p>
                </Link>
              );
            })}
          </AnimatedStagger>
        </div>
      </section>

      {/* ===== REVIEWS PREVIEW ===== */}
      <section className="bg-[#F5F7F9] relative" style={{ padding: 'clamp(4rem, 10vh, 6rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-dortex-cyan" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Customer Feedback</span>
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] text-dortex-black">Authentic testimonials from clients that depend on our products on a daily basis.</h2>
            <div className="inline-flex items-center gap-3 mt-4 bg-white rounded-full border border-dortex-border px-5 py-2 shadow-soft">
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-dortex-orange fill-dortex-orange" />)}</div>
              <span className="text-[16px] text-dortex-black font-bold">5.0</span>
              <span className="w-px h-3 bg-dortex-border" />
              <span className="font-mono text-[11px] text-dortex-gray">13 reviews</span>
            </div>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={120}>
            {previewReviews.map((t, i) => (
              <div key={i} className={`group bg-white rounded-2xl border border-dortex-border overflow-hidden hover:border-dortex-cyan/30 hover:shadow-[0_12px_40px_rgba(15,164,181,0.1)] transition-all duration-500 ${i === 1 ? 'md:-translate-y-3' : ''}`}>
                <div className="h-[3px] bg-gradient-to-r from-dortex-cyan to-dortex-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">{[...Array(t.rating)].map((_, j) => <Star key={j} size={12} className="text-dortex-orange fill-dortex-orange" />)}</div>
                    <span className="font-mono text-[10px] text-dortex-gray">{t.date}</span>
                  </div>
                  <p className="text-[14px] text-dortex-black leading-relaxed">&ldquo;{t.quote.substring(0, 140)}...&rdquo;</p>
                  <div className="mt-5 pt-4 border-t border-dortex-border flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-[12px] shrink-0 ring-2 ring-white shadow-sm" style={{ backgroundColor: t.color }}>{t.initials}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[13px] font-semibold text-dortex-black truncate">{t.name}</span>
                        <BadgeCheck size={13} className="text-dortex-cyan shrink-0" />
                      </div>
                      <span className="block font-mono text-[10px] text-dortex-gray truncate">{t.company}</span>
                      {t.badge && <span className="inline-flex items-center gap-1 mt-1 text-[9px] text-dortex-cyan bg-dortex-cyan-light px-2 py-0.5 rounded-full font-mono"><Award size={9} /> {t.badge}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedStagger>

          <AnimatedSection className="text-center mt-10" delay={200}>
            <Link to="/testimonials" className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-dortex-cyan border border-dortex-cyan/30 rounded-full px-7 py-3 hover:bg-dortex-cyan hover:text-white transition-all">
              All Reviews <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="bg-white relative" style={{ padding: 'clamp(4rem, 8vh, 6rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-5">
              <Phone size={14} className="text-dortex-cyan" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Contact Us</span>
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] text-dortex-black mb-4">
              Have inquiries concerning our <span className="text-dortex-cyan">distribution</span> or <span className="text-dortex-cyan">merchandise</span>?
            </h2>
            <p className="text-[15px] text-dortex-gray max-w-lg mx-auto mb-8">Our support staff is prepared to provide you with dependable solutions.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-dortex-orange to-[#E08A15] text-white rounded-full px-8 py-3.5 font-mono text-[12px] font-medium uppercase tracking-wider hover:shadow-[0_8px_30px_rgba(245,154,35,0.35)] hover:-translate-y-0.5 transition-all duration-300">
                Get a Free Quote <ArrowRight size={14} />
              </Link>
              <a href="tel:08047657253" className="inline-flex items-center gap-2 bg-white text-dortex-cyan border border-dortex-cyan/30 rounded-full px-6 py-3.5 font-mono text-[12px] font-medium uppercase tracking-wider hover:bg-dortex-cyan hover:text-white hover:border-dortex-cyan transition-all">
                <Phone size={14} /> Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
