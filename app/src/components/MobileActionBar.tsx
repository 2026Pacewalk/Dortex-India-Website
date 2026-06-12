import { useEffect, useState, useRef } from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router';
import gsap from 'gsap';

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      if (barRef.current) {
        gsap.fromTo(barRef.current, { y: '100%' }, { y: 0, duration: 0.5, ease: 'power3.out' });
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={barRef}
      className="fixed bottom-0 left-0 right-0 z-50 h-[52px] bg-white/98 backdrop-blur-xl border-t border-dortex-border shadow-[0_-2px_12px_rgba(0,0,0,0.06)] md:hidden"
      style={{ transform: 'translateY(100%)' }}
    >
      <div className="flex h-full">
        <a href="tel:08047657253" className="flex-1 flex flex-col items-center justify-center gap-0.5 active:bg-dortex-cyan-light transition-colors">
          <Phone size={17} className="text-dortex-cyan" strokeWidth={2} />
          <span className="font-mono text-[9px] tracking-wider text-dortex-gray">CALL</span>
        </a>
        <a href="https://wa.me/918047657253" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-0.5 active:bg-green-50 transition-colors">
          <MessageCircle size={17} className="text-[#25D366]" strokeWidth={2} />
          <span className="font-mono text-[9px] tracking-wider text-dortex-gray">WHATSAPP</span>
        </a>
        <Link to="/contact" className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-dortex-orange-light/50 active:bg-dortex-orange/10 transition-colors">
          <FileText size={17} className="text-dortex-orange" strokeWidth={2} />
          <span className="font-mono text-[9px] tracking-wider text-dortex-orange font-medium">QUOTE</span>
        </Link>
      </div>
    </div>
  );
}
