import { Link } from 'react-router';
import { PageMeta } from '@/components/PageMeta';
import { AnimatedSection, AnimatedStagger } from '@/components/AnimatedSection';
import { PRODUCTS } from '@/data/products';
import { SITE_URL } from '@/lib/site';
import { ArrowRight, CheckCircle, Package, Download } from 'lucide-react';

const productListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dortex India Cleanroom Hardware Catalogue',
  itemListElement: PRODUCTS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE_URL}/products/${p.slug}`,
    name: p.name,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
  ],
};

export default function Products() {
  return (
    <>
      <PageMeta
        title="Cleanroom Hardware Products | Dortex India"
        description="Explore Dortex India's premium cleanroom hardware: aluminum coving, door seals, SS hinges, aluminum corners, door locks & D-type handles. GMP-grade. Pan-India delivery."
        keywords="cleanroom hardware India, aluminum coving, door seal, SS 304 hinge, aluminum corner, door lock, D-type handle, GMP hardware"
        schema={[productListSchema, breadcrumbSchema]}
      />

      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-dortex-light to-[#E6F4F6]" style={{ padding: 'clamp(5rem, 12vh, 7rem) clamp(1rem, 4vw, 2.5rem) clamp(2rem, 5vh, 3.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-5">
              <Package size={14} className="text-dortex-cyan" />
              <span className="font-heading text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Our Products</span>
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1] text-dortex-black">
              Precision-Engineered <span className="text-gradient-cyan">Hardware</span> Solutions
            </h1>
            <p className="mt-4 text-[15px] text-dortex-gray leading-relaxed max-w-xl">
              Manufacturing high-performance aluminum coving, door seals, hinges, corners &amp; cleanroom hardware engineered for durability, hygiene, and precision.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Products Grid */}
      <section className="bg-white relative" style={{ padding: 'clamp(2rem, 5vh, 3.5rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={100}>
            {PRODUCTS.map((product) => (
              <div key={product.slug} className="group bg-white rounded-2xl border border-dortex-border overflow-hidden hover:border-dortex-cyan/30 hover:shadow-[0_12px_40px_rgba(15,164,181,0.1)] hover:-translate-y-1 transition-all duration-500">
                {/* Top gradient accent bar */}
                <div className="h-[3px] bg-gradient-to-r from-dortex-cyan to-dortex-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <h2 className="text-[18px] font-semibold text-dortex-black group-hover:text-dortex-cyan transition-colors duration-300">{product.name}</h2>
                  <p className="mt-2 text-[14px] text-dortex-gray leading-relaxed">{product.description}</p>

                  {/* Quick Specs */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {product.specs.slice(0, 4).map((spec) => (
                      <div key={spec.label} className="flex items-center gap-2 text-[12px] text-dortex-gray">
                        <CheckCircle size={13} className="text-dortex-cyan shrink-0" />
                        <span><span className="font-medium text-dortex-black">{spec.label}:</span> {spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-5">
                    <Link to={`/products/${product.slug}`} className="group/btn inline-flex items-center gap-1 font-heading text-[11px] uppercase tracking-wider text-white bg-dortex-cyan rounded-full px-5 py-2.5 hover:bg-[#0A8A99] transition-all shadow-[0_4px_16px_rgba(15,164,181,0.2)] hover:shadow-[0_6px_20px_rgba(15,164,181,0.3)]">
                      View Details <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/contact" className="inline-flex items-center font-heading text-[11px] uppercase tracking-wider text-dortex-orange border border-dortex-orange/30 rounded-full px-5 py-2 hover:bg-dortex-orange hover:text-white transition-all">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedStagger>

          {/* Bottom CTA */}
          <AnimatedSection className="mt-12 text-center" delay={200}>
            <div className="bg-gradient-to-r from-dortex-cyan-light via-white to-dortex-orange-light rounded-2xl border border-dortex-border p-8 md:p-10">
              <h3 className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] text-dortex-black mb-2">Need a Custom Solution?</h3>
              <p className="text-[14px] text-dortex-gray max-w-md mx-auto mb-5">We specialize in custom architectural and cleanroom hardware manufacturing. Share your specifications with us.</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-dortex-orange to-[#E08A15] text-white rounded-full px-7 py-3 font-heading text-[12px] font-medium uppercase tracking-wider hover:shadow-[0_8px_30px_rgba(245,154,35,0.35)] hover:-translate-y-0.5 transition-all duration-300">
                  Request Custom Quote <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="/brochure/dortex-brochure.pdf" download className="group inline-flex items-center gap-2 text-dortex-cyan border border-dortex-cyan/30 rounded-full px-6 py-3 font-heading text-[12px] font-medium uppercase tracking-wider hover:bg-dortex-cyan hover:text-white hover:border-dortex-cyan transition-all duration-300">
                  <Download size={14} /> Get Brochure
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
