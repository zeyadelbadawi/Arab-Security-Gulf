import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { solutions, services, industries, companyInfo, HERO_IMAGES, projects, PROJECT_IMAGES } from "@/data/siteData";
import {
  Menu, X, ChevronDown, ChevronRight, Phone, Mail,
  MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube,
  ArrowRight, Car, Flame, Zap, Brain, Scan, Tv,
  ExternalLink, Camera, Fingerprint, ShieldCheck,
  PenTool, ClipboardList, Wrench, Layers, LifeBuoy, GraduationCap
} from "lucide-react";

const solutionIcons: Record<string, React.ReactNode> = {
  "integrated-security": <Camera className="w-5 h-5" />,
  "access-control-identification": <Fingerprint className="w-5 h-5" />,
  "physical-security": <ShieldCheck className="w-5 h-5" />,
  "parking-traffic": <Car className="w-5 h-5" />,
  "fire-life-safety": <Flame className="w-5 h-5" />,
  "light-current-elv": <Zap className="w-5 h-5" />,
  "smart-intelligent-solutions": <Brain className="w-5 h-5" />,
  "x-ray-inspection": <Scan className="w-5 h-5" />,
  "audio-visual": <Tv className="w-5 h-5" />,
};

const serviceIcons: Record<string, React.ReactNode> = {
  "system-design-consultancy": <PenTool className="w-4 h-4" />,
  "project-management": <ClipboardList className="w-4 h-4" />,
  "installation-commissioning": <Wrench className="w-4 h-4" />,
  "testing-integration": <Layers className="w-4 h-4" />,
  "maintenance-after-sales": <LifeBuoy className="w-4 h-4" />,
  "technical-training-support": <GraduationCap className="w-4 h-4" />,
};

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [activeSolution, setActiveSolution] = useState(solutions[0]?.slug || "");
  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const aboutLinks = [
    { label: "About Us", href: "/about", desc: "Our story, mission & values" },
    { label: "Clients", href: "/clients", desc: "Trusted by leading organizations" },
    { label: "Partners", href: "/partners", desc: "59+ technology partners" },
    { label: "Media Center", href: "/media", desc: "News, events & press" },
    { label: "FAQs", href: "/faqs", desc: "Frequently asked questions" },
    { label: "Training", href: "/training", desc: "Professional development courses" },
    { label: "Careers", href: "/careers", desc: "Join our growing team" },
  ];

  const activeSol = solutions.find(s => s.slug === activeSolution);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-[#0a0e2a] text-white/60 text-xs border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-1.5 hover:text-[#fd6909] transition-colors">
              <Mail className="w-3 h-3" /> {companyInfo.email}
            </a>
            <span className="text-white/20">|</span>
            <a href={`tel:${companyInfo.offices[0].phone}`} className="flex items-center gap-1.5 hover:text-[#fd6909] transition-colors">
              <Phone className="w-3 h-3" /> {companyInfo.offices[0].phone}
            </a>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> {companyInfo.headquarters}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: <Linkedin className="w-3 h-3" />, href: companyInfo.socialMedia.linkedin },
              { icon: <Facebook className="w-3 h-3" />, href: companyInfo.socialMedia.facebook },
              { icon: <Instagram className="w-3 h-3" />, href: companyInfo.socialMedia.instagram },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="hover:text-[#fd6909] transition-colors">{s.icon}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-xl shadow-black/5"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="/assets/logo-asg.png"
                alt="Arab Security Gulf"
                className="h-12 lg:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {/* Home */}
              <Link
                to="/"
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  location.pathname === "/" ? "text-[#fd6909]" : "text-[#1E2455] hover:text-[#fd6909]"
                }`}
              >
                Home
              </Link>

              {/* Solutions */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/solutions"
                  className={`flex items-center gap-1 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    location.pathname.startsWith("/solutions") || activeDropdown === "solutions"
                      ? "text-[#fd6909]"
                      : "text-[#1E2455] hover:text-[#fd6909]"
                  }`}
                >
                  Solutions
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
                </Link>
              </div>

              {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    location.pathname.startsWith("/services") || activeDropdown === "services"
                      ? "text-[#fd6909]"
                      : "text-[#1E2455] hover:text-[#fd6909]"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                </Link>
              </div>

              {/* Industries */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("industries")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/industries"
                  className={`flex items-center gap-1 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    location.pathname.startsWith("/industries") || activeDropdown === "industries"
                      ? "text-[#fd6909]"
                      : "text-[#1E2455] hover:text-[#fd6909]"
                  }`}
                >
                  Industries
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
                </Link>
              </div>

              {/* Projects */}
              <Link
                to="/projects"
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  location.pathname.startsWith("/projects") ? "text-[#fd6909]" : "text-[#1E2455] hover:text-[#fd6909]"
                }`}
              >
                Projects
              </Link>

              {/* About */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/about"
                  className={`flex items-center gap-1 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    ["/about", "/clients", "/partners", "/media", "/faqs", "/training", "/careers"].some(p => location.pathname === p) || activeDropdown === "about"
                      ? "text-[#fd6909]"
                      : "text-[#1E2455] hover:text-[#fd6909]"
                  }`}
                >
                  About
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180" : ""}`} />
                </Link>
              </div>

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  location.pathname === "/contact" ? "text-[#fd6909]" : "text-[#1E2455] hover:text-[#fd6909]"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <Link
                to="/request-quote"
                className="hidden lg:flex items-center gap-2 bg-[#fd6909] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#e55d00] transition-all duration-300 hover:shadow-lg hover:shadow-[#fd6909]/25"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-[#1E2455] p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* ===== MEGA MENU: SOLUTIONS ===== */}
        {activeDropdown === "solutions" && (
          <div
            className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-100 shadow-2xl shadow-black/10"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex gap-6">
                {/* Left: Solution categories */}
                <div className="w-64 flex-shrink-0 border-r border-gray-100 pr-5">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Solution Categories</p>
                  {solutions.slice(0, 5).map((sol) => (
                    <div
                      key={sol.id}
                      onMouseEnter={() => setActiveSolution(sol.slug)}
                      className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all duration-200 ${
                        activeSolution === sol.slug ? "bg-[#fd6909]/5 border border-[#fd6909]/20" : "hover:bg-gray-50 border border-transparent"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                        activeSolution === sol.slug ? "bg-[#fd6909] text-white" : "bg-gray-100 text-[#1E2455]"
                      }`}>
                        {solutionIcons[sol.slug]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link to={`/solutions/${sol.slug}`} className={`text-sm font-semibold block transition-colors truncate ${
                          activeSolution === sol.slug ? "text-[#fd6909]" : "text-[#1E2455]"
                        }`}>
                          {sol.shortTitle}
                        </Link>
                        <p className="text-[11px] text-gray-400 mt-0.5">{sol.subSolutions.length} sub-solutions</p>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${activeSolution === sol.slug ? "text-[#fd6909]" : "text-gray-300"}`} />
                    </div>
                  ))}
                  <Link
                    to="/solutions"
                    className="flex items-center justify-center gap-2 mt-3 py-2.5 px-4 bg-[#fd6909] text-white rounded-lg text-sm font-semibold hover:bg-[#e55d00] transition-all duration-300"
                  >
                    Show All Solutions
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Right: Sub-solutions + images below */}
                <div className="flex-1 min-w-0">
                  {activeSol && (
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-[#1E2455]">{activeSol.title}</h3>
                          <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">{activeSol.description}</p>
                        </div>
                        <Link to={`/solutions/${activeSol.slug}`} className="text-[#fd6909] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">
                          View All <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {activeSol.subSolutions.slice(0, 6).map((sub) => (
                          <Link
                            key={sub.slug}
                            to={`/solutions/${activeSol.slug}/${sub.slug}`}
                            className="group p-3 rounded-lg hover:bg-[#fd6909]/5 transition-all duration-200 border border-gray-50 hover:border-[#fd6909]/20"
                          >
                            <h4 className="text-sm font-semibold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{sub.name}</h4>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-2">{sub.description}</p>
                          </Link>
                        ))}
                      </div>
                      {activeSol.subSolutions.length > 6 && (
                        <Link to={`/solutions/${activeSol.slug}`} className="inline-flex items-center gap-1 text-xs text-[#fd6909] font-semibold hover:underline mb-4">
                          +{activeSol.subSolutions.length - 6} more sub-solutions <ChevronRight className="w-3 h-3" />
                        </Link>
                      )}
                      {/* Related Projects row below sub-solutions */}
                      <div className="mt-3 pt-4 border-t border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Related Projects</p>
                        <div className="grid grid-cols-3 gap-3">
                          {projects
                            .filter(p => p.solutions?.includes(activeSol.slug))
                            .slice(0, 3)
                            .map((project) => (
                              <Link
                                key={project.slug}
                                to={`/projects/${project.slug}`}
                                className="relative h-28 rounded-xl overflow-hidden group block"
                              >
                                <img
                                  src={PROJECT_IMAGES[project.slug] || project.galleryImages?.[0] || ""}
                                  alt={project.title}
                                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-2 left-3 right-3">
                                  <p className="text-white text-xs font-semibold line-clamp-1">{project.title}</p>
                                  <p className="text-white/60 text-[10px] mt-0.5">{project.location}</p>
                                </div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== MEGA MENU: SERVICES ===== */}
        {activeDropdown === "services" && (
          <div
            className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-100 shadow-2xl shadow-black/10"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex gap-8">
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {services.map((svc) => (
                    <Link
                      key={svc.id}
                      to={`/services/${svc.slug}`}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#fd6909]/5 transition-all border border-transparent hover:border-[#fd6909]/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-[#fd6909] flex items-center justify-center text-[#1E2455] group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                        {serviceIcons[svc.slug] || <ArrowRight className="w-4 h-4" />}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#1E2455] group-hover:text-[#fd6909] transition-colors block">{svc.title}</span>
                        <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{svc.description.slice(0, 80)}...</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="w-56 bg-[#1E2455] rounded-2xl p-6 flex flex-col justify-between flex-shrink-0">
                  <div>
                    <h4 className="text-white font-bold text-sm">Need a Quote?</h4>
                    <p className="text-white/60 text-xs mt-2">Get a customized quote for your security project.</p>
                  </div>
                  <Link to="/request-quote" className="mt-4 bg-[#fd6909] text-white text-xs font-bold py-2.5 px-4 rounded-lg text-center hover:bg-[#e55d00] transition-colors">
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== MEGA MENU: INDUSTRIES ===== */}
        {activeDropdown === "industries" && (
          <div
            className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-100 shadow-2xl shadow-black/10"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="grid grid-cols-4 gap-3">
                {industries.map((ind) => (
                  <Link
                    key={ind.id}
                    to={`/industries/${ind.slug}`}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#fd6909]/5 transition-all border border-transparent hover:border-[#fd6909]/10"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-[#fd6909] flex items-center justify-center text-[#1E2455] group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#1E2455] group-hover:text-[#fd6909] transition-colors block">{ind.title}</span>
                      <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{ind.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <p className="text-gray-400 text-sm">Serving 12+ industries across Kuwait and the GCC</p>
                <Link to="/industries" className="text-[#fd6909] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  View All Industries <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ===== MEGA MENU: ABOUT ===== */}
        {activeDropdown === "about" && (
          <div
            className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-100 shadow-2xl shadow-black/10"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex gap-8">
                <div className="flex-1 grid grid-cols-2 gap-2">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-[#fd6909]/5 transition-all border border-transparent hover:border-[#fd6909]/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-[#fd6909] flex items-center justify-center text-[#1E2455] group-hover:text-white transition-all flex-shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#1E2455] group-hover:text-[#fd6909] transition-colors block">{link.label}</span>
                        <p className="text-xs text-gray-400">{link.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="w-64 bg-[#1E2455] rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm">Partner With Us</h4>
                    <p className="text-white/60 text-xs mt-2">Join our network of technology partners and grow together.</p>
                  </div>
                  <Link to="/partner-with-us" className="mt-4 bg-[#fd6909] text-white text-xs font-bold py-2.5 px-4 rounded-lg text-center hover:bg-[#e55d00] transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== MOBILE MENU ===== */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="px-4 py-4 space-y-1">
              {/* Home */}
              <Link to="/" className="block text-[#1E2455] font-semibold py-3 px-3 text-sm">Home</Link>

              {/* Solutions */}
              <div>
                <div className="flex items-center justify-between">
                  <Link to="/solutions" className="flex-1 text-[#1E2455] font-semibold py-3 px-3 text-sm">Solutions</Link>
                  <button onClick={() => setMobileSubmenu(mobileSubmenu === "solutions" ? null : "solutions")} className="text-gray-400 p-3">
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === "solutions" ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {mobileSubmenu === "solutions" && (
                  <div className="pl-4 space-y-0.5 pb-2">
                    {solutions.map((sol) => (
                      <div key={sol.id}>
                        <Link to={`/solutions/${sol.slug}`} className="flex items-center gap-2 text-[#1E2455]/70 hover:text-[#fd6909] py-2 px-3 text-sm font-medium">
                          {solutionIcons[sol.slug]}
                          {sol.shortTitle}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Services mobile */}
              <div>
                <div className="flex items-center justify-between">
                  <Link to="/services" className="flex-1 text-[#1E2455] font-semibold py-3 px-3 text-sm">Services</Link>
                  <button onClick={() => setMobileSubmenu(mobileSubmenu === "services" ? null : "services")} className="text-gray-400 p-3">
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === "services" ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {mobileSubmenu === "services" && (
                  <div className="pl-4 space-y-0.5 pb-2">
                    {services.map((svc) => (
                      <Link key={svc.id} to={`/services/${svc.slug}`} className="flex items-center gap-2 text-[#1E2455]/70 hover:text-[#fd6909] py-2 px-3 text-sm font-medium">
                        {serviceIcons[svc.slug] || <ArrowRight className="w-4 h-4" />}
                        {svc.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries */}
              <div>
                <div className="flex items-center justify-between">
                  <Link to="/industries" className="flex-1 text-[#1E2455] font-semibold py-3 px-3 text-sm">Industries</Link>
                  <button onClick={() => setMobileSubmenu(mobileSubmenu === "industries" ? null : "industries")} className="text-gray-400 p-3">
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === "industries" ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {mobileSubmenu === "industries" && (
                  <div className="pl-6 space-y-0.5 pb-2">
                    {industries.map((ind) => (
                      <Link key={ind.id} to={`/industries/${ind.slug}`} className="block text-[#1E2455]/60 hover:text-[#fd6909] py-2 px-3 text-sm">{ind.title}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/projects" className="block text-[#1E2455] font-semibold py-3 px-3 text-sm">Projects</Link>

              {/* About */}
              <div>
                <div className="flex items-center justify-between">
                  <Link to="/about" className="flex-1 text-[#1E2455] font-semibold py-3 px-3 text-sm">About</Link>
                  <button onClick={() => setMobileSubmenu(mobileSubmenu === "about" ? null : "about")} className="text-gray-400 p-3">
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === "about" ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {mobileSubmenu === "about" && (
                  <div className="pl-6 space-y-0.5 pb-2">
                    {aboutLinks.map((al) => (
                      <Link key={al.href} to={al.href} className="block text-[#1E2455]/60 hover:text-[#fd6909] py-2 px-3 text-sm">{al.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contact" className="block text-[#1E2455] font-semibold py-3 px-3 text-sm">Contact</Link>

              <Link to="/request-quote" className="block bg-[#fd6909] text-white text-center py-3 rounded-xl text-sm font-bold mt-4 hover:bg-[#e55d00] transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Solutions",
      links: solutions.map((s) => ({ label: s.shortTitle, href: `/solutions/${s.slug}` })),
    },
    {
      title: "Services",
      links: [
        { label: "Consultation & Design", href: "/services/consultation-design" },
        { label: "System Integration", href: "/services/system-integration" },
        { label: "Installation", href: "/services/installation-commissioning" },
        { label: "Maintenance & Support", href: "/services/maintenance-support" },
        { label: "Training & Certification", href: "/services/training-certification" },
        { label: "Project Management", href: "/services/project-management" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Partners", href: "/partners" },
        { label: "Clients", href: "/clients" },
        { label: "Media", href: "/media" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Industries", href: "/industries" },
        { label: "FAQs", href: "/faqs" },
        { label: "Training", href: "/training" },
        { label: "Partner With Us", href: "/partner-with-us" },
        { label: "Request a Quote", href: "/request-quote" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0a0e2a] text-white">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-[#fd6909] to-[#ff8a3d]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to Secure Your Future?</h3>
            <p className="text-white/80 mt-1">Get in touch with our experts for a free consultation.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="bg-white text-[#1E2455] px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Contact Us
            </Link>
            <Link to="/request-quote" className="bg-[#1E2455] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1E2455]/80 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/assets/logo-asg.png" alt="Arab Security Gulf" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{companyInfo.description}</p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-white/40 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{companyInfo.offices[0].address}, {companyInfo.offices[0].city}, {companyInfo.offices[0].country}</span>
              </div>
              <a href={`tel:${companyInfo.offices[0].phone}`} className="flex items-center gap-2 text-white/40 text-sm hover:text-[#fd6909] transition-colors">
                <Phone className="w-4 h-4" /> {companyInfo.offices[0].phone}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 text-white/40 text-sm hover:text-[#fd6909] transition-colors">
                <Mail className="w-4 h-4" /> {companyInfo.email}
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-white/40 text-sm hover:text-[#fd6909] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[
              { icon: <Linkedin className="w-4 h-4" />, href: companyInfo.socialMedia.linkedin },
              { icon: <Facebook className="w-4 h-4" />, href: companyInfo.socialMedia.facebook },
              { icon: <Instagram className="w-4 h-4" />, href: companyInfo.socialMedia.instagram },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="text-white/30 hover:text-[#fd6909] transition-colors">{s.icon}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}