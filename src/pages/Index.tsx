import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  solutions, services, industries, projects, stats, whyChooseUs,
  companyInfo, partners, HERO_IMAGES, PROJECT_IMAGES
} from "@/data/siteData";
import {
  ArrowRight, Shield, Car, Flame, Zap, Brain, Scan, Tv,
  Award, Workflow, Handshake, BadgeCheck, Headphones, Globe,
  ChevronRight, CheckCircle2, Play, Star, Building2,
  Camera, Fingerprint, ShieldCheck,
  Landmark, Building, Factory, Hotel, HeartPulse, GraduationCap,
  Plane, ShoppingBag, Home, Fuel, MapPin
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const solutionIcons: Record<string, React.ReactNode> = {
  "integrated-security": <Camera className="w-6 h-6" />,
  "access-control-identification": <Fingerprint className="w-6 h-6" />,
  "physical-security": <ShieldCheck className="w-6 h-6" />,
  "parking-traffic": <Car className="w-6 h-6" />,
  "fire-life-safety": <Flame className="w-6 h-6" />,
  "light-current-elv": <Zap className="w-6 h-6" />,
  "smart-intelligent-solutions": <Brain className="w-6 h-6" />,
  "x-ray-inspection": <Scan className="w-6 h-6" />,
  "audio-visual": <Tv className="w-6 h-6" />,
};

const industryIcons: Record<string, React.ReactNode> = {
  "government-public-sector": <Landmark className="w-5 h-5" />,
  "commercial-corporate": <Building className="w-5 h-5" />,
  "industrial-manufacturing": <Factory className="w-5 h-5" />,
  "hospitality-hotels": <Hotel className="w-5 h-5" />,
  "healthcare-hospitals": <HeartPulse className="w-5 h-5" />,
  "education-universities": <GraduationCap className="w-5 h-5" />,
  "transportation-logistics": <Plane className="w-5 h-5" />,
  "retail-commercial": <ShoppingBag className="w-5 h-5" />,
  "residential-mixed-use": <Home className="w-5 h-5" />,
  "energy-oil-gas": <Fuel className="w-5 h-5" />,
};

const whyIcons: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6" />,
  Workflow: <Workflow className="w-6 h-6" />,
  Handshake: <Handshake className="w-6 h-6" />,
  BadgeCheck: <BadgeCheck className="w-6 h-6" />,
  HeadphonesIcon: <Headphones className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
};

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const num = parseInt(target.replace(/[^0-9]/g, "")) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * num));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  return <div ref={ref}>{count}{suffix}</div>;
}

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Securing Kuwait's",
      highlight: "Future Today",
      subtitle: "Leading security systems integrator delivering comprehensive protection solutions across Kuwait and the GCC region.",
      cta: "Explore Solutions",
      ctaLink: "/solutions",
    },
    {
      title: "Smart & Intelligent",
      highlight: "Building Solutions",
      subtitle: "AI-powered security, IoT integration, and building management systems for the modern enterprise.",
      cta: "Learn More",
      ctaLink: "/solutions/smart-intelligent-solutions",
    },
    {
      title: "20+ Years of",
      highlight: "Trusted Excellence",
      subtitle: "1,200+ projects completed across 6 countries with 59+ global technology partners.",
      cta: "View Projects",
      ctaLink: "/projects",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGES.homepage}
          alt="Kuwait City Skyline"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e2a]/95 via-[#0a0e2a]/70 to-[#0a0e2a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e2a]/80 via-transparent to-[#0a0e2a]/30" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(253,105,9,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(253,105,9,0.3) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-[#fd6909]" />
            <span className="text-white/80 text-sm font-medium">Kuwait's Premier Security Integrator</span>
          </div>

          {/* Slide content */}
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                currentSlide === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute pointer-events-none"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                {slide.title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd6909] to-[#ff8a3d]">
                  {slide.highlight}
                </span>
              </h1>
              <p className="text-white/60 text-lg mt-6 leading-relaxed max-w-xl">
                {slide.subtitle}
              </p>
            </div>
          ))}

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to={slides[currentSlide].ctaLink}
              className="group inline-flex items-center gap-2 bg-[#fd6909] text-white px-7 py-4 rounded-xl text-sm font-bold hover:bg-[#e55d00] transition-all duration-300 hover:shadow-xl hover:shadow-[#fd6909]/30"
            >
              {slides[currentSlide].cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-4 rounded-xl text-sm font-bold hover:bg-white/20 transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              Contact Us
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentSlide === i ? "w-10 bg-[#fd6909]" : "w-4 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right side stats cards */}
        <div className="hidden xl:flex flex-col gap-4 ml-auto">
          {[
            { value: "1,200+", label: "Projects", icon: <Building2 className="w-5 h-5" /> },
            { value: "59+", label: "Partners", icon: <Handshake className="w-5 h-5" /> },
            { value: "20+", label: "Years", icon: <Award className="w-5 h-5" /> },
            { value: "24/7", label: "Support", icon: <Headphones className="w-5 h-5" /> },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[200px] hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#fd6909]/20 flex items-center justify-center text-[#fd6909]">
                {stat.icon}
              </div>
              <div>
                <div className="text-white font-black text-xl">{stat.value}</div>
                <div className="text-white/50 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

function PartnersCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
      containerRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.animationPlayState = "running";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Technology Partners</span>
        <h2 className="text-2xl font-black text-[#1E2455] mt-3">Trusted by 59+ Global Brands</h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div
          ref={containerRef}
          className="flex animate-scroll gap-12 whitespace-nowrap overflow-x-auto scrollbar-hide cursor-grab select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {[...Array.from({ length: 59 }, (_, i) => i + 1), ...Array.from({ length: 59 }, (_, i) => i + 1)].map((num, i) => (
            <div key={`partner-${i}`} className="flex-shrink-0 w-56 h-32 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-5 hover:shadow-md hover:border-[#fd6909]/20 transition-all">
              <img
                src={`https://www.arab-security.com/assets/partners/${num}.png`}
                alt={`Partner ${num}`}
                className="max-w-full max-h-full object-contain transition-all duration-300 pointer-events-none"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 80s linear infinite; }
        .animate-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

export default function Index() {
  return (
    <Layout>
      <HeroSection />

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1E2455] mt-3">Comprehensive Security Solutions</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">End-to-end security and technology solutions designed to protect people, assets, and infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => (
              <Link
                key={sol.id}
                to={`/solutions/${sol.slug}`}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-[#fd6909]/5 hover:border-[#fd6909]/20 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#fd6909]/10 flex items-center justify-center text-[#fd6909] group-hover:bg-[#fd6909] group-hover:text-white transition-all duration-300">
                  {solutionIcons[sol.slug]}
                </div>
                <h3 className="text-lg font-bold text-[#1E2455] mt-5 group-hover:text-[#fd6909] transition-colors">{sol.shortTitle}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{sol.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {sol.subSolutions.slice(0, 3).map((sub) => (
                    <span key={sub.slug} className="text-xs bg-gray-50 text-gray-500 px-2.5 py-1 rounded-full">{sub.name}</span>
                  ))}
                  {sol.subSolutions.length > 3 && (
                    <span className="text-xs bg-[#fd6909]/10 text-[#fd6909] px-2.5 py-1 rounded-full font-medium">+{sol.subSolutions.length - 3} more</span>
                  )}
                </div>
                <div className="mt-5 flex items-center gap-1 text-[#fd6909] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1E2455]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-[#fd6909]">
                  <AnimatedCounter target={stat.value} suffix={stat.value.includes("+") ? "+" : ""} />
                </div>
                <div className="text-white/60 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Why ASG</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1E2455] mt-3">Why Choose Arab Security Gulf?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#fd6909]/10 flex items-center justify-center text-[#fd6909]">
                  {whyIcons[item.icon]}
                </div>
                <h3 className="text-lg font-bold text-[#1E2455] mt-4">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-14">
            <div>
              <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Our Services</span>
              <h2 className="text-3xl lg:text-4xl font-black text-[#1E2455] mt-3">End-to-End Service Delivery</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-[#fd6909] font-semibold hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 6).map((svc, i) => (
              <Link key={svc.id} to={`/services/${svc.slug}`} className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#fd6909]/20 hover:shadow-lg transition-all">
                <div className="text-4xl font-black text-[#fd6909]/10 group-hover:text-[#fd6909]/20 transition-colors">0{i + 1}</div>
                <h3 className="text-base font-bold text-[#1E2455] mt-3 group-hover:text-[#fd6909] transition-colors">{svc.title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-3">{svc.description}</p>
                <ul className="mt-3 space-y-1.5">
                  {svc.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fd6909]" /> {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#1E2455]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Industries We Serve</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mt-3">Trusted Across Every Sector</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.id}
                to={`/industries/${ind.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-[#fd6909] hover:border-[#fd6909] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-[#fd6909] group-hover:text-white mx-auto transition-all">
                  {industryIcons[ind.slug] || <ChevronRight className="w-5 h-5" />}
                </div>
                <h4 className="text-white text-sm font-semibold group-hover:text-white mt-3">{ind.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-14">
            <div>
              <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Our Portfolio</span>
              <h2 className="text-3xl lg:text-4xl font-black text-[#1E2455] mt-3">Featured Projects</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-[#fd6909] font-semibold hover:gap-3 transition-all">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((proj) => (
              <Link
                key={proj.id}
                to={`/projects/${proj.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={PROJECT_IMAGES[proj.slug] || HERO_IMAGES.projects}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="text-xs bg-[#fd6909] text-white px-2.5 py-1 rounded-full font-medium">{proj.category}</span>
                    <span className="text-xs text-white/80">{proj.year}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{proj.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{proj.description}</p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mt-3">
                    <MapPin className="w-3.5 h-3.5" /> {proj.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Ticker */}
      <PartnersCarousel />

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1E2455] rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Certifications</span>
              <h2 className="text-2xl lg:text-3xl font-black text-white mt-3">Internationally Certified</h2>
              <p className="text-white/60 mt-4">Our commitment to quality and safety is backed by internationally recognized certifications.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {companyInfo.certifications.map((cert) => (
                <div key={cert} className="bg-white/10 border border-white/10 rounded-xl px-5 py-3 text-white text-sm font-medium flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#fd6909]" /> {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}