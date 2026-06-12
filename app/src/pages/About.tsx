import { PageMeta } from '@/components/PageMeta';
import { AnimatedSection, AnimatedStagger } from '@/components/AnimatedSection';
import { StatCounter } from '@/components/StatCounter';
import { Award, Users, Building2, MapPin, CheckCircle, Shield, Cpu, ScanLine, Gift, Lock } from 'lucide-react';
import { Link } from 'react-router';

const STATS = [
  { value: '4+', label: 'Years of Excellence', icon: Award },
  { value: '15+', label: 'Product Categories', icon: Building2 },
  { value: '8+', label: 'Industries Served', icon: Users },
  { value: '100+', label: 'Satisfied Clients', icon: MapPin },
];

const TEAM_ROLES = [
  'Engineers',
  'Quality Assessors',
  'Technicians',
  'Workforce with Skills and Semi-Skills',
  'Executives in Sales and Marketing',
];

export default function About() {
  return (
    <>
      <PageMeta
        title="About Dortex India | Cleanroom Hardware Manufacturer Since 2021"
        description="Founded 2021 in Mohali, Punjab. Dortex India manufactures GMP-compliant aluminum coving, door seals, SS hinges, corners, locks & D-handles for cleanrooms, pharma, hospitals and labs."
        keywords="about Dortex India, cleanroom hardware manufacturer Punjab, GMP hardware supplier, Mohali manufacturer, hardware company India"
      />

      {/* Page Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-dortex-light to-[#E6F4F6]" style={{ padding: 'clamp(5rem, 12vh, 7rem) clamp(1rem, 4vw, 2.5rem) clamp(2rem, 5vh, 3.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-5">
              <Award size={14} className="text-dortex-cyan" />
              <span className="font-heading text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">About Us</span>
            </div>
            <h1 className="font-display text-[clamp(2rem,5vw,3.8rem)] leading-[1] text-dortex-black">
              About <span className="text-gradient-cyan">Dortex</span>
            </h1>
          </AnimatedSection>
        </div>
      </div>

      {/* About Content */}
      <section className="bg-white relative" style={{ padding: 'clamp(2rem, 5vh, 3.5rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Images */}
            <AnimatedSection className="lg:w-[45%]">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-dortex-cyan/10" />
                <img src="/images/about-facility.jpg" alt="Dortex India manufacturing facility" className="w-full aspect-[4/3] object-cover rounded-2xl border border-dortex-border shadow-lg" loading="lazy" />
                <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-dortex-cyan to-[#0A8A99] text-white rounded-xl px-4 py-2 font-heading text-[10px] uppercase tracking-wider shadow-lg">
                  <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Est. 2021</span>
                </div>
              </div>
              <div className="mt-6">
                <img src="/images/about-products.jpg" alt="Premium hardware products" className="w-full aspect-video object-cover rounded-2xl border border-dortex-border shadow-soft" loading="lazy" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection className="lg:w-[55%]" delay={150}>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] text-dortex-black leading-tight">
                Premium Hardware for Critical Environments
              </h2>
              <div className="mt-5 space-y-4 text-[15px] text-dortex-gray leading-relaxed">
                <p>Established in the year 2021, at Mohali, Punjab, We &ldquo;Dortex India&rdquo; is a Proprietorship Firm, engaged as the foremost Manufacturer of Aluminum Corner, Aluminum Coving, Stainless Steel Hinge, Door Seal, and many more.</p>
                <p>We direct all our activities to cater the expectations of customers by providing them with excellent quality products as per their gratification. Moreover, we follow moral business policies and crystal pure transparency in all our transactions to keep healthy relations with the customers.</p>
                <p>For our accomplishment story, we are grateful to our Mr. Rajesh Saharan, whose continual backing and direction have been useful to us for attaining exponential development in the current market.</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/products" className="group inline-flex items-center gap-2 font-heading text-[11px] uppercase tracking-wider text-white bg-dortex-cyan rounded-full px-6 py-3 hover:bg-[#0A8A99] transition-all shadow-[0_4px_16px_rgba(15,164,181,0.2)]">
                  View Products <CheckCircle size={13} />
                </Link>
                <Link to="/contact" className="inline-flex items-center font-heading text-[11px] uppercase tracking-wider text-dortex-orange border border-dortex-orange/30 rounded-full px-6 py-3 hover:bg-dortex-orange hover:text-white transition-all">
                  Get Quote
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <AnimatedSection className="mt-14" delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="group text-center p-6 bg-dortex-light rounded-2xl border border-dortex-border hover:border-dortex-cyan/30 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-500">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-dortex-cyan-light to-[#D4F1F4] border border-dortex-cyan/15 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} className="text-dortex-cyan" />
                    </div>
                    <StatCounter value={stat.value} label={stat.label} />
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Vision */}
      <section className="bg-gradient-to-b from-[#F5F7F9] to-white relative" style={{ padding: 'clamp(4rem, 10vh, 6rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-dortex-cyan-light border border-dortex-cyan/15 rounded-full px-4 py-1.5 mb-4">
              <Shield size={14} className="text-dortex-cyan" />
              <span className="font-heading text-[10px] tracking-[0.15em] text-dortex-cyan uppercase">Company Vision</span>
            </div>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] text-dortex-black">What Drives <span className="text-dortex-cyan">Us</span></h2>
            <p className="mt-3 text-[15px] text-dortex-gray max-w-2xl mx-auto leading-relaxed">We are driven by a strong commitment to quality and customer satisfaction. Ethical business practices and transparency guide our operations. Our focus on precision and durability ensures reliable products. Continuous improvement helps us deliver excellence in every solution.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Our Mission */}
            <AnimatedSection delay={0}>
              <div className="group bg-white border border-dortex-border rounded-2xl p-6 hover:border-dortex-cyan/30 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dortex-cyan-light to-[#D4F1F4] border border-dortex-cyan/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award size={22} className="text-dortex-cyan" />
                </div>
                <h3 className="text-[16px] font-semibold text-dortex-black mb-3">Our Mission</h3>
                <div className="space-y-2 text-[13px] text-dortex-gray leading-relaxed">
                  <p>Our mission is to provide high-quality architectural hardware and finishing solutions.</p>
                  <p>We are committed to meeting industry standards and customer expectations.</p>
                  <p>Ethical business practices and transparency guide our work.</p>
                  <p>We focus on durability, precision, and consistent quality.</p>
                  <p>Customer satisfaction remains at the heart of everything we do.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Our Vision */}
            <AnimatedSection delay={100}>
              <div className="group bg-white border border-dortex-border rounded-2xl p-6 hover:border-dortex-cyan/30 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dortex-orange-light to-[#FEF3E2] border border-dortex-orange/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cpu size={22} className="text-dortex-orange" />
                </div>
                <h3 className="text-[16px] font-semibold text-dortex-black mb-3">Our Vision</h3>
                <div className="space-y-2 text-[13px] text-dortex-gray leading-relaxed">
                  <p>Our vision is to become a trusted name in architectural hardware and interior solutions.</p>
                  <p>We aim to set new standards through quality, innovation, and reliability.</p>
                  <p>By continuously improving our products, we strive to meet evolving market needs.</p>
                  <p>We focus on building long-term relationships with customers and partners.</p>
                  <p>Our goal is sustainable growth driven by excellence and customer trust.</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Our Team */}
            <AnimatedSection delay={200}>
              <div className="group bg-white border border-dortex-border rounded-2xl p-6 hover:border-dortex-cyan/30 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dortex-cyan-light to-[#D4F1F4] border border-dortex-cyan/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users size={22} className="text-dortex-cyan" />
                </div>
                <h3 className="text-[16px] font-semibold text-dortex-black mb-3">Our Team</h3>
                <p className="text-[13px] text-dortex-gray leading-relaxed mb-3">A skilled team of experts has been appointed. Our professionals put a lot of effort into understanding what customers need. In addition, our team members communicate with clients on a regular basis to help them meet their specific needs.</p>
                <AnimatedStagger className="space-y-1.5" staggerDelay={50}>
                  {TEAM_ROLES.map((role) => (
                    <div key={role} className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-dortex-cyan shrink-0" />
                      <span className="text-[12px] text-dortex-black">{role}</span>
                    </div>
                  ))}
                </AnimatedStagger>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Production Excellence */}
      <section className="bg-dortex-dark relative overflow-hidden" style={{ padding: 'clamp(4rem, 10vh, 6rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-dortex-cyan/5 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] text-white mb-2">
              High-Capacity Production <span className="text-dortex-cyan">Excellence</span>
            </h2>
            <p className="text-[14px] text-white/45 max-w-lg mx-auto">Our advanced manufacturing setup enables large-scale production without compromising quality. Efficient processes and skilled professionals ensure consistent output and timely delivery.</p>
          </AnimatedSection>

          <AnimatedSection className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 backdrop-blur-sm" delay={100}>
            <h3 className="text-[15px] font-semibold text-white mb-4 flex items-center gap-2">
              <Shield size={18} className="text-dortex-cyan" /> World-Class Production Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Dortex India boasts state-of-the-art manufacturing facilities equipped with advanced machinery and technology.',
                'Our skilled workforce ensures precision, consistency, and high-quality output at every stage of production.',
                'We efficiently handle both large-scale and customized orders without compromising on quality.',
                'Strict quality control and adherence to industry standards guarantee durable and reliable products.',
                'Streamlined processes and modern infrastructure allow timely delivery, meeting client expectations across sectors.',
                'Continuous innovation and process optimization drive our commitment to excellence in manufacturing.',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2.5 group">
                  <CheckCircle size={14} className="text-dortex-cyan mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-[13px] text-white/55 leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partnership / Rewards Section */}
      <section className="bg-gradient-to-b from-[#F5F7F9] to-white relative" style={{ padding: 'clamp(4rem, 10vh, 6rem) clamp(1rem, 4vw, 2.5rem)' }}>
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] text-dortex-black">
              Every Purchase Builds a <span className="text-dortex-cyan">Stronger Partnership</span>
            </h2>
            <p className="mt-2 text-[14px] text-dortex-gray max-w-md mx-auto">Enjoy exclusive rewards, special recognition, and premium benefits designed to grow with you.</p>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={100}>
            {[
              {
                icon: ScanLine,
                title: 'Smart Bulk Scan',
                desc: 'Smart Bulk Scan enables fast and accurate scanning of multiple products at once. It reduces manual effort and saves valuable operational time. Designed for high-volume processing with seamless performance. Ensures better tracking, control, and data accuracy. A smarter solution for efficient and streamlined product management.',
              },
              {
                icon: Gift,
                title: 'Adaptable Redemption Choices',
                desc: 'Adaptable Redemption Choices give you the flexibility to redeem rewards your way. Select from multiple options based on your needs and preferences. Redemption can be adjusted easily as your business grows. Designed for a smooth, convenient, and rewarding experience. Ensuring maximum value from every earned reward.',
              },
              {
                icon: Lock,
                title: 'Simple & Secure KYC Process',
                desc: 'A quick and hassle-free verification process designed with strong security standards. Ensures your data is protected while enabling faster approvals. Easy submission, minimal documentation, and complete transparency. Built to deliver trust, safety, and seamless onboarding. Compliant with industry regulations for complete peace of mind.',
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="group bg-white border border-dortex-border rounded-2xl p-6 hover:border-dortex-cyan/30 hover:shadow-[0_8px_32px_rgba(15,164,181,0.08)] hover:-translate-y-1 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dortex-cyan-light to-[#D4F1F4] border border-dortex-cyan/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-dortex-cyan" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-dortex-black mb-2">{feature.title}</h3>
                  <p className="text-[13px] text-dortex-gray leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </AnimatedStagger>
        </div>
      </section>
    </>
  );
}
