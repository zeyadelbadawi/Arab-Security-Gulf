import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { solutions, HERO_IMAGES, projects, PROJECT_IMAGES } from "@/data/siteData";
import {
  ArrowRight, ChevronRight, Car, Flame, Zap, Brain, Scan, Tv,
  CheckCircle2, Camera, Fingerprint, ShieldCheck, Shield, Layers
} from "lucide-react";

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

const SOLUTION_IMAGES: Record<string, string> = {
  "integrated-security": "https://mgx-backend-cdn.metadl.com/generate/images/967905/2026-05-13/ootnjhaaagpq/solution-integrated-security-command-center.png",
  "access-control-identification": "https://mgx-backend-cdn.metadl.com/generate/images/967905/2026-05-13/ootnhtyaagoq/solution-access-control-biometric-entrance.png",
  "physical-security": "https://mgx-backend-cdn.metadl.com/generate/images/967905/2026-05-13/ootnjiqaagpa/solution-physical-security-perimeter.png",
  "parking-traffic": "https://mgx-backend-cdn.metadl.com/generate/images/967905/2026-05-13/ootnjryaagnq/solution-parking-traffic-management.png",
  "fire-life-safety": "https://mgx-backend-cdn.metadl.com/generate/images/967905/2026-05-13/ootodfaaagqq/solution-fire-life-safety-systems.png",
  "light-current-elv": "https://mgx-backend-cdn.metadl.com/generate/images/967905/2026-05-13/ootn7raaagnq/solution-light-current-elv-infrastructure.png",
  "smart-intelligent-solutions": "https://mgx-backend-cdn.metadl.com/generate/images/967905/2026-05-13/ootoczyaagqa/solution-smart-intelligent-automation.png",
  "x-ray-inspection": "https://mgx-backend-cdn.metadl.com/generate/images/967905/2026-05-13/ootoaliaagpq/solution-xray-inspection-scanner.png",
  "audio-visual": "https://mgx-backend-cdn.metadl.com/generate/images/967905/2026-05-13/ootoz7iaagqq/solution-audio-visual-conference.png",
};

function PageHero({ title, subtitle, breadcrumbs, image }: {
  title: string;
  subtitle: string;
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
        <nav className="flex items-center gap-2 text-sm text-white/50 mb-4">
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
        <h1 className="text-3xl lg:text-5xl font-black text-white">{title}</h1>
        <p className="text-white/60 mt-3 max-w-2xl text-lg">{subtitle}</p>
      </div>
    </section>
  );
}

