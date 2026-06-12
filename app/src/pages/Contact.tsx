import { useState } from 'react';
import { PageMeta } from '@/components/PageMeta';
import { AnimatedSection, AnimatedStagger } from '@/components/AnimatedSection';
import { Phone, Mail, MapPin, MessageCircle, Send, Navigation, ExternalLink, CalendarDays } from 'lucide-react';

const MAPS_URL = 'https://maps.app.goo.gl/URVEEgBUTNxzaeKn8';
const PHONE = '08047657253';
const EMAIL = 'sv700lv@gmail.com';

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://www.instagram.com/dortex_india/', label: '@dortex_india', color: '#E4405F', bgLight: '#FDEEF1' },
  { name: 'Facebook', href: 'https://www.facebook.com/dortexindia', label: 'Dortex India', color: '#1877F2', bgLight: '#E8F1FE' },
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass = 'w-full bg-white border border-dortex-border rounded-xl px-4 py-3 text-sm text-dortex-black placeholder:text-dortex-gray/50 focus:border-dortex-cyan focus:outline-none focus:ring-[3px] focus:ring-[rgba(15,164,181,0.08)] transition-all hover:border-dortex-cyan/30';

  return (
    <>
      <PageMeta
        title="Contact Dortex India | Cleanroom Hardware Inquiries"
        description="Get a quote for cleanroom hardware: aluminum coving, door seals, hinges, locks & handles. Call 0804 7657 253 or visit Dera Bassi, Mohali, Punjab. Reply within 24 hours."
        keywords="contact Dortex India, cleanroom hardware quote, hardware manufacturer Mohali, Dera Bassi Punjab"
      />

      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-dortex-light to-[#E6F4F6]" style={{ padding: 'clamp(5rem, 12vh, 7rem) clamp(1rem, 4vw, 2.5rem) clamp(2rem, 5vh, 3.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-5">
              <Send size={14} className="text-dortex-cyan" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Contact Us</span>
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1] text-dortex-black">
              Have inquiries concerning our <span className="text-gradient-cyan">distribution</span> or <span className="text-gradient-cyan">merchandise</span>?
            </h1>
            <p className="mt-4 text-[15px] text-dortex-gray leading-relaxed max-w-xl">
              Our support staff is prepared to provide you with dependable solutions.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="bg-white relative" style={{ padding: 'clamp(1.5rem, 3vh, 2rem) clamp(1rem, 4vw, 2.5rem) clamp(1.5rem, 3vh, 2rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" staggerDelay={80}>
            <a href={`tel:${PHONE}`} className="group flex items-center gap-3.5 bg-dortex-light border border-dortex-border rounded-2xl p-4 hover:border-dortex-cyan/40 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-500">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-dortex-cyan-light to-[#D4F1F4] border border-dortex-cyan/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone size={18} className="text-dortex-cyan" />
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-dortex-gray">Phone</span>
                <span className="block text-[14px] text-dortex-black font-medium mt-0.5">{PHONE}</span>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="group flex items-center gap-3.5 bg-dortex-light border border-dortex-border rounded-2xl p-4 hover:border-dortex-cyan/40 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-500">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-dortex-cyan-light to-[#D4F1F4] border border-dortex-cyan/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail size={18} className="text-dortex-cyan" />
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-dortex-gray">Email</span>
                <span className="block text-[14px] text-dortex-black font-medium mt-0.5 break-all">{EMAIL}</span>
              </div>
            </a>

            <div className="flex items-start gap-3.5 bg-dortex-light border border-dortex-border rounded-2xl p-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-dortex-cyan-light to-[#D4F1F4] border border-dortex-cyan/15 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-dortex-cyan" />
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-dortex-gray">Location</span>
                <span className="block text-[13px] text-dortex-black mt-0.5 leading-relaxed">
                  Near Kohli Tractor Agency, Saidpura, Dera Bassi, Mohali - 140413, Punjab, India
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-dortex-light border border-dortex-border rounded-2xl p-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-dortex-orange-light to-[#FEF3E2] border border-dortex-orange/15 flex items-center justify-center flex-shrink-0">
                <CalendarDays size={18} className="text-dortex-orange" />
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-dortex-gray">Business Hours</span>
                <span className="block text-[13px] text-dortex-black mt-0.5">Monday - Saturday</span>
                <span className="block text-[13px] text-dortex-cyan font-medium">9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </AnimatedStagger>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="bg-dortex-light border-y border-dortex-border" style={{ padding: 'clamp(1.5rem, 3vh, 2rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-wider text-dortex-gray">Follow Dortex India</span>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border px-5 py-2.5 transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
                style={{
                  borderColor: `${social.color}30`,
                  backgroundColor: social.bgLight,
                  color: social.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.color;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = social.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = social.bgLight;
                  e.currentTarget.style.color = social.color;
                  e.currentTarget.style.borderColor = `${social.color}30`;
                }}
              >
                {social.name === 'Instagram' ? <InstagramIcon size={16} /> : <FacebookIcon size={16} />}
                <span className="font-mono text-[11px] font-medium tracking-wider">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="bg-white relative" style={{ padding: 'clamp(2rem, 5vh, 3.5rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Left: Map + Contact Info */}
            <AnimatedSection className="lg:w-[42%]">
              <div className="rounded-2xl border border-dortex-border overflow-hidden bg-dortex-light">
                <div className="h-[260px] md:h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.7!2d76.855!3d30.558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMzJzI4LjgiTiA3NsKwNTEnMTguMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(30%) contrast(1.02)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dortex India - Near Kohli Tractor Agency, Dera Bassi, Mohali"
                  />
                </div>
                <div className="p-4 bg-white border-t border-dortex-border">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1 inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-white bg-dortex-cyan rounded-full px-4 py-2.5 hover:bg-[#0A8A99] transition-all"
                    >
                      <Navigation size={14} /> Get Directions
                    </a>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1 inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dortex-cyan border border-dortex-cyan/40 rounded-full px-4 py-2.5 hover:bg-dortex-cyan hover:text-white transition-all"
                    >
                      <ExternalLink size={14} /> Open in Maps
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 mt-4">
                <a
                  href={`https://wa.me/91${PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-full px-5 py-3 font-mono text-[12px] font-medium hover:bg-[#1DA851] transition-all hover:shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="group flex-1 inline-flex items-center justify-center gap-2 bg-dortex-orange text-white rounded-full px-5 py-3 font-mono text-[12px] font-medium hover:bg-dortex-orange-dark transition-all hover:shadow-[0_4px_16px_rgba(245,154,35,0.3)]"
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </AnimatedSection>

            {/* Right: Inquiry Form */}
            <AnimatedSection className="lg:w-[58%]" delay={150}>
              <div className="bg-dortex-light rounded-2xl border border-dortex-border p-6 md:p-8">
                <h2 className="text-lg font-semibold text-dortex-black flex items-center gap-2 mb-1">
                  <Send size={18} className="text-dortex-cyan" /> Contact Us
                </h2>
                <p className="text-[13px] text-dortex-gray mb-6">Have inquiries concerning our distribution or merchandise? Our support staff is prepared to provide you with dependable solutions.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-dortex-gray mb-1">Name *</label>
                      <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} required />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase tracking-wider text-dortex-gray mb-1">Email *</label>
                      <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} required />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-dortex-gray mb-1">Subject *</label>
                    <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={inputClass} required />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-dortex-gray mb-1">Your Message *</label>
                    <textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} required />
                  </div>
                  <button type="submit" className="group w-full bg-gradient-to-r from-dortex-cyan to-[#0A8A99] text-white rounded-xl py-3.5 font-mono text-[13px] font-medium uppercase tracking-wider hover:shadow-[0_6px_24px_rgba(15,164,181,0.3)] transition-all flex items-center justify-center gap-2">
                    <Send size={15} className="group-hover:translate-x-0.5 transition-transform" /> Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
