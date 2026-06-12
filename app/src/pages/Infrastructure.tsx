import { PageMeta } from '@/components/PageMeta';
import { AnimatedSection, AnimatedStagger } from '@/components/AnimatedSection';
import { Factory, Cpu, ShieldCheck, Users, Ruler } from 'lucide-react';

const IMAGES = [
  { src: '/images/infra-cnc.jpg', caption: 'CNC Machining Center', span: 'col-span-1 row-span-1' },
  { src: '/images/infra-floor.jpg', caption: 'Manufacturing Floor', span: 'col-span-1 row-span-2' },
  { src: '/images/infra-qc.jpg', caption: 'Quality Inspection Lab', span: 'col-span-1 row-span-1' },
  { src: '/images/infra-extrusion.jpg', caption: 'Aluminum Extrusion Line', span: 'col-span-1 row-span-1' },
  { src: '/images/infra-assembly.jpg', caption: 'Cleanroom Assembly', span: 'col-span-1 md:col-span-2 row-span-1' },
];

const FACILITIES = [
  { icon: Factory, title: 'CNC Machining Center', desc: 'Computer-controlled precision cutting and milling for complex aluminum and steel components with micron-level accuracy.' },
  { icon: Cpu, title: 'Aluminum Extrusion Line', desc: 'State-of-the-art extrusion facility for producing consistent, high-quality aluminum profiles in various shapes and sizes.' },
  { icon: ShieldCheck, title: 'Quality Control Lab', desc: 'Dedicated inspection laboratory with precision measurement tools and rigorous testing protocols for every batch.' },
  { icon: Users, title: 'Cleanroom Assembly', desc: 'Controlled environment assembly stations for cleanroom-grade hardware packaging and quality assurance.' },
];

export default function Infrastructure() {
  return (
    <>
      <PageMeta title="Our Infrastructure | Dortex India" description="Tour our state-of-the-art manufacturing facility in Mohali, Punjab with CNC machining, aluminum extrusion, and cleanroom assembly capabilities." />

      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-dortex-light to-[#E6F4F6]" style={{ padding: 'clamp(5rem, 12vh, 7rem) clamp(1rem, 4vw, 2.5rem) clamp(2rem, 5vh, 3.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-5">
              <Factory size={14} className="text-dortex-cyan" />
              <span className="font-heading text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Our Infrastructure</span>
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1] text-dortex-black">
              Where <span className="text-gradient-cyan">Precision</span> Takes Shape
            </h1>
            <p className="mt-4 text-[15px] text-dortex-gray leading-relaxed max-w-xl">
              Our modern manufacturing facility in Mohali, Punjab is equipped with the latest machinery for precision engineering and quality production.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Gallery */}
      <section className="bg-white relative" style={{ padding: 'clamp(1.5rem, 4vh, 2.5rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-6">
            <div className="flex items-center gap-2">
              <Ruler size={16} className="text-dortex-cyan" />
              <h2 className="font-display text-[clamp(1.2rem,2vw,1.6rem)] text-dortex-black">Facility <span className="text-dortex-cyan">Gallery</span></h2>
            </div>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-2 md:grid-cols-3 gap-3" staggerDelay={80}>
            {IMAGES.map((img) => (
              <div key={img.caption} className={`group relative overflow-hidden rounded-2xl border border-dortex-border hover:border-dortex-cyan/30 transition-all duration-500 ${img.span}`}>
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover min-h-[180px] group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="w-5 h-[2px] bg-dortex-orange" />
                    <span className="text-white text-[13px] font-medium">{img.caption}</span>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="bg-dortex-light relative" style={{ padding: 'clamp(2rem, 5vh, 3rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] text-dortex-black">
              Facility <span className="text-dortex-cyan">Capabilities</span>
            </h2>
            <p className="mt-2 text-[14px] text-dortex-gray max-w-md mx-auto">State-of-the-art equipment and processes for precision manufacturing.</p>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={80}>
            {FACILITIES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group bg-white rounded-2xl border border-dortex-border p-6 hover:border-dortex-cyan/30 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dortex-cyan-light to-[#D4F1F4] border border-dortex-cyan/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-dortex-cyan" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-dortex-black mb-2">{f.title}</h3>
                  <p className="text-[13px] text-dortex-gray leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </AnimatedStagger>
        </div>
      </section>
    </>
  );
}
