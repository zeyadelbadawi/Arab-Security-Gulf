import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import {
  companyInfo, industries, projects, partners, faqs, trainingSessions,
  newsItems, solutions, services, stats, HERO_IMAGES, PROJECT_IMAGES, getIndustryHeroImage
} from "@/data/siteData";
import {
  ChevronRight, ArrowRight, CheckCircle2, MapPin, Phone, Mail,
  Calendar, Clock, Users, Star, Briefcase, Send, ChevronDown,
  Building2, Award, Target, Heart, Shield, Globe, ExternalLink,
  Facebook, Instagram, Linkedin
} from "lucide-react";
import { useState } from "react";

/* ===== SHARED PAGE HERO ===== */
function PageHero({ title, subtitle, breadcrumbs, image }: {
  title: string; subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
  image: string;
}) {
  return (
    <section className="relative min-h-[320px] md:min-h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e2a]/90 via-[#0a0e2a]/75 to-[#0a0e2a]/50" />
      </div>
      <div className="relative z-10 min-h-[320px] md:min-h-[400px] max-w-7xl mx-auto px-6 flex flex-col justify-end pb-10">
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-4 flex-wrap">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-[#fd6909] transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl lg:text-4xl font-black text-white">{title}</h1>
        <p className="text-white/60 mt-2 max-w-2xl text-lg">{subtitle}</p>
      </div>
    </section>
  );
}

