import { useState, useEffect, useRef, useCallback } from 'react';
import { Phone, MessageCircle, Navigation, X } from 'lucide-react';

const MAPS_URL = 'https://maps.app.goo.gl/URVEEgBUTNxzaeKn8';
const PHONE = '08047657253';

const ACTIONS = [
  {
    label: 'Directions',
    href: MAPS_URL,
    external: true,
    icon: Navigation,
    colors: 'bg-white text-dortex-cyan border-dortex-border',
    shadow: 'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
  },
  {
    label: 'Call',
    href: `tel:${PHONE}`,
    external: false,
    icon: Phone,
    colors: 'bg-dortex-cyan text-white border-transparent',
    shadow: 'shadow-[0_4px_16px_rgba(15,164,181,0.35)]',
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/91${PHONE}`,
    external: true,
    icon: MessageCircle,
    colors: 'bg-[#25D366] text-white border-transparent',
    shadow: 'shadow-[0_4px_16px_rgba(37,211,102,0.35)]',
  },
];

export function FloatingButtons() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Delayed mount for entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Close on outside click — using mousedown for faster response
  useEffect(() => {
    if (!open) return;
    const handleDown = (e: MouseEvent | TouchEvent) => {
      const target = 'touches' in e ? e.touches[0]?.target : e.target;
      if (!target) return;
      const el = target as Node;
      if (containerRef.current && !containerRef.current.contains(el)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('touchstart', handleDown);
    return () => {
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('touchstart', handleDown);
    };
  }, [open]);

  // Close on scroll
  useEffect(() => {
    if (!open) return;
    const handleScroll = () => setOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleActionClick = useCallback(() => {
    // Small delay so the tap visual feedback shows before closing
    setTimeout(() => setOpen(false), 100);
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:hidden select-none"
      style={{ touchAction: 'manipulation' }}
    >
      {/* Action Buttons */}
      {ACTIONS.map((action) => {
        const Icon = action.icon;
        return (
          <div
            key={action.label}
            className={`flex items-center gap-3 transition-all duration-200 ease-out ${
              open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
            }`}
          >
            {/* Label — also clickable */}
            <a
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
              className="bg-dortex-dark/90 text-white text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg whitespace-nowrap active:scale-95 transition-transform"
              onClick={handleActionClick}
            >
              {action.label}
            </a>
            {/* Icon button — large 52px touch target */}
            <a
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
              className={`w-[52px] h-[52px] rounded-full flex items-center justify-center ${action.colors} border ${action.shadow} active:scale-90 transition-transform`}
              onClick={handleActionClick}
              aria-label={action.label}
            >
              <Icon size={21} strokeWidth={2.5} />
            </a>
          </div>
        );
      })}

      {/* Main FAB Toggle — large 58px touch target */}
      <button
        onClick={toggleOpen}
        className={`w-[58px] h-[58px] rounded-full flex items-center justify-center shadow-xl transition-all duration-200 active:scale-90 ${
          open
            ? 'bg-dortex-dark text-white rotate-90'
            : 'bg-gradient-to-br from-dortex-cyan to-[#0A8A99] text-white'
        }`}
        style={{ touchAction: 'manipulation' }}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <X size={24} /> : <MessageCircle size={26} strokeWidth={2} />}
      </button>
    </div>
  );
}
