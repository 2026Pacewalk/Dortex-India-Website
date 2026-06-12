import { useState } from 'react';
import { PageMeta } from '@/components/PageMeta';
import { AnimatedSection, AnimatedStagger } from '@/components/AnimatedSection';
import { X, Camera } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: '/images/hero-cleanroom-handle.jpg', caption: 'Premium Cleanroom Handle', category: 'Products' },
  { src: '/images/about-facility.jpg', caption: 'Manufacturing Facility', category: 'Infrastructure' },
  { src: '/images/product-coving.jpg', caption: 'Aluminum Coving Profile', category: 'Products' },
  { src: '/images/infra-cnc.jpg', caption: 'CNC Machining', category: 'Infrastructure' },
  { src: '/images/product-hinge.jpg', caption: 'Stainless Steel Hinges', category: 'Products' },
  { src: '/images/infra-qc.jpg', caption: 'Quality Control Lab', category: 'Infrastructure' },
  { src: '/images/about-products.jpg', caption: 'Product Range Display', category: 'Products' },
  { src: '/images/infra-extrusion.jpg', caption: 'Aluminum Extrusion Line', category: 'Infrastructure' },
  { src: '/images/product-door-seal.jpg', caption: 'Door Seal Installation', category: 'Products' },
  { src: '/images/infra-assembly.jpg', caption: 'Cleanroom Assembly', category: 'Infrastructure' },
  { src: '/images/industry-healthcare.jpg', caption: 'Healthcare Installation', category: 'Projects' },
  { src: '/images/industry-pharma.jpg', caption: 'Pharmaceutical Facility', category: 'Projects' },
  { src: '/images/product-corner.jpg', caption: 'Aluminum Corner Profile', category: 'Products' },
  { src: '/images/product-lock.jpg', caption: 'Door Lock System', category: 'Products' },
  { src: '/images/product-handle.jpg', caption: 'D-Type Handle', category: 'Products' },
  { src: '/images/infra-floor.jpg', caption: 'Production Floor', category: 'Infrastructure' },
];

const CATEGORIES = ['All', 'Products', 'Infrastructure', 'Projects'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageMeta title="Gallery | Dortex India" description="View our product range, manufacturing facility, and project installations in the Dortex India gallery." />

      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-dortex-light to-[#E6F4F6]" style={{ padding: 'clamp(5rem, 12vh, 7rem) clamp(1rem, 4vw, 2.5rem) clamp(2rem, 5vh, 3.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-5">
              <Camera size={14} className="text-dortex-cyan" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Gallery</span>
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1] text-dortex-black">
              Our Work in <span className="text-gradient-cyan">Pictures</span>
            </h1>
          </AnimatedSection>
        </div>
      </div>

      <section className="bg-white relative" style={{ padding: 'clamp(1rem, 3vh, 2rem) clamp(1rem, 4vw, 2.5rem) clamp(3rem, 8vh, 5rem)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Filter */}
          <AnimatedSection className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-[11px] uppercase tracking-wider px-5 py-2 rounded-full transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-dortex-cyan text-white shadow-[0_2px_12px_rgba(15,164,181,0.3)]'
                      : 'bg-dortex-light text-dortex-gray border border-dortex-border hover:border-dortex-cyan hover:text-dortex-cyan'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Masonry Grid */}
          <AnimatedStagger className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3" staggerDelay={50}>
            {filteredImages.map((img, index) => (
              <div
                key={`${img.src}-${index}`}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer border border-dortex-border hover:border-dortex-cyan/40 transition-all duration-500"
                onClick={() => setLightboxImage(img.src)}
              >
                <img src={img.src} alt={img.caption} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-dortex-orange">{img.category}</span>
                    <span className="block text-white text-[13px] font-medium mt-0.5">{img.caption}</span>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[60] bg-black/92 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10" onClick={() => setLightboxImage(null)}>
            <X size={30} />
          </button>
          <img src={lightboxImage} alt="Gallery" className="max-w-full max-h-[90vh] object-contain rounded-xl animate-[scaleIn_0.3s_ease-out]" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </>
  );
}