/* ===== ABOUT PAGE ===== */
export function AboutPage() {
  const valueIcons = [<Award className="w-6 h-6" />, <Target className="w-6 h-6" />, <Heart className="w-6 h-6" />, <Users className="w-6 h-6" />, <Shield className="w-6 h-6" />];
  return (
    <Layout>
      <PageHero title="About Arab Security Gulf" subtitle={companyInfo.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} image={HERO_IMAGES.about} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl font-black text-[#1E2455] mt-3">Established in {companyInfo.founded}</h2>
              <p className="text-gray-600 mt-4 leading-relaxed">{companyInfo.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.slice(0, 4).map((s, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-2xl font-black text-[#fd6909]">{s.value}</div>
                    <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-[#1E2455] rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-white/60 text-sm leading-relaxed">{companyInfo.mission}</p>
              </div>
              <div className="bg-[#fd6909] rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-white/80 text-sm leading-relaxed">{companyInfo.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Our Values</span>
            <h2 className="text-3xl font-black text-[#1E2455] mt-3">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {companyInfo.values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#fd6909]/10 flex items-center justify-center text-[#fd6909] mx-auto">
                  {valueIcons[i]}
                </div>
                <h3 className="text-base font-bold text-[#1E2455] mt-4">{v.title}</h3>
                <p className="text-gray-500 text-xs mt-2">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Our Headquarters</span>
            <h2 className="text-3xl font-black text-[#1E2455] mt-3">Visit Us in Kuwait City</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1E2455] to-[#0a0e2a] rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#fd6909]/10 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#fd6909]/5 rounded-full translate-y-1/2 -translate-x-1/4" />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-[#fd6909] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">Headquarters</span>
                  <h3 className="text-2xl font-black text-white">Arab Security Gulf, Kuwait</h3>
                  <div className="mt-5 space-y-3">
                    <p className="flex items-start gap-3 text-white/80 text-sm">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#fd6909]" />
                      12 Floor, Alsoor St, Kuwait City 15000, Kuwait
                    </p>
                    <p className="flex items-center gap-3 text-white/80 text-sm">
                      <Phone className="w-5 h-5 flex-shrink-0 text-[#fd6909]" />
                      {companyInfo.offices.find((o) => o.type === "Headquarters")?.phone}
                    </p>
                    <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-[#fd6909] text-sm font-medium hover:underline">
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      {companyInfo.email}
                    </a>
                  </div>
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Working Hours</p>
                    <p className="text-white/80 text-sm">Sunday – Thursday: 8:00 AM – 5:00 PM</p>
                    <p className="text-red-400/80 text-sm mt-1">Friday & Saturday: Closed</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl h-[250px]">
                  <iframe
                    title="Arab Security Gulf - Kuwait City Headquarters"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.5!2d47.979745!3d29.3623127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf853ff6f56413%3A0xb351a7afbb65146e!2sArab%20Security%20Gulf!5e0!3m2!1sen!2skw!4v1700000000000!5m2!1sen!2skw"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1E2455] rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-white">Certifications & Accreditations</h2>
              <p className="text-white/60 mt-2">Internationally recognized standards ensuring quality and safety.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {companyInfo.certifications.map((c) => (
                <div key={c} className="bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm font-medium flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#fd6909]" /> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ===== INDUSTRIES ===== */
export function IndustriesPage() {
  return (
    <Layout>
      <PageHero title="Industries We Serve" subtitle="Delivering tailored security solutions across 12+ industry sectors in Kuwait and the GCC."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} image={HERO_IMAGES.industries} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <Link key={ind.id} to={`/industries/${ind.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-[#fd6909]/20 transition-all duration-300">
                <h3 className="text-lg font-bold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{ind.title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-3">{ind.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {ind.solutions.map((s) => {
                    const sol = solutions.find((x) => x.slug === s);
                    return sol ? <span key={s} className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-full">{sol.shortTitle}</span> : null;
                  })}
                </div>
                <div className="mt-4 flex items-center gap-1 text-[#fd6909] text-sm font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function IndustryDetail() {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return <Navigate to="/industries" replace />;
  const relatedProjects = projects.filter((p) => p.industry === industry.id);
  const relatedSolutions = solutions.filter((s) => industry.solutions.includes(s.slug));
  const heroImage = getIndustryHeroImage(industry.slug);

  return (
    <Layout>
      <PageHero title={industry.title} subtitle={industry.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.title }]}
        image={heroImage} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-[#1E2455] mb-8">Solutions for {industry.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedSolutions.map((sol) => (
              <Link key={sol.id} to={`/solutions/${sol.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#fd6909]/20 transition-all">
                <h3 className="text-lg font-bold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{sol.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{sol.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {sol.subSolutions.slice(0, 4).map((sub) => (
                    <span key={sub.slug} className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-full">{sub.name}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-black text-[#1E2455] mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <Link key={p.id} to={`/projects/${p.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                  <span className="text-xs bg-[#fd6909]/10 text-[#fd6909] px-2.5 py-1 rounded-full font-medium">{p.year}</span>
                  <h3 className="text-base font-bold text-[#1E2455] mt-3 group-hover:text-[#fd6909] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{p.description}</p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mt-3"><MapPin className="w-3.5 h-3.5" /> {p.location}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

/* ===== PROJECTS ===== */
export function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <PageHero title="Our Projects" subtitle="1,200+ successful projects delivered across Kuwait and the GCC region."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]} image={HERO_IMAGES.projects} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === c ? "bg-[#fd6909] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Link key={p.id} to={`/projects/${p.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={PROJECT_IMAGES[p.slug] || HERO_IMAGES.projects}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="text-xs bg-[#fd6909] text-white px-2.5 py-1 rounded-full font-medium">{p.category}</span>
                    <span className="text-xs text-white/80">{p.year}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{p.description}</p>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mt-3"><MapPin className="w-3.5 h-3.5" /> {p.location}</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.solutions.map((s) => {
                      const sol = solutions.find((x) => x.slug === s);
                      return sol ? <span key={s} className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-full">{sol.shortTitle}</span> : null;
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const [activeVideoTab, setActiveVideoTab] = useState<string | null>(null);
  const project = projects.find((p) => p.slug === slug);

  const projectVideos = slug === "its-egypt-radar-smart-system" ? [
    { id: "arabic", label: "Arabic Video", url: "https://imoukuwait.com/wp-content/uploads/2026/04/ASG-ITS-Solution-HQ.mp4" },
    { id: "english", label: "English Video", url: "https://imoukuwait.com/wp-content/uploads/2026/04/ASG-ITS-Solution-HQENG.mp4" },
    { id: "french", label: "French Video", url: "https://imoukuwait.com/wp-content/uploads/2026/04/ASG-ITS-Solution-HQFR.mp4" },
  ] : [];

  if (!project) return <Navigate to="/projects" replace />;
  const relatedSolutions = solutions.filter((s) => project.solutions.includes(s.slug));

  // Use real gallery images from scraped data, or fallback to generated images
  const projectMainImage = PROJECT_IMAGES[project.slug] || HERO_IMAGES.projects;
  const galleryImages = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [
        projectMainImage,
        ...relatedSolutions.slice(0, 3).map((sol) => HERO_IMAGES[sol.slug as keyof typeof HERO_IMAGES] || HERO_IMAGES.solutions),
      ];

  return (
    <Layout>
      <PageHero title={project.title} subtitle={project.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: project.title }]}
        image={projectMainImage} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-[#1E2455] mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>

              {/* Challenge & Solution */}
              {project.challenge && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#1E2455] mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#fd6909]" /> The Challenge
                  </h3>
                  <p className="text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-5 border border-gray-100">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-[#1E2455] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" /> Our Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed bg-green-50 rounded-xl p-5 border border-green-100">{project.solution}</p>
                </div>
              )}

              {/* Project Gallery */}
              <h3 className="text-xl font-bold text-[#1E2455] mt-8 mb-4">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="col-span-2 rounded-xl overflow-hidden h-64">
                  <img src={galleryImages[0]} alt={`${project.title} - Main`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                {galleryImages.slice(1).map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden h-40">
                    <img src={img} alt={`${project.title} - ${idx + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                ))}
              </div>

              {/* Project Videos - only for ITS Egypt Radar */}
              {projectVideos.length > 0 && (
                <div className="mt-8 mb-8">
                  <h3 className="text-xl font-bold text-[#1E2455] mb-4">Project Videos</h3>
                  <div className="flex gap-2 mb-4">
                    {projectVideos.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setActiveVideoTab(activeVideoTab === v.id ? null : v.id)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          activeVideoTab === v.id
                            ? "bg-[#fd6909] text-white shadow-lg shadow-[#fd6909]/25"
                            : "bg-gray-100 text-[#1E2455] hover:bg-gray-200"
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                  {activeVideoTab && (
                    <div className="rounded-xl overflow-hidden bg-black aspect-video">
                      <video
                        key={activeVideoTab}
                        controls
                        autoPlay
                        className="w-full h-full"
                        src={projectVideos.find((v) => v.id === activeVideoTab)?.url}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {!activeVideoTab && (
                <div className="rounded-xl bg-gray-50 border border-gray-200 aspect-video flex items-center justify-center p-5">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-medium">Select a language tab above to play the video</p>
                </div>
              </div>
                  )}
                </div>
              )}

              <h3 className="text-xl font-bold text-[#1E2455] mt-8 mb-4">Solutions Deployed</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedSolutions.map((sol) => (
                  <Link key={sol.id} to={`/solutions/${sol.slug}`}
                    className="group bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#fd6909]/20 hover:shadow-md transition-all">
                    <h4 className="font-bold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{sol.title}</h4>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">{sol.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1E2455] mb-4">Project Details</h3>
                <div className="space-y-4">
                  {[
                    { label: "Client", value: project.client || project.title },
                    { label: "Category", value: project.category },
                    { label: "Location", value: project.location },
                    { label: "Year", value: project.year },
                    ...(project.duration ? [{ label: "Duration", value: project.duration }] : []),
                  ].map((d) => (
                    <div key={d.label}>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">{d.label}</span>
                      <p className="text-[#1E2455] font-semibold mt-0.5">{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#fd6909] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Start Your Project</h3>
                <p className="text-white/80 text-sm mb-4">Get a free consultation for your project.</p>
                <Link to="/request-quote" className="block bg-white text-[#1E2455] text-center py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-colors">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


/* ===== PARTNERS ===== */
const partnerData: { name: string; logo: string; categories: string[]; description: string; website: string }[] = [
  { name: "Cisco", logo: "https://www.arab-security.com/assets/partners/1.png", categories: ["Light Current-Elv"], description: "Global leader in networking, security, and collaboration technology.", website: "https://cisco.com/" },
  { name: "Axis Communications", logo: "https://www.arab-security.com/assets/partners/2.png", categories: ["Integrated Security"], description: "World leader in network video surveillance and analytics.", website: "https://axis.com/" },
  { name: "Honeywell", logo: "https://www.arab-security.com/assets/partners/3.png", categories: ["Fire Life-Safety", "Smart Intelligent"], description: "Global technology company providing fire safety and building automation solutions.", website: "https://honeywell.com/" },
  { name: "Bosch Security", logo: "https://www.arab-security.com/assets/partners/4.png", categories: ["Fire Life-Safety", "Integrated Security", "Light Current-Elv"], description: "Leading provider of security, safety, and communications products.", website: "https://boschsecurity.com/" },
  { name: "CommScope", logo: "https://www.arab-security.com/assets/partners/5.png", categories: ["Light Current-Elv"], description: "Global leader in infrastructure solutions for communications networks.", website: "https://commscope.com/" },
  { name: "Panduit", logo: "https://www.arab-security.com/assets/partners/6.png", categories: ["Light Current-Elv"], description: "Leading provider of physical infrastructure solutions for enterprise environments.", website: "https://panduit.com/" },
  { name: "HID Global", logo: "https://www.arab-security.com/assets/partners/7.png", categories: ["Access Control"], description: "World leader in trusted identity solutions and access control.", website: "https://hidglobal.com/" },
  { name: "Milestone Systems", logo: "https://www.arab-security.com/assets/partners/8.png", categories: ["Integrated Security"], description: "Leading provider of open platform video management software.", website: "https://milestonesys.com/" },
  { name: "CAME", logo: "https://www.arab-security.com/assets/partners/9.png", categories: ["Physical Security"], description: "Italian leader in automated entrance and parking systems.", website: "https://came.com/" },
  { name: "NICE Systems", logo: "https://www.arab-security.com/assets/partners/10.png", categories: ["Parking Traffic", "Physical Security"], description: "Provider of intelligent parking and traffic management solutions.", website: "https://nice.com/" },
  { name: "Notifier by Honeywell", logo: "https://www.arab-security.com/assets/partners/11.png", categories: ["Fire Life-Safety"], description: "World's largest manufacturer of engineered fire alarm systems.", website: "https://notifier.com/" },
  { name: "ZKTeco", logo: "https://www.arab-security.com/assets/partners/12.png", categories: ["Access Control"], description: "Global leader in biometric verification and security solutions.", website: "https://zkteco.com/" },
  { name: "Schneider Electric", logo: "https://www.arab-security.com/assets/partners/13.png", categories: ["Smart Intelligent"], description: "Global specialist in energy management and automation.", website: "https://se.com/" },
  { name: "Smiths Detection", logo: "https://www.arab-security.com/assets/partners/14.png", categories: ["Xray Inspection"], description: "Global leader in threat detection and screening technologies.", website: "https://smithsdetection.com/" },
  { name: "Samsung", logo: "https://www.arab-security.com/assets/partners/15.png", categories: ["Audio Visual"], description: "Global technology leader in displays and digital signage solutions.", website: "https://samsung.com/" },
  { name: "Crestron", logo: "https://www.arab-security.com/assets/partners/16.png", categories: ["Audio Visual"], description: "World leader in advanced control and automation systems for AV.", website: "https://crestron.com/" },
  { name: "AWS", logo: "https://www.arab-security.com/assets/partners/17.png", categories: ["Light Current-Elv"], description: "Cloud computing platform offering scalable infrastructure, networking, and enterprise services.", website: "https://aws.amazon.com/" },
  { name: "Lenovo", logo: "https://www.arab-security.com/assets/partners/18.png", categories: ["Light Current-Elv"], description: "Global technology company providing enterprise computing devices and infrastructure solutions.", website: "https://www.lenovo.com/" },
  { name: "HP", logo: "https://www.arab-security.com/assets/partners/19.png", categories: ["Light Current-Elv"], description: "Global provider of business computing, printing, and workplace technology solutions.", website: "https://www.hp.com/" },
  { name: "Microsoft", logo: "https://www.arab-security.com/assets/partners/20.png", categories: ["Light Current-Elv"], description: "Global technology leader offering cloud, productivity, and enterprise software solutions.", website: "https://www.microsoft.com/" },
  { name: "Dahua Technology", logo: "https://www.arab-security.com/assets/partners/21.png", categories: ["Integrated Security"], description: "Leading provider of video surveillance, AIoT, and security solutions.", website: "https://www.dahuatech.com/" },
  { name: "FAAC", logo: "https://www.arab-security.com/assets/partners/22.png", categories: ["Physical Security", "Parking Traffic"], description: "International leader in access automation, gate systems, and parking control solutions.", website: "https://www.faacgroup.com/" },
  { name: "KSTAR", logo: "https://www.arab-security.com/assets/partners/23.png", categories: ["Light Current-Elv"], description: "Provider of power electronics, UPS systems, and infrastructure support solutions.", website: "https://www.kstar.com/" },
  { name: "ITC", logo: "https://www.arab-security.com/assets/partners/24.png", categories: ["Audio Visual"], description: "Provider of professional AV, public address, conference, and intelligent control systems.", website: "https://www.itc-pa.com/" },
  { name: "SKIDATA", logo: "https://www.arab-security.com/assets/partners/25.png", categories: ["Parking Traffic", "Access Control"], description: "Global specialist in access management and parking solutions.", website: "https://www.skidata.com/" },
  { name: "ATEN", logo: "https://www.arab-security.com/assets/partners/26.png", categories: ["Audio Visual", "Light Current-Elv"], description: "Provider of connectivity, KVM, AV, and IT infrastructure management solutions.", website: "https://www.aten.com/" },
  { name: "Vicon", logo: "https://www.arab-security.com/assets/partners/27.png", categories: ["Integrated Security"], description: "Provider of advanced video surveillance and security management solutions.", website: "https://www.vicon-security.com/" },
  { name: "HUB Parking Technology", logo: "https://www.arab-security.com/assets/partners/28.png", categories: ["Parking Traffic"], description: "Provider of intelligent parking access and revenue control systems.", website: "https://www.hubparking.com/" },
  { name: "IMOU", logo: "https://www.arab-security.com/assets/partners/29.png", categories: ["Integrated Security"], description: "Smart security brand delivering cameras and connected protection solutions.", website: "https://www.imoulife.com/" },
  { name: "HPE Aruba Networking", logo: "https://www.arab-security.com/assets/partners/30.png", categories: ["Light Current-Elv"], description: "Enterprise networking solutions provider for wired, wireless, and secure connectivity.", website: "https://www.arubanetworks.com/" },
  { name: "VMware", logo: "https://www.arab-security.com/assets/partners/31.png", categories: ["Light Current-Elv"], description: "Cloud infrastructure and virtualization technology provider for enterprise environments.", website: "https://www.vmware.com/" },
  { name: "Extron", logo: "https://www.arab-security.com/assets/partners/32.png", categories: ["Audio Visual"], description: "Leading provider of professional AV system integration and control technologies.", website: "https://www.extron.com/" },
  { name: "Biamp", logo: "https://www.arab-security.com/assets/partners/33.png", categories: ["Audio Visual"], description: "Provider of professional audio and communication solutions for enterprise spaces.", website: "https://www.biamp.com/" },
  { name: "Nedap", logo: "https://www.arab-security.com/assets/partners/34.png", categories: ["Access Control"], description: "Technology company specializing in access control, security, and identification systems.", website: "https://www.nedap.com/" },
  { name: "Absen", logo: "https://www.arab-security.com/assets/partners/35.png", categories: ["Audio Visual"], description: "Global manufacturer of LED display and digital visual communication solutions.", website: "https://www.absen.com/" },
  { name: "Fortinet", logo: "https://www.arab-security.com/assets/partners/36.png", categories: ["Light Current-Elv"], description: "Cybersecurity leader offering secure networking and enterprise protection solutions.", website: "https://www.fortinet.com/" },
  { name: "Dell Technologies", logo: "https://www.arab-security.com/assets/partners/37.png", categories: ["Light Current-Elv"], description: "Global technology company providing computing, infrastructure, and enterprise IT solutions.", website: "https://www.dell.com/" },
  { name: "AMG System", logo: "https://www.arab-security.com/assets/partners/38.png", categories: ["Light Current-Elv", "Integrated Security"], description: "Provider of advanced network transmission and communication solutions for security and infrastructure systems.", website: "https://www.amgsystems.com/" },
  { name: "Western Digital", logo: "https://www.arab-security.com/assets/partners/39.png", categories: ["Integrated Security", "Light Current-Elv"], description: "Global provider of data storage technologies and surveillance-grade storage solutions.", website: "https://www.westerndigital.com/" },
  { name: "Gunnebo", logo: "https://www.arab-security.com/assets/partners/40.png", categories: ["Physical Security", "Access Control"], description: "Global security group specializing in entrance control, access management, and physical security solutions.", website: "https://www.gunnebo.com/" },
  { name: "Ruptela", logo: "https://www.arab-security.com/assets/partners/41.png", categories: ["Parking Traffic", "Light Current-Elv"], description: "Telematics and fleet management technology provider delivering tracking and mobility solutions.", website: "https://ruptela.com/" },
  { name: "Huawei eKit", logo: "https://www.arab-security.com/assets/partners/42.png", categories: ["Light Current-Elv", "Smart Intelligent"], description: "Enterprise networking and digital infrastructure solutions brand from Huawei for business environments.", website: "https://e.huawei.com/" },
  { name: "QNET", logo: "https://www.arab-security.com/assets/partners/43.png", categories: ["Light Current-Elv"], description: "Technology solutions provider supporting integrated communication and infrastructure requirements.", website: "https://www.qnet.net/" },
  { name: "Ruijie Reyee", logo: "https://www.arab-security.com/assets/partners/44.png", categories: ["Light Current-Elv"], description: "Provider of networking equipment and cloud-managed connectivity solutions for enterprise and commercial deployments.", website: "https://www.reyee.ruijie.com/" },
  { name: "Infosec", logo: "https://www.arab-security.com/assets/partners/45.png", categories: ["Light Current-Elv"], description: "Provider of power protection, UPS, and backup energy solutions for critical systems.", website: "https://www.infosecups.com/" },
  { name: "IDIS", logo: "https://www.arab-security.com/assets/partners/46.png", categories: ["Integrated Security"], description: "Manufacturer of video surveillance, recording, and end-to-end security monitoring solutions.", website: "https://www.idisglobal.com/" },
  { name: "Hewlett Packard Enterprise", logo: "https://www.arab-security.com/assets/partners/47.png", categories: ["Light Current-Elv"], description: "Enterprise infrastructure and IT solutions provider for networking, servers, storage, and hybrid cloud.", website: "https://www.hpe.com/" },
  { name: "Tansa Security", logo: "https://www.arab-security.com/assets/partners/48.png", categories: ["Access Control", "Physical Security"], description: "Manufacturer of pedestrian access control systems, turnstiles, and secure entrance solutions.", website: "https://www.tansa.com/" },
  { name: "Hanwha Vision", logo: "https://www.arab-security.com/assets/partners/49.png", categories: ["Integrated Security"], description: "Global provider of video surveillance cameras, AI-powered monitoring, and integrated security solutions.", website: "https://www.hanwhavision.com/" },
  { name: "Centurion", logo: "https://www.arab-security.com/assets/partners/50.png", categories: ["Physical Security", "Access Control"], description: "Specialist in gate automation, access control, and perimeter security systems.", website: "https://www.centsys.com/" },
  { name: "Magnetic Access", logo: "https://www.arab-security.com/assets/partners/51.png", categories: ["Parking Traffic", "Access Control"], description: "Provider of vehicle barriers, pedestrian gates, and access management systems.", website: "https://www.magnetic-access.com/" },
  { name: "DEUTSCHTEC", logo: "https://www.arab-security.com/assets/partners/52.png", categories: ["Light Current-Elv"], description: "Technology and automation solutions provider for infrastructure and specialized security applications.", website: "https://www.deutschtec.de/" },
  { name: "Arthur Holm", logo: "https://www.arab-security.com/assets/partners/53.png", categories: ["Audio Visual"], description: "Premium AV manufacturer specializing in motorized monitors, conference technology, and presentation systems.", website: "https://www.arthurholm.com/" },
  { name: "AMPLED", logo: "https://www.arab-security.com/assets/partners/54.png", categories: ["Audio Visual"], description: "LED display solutions provider focused on digital visual communication and display technologies.", website: "https://www.ampled.com/" },
  { name: "Astrophysics", logo: "https://www.arab-security.com/assets/partners/55.png", categories: ["Xray Inspection"], description: "Manufacturer of X-ray screening and inspection systems for critical security environments.", website: "https://www.astrophysicsinc.com/" },
  { name: "Auveo", logo: "https://www.arab-security.com/assets/partners/56.png", categories: ["Audio Visual"], description: "Professional AV and communication technology solutions provider for enterprise environments.", website: "https://www.auveo.com/" },
  { name: "Software House", logo: "https://www.arab-security.com/assets/partners/57.png", categories: ["Access Control", "Integrated Security"], description: "Access control and security management systems brand delivering enterprise-grade security solutions.", website: "https://www.swhouse.com/" },
  { name: "Kantech", logo: "https://www.arab-security.com/assets/partners/58.png", categories: ["Access Control"], description: "Integrated access control technologies for commercial and enterprise security environments.", website: "https://www.kantech.com/" },
  { name: "Kathrein", logo: "https://www.arab-security.com/assets/partners/59.png", categories: ["Light Current-Elv"], description: "Provider of communication, antenna, and connected infrastructure technologies.", website: "https://www.kathrein.com/" },
];

const partnerCategories = Array.from(new Set(partnerData.flatMap((p) => p.categories))).sort();

export function PartnersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const allFilters = ["All", ...partnerCategories];
  const filteredPartners = activeFilter === "All"
    ? partnerData
    : partnerData.filter((p) => p.categories.includes(activeFilter));

  return (
    <Layout>
      <PageHero title="Technology Partners" subtitle="We partner with the world's leading technology brands to deliver best-in-class solutions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partners" }]} image={HERO_IMAGES.partners} />

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-black text-[#fd6909]">{partnerData.length}+</div>
              <div className="text-gray-500 text-sm mt-1">Technology Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#1E2455]">{partnerCategories.length}</div>
              <div className="text-gray-500 text-sm mt-1">Solution Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#1E2455]">25+</div>
              <div className="text-gray-500 text-sm mt-1">Years of Partnership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="py-16 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#fd6909] text-xs font-bold uppercase tracking-[0.2em]">Technology Partners</span>
            <h2 className="text-3xl font-black text-[#1E2455] mt-3">Our Partner Ecosystem</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Each partnership is carefully selected to ensure we deliver the highest quality solutions.</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allFilters.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === cat ? "bg-[#fd6909] text-white shadow-lg shadow-[#fd6909]/25" : "bg-white text-gray-600 border border-gray-200 hover:border-[#fd6909]/30 hover:text-[#fd6909]"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPartners.map((partner) => (
              <div key={partner.name} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#fd6909]/20 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center p-2 group-hover:bg-[#fd6909]/5 transition-colors">
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{partner.name}</h3>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {partner.categories.map((cat) => (
                        <span key={cat} className="text-[10px] bg-[#fd6909]/10 text-[#fd6909] px-2 py-0.5 rounded-full font-medium">{cat}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed line-clamp-2">{partner.description}</p>
                <a href={partner.website} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#fd6909] text-sm font-semibold mt-4 hover:underline group-hover:gap-2 transition-all">
                  Visit Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="bg-[#1E2455] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white">Partner With Us</h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">Interested in becoming a technology partner? Let's explore collaboration opportunities.</p>
          <Link to="/partner-with-us" className="inline-flex items-center gap-2 bg-[#fd6909] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e55d00] transition-colors mt-8">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}

/* ===== CLIENTS ===== */
const clientData: { category: string; clients: { name: string; logo: string }[] }[] = [
  {
    category: "Government",
    clients: [
      { name: "National Organization for Potable Water", logo: "https://www.arab-security.com/assets/clients/1.png" },
      { name: "Ministry of Interior", logo: "https://www.arab-security.com/assets/clients/2.png" },
      { name: "Military Production", logo: "https://www.arab-security.com/assets/clients/20.png" },
      { name: "Alexandria Governorate", logo: "https://www.arab-security.com/assets/clients/21.png" },
      { name: "Administrative Control Authority", logo: "https://www.arab-security.com/assets/clients/22.png" },
      { name: "Ministry of Defense", logo: "https://www.arab-security.com/assets/clients/23.png" },
      { name: "Egyptian Ministry of Defense", logo: "https://www.arab-security.com/assets/clients/84.png" },
    ],
  },
  {
    category: "Commercial",
    clients: [
      { name: "The Walk", logo: "https://www.arab-security.com/assets/clients/4.png" },
      { name: "The Chedi Hotel & Residences", logo: "https://www.arab-security.com/assets/clients/41.png" },
      { name: "The Three Corners Ocean View Hotel", logo: "https://www.arab-security.com/assets/clients/42.png" },
      { name: "Barceló Tiran Sharm", logo: "https://www.arab-security.com/assets/clients/43.png" },
      { name: "SECON Nile Towers", logo: "https://www.arab-security.com/assets/clients/44.png" },
      { name: "Sofitel Hotels & Resorts", logo: "https://www.arab-security.com/assets/clients/45.png" },
      { name: "IL Mercato Hotel & Spa", logo: "https://www.arab-security.com/assets/clients/46.png" },
      { name: "Blue Resorts", logo: "https://www.arab-security.com/assets/clients/47.png" },
      { name: "Majid Al Futtaim", logo: "https://www.arab-security.com/assets/clients/49.png" },
      { name: "El Araby", logo: "https://www.arab-security.com/assets/clients/58.png" },
      { name: "Fathalla", logo: "https://www.arab-security.com/assets/clients/60.png" },
      { name: "LuLu Hypermarket", logo: "https://www.arab-security.com/assets/clients/61.png" },
      { name: "Carrefour", logo: "https://www.arab-security.com/assets/clients/62.png" },
      { name: "Citystars Heliopolis", logo: "https://www.arab-security.com/assets/clients/63.png" },
      { name: "Mall of Arabia", logo: "https://www.arab-security.com/assets/clients/75.png" },
      { name: "WOSDAC World Sport Academy", logo: "https://www.arab-security.com/assets/clients/81.png" },
      { name: "Al Ahly SC", logo: "https://www.arab-security.com/assets/clients/82.png" },
      { name: "Proxy S.C", logo: "https://www.arab-security.com/assets/clients/83.png" },
    ],
  },
  {
    category: "Education",
    clients: [
      { name: "Sinai University", logo: "https://www.arab-security.com/assets/clients/6.png" },
      { name: "Mansoura University", logo: "https://www.arab-security.com/assets/clients/7.png" },
      { name: "Nile University", logo: "https://www.arab-security.com/assets/clients/8.png" },
    ],
  },
  {
    category: "Infrastructure",
    clients: [
      { name: "Cairo Electricity Production Company", logo: "https://www.arab-security.com/assets/clients/10.png" },
      { name: "East Delta Electricity Production Company", logo: "https://www.arab-security.com/assets/clients/11.png" },
      { name: "Metro", logo: "https://www.arab-security.com/assets/clients/12.png" },
      { name: "Hassan Allam Trading & Engineering", logo: "https://www.arab-security.com/assets/clients/79.png" },
    ],
  },
  {
    category: "Healthcare",
    clients: [
      { name: "Ministry of Health and Population", logo: "https://www.arab-security.com/assets/clients/14.png" },
      { name: "Health Insurance Organization", logo: "https://www.arab-security.com/assets/clients/15.png" },
      { name: "National Cancer Institute", logo: "https://www.arab-security.com/assets/clients/16.png" },
      { name: "Elaraby Hospital", logo: "https://www.arab-security.com/assets/clients/17.png" },
      { name: "As-Salam International Hospital", logo: "https://www.arab-security.com/assets/clients/18.png" },
      { name: "Capital Medical City", logo: "https://www.arab-security.com/assets/clients/74.png" },
    ],
  },
  {
    category: "Enterprise",
    clients: [
      { name: "QNB Al Ahli", logo: "https://www.arab-security.com/assets/clients/25.png" },
      { name: "Banque Misr", logo: "https://www.arab-security.com/assets/clients/26.png" },
      { name: "National Bank of Kuwait", logo: "https://www.arab-security.com/assets/clients/27.png" },
      { name: "Banque du Caire", logo: "https://www.arab-security.com/assets/clients/77.png" },
      { name: "Faisal Islamic Bank of Egypt", logo: "https://www.arab-security.com/assets/clients/78.png" },
    ],
  },
  {
    category: "Industrial",
    clients: [
      { name: "Suez Oil Processing Company", logo: "https://www.arab-security.com/assets/clients/29.png" },
      { name: "Petromaint", logo: "https://www.arab-security.com/assets/clients/30.png" },
      { name: "Total", logo: "https://www.arab-security.com/assets/clients/31.png" },
      { name: "NPC", logo: "https://www.arab-security.com/assets/clients/32.png" },
      { name: "E22", logo: "https://www.arab-security.com/assets/clients/34.png" },
      { name: "Pepsi", logo: "https://www.arab-security.com/assets/clients/35.png" },
      { name: "Ezz Steel", logo: "https://www.arab-security.com/assets/clients/36.png" },
      { name: "GLC Paints", logo: "https://www.arab-security.com/assets/clients/37.png" },
      { name: "Beyti", logo: "https://www.arab-security.com/assets/clients/38.png" },
      { name: "Cemex", logo: "https://www.arab-security.com/assets/clients/39.png" },
      { name: "TotalEnergies", logo: "https://www.arab-security.com/assets/clients/64.png" },
      { name: "Suez Oil Processing Co.", logo: "https://www.arab-security.com/assets/clients/65.png" },
      { name: "ChillOut Gas Stations", logo: "https://www.arab-security.com/assets/clients/66.png" },
      { name: "Nasr Petroleum Company", logo: "https://www.arab-security.com/assets/clients/67.png" },
      { name: "Egyptian Refining Company", logo: "https://www.arab-security.com/assets/clients/68.png" },
      { name: "OGS Oil & Gas Skills", logo: "https://www.arab-security.com/assets/clients/69.png" },
      { name: "EPC", logo: "https://www.arab-security.com/assets/clients/70.png" },
      { name: "Petroleum Pipelines Co.", logo: "https://www.arab-security.com/assets/clients/71.png" },
      { name: "Middle East Oil Refinery", logo: "https://www.arab-security.com/assets/clients/72.png" },
      { name: "Petrojet", logo: "https://www.arab-security.com/assets/clients/73.png" },
    ],
  },
  {
    category: "Real-Estate",
    clients: [
      { name: "Ahly Sabbour", logo: "https://www.arab-security.com/assets/clients/50.png" },
      { name: "Orascom Construction", logo: "https://www.arab-security.com/assets/clients/51.png" },
      { name: "Alburouj", logo: "https://www.arab-security.com/assets/clients/52.png" },
      { name: "Orascom Development", logo: "https://www.arab-security.com/assets/clients/53.png" },
      { name: "Madinaty", logo: "https://www.arab-security.com/assets/clients/54.png" },
      { name: "Granda Al Shorouk", logo: "https://www.arab-security.com/assets/clients/55.png" },
      { name: "Jayd New Cairo", logo: "https://www.arab-security.com/assets/clients/56.png" },
      { name: "Dar Misr", logo: "https://www.arab-security.com/assets/clients/57.png" },
      { name: "TMG", logo: "https://www.arab-security.com/assets/clients/80.png" },
    ],
  },
];

export function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...clientData.map((c) => c.category)];
  const totalClients = clientData.reduce((acc, c) => acc + c.clients.length, 0);

  return (
    <Layout>
      <PageHero title="Our Clients" subtitle="Trusted by leading organizations across enterprise, government, industrial, and commercial sectors."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]} image={HERO_IMAGES.clients} />

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-black text-[#fd6909]">{totalClients}+</div>
              <div className="text-gray-500 text-sm mt-1">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#1E2455]">{clientData.length}</div>
              <div className="text-gray-500 text-sm mt-1">Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#1E2455]">1,200+</div>
              <div className="text-gray-500 text-sm mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#1E2455]">25+</div>
              <div className="text-gray-500 text-sm mt-1">Years of Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-16 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#fd6909] text-xs font-bold uppercase tracking-[0.2em]">Client Portfolio</span>
            <h2 className="text-3xl font-black text-[#1E2455] mt-3">Organizations We Serve</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat ? "bg-[#fd6909] text-white shadow-lg shadow-[#fd6909]/25" : "bg-white text-gray-600 border border-gray-200 hover:border-[#fd6909]/30 hover:text-[#fd6909]"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Client Grid by Category */}
          <div className="space-y-12">
            {clientData
              .filter((section) => activeCategory === "All" || section.category === activeCategory)
              .map((section) => (
                <div key={section.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-7 bg-[#fd6909] rounded-full" />
                    <h3 className="text-xl font-bold text-[#1E2455]">{section.category}</h3>
                    <span className="text-gray-400 text-sm ml-2">({section.clients.length})</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {section.clients.map((client) => (
                      <div key={client.name} className="group bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-xl hover:border-[#fd6909]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[140px]">
                        <div className="w-16 h-16 flex items-center justify-center mb-3">
                          <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                        </div>
                        <span className="text-xs text-gray-600 font-medium leading-tight line-clamp-2">{client.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E2455] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white">Join Our Growing Client Base</h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">Let's discuss how Arab Security Gulf can support your organization.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#fd6909] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e55d00] transition-colors mt-8">
            Get a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}

/* ===== MEDIA ===== */
export function MediaPage() {
  return (
    <Layout>
      <PageHero title="Media Center" subtitle="Latest news, events, and press releases from Arab Security Gulf."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Media" }]} image={HERO_IMAGES.media} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((n) => (
              <div key={n.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                <span className="text-xs bg-[#fd6909]/10 text-[#fd6909] px-2.5 py-1 rounded-full font-medium">{n.category}</span>
                <h3 className="text-lg font-bold text-[#1E2455] mt-3">{n.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{n.excerpt}</p>
                <div className="flex items-center gap-1 text-gray-400 text-xs mt-3"><Calendar className="w-3.5 h-3.5" /> {n.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ===== FAQs ===== */
export function FAQsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <Layout>
      <PageHero title="Frequently Asked Questions" subtitle="Find answers to common questions about our solutions and services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]} image={HERO_IMAGES.faqs} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-[#1E2455] font-semibold text-sm pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                </button>
                {openIdx === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ===== TRAINING ===== */
export function TrainingPage() {
  return (
    <Layout>
      <PageHero title="Training & Development" subtitle="Professional training programs and vendor certifications for security professionals."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Training" }]} image={HERO_IMAGES.training} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingSessions.map((t) => (
              <div key={t.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                <span className="text-xs bg-[#fd6909]/10 text-[#fd6909] px-2.5 py-1 rounded-full font-medium">{t.category}</span>
                <h3 className="text-lg font-bold text-[#1E2455] mt-3">{t.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{t.description}</p>
                <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {t.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {t.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ===== CAREERS ===== */
export function CareersPage() {
  const openings = [
    { title: "Senior Security Systems Engineer", dept: "Engineering", location: "Kuwait City", type: "Full-time" },
    { title: "Fire Alarm Technician", dept: "Fire & Safety", location: "Ahmadi", type: "Full-time" },
    { title: "Project Manager - ELV", dept: "Project Management", location: "Kuwait City", type: "Full-time" },
    { title: "CCTV Installation Technician", dept: "Operations", location: "Kuwait City", type: "Full-time" },
    { title: "Sales Engineer - AV Solutions", dept: "Sales", location: "Kuwait City", type: "Full-time" },
    { title: "BMS Programmer", dept: "Smart Solutions", location: "Kuwait City", type: "Full-time" },
  ];
  return (
    <Layout>
      <PageHero title="Careers at ASG" subtitle="Join our team of 500+ professionals and build your career in security technology."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]} image={HERO_IMAGES.careers} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1E2455]">Current Openings</h2>
            <p className="text-gray-500 mt-3">Explore exciting career opportunities with Arab Security Gulf.</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {openings.map((job, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#fd6909]/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-[#1E2455]">{job.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="bg-[#fd6909] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#e55d00] transition-colors whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ===== CONTACT ===== */
export function ContactPage() {
  const headquarters = companyInfo.offices.find((o) => o.type === "Headquarters");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    solution: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: "gulf-form",
          sheetName: "gulf form",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitStatus({ type: "success", message: "Your message has been sent successfully." });
      setFormData({ name: "", email: "", phone: "", company: "", solution: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to submit form",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero with Map Background */}
      <section className="relative">
        {/* Full-width Map */}
        <div className="w-full h-[400px] lg:h-[450px]">
          <iframe
            title="Arab Security Gulf - Kuwait City Headquarters"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.5!2d47.979745!3d29.3623127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf853ff6f56413%3A0xb351a7afbb65146e!2sArab%20Security%20Gulf!5e0!3m2!1sen!2skw!4v1700000000000!5m2!1sen!2skw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
        {/* Overlay gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8f9fc] to-transparent pointer-events-none" />
      </section>

      {/* Contact Info Cards - Floating over map transition */}
      <section className="relative -mt-20 z-10 xpb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Location Card */}
            <div className="bg-white rounded-2xl p-7 shadow-xl shadow-black/5 border border-gray-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fd6909] to-[#ff8c3a] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-[#1B2A4A]">Our Location</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                12 Floor, Alsoor St<br />Kuwait City 15000, Kuwait
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-7 shadow-xl shadow-black/5 border border-gray-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B2A4A] to-[#2d4270] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-[#1B2A4A]">Call Us</h3>
              <p className="text-gray-500 text-sm mt-2">{headquarters?.phone}</p>
              <p className="text-gray-400 text-xs mt-1">Sun - Thu, 8AM - 5PM</p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-7 shadow-xl shadow-black/5 border border-gray-100/80 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fd6909] to-[#ff8c3a] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-[#1B2A4A]">Email Us</h3>
              <a href={`mailto:${companyInfo.email}`} className="text-[#fd6909] text-sm font-medium mt-2 block hover:underline">
                {companyInfo.email}
              </a>
              <p className="text-gray-400 text-xs mt-1">We reply within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-16 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - Info Panel */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="text-[#fd6909] text-xs font-bold uppercase tracking-[0.2em]">Get In Touch</span>
                <h2 className="text-3xl lg:text-4xl font-black text-[#1B2A4A] mt-3 leading-tight">
                  Let&apos;s Discuss Your<br />
                  <span className="text-[#fd6909]">Security Needs</span>
                </h2>
                <p className="text-gray-500 mt-4 leading-relaxed">
                  Whether you need a comprehensive security system, fire safety solutions, or smart building technology — our team is ready to help you find the perfect solution.
                </p>
              </div>

              {/* Working Hours */}
              <div className="bg-[#1B2A4A] rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fd6909]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <h3 className="text-white font-bold text-lg flex items-center gap-2 mb-5">
                    <Clock className="w-5 h-5 text-[#fd6909]" /> Working Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/70 text-sm">Sunday - Thursday</span>
                      <span className="text-white font-semibold text-sm">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/70 text-sm">Friday</span>
                      <span className="text-red-400 font-semibold text-sm">Closed</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-white/70 text-sm">Saturday</span>
                      <span className="text-red-400 font-semibold text-sm">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-[#1B2A4A] font-bold text-sm uppercase tracking-wider mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  <a href={companyInfo.socialMedia.facebook || "https://facebook.com/arabsecuritygulf"} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#1B2A4A] hover:bg-[#fd6909] hover:border-[#fd6909] hover:text-white transition-all duration-300 shadow-sm"
                    title="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href={companyInfo.socialMedia.instagram || "https://instagram.com/arabsecuritygulf"} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#1B2A4A] hover:bg-[#fd6909] hover:border-[#fd6909] hover:text-white transition-all duration-300 shadow-sm"
                    title="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={companyInfo.socialMedia.linkedin || "https://linkedin.com/company/arabsecuritygulf"} target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#1B2A4A] hover:bg-[#fd6909] hover:border-[#fd6909] hover:text-white transition-all duration-300 shadow-sm"
                    title="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-black/5 border border-gray-100/80">
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-1">Send Us a Message</h3>
                <p className="text-gray-400 text-sm mb-8">Fill in the form below and we&apos;ll get back to you shortly.</p>

                <form className="space-y-5" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#1B2A4A] uppercase tracking-wider mb-2 block">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleContactChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f8f9fc] focus:bg-white focus:border-[#fd6909] focus:ring-2 focus:ring-[#fd6909]/10 outline-none text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#1B2A4A] uppercase tracking-wider mb-2 block">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleContactChange}
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f8f9fc] focus:bg-white focus:border-[#fd6909] focus:ring-2 focus:ring-[#fd6909]/10 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#1B2A4A] uppercase tracking-wider mb-2 block">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleContactChange}
                        placeholder="+965 XXXX XXXX"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f8f9fc] focus:bg-white focus:border-[#fd6909] focus:ring-2 focus:ring-[#fd6909]/10 outline-none text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#1B2A4A] uppercase tracking-wider mb-2 block">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleContactChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f8f9fc] focus:bg-white focus:border-[#fd6909] focus:ring-2 focus:ring-[#fd6909]/10 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#1B2A4A] uppercase tracking-wider mb-2 block">Solution Interest</label>
                    <select
                      name="solution"
                      value={formData.solution}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f8f9fc] focus:bg-white focus:border-[#fd6909] focus:ring-2 focus:ring-[#fd6909]/10 outline-none text-sm text-gray-500 transition-all"
                    >
                      <option value="">Select a Solution</option>
                      {solutions.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#1B2A4A] uppercase tracking-wider mb-2 block">Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleContactChange}
                      placeholder="Tell us about your project requirements..."
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-[#f8f9fc] focus:bg-white focus:border-[#fd6909] focus:ring-2 focus:ring-[#fd6909]/10 outline-none text-sm resize-none transition-all"
                    />
                  </div>
                  {submitStatus && (
                    <div
                      className={`rounded-xl px-4 py-3 text-sm font-medium ${submitStatus.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-100"
                        : "bg-red-50 text-red-700 border border-red-100"
                        }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#fd6909] to-[#ff8c3a] text-white py-4 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-[#fd6909]/25 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1B2A4A] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white">Need an Urgent Response?</h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">For emergency security support or urgent project inquiries, call us directly during working hours.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${headquarters?.phone?.replace(/\s/g, "")}`}
              className="bg-[#fd6909] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#e55d00] transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now: {headquarters?.phone}
            </a>
            <Link to="/request-quote"
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors flex items-center gap-2">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ===== PARTNER WITH US ===== */
export function PartnerWithUsPage() {
  return (
    <Layout>
      <PageHero title="Partner With Us" subtitle="Join our network of 59+ global technology partners and grow together."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partner With Us" }]} image={HERO_IMAGES["partner-with-us"]} />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-[#1E2455] mb-4">Why Partner With ASG?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Arab Security Gulf offers a unique partnership opportunity to access the rapidly growing Kuwait and GCC security market through our established network, expertise, and customer base.</p>
              <div className="space-y-4">
                {["Access to Kuwait & GCC markets", "Established customer base of 1,200+ projects", "Certified engineering team", "Dedicated partner support", "Joint marketing opportunities", "Training & certification programs"].map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#fd6909]" />
                    <span className="text-[#1E2455] font-medium text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#1E2455] mb-6">Partnership Inquiry</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm" />
                <input type="text" placeholder="Contact Person" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm" />
                <input type="text" placeholder="Product/Solution Category" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm" />
                <textarea rows={4} placeholder="Tell us about your partnership interest" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm resize-none" />
                <button type="submit" className="w-full bg-[#fd6909] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#e55d00] transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ===== REQUEST QUOTE ===== */
export function RequestQuotePage() {
  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    solution: "",
    industry: "",
    location: "",
    message: "",
    budget: "",
  });

  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quoteStatus, setQuoteStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const handleQuoteChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setQuoteData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmittingQuote(true);
    setQuoteStatus(null);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quoteData.name,
          email: quoteData.email,
          phone: quoteData.phone,
          company: quoteData.company,
          solution: quoteData.solution,
          message: `
        Industry: ${quoteData.industry}
        Project Location: ${quoteData.location}
        Budget: ${quoteData.budget}
        
        Project Description:
        ${quoteData.message}
          `.trim(),
          type: "gulf-request-quote",
          sheetName: "Gulf Request Quote",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit quote request");
      }

      setQuoteStatus({
        type: "success",
        message: "Quote request submitted successfully.",
      });

      setQuoteData({
        name: "",
        email: "",
        phone: "",
        company: "",
        solution: "",
        industry: "",
        location: "",
        message: "",
        budget: "",
      });
    } catch (error) {
      setQuoteStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to submit quote request",
      });
    } finally {
      setIsSubmittingQuote(false);
    }
  };

  return (
    <Layout>
      <PageHero
        title="Request a Quote"
        subtitle="Get a customized quote for your security and technology project."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
        image={HERO_IMAGES["request-quote"]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-black text-[#1E2455] mb-6">Project Details</h2>

            <form onSubmit={handleQuoteSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={quoteData.name}
                  onChange={handleQuoteChange}
                  placeholder="Full Name *"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm"
                />

                <input
                  type="text"
                  name="company"
                  value={quoteData.company}
                  onChange={handleQuoteChange}
                  placeholder="Company Name *"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={quoteData.email}
                  onChange={handleQuoteChange}
                  placeholder="Email Address *"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm"
                />

                <input
                  type="tel"
                  name="phone"
                  value={quoteData.phone}
                  onChange={handleQuoteChange}
                  placeholder="Phone Number *"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm"
                />
              </div>

              <select
                name="solution"
                value={quoteData.solution}
                onChange={handleQuoteChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm text-gray-500"
              >
                <option value="">Select Solution Category *</option>
                {solutions.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>

              <select
                name="industry"
                value={quoteData.industry}
                onChange={handleQuoteChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm text-gray-500"
              >
                <option value="">Select Industry *</option>
                {industries.map((i) => (
                  <option key={i.id} value={i.title}>
                    {i.title}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="location"
                value={quoteData.location}
                onChange={handleQuoteChange}
                placeholder="Project Location"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm"
              />

              <textarea
                rows={5}
                name="message"
                value={quoteData.message}
                onChange={handleQuoteChange}
                placeholder="Project Description - Please provide details about your requirements, scope, and timeline."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm resize-none"
              />

              <select
                name="budget"
                value={quoteData.budget}
                onChange={handleQuoteChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#fd6909] focus:ring-1 focus:ring-[#fd6909] outline-none text-sm text-gray-500"
              >
                <option value="">Estimated Budget Range</option>
                <option value="Under $50,000">Under $50,000</option>
                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                <option value="Over $1,000,000">Over $1,000,000</option>
              </select>

              {quoteStatus && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${quoteStatus.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-100"
                    : "bg-red-50 text-red-700 border border-red-100"
                    }`}
                >
                  {quoteStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmittingQuote}
                className="w-full bg-[#fd6909] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#e55d00] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmittingQuote ? "Submitting..." : "Submit Quote Request"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}