import { Link } from 'react-router';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Factory } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const PRODUCT_LINKS = [
  { name: 'Aluminum Coving', slug: 'aluminum-coving' },
  { name: 'Door Seals', slug: 'door-seal' },
  { name: 'Stainless Steel Hinges', slug: 'stainless-steel-hinge' },
  { name: 'Aluminum Corners', slug: 'aluminum-corner' },
  { name: 'Door Locks', slug: 'door-lock' },
  { name: 'D-Type Handles', slug: 'd-type-handle' },
];

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const INDUSTRY_LINKS = [
  'Healthcare',
  'Pharmaceutical',
  'Laboratories',
  'Hospitality',
  'Corporate Offices',
  'Government Projects',
];

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ===== INDUSTRIAL GRADIENT BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1620] via-[#0D1F2D] to-[#0A1E24]" />
      
      {/* Animated glow effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-dortex-cyan/8 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[250px] bg-dortex-cyan/5 rounded-full blur-[100px] opacity-40" />
      
      {/* Industrial pattern overlays */}
      <div className="absolute inset-0 pattern-grid opacity-[0.04]" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(15,164,181,0.04) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dortex-cyan/30 to-transparent" />

      {/* ===== MAIN FOOTER CONTENT ===== */}
      <div className="relative z-10">
        {/* Upper CTA Band */}
        <div className="border-b border-white/[0.04]" style={{ padding: 'clamp(2rem, 5vh, 3rem) clamp(1rem, 4vw, 2.5rem)' }}>
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 md:p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dortex-cyan/20 to-dortex-cyan/5 border border-dortex-cyan/15 flex items-center justify-center shrink-0">
                    <Factory size={22} className="text-dortex-cyan" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white">Need Custom Hardware?</h3>
                    <p className="text-[13px] text-white/40 mt-0.5">Get a free quote within 24 hours. Pan-India delivery.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 w-full md:w-auto">
                  <a
                    href="https://wa.me/918047657253"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 text-[#25D366] border border-[#25D366]/25 rounded-full px-5 py-2.5 font-heading text-[11px] uppercase tracking-wider hover:bg-[#25D366] hover:text-white transition-all"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <Link
                    to="/contact"
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-dortex-cyan to-[#0A8A99] rounded-full px-5 py-2.5 font-heading text-[11px] uppercase tracking-wider hover:shadow-[0_4px_20px_rgba(15,164,181,0.3)] hover:scale-[1.03] active:scale-[0.97] transition-all"
                  >
                    Get Quote <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div style={{ padding: 'clamp(2.5rem, 6vh, 4rem) clamp(1rem, 4vw, 2.5rem) clamp(2rem, 4vh, 3rem)' }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
            
            {/* Brand Column - spans 4 */}
            <AnimatedSection className="lg:col-span-4">
              <Link to="/" className="inline-block group">
                <div className="relative">
                  <div className="absolute -inset-3 bg-dortex-cyan/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src="/images/dortex-logo-white.png"
                    alt="Dortex India"
                    className="h-9 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity relative"
                  />
                </div>
              </Link>
              <p className="mt-4 text-[13px] text-white/45 leading-relaxed max-w-[280px]">
                Premium architectural and cleanroom hardware manufacturer. Engineering precision components for critical environments since 2021.
              </p>
              <p className="mt-3 font-heading text-[10px] tracking-[0.1em] text-dortex-cyan/40 uppercase">
                Open Up New Horizons
              </p>

              {/* Contact Info */}
              <div className="mt-5 space-y-2.5">
                <a href="tel:08047657253" className="group/link flex items-center gap-2.5 text-[13px] text-white/45 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover/link:border-dortex-cyan/30 transition-colors">
                    <Phone size={12} className="text-dortex-cyan/60" />
                  </span>
                  0804 7657 253
                </a>
                <a href="mailto:sv700lv@gmail.com" className="group/link flex items-center gap-2.5 text-[13px] text-white/45 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover/link:border-dortex-cyan/30 transition-colors">
                    <Mail size={12} className="text-dortex-cyan/60" />
                  </span>
                  sv700lv@gmail.com
                </a>
                <span className="flex items-start gap-2.5 text-[13px] text-white/45">
                  <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={12} className="text-dortex-cyan/60" />
                  </span>
                  Near Kohli Tractor Agency, Dera Bassi, Mohali, Punjab - 140413
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 mt-5">
                {[
                  { name: 'Instagram', href: 'https://www.instagram.com/dortex_india/', Icon: InstagramIcon },
                  { name: 'Facebook', href: 'https://www.facebook.com/dortexindia', Icon: FacebookIcon },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-dortex-cyan hover:bg-dortex-cyan/10 hover:border-dortex-cyan/25 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.Icon size={16} />
                  </a>
                ))}
              </div>

            </AnimatedSection>

            {/* Products Column - spans 2 */}
            <AnimatedSection className="lg:col-span-2 lg:col-start-6" delay={100}>
              <h4 className="font-heading text-[10px] uppercase tracking-[0.14em] text-dortex-cyan/60 mb-4 flex items-center gap-2">
                <span className="w-3 h-px bg-dortex-cyan/40" /> Products
              </h4>
              <ul className="space-y-2.5">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.slug}>
                    <Link
                      to={`/products/${link.slug}`}
                      className="group flex items-center gap-2 text-[13px] text-white/45 hover:text-dortex-cyan transition-colors duration-200"
                    >
                      <ArrowRight size={10} className="text-white/15 group-hover:text-dortex-cyan/60 group-hover:translate-x-0.5 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Company Column - spans 2 */}
            <AnimatedSection className="lg:col-span-2" delay={200}>
              <h4 className="font-heading text-[10px] uppercase tracking-[0.14em] text-dortex-cyan/60 mb-4 flex items-center gap-2">
                <span className="w-3 h-px bg-dortex-cyan/40" /> Company
              </h4>
              <ul className="space-y-2.5">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-[13px] text-white/45 hover:text-dortex-cyan transition-colors duration-200"
                    >
                      <ArrowRight size={10} className="text-white/15 group-hover:text-dortex-cyan/60 group-hover:translate-x-0.5 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Industries + Mini Map Column - spans 4 */}
            <AnimatedSection className="lg:col-span-3" delay={300}>
              <h4 className="font-heading text-[10px] uppercase tracking-[0.14em] text-dortex-cyan/60 mb-4 flex items-center gap-2">
                <span className="w-3 h-px bg-dortex-cyan/40" /> Industries
              </h4>
              <div className="flex flex-wrap gap-2 mb-5">
                {INDUSTRY_LINKS.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center text-[11px] text-white/40 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 hover:text-dortex-cyan hover:border-dortex-cyan/20 transition-all cursor-default"
                  >
                    {industry}
                  </span>
                ))}
              </div>

              {/* Mini Map */}
              <div className="rounded-xl border border-white/[0.06] overflow-hidden bg-white/[0.02] group/map hover:border-dortex-cyan/20 transition-all">
                <div className="h-[100px] relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.7!2d76.855!3d30.558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMzJzI4LjgiTiA3NsKwNTEnMTguMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(60%) contrast(1.1) brightness(0.7)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dortex India Location"
                  />
                  <a
                    href="https://maps.app.goo.gl/URVEEgBUTNxzaeKn8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-dortex-dark/40 opacity-0 group-hover/map:opacity-100 transition-opacity"
                  >
                    <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-wider text-white bg-dortex-cyan rounded-full px-4 py-2">
                      <MapPin size={12} /> Open Map
                    </span>
                  </a>
                </div>
                <div className="px-3 py-2 flex items-center justify-between">
                  <span className="font-heading text-[9px] text-white/30 uppercase tracking-wider">Dera Bassi, Mohali</span>
                  <a
                    href="https://maps.app.goo.gl/URVEEgBUTNxzaeKn8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-dortex-cyan/60 hover:text-dortex-cyan transition-colors"
                  >
                    Directions &rarr;
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="relative border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto py-4 flex flex-col sm:flex-row justify-between items-center gap-2" style={{ padding: '1rem clamp(1rem, 4vw, 2.5rem)' }}>
            <span className="font-heading text-[11px] text-white/50 tracking-wider text-center sm:text-left">
              <span className="block sm:inline">&copy; 2026 Dortex India.</span>
              <span className="block sm:inline"> Crafted by{' '}
                <a href="https://pacewalk.com" target="_blank" rel="noopener noreferrer" className="text-dortex-cyan/70 hover:text-dortex-cyan transition-colors">
                  Pacewalk
                </a>
              </span>
            </span>
            <div className="flex gap-4 font-heading text-[11px] text-white/40">
              <Link to="/sitemap" className="hover:text-white/80 transition-colors">Sitemap</Link>
              <span className="text-white/20">|</span>
              <span className="hover:text-white/60 transition-colors cursor-pointer">Privacy</span>
              <span className="text-white/20">|</span>
              <span className="hover:text-white/60 transition-colors cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
