import { Link } from 'react-router';
import { Map as MapIcon, FileCode, ArrowRight, ExternalLink } from 'lucide-react';
import { PageMeta } from '@/components/PageMeta';
import { AnimatedSection } from '@/components/AnimatedSection';
import { PRODUCTS } from '@/data/products';

const SECTIONS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Main',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'All Products', href: '/products' },
      ...PRODUCTS.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Industries', href: '/industries' },
      { label: 'Infrastructure', href: '/infrastructure' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Testimonials', href: '/testimonials' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
];

export default function Sitemap() {
  const totalLinks = SECTIONS.reduce((sum, s) => sum + s.links.length, 0);

  return (
    <>
      <PageMeta
        title="Sitemap | Dortex India"
        description="Browse all pages on the Dortex India website — products, industries, infrastructure, and more."
      />

      {/* ===== HEADER ===== */}
      <div
        className="relative overflow-hidden bg-gradient-to-br from-white via-dortex-light to-[#E6F4F6]"
        style={{ padding: 'clamp(5rem, 12vh, 7rem) clamp(1rem, 4vw, 2.5rem) clamp(2rem, 5vh, 3.5rem)' }}
      >
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-5">
              <MapIcon size={14} className="text-dortex-cyan" />
              <span className="font-heading text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Sitemap</span>
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1] text-dortex-black">
              All Pages in <span className="text-gradient-cyan">One Place</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[14px] md:text-[15px] text-dortex-gray leading-relaxed">
              A complete index of every page on dortexindia.com. {totalLinks} pages across {SECTIONS.length} sections.
            </p>

            {/* CTA row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-heading text-[11px] uppercase tracking-wider text-white bg-gradient-to-r from-dortex-cyan to-[#0A8A99] rounded-full px-5 py-3 shadow-[0_4px_20px_rgba(15,164,181,0.25)] hover:shadow-[0_6px_28px_rgba(15,164,181,0.4)] hover:-translate-y-[1px] active:scale-[0.97] transition-all"
              >
                <FileCode size={14} />
                View sitemap.xml
                <ExternalLink size={12} className="opacity-70" />
              </a>
              <span className="font-heading text-[10px] text-dortex-gray/70 uppercase tracking-wider">
                Search-engine readable XML
              </span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ===== SECTIONS ===== */}
      <section className="bg-white relative" style={{ padding: 'clamp(2rem, 5vh, 3.5rem) clamp(1rem, 4vw, 2.5rem) clamp(3rem, 8vh, 5rem)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTIONS.map((section, idx) => (
              <AnimatedSection key={section.title} delay={idx * 80}>
                <div className="h-full rounded-2xl border border-dortex-border bg-white p-6 hover:border-dortex-cyan/30 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] transition-all duration-300">
                  <h2 className="font-heading text-[10px] uppercase tracking-[0.14em] text-dortex-cyan mb-4 flex items-center gap-2">
                    <span className="w-3 h-px bg-dortex-cyan/40" />
                    {section.title}
                  </h2>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="group flex items-center gap-2 text-[14px] text-dortex-black/80 hover:text-dortex-cyan transition-colors duration-200"
                        >
                          <ArrowRight
                            size={12}
                            className="text-dortex-border group-hover:text-dortex-cyan/70 group-hover:translate-x-0.5 transition-all"
                          />
                          <span className="truncate">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* ===== XML row at bottom ===== */}
          <AnimatedSection delay={SECTIONS.length * 80}>
            <div className="mt-10 rounded-2xl border border-dortex-border bg-gradient-to-br from-dortex-light to-white p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-dortex-cyan/10 border border-dortex-cyan/20 flex items-center justify-center">
                  <FileCode size={22} className="text-dortex-cyan" />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-dortex-black">XML Sitemap for Search Engines</h3>
                  <p className="text-[13px] text-dortex-gray mt-1 max-w-xl leading-relaxed">
                    Submit this URL to Google Search Console, Bing Webmaster Tools, or any other indexing service.
                  </p>
                </div>
              </div>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 font-heading text-[11px] uppercase tracking-wider text-dortex-cyan border border-dortex-cyan/30 rounded-full px-5 py-3 hover:bg-dortex-cyan hover:text-white transition-all"
              >
                Open sitemap.xml <ExternalLink size={12} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
