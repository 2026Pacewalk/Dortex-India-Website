import { useParams, Link, Navigate } from 'react-router';
import { PageMeta } from '@/components/PageMeta';
import { AnimatedSection, AnimatedStagger } from '@/components/AnimatedSection';
import { getProductBySlug, PRODUCTS } from '@/data/products';
import { SITE_URL } from '@/lib/site';
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, Ruler, Factory, Shield } from 'lucide-react';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');

  if (!product) return <Navigate to="/products" replace />;

  const otherProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  const canonicalPath = `/products/${product.slug}`;
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${SITE_URL}${product.image}`,
    sku: product.slug,
    category: 'Cleanroom & Architectural Hardware',
    brand: { '@type': 'Brand', name: 'Dortex India' },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    additionalProperty: product.specs.map((s) => ({
      '@type': 'PropertyValue',
      name: s.label,
      value: s.value,
    })),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      url: `${SITE_URL}${canonicalPath}`,
      seller: { '@id': `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '14',
      bestRating: '5',
      worstRating: '1',
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${SITE_URL}${canonicalPath}` },
    ],
  };

  return (
    <>
      <PageMeta
        title={`${product.name} | Cleanroom Hardware | Dortex India`}
        description={`${product.description} Specifications, features, and applications. Made in Mohali, Punjab.`}
        canonicalPath={canonicalPath}
        ogImage={`${SITE_URL}${product.image}`}
        ogType="product"
        keywords={`${product.name.toLowerCase()}, ${product.applications.join(', ').toLowerCase()}, cleanroom hardware, Dortex India`}
        schema={[productSchema, breadcrumbSchema]}
      />

      {/* Breadcrumb */}
      <div className="bg-dortex-light border-b border-dortex-border" style={{ padding: '5rem clamp(1rem, 4vw, 2.5rem) 0.75rem' }}>
        <div className="max-w-6xl mx-auto flex items-center gap-2 font-mono text-[11px] text-dortex-gray">
          <Link to="/" className="hover:text-dortex-cyan transition-colors">Home</Link>
          <span className="text-dortex-border">/</span>
          <Link to="/products" className="hover:text-dortex-cyan transition-colors">Products</Link>
          <span className="text-dortex-border">/</span>
          <span className="text-dortex-cyan">{product.name}</span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="bg-white relative" style={{ padding: 'clamp(1.5rem, 4vh, 2.5rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Image */}
            <AnimatedSection className="lg:w-[50%]">
              <div className="rounded-2xl border border-dortex-border overflow-hidden bg-dortex-light group">
                <img src={product.image} alt={product.name} className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700" loading="eager" />
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection className="lg:w-[50%]" delay={150}>
              <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-3 py-1 mb-4">
                <Factory size={12} className="text-dortex-cyan" />
                <span className="font-mono text-[10px] tracking-wider text-dortex-cyan uppercase">Industrial Grade</span>
              </div>
              <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] text-dortex-black">{product.name}</h1>
              <p className="mt-4 text-[15px] text-dortex-gray leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="mt-6 space-y-2.5">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-dortex-cyan mt-0.5 shrink-0" />
                    <span className="text-[14px] text-dortex-black">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/contact" className="group inline-flex items-center gap-1.5 bg-dortex-cyan text-white rounded-full px-6 py-3 font-mono text-[12px] font-medium uppercase tracking-wider hover:bg-[#0A8A99] transition-all shadow-[0_4px_16px_rgba(15,164,181,0.25)] hover:shadow-[0_6px_24px_rgba(15,164,181,0.35)]">
                  Request Inquiry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:08047657253" className="inline-flex items-center gap-1.5 bg-dortex-orange text-white rounded-full px-6 py-3 font-mono text-[12px] font-medium uppercase tracking-wider hover:bg-dortex-orange-dark transition-all">
                  <Phone size={14} /> Call Now
                </a>
                <Link to="/contact" className="inline-flex items-center gap-1.5 bg-white text-dortex-black border border-dortex-border rounded-full px-5 py-3 font-mono text-[12px] font-medium uppercase tracking-wider hover:border-dortex-cyan hover:text-dortex-cyan transition-all">
                  <Mail size={14} /> Email
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Specifications */}
          <AnimatedSection className="mt-12" delay={200}>
            <div className="flex items-center gap-2 mb-5">
              <Ruler size={18} className="text-dortex-cyan" />
              <h2 className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] text-dortex-black">Technical <span className="text-dortex-cyan">Specifications</span></h2>
            </div>
            <div className="bg-dortex-light rounded-2xl border border-dortex-border overflow-hidden">
              <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={50}>
                {product.specs.map((spec) => (
                  <div key={spec.label} className="p-5 border-b border-r border-dortex-border/60 hover:bg-white/50 transition-colors">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-dortex-gray mb-1">{spec.label}</span>
                    <span className="block text-[14px] text-dortex-black font-medium">{spec.value}</span>
                  </div>
                ))}
              </AnimatedStagger>
            </div>
          </AnimatedSection>

          {/* Applications */}
          <AnimatedSection className="mt-10" delay={250}>
            <div className="flex items-center gap-2 mb-5">
              <Shield size={18} className="text-dortex-cyan" />
              <h2 className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] text-dortex-black">Industry <span className="text-dortex-cyan">Applications</span></h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {product.applications.map((app) => (
                <span key={app} className="inline-flex items-center bg-dortex-cyan-light text-dortex-cyan-dark px-4 py-2 rounded-full text-[13px] font-medium border border-dortex-cyan/15 hover:bg-dortex-cyan hover:text-white transition-all duration-300 cursor-default">
                  {app}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Products */}
      {otherProducts.length > 0 && (
        <section className="bg-dortex-light relative" style={{ padding: 'clamp(2rem, 5vh, 3rem) clamp(1rem, 4vw, 2.5rem)' }}>
          <div className="absolute inset-0 pattern-dots opacity-30" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <AnimatedSection className="flex items-center justify-between mb-6">
              <h2 className="font-display text-[clamp(1.2rem,2vw,1.6rem)] text-dortex-black">Related <span className="text-dortex-cyan">Products</span></h2>
              <Link to="/products" className="group font-mono text-[11px] uppercase tracking-wider text-dortex-cyan hover:underline flex items-center gap-1">
                View All <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
            <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-3 gap-4" staggerDelay={100}>
              {otherProducts.map((p) => (
                <Link to={`/products/${p.slug}`} key={p.slug} className="group bg-white rounded-2xl border border-dortex-border overflow-hidden hover:border-dortex-cyan/30 hover:shadow-[0_12px_40px_rgba(15,164,181,0.1)] hover:-translate-y-1 transition-all duration-500">
                  <div className="h-[3px] bg-gradient-to-r from-dortex-cyan to-dortex-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[14px] font-semibold text-dortex-black group-hover:text-dortex-cyan transition-colors">{p.name}</h3>
                    <span className="inline-flex items-center gap-1 mt-2 font-mono text-[10px] uppercase tracking-wider text-dortex-orange group-hover:gap-2 transition-all">
                      View Details <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              ))}
            </AnimatedStagger>
          </div>
        </section>
      )}

      {/* Back */}
      <div className="bg-white" style={{ padding: 'clamp(1rem, 3vh, 2rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="max-w-6xl mx-auto">
          <Link to="/products" className="group inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wider text-dortex-gray hover:text-dortex-cyan transition-colors">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Products
          </Link>
        </div>
      </div>
    </>
  );
}