function SolutionsListing() {
  return (
    <Layout>
      <PageHero
        title="Our Solutions"
        subtitle="Comprehensive security and technology solutions designed to protect people, assets, and infrastructure across Kuwait and the GCC."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
        image={HERO_IMAGES.solutions}
      />

      {/* Stats Bar */}
      <section className="bg-[#1E2455] py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-black text-[#fd6909]">{solutions.length}</p>
              <p className="text-white/60 text-sm mt-1">Solution Categories</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#fd6909]">{solutions.reduce((acc, s) => acc + s.subSolutions.length, 0)}+</p>
              <p className="text-white/60 text-sm mt-1">Sub-Solutions</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#fd6909]">500+</p>
              <p className="text-white/60 text-sm mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#fd6909]">25+</p>
              <p className="text-white/60 text-sm mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid - Alternating Layout */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#fd6909]/10 text-[#fd6909] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4" /> End-to-End Security Solutions
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1E2455] mt-5">
              Protecting What Matters Most
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              From integrated surveillance to smart automation, we deliver tailored solutions for every security challenge.
            </p>
          </div>

          <div className="space-y-20">
            {solutions.map((sol, index) => {
              const isReversed = index % 2 !== 0;
              const relatedProjects = projects.filter(p => p.solutions?.includes(sol.slug)).slice(0, 3);

              return (
                <div
                  key={sol.id}
                  className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-stretch`}
                >
                  {/* Image Side */}
                  <div className="lg:w-1/2 relative group">
                    <div className="relative h-[320px] lg:h-full min-h-[320px] rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={SOLUTION_IMAGES[sol.slug] || HERO_IMAGES.solutions}
                        alt={sol.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E2455]/80 via-transparent to-transparent" />
                      <div className="absolute top-5 left-5">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                          {solutionIcons[sol.slug]}
                        </div>
                      </div>
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-white/70 text-sm font-medium">{sol.subSolutions.length} Sub-Solutions Available</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#fd6909]/10 flex items-center justify-center text-[#fd6909]">
                        {solutionIcons[sol.slug]}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#fd6909]">Solution {String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-[#1E2455] mb-3">
                      {sol.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6">{sol.description}</p>

                    {/* Key Sub-Solutions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {sol.subSolutions.slice(0, 4).map((sub) => (
                        <Link
                          key={sub.slug}
                          to={`/solutions/${sol.slug}/${sub.slug}`}
                          className="group/sub flex items-center gap-2 p-2.5 rounded-lg bg-gray-50 hover:bg-[#fd6909]/5 border border-gray-100 hover:border-[#fd6909]/20 transition-all"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover/sub:text-[#fd6909] transition-colors flex-shrink-0" />
                          <span className="text-sm text-gray-600 group-hover/sub:text-[#1E2455] font-medium line-clamp-1">{sub.name}</span>
                        </Link>
                      ))}
                    </div>

                    {sol.subSolutions.length > 4 && (
                      <p className="text-xs text-gray-400 mb-4">+{sol.subSolutions.length - 4} more sub-solutions</p>
                    )}

                    {/* Related Projects Thumbnails */}
                    {relatedProjects.length > 0 && (
                      <div className="mb-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Related Projects</p>
                        <div className="flex gap-2">
                          {relatedProjects.map((project) => (
                            <Link
                              key={project.slug}
                              to={`/projects/${project.slug}`}
                              className="relative w-20 h-14 rounded-lg overflow-hidden group/proj border border-gray-100 hover:border-[#fd6909]/30 transition-all"
                              title={project.title}
                            >
                              <img
                                src={PROJECT_IMAGES[project.slug] || ""}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover/proj:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover/proj:bg-black/0 transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      to={`/solutions/${sol.slug}`}
                      className="inline-flex items-center gap-2 bg-[#1E2455] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#fd6909] transition-colors w-fit group/btn"
                    >
                      Explore {sol.shortTitle} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Navigation Grid */}
      <section className="py-16 bg-[#1E2455]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-black text-white">Quick Navigation</h2>
            <p className="text-white/50 mt-3">Jump directly to any solution category</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {solutions.map((sol) => (
              <Link
                key={sol.id}
                to={`/solutions/${sol.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-[#fd6909]/10 hover:border-[#fd6909]/30 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-[#fd6909] group-hover:text-white transition-all mx-auto">
                  {solutionIcons[sol.slug]}
                </div>
                <h3 className="text-sm font-bold text-white mt-3 group-hover:text-[#fd6909] transition-colors">{sol.shortTitle}</h3>
                <p className="text-xs text-white/40 mt-1">{sol.subSolutions.length} solutions</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-[#1E2455] via-[#2a3570] to-[#1E2455] rounded-3xl p-10 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#fd6909]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fd6909]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-black text-white">Can't Find What You Need?</h2>
                <p className="text-white/60 mt-3 max-w-xl">Our team of certified security professionals will design a custom solution tailored to your specific requirements and budget.</p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Link to="/request-quote" className="bg-[#fd6909] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#e55d00] transition-colors whitespace-nowrap shadow-lg shadow-[#fd6909]/30">
                  Get a Free Quote
                </Link>
                <Link to="/contact" className="bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors whitespace-nowrap">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function SolutionDetail({ slug }: { slug: string }) {
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return <Navigate to="/solutions" replace />;

  const heroImage = SOLUTION_IMAGES[slug] || HERO_IMAGES[slug] || HERO_IMAGES.solutions;
  const relatedProjects = projects.filter(p => p.solutions?.includes(slug)).slice(0, 6);

  return (
    <Layout>
      <PageHero
        title={solution.title}
        subtitle={solution.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: solution.shortTitle },
        ]}
        image={heroImage}
      />

      {/* Overview with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Overview</span>
              <h2 className="text-2xl lg:text-3xl font-black text-[#1E2455] mt-3 mb-5">About {solution.shortTitle}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{solution.longDescription}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Layers className="w-4 h-4 text-[#fd6909]" />
                  <span>{solution.subSolutions.length} Sub-Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-[#fd6909]" />
                  <span>{relatedProjects.length}+ Projects</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={SOLUTION_IMAGES[slug] || HERO_IMAGES.solutions}
                  alt={solution.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2455]/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Solutions Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Sub-Solutions</span>
            <h2 className="text-3xl font-black text-[#1E2455] mt-3">{solution.shortTitle} Solutions</h2>
            <p className="text-gray-500 mt-3">Explore our comprehensive range of {solution.shortTitle.toLowerCase()} solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.subSolutions.map((sub) => (
              <Link
                key={sub.slug}
                to={`/solutions/${solution.slug}/${sub.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-[#fd6909]/20 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{sub.name}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-3">{sub.description}</p>

                <div className="mt-4 space-y-2">
                  {sub.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#fd6909]" /> {f}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-1 text-[#fd6909] text-sm font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Portfolio</span>
              <h2 className="text-3xl font-black text-[#1E2455] mt-3">Related Projects</h2>
              <p className="text-gray-500 mt-3">See how we've implemented {solution.shortTitle.toLowerCase()} solutions for our clients.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className="group relative h-56 rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={PROJECT_IMAGES[project.slug] || ""}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-sm line-clamp-1">{project.title}</h4>
                    <p className="text-white/60 text-xs mt-1">{project.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1E2455] rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-black text-white">Need {solution.shortTitle} Solutions?</h2>
              <p className="text-white/60 mt-3 max-w-xl">Our team of certified professionals will design and implement the perfect solution for your requirements.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/request-quote" className="bg-[#fd6909] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#e55d00] transition-colors whitespace-nowrap">
                Get a Quote
              </Link>
              <Link to="/contact" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors whitespace-nowrap">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-[#1E2455] mb-8">Explore Other Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.filter((s) => s.slug !== slug).slice(0, 8).map((sol) => (
              <Link
                key={sol.id}
                to={`/solutions/${sol.slug}`}
                className="group relative h-40 rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={SOLUTION_IMAGES[sol.slug] || HERO_IMAGES.solutions}
                  alt={sol.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2455]/90 via-[#1E2455]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-2">
                    {solutionIcons[sol.slug]}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#fd6909] transition-colors">{sol.shortTitle}</h3>
                  <p className="text-xs text-white/50 mt-0.5">{sol.subSolutions.length} sub-solutions</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default function SolutionsPage() {
  const { slug } = useParams();

  if (slug) {
    return <SolutionDetail slug={slug} />;
  }

  return <SolutionsListing />;
}