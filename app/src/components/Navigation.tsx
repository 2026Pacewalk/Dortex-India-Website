import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone, MessageCircle, Navigation as NavIcon, ArrowRight, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import gsap from 'gsap';

const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shrink, setShrink] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setShrink(window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const items = document.querySelectorAll('.mobile-nav-item');
      const extras = document.querySelectorAll('.mobile-nav-extra');
      gsap.fromTo(items,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.03, duration: 0.28, ease: 'power3.out', delay: 0.08 }
      );
      gsap.fromTo(extras,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.3, ease: 'power3.out', delay: 0.25 }
      );
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* ===== SPACER ===== */}
      <div className={`shrink-0 transition-all duration-300 ${shrink ? 'h-14 md:h-[68px] lg:h-[128px]' : 'h-16 md:h-[76px] lg:h-[142px]'}`} />

      {/* ===== TOP BAR ===== */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-[60] h-[40px] bg-gradient-to-r from-[#0A8A99] via-[#0FA4B5] to-[#0A8A99] shadow-[0_2px_12px_rgba(15,164,181,0.2)]">
        <div className="absolute inset-0 bg-gradient-to-r from-dortex-cyan/10 via-transparent to-dortex-cyan/10" />
        <div className="relative z-10 flex items-center justify-between h-full max-w-7xl mx-auto" style={{ padding: '0 clamp(1rem, 4vw, 2rem)' }}>
          {/* LEFT */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-white/75 uppercase">
              <Clock size={11} strokeWidth={2} />
              Mon - Sat  9AM - 6PM
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-white/75">
              <MapPin size={11} strokeWidth={2} />
              Mohali, Punjab
            </span>
          </div>
          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-wider text-white/60 uppercase">GST  03FSDPS1457K1ZI</span>
            <span className="w-px h-3 bg-white/20" />
            <a href="https://www.instagram.com/dortex_india/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all hover:scale-110" aria-label="Instagram">
              <Instagram size={13} strokeWidth={2} />
            </a>
            <a href="https://www.facebook.com/dortexindia" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all hover:scale-110" aria-label="Facebook">
              <Facebook size={13} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header
        className={`fixed top-0 lg:top-[40px] left-0 right-0 z-50 transition-all duration-300 ${
          shrink ? 'lg:py-0' : 'lg:py-0'
        }`}
      >
        <div className="absolute inset-0">
          <div className={`absolute inset-0 transition-all duration-400 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
              : 'bg-white'
          }`} />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-dortex-cyan/40 to-transparent lg:hidden" />
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-dortex-cyan via-dortex-cyan to-transparent" />
          <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-300 ${
            scrolled ? 'bg-dortex-border' : 'bg-dortex-border/50'
          }`} />
        </div>

        <nav className="relative z-10 flex items-center justify-between h-16 md:h-[68px] lg:h-[82px] max-w-7xl mx-auto transition-all duration-300" style={{ padding: '0 clamp(1rem, 4vw, 2rem)' }}>

          {/* ===== LOGO ===== */}
          <Link to="/" className="flex items-center shrink-0 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-dortex-cyan/8 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/images/dortex-logo.png"
                alt="Dortex India"
                className={`relative object-contain transition-all duration-300 ${
                  shrink ? 'h-8 md:h-9 lg:h-10' : 'h-9 md:h-10 lg:h-11'
                } w-auto`}
              />
            </div>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`relative font-mono text-[11px] uppercase tracking-[0.08em] px-4 py-2.5 rounded-lg transition-all duration-250 group/nav ${
                  isActive(link.href)
                    ? 'text-dortex-cyan'
                    : 'text-dortex-gray hover:text-dortex-black'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-dortex-cyan to-dortex-orange scale-x-100'
                    : 'bg-dortex-cyan/60 scale-x-0 group-hover/nav:scale-x-100'
                }`} />
                {isActive(link.href) && (
                  <span className="absolute top-0.5 right-1.5 w-1.5 h-1.5 bg-dortex-orange rounded-full shadow-[0_0_6px_rgba(245,154,35,0.6)]" />
                )}
              </Link>
            ))}
          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="flex items-center gap-3">
            <a
              href="tel:08047657253"
              className="hidden lg:flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dortex-gray border border-dortex-border rounded-full px-5 py-2.5 transition-all duration-300 hover:border-dortex-cyan/40 hover:text-dortex-cyan hover:bg-dortex-cyan/[0.06]"
            >
              <Phone size={12} strokeWidth={2.5} />
              Call
            </a>
            {/* Get Brochure — downloads PDF */}
            <a
              href="/brochure/dortex-brochure.pdf"
              download
              className="hidden lg:flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-dortex-cyan border border-dortex-cyan/30 rounded-full px-5 py-2.5 hover:bg-dortex-cyan hover:text-white hover:border-dortex-cyan transition-all duration-300"
            >
              Get Brochure
            </a>

            <Link
              to="/contact"
              className="hidden md:flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-white rounded-full px-6 py-2.5 bg-gradient-to-r from-dortex-orange to-[#E08A15] shadow-[0_2px_12px_rgba(245,154,35,0.2),0_0_1px_rgba(245,154,35,0.3)] hover:shadow-[0_6px_24px_rgba(245,154,35,0.35),0_0_1px_rgba(245,154,35,0.4)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.97] transition-all duration-300"
            >
              Get Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative p-2.5 text-dortex-black rounded-xl transition-all duration-200 hover:bg-dortex-light active:bg-dortex-light/80 active:scale-95"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-250 ${mobileOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-[#0A1218]/80 backdrop-blur-md transition-opacity duration-250 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-full max-w-[400px] bg-gradient-to-b from-[#0D1F2D] via-[#0D1F2D] to-[#0A1620] shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between h-16 px-6 border-b border-white/[0.06] shrink-0">
            <img src="/images/dortex-logo.png" alt="Dortex India" className="h-8 w-auto object-contain" />
            <button onClick={() => setMobileOpen(false)} className="p-2.5 rounded-xl hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors text-white/60">
              <X size={22} />
            </button>
          </div>

          <div className="shrink-0 flex items-center gap-4 px-6 py-3 border-b border-white/[0.04] bg-white/[0.02]">
            <a href="tel:08047657253" className="flex items-center gap-1.5 font-mono text-[10px] text-white/50">
              <Phone size={10} /> 0804 7657 253
            </a>
            <span className="w-px h-3 bg-white/10" />
            <span className="font-mono text-[10px] text-white/40 uppercase">GST 03FSDPS1457K1ZI</span>
          </div>

          <div className="flex-1 overflow-y-auto py-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)}
                className={`mobile-nav-item flex items-center justify-between mx-4 mb-0.5 px-5 py-3.5 rounded-xl transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-dortex-cyan bg-dortex-cyan/[0.07] border border-dortex-cyan/12'
                    : 'text-white/55 hover:text-white hover:bg-white/[0.03] border border-transparent'
                }`}>
                <span className="font-mono text-[13px] uppercase tracking-[0.07em]">{link.label}</span>
                {isActive(link.href) ? <span className="w-1.5 h-1.5 bg-dortex-orange rounded-full shadow-[0_0_4px_rgba(245,154,35,0.5)]" /> : <ArrowRight size={14} className="text-white/12" />}
              </Link>
            ))}
          </div>

          <div className="shrink-0 p-5 border-t border-white/[0.06] bg-[#0A1620]/60 space-y-3">
            <div className="mobile-nav-extra flex items-center gap-2.5">
              <a href="https://wa.me/918047657253" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#25D366] border border-[#25D366]/20 rounded-full py-3 hover:bg-[#25D366] hover:text-white transition-all active:scale-[0.97]">
                <MessageCircle size={15} /> WhatsApp
              </a>
              <a href="tel:08047657253" className="flex-1 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dortex-cyan border border-dortex-cyan/20 rounded-full py-3 hover:bg-dortex-cyan hover:text-white transition-all active:scale-[0.97]">
                <Phone size={15} /> Call Now
              </a>
            </div>
            <a
              href="/brochure/dortex-brochure.pdf"
              download
              onClick={() => setMobileOpen(false)}
              className="mobile-nav-extra flex items-center justify-center gap-2 w-full font-mono text-[12px] font-medium uppercase tracking-wider text-dortex-cyan border border-dortex-cyan/30 rounded-full py-3 hover:bg-dortex-cyan hover:text-white transition-all"
            >
              Get Brochure
            </a>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="mobile-nav-extra flex items-center justify-center gap-2 w-full font-mono text-[12px] font-medium uppercase tracking-wider text-white bg-gradient-to-r from-dortex-orange to-[#E08A15] rounded-full py-3.5 shadow-[0_4px_20px_rgba(245,154,35,0.25)] active:scale-[0.97] transition-all">
              Get Quote <ArrowRight size={14} />
            </Link>
            <div className="mobile-nav-extra flex items-center justify-center gap-3 pt-1">
              <span className="font-mono text-[9px] text-white/25 uppercase tracking-wider">Follow</span>
              <a href="https://www.instagram.com/dortex_india/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-dortex-cyan hover:border-dortex-cyan/25 transition-all" aria-label="Instagram">
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a href="https://www.facebook.com/dortexindia" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-dortex-cyan hover:border-dortex-cyan/25 transition-all" aria-label="Facebook">
                <Facebook size={15} strokeWidth={1.5} />
              </a>
              <a href="https://maps.app.goo.gl/URVEEgBUTNxzaeKn8" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-dortex-cyan hover:border-dortex-cyan/25 transition-all" aria-label="Get Directions">
                <NavIcon size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
