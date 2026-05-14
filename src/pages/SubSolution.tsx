import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { solutions, getSubSolutionHeroImage, HERO_IMAGES } from "@/data/siteData";
import {
  ArrowRight, ChevronRight, CheckCircle2, ArrowLeft,
  Layers, Target, Building2, Phone, Mail
} from "lucide-react";

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

export default function SubSolutionPage() {
  const { solutionSlug, subSlug } = useParams();

  const parentSolution = solutions.find((s) => s.slug === solutionSlug);
  if (!parentSolution) return <Navigate to="/solutions" replace />;

  const subSolution = parentSolution.subSolutions.find((sub) => sub.slug === subSlug);
  if (!subSolution) return <Navigate to={`/solutions/${solutionSlug}`} replace />;

  const heroImage = getSubSolutionHeroImage(parentSolution.slug);

  // Find related sub-solutions (siblings)
  const siblings = parentSolution.subSolutions.filter((s) => s.slug !== subSlug);

  // Find related solutions from other categories that might be relevant
  const otherSolutions = solutions.filter((s) => s.slug !== solutionSlug).slice(0, 3);

  return (
    <Layout>
      <PageHero
        title={subSolution.name}
        subtitle={subSolution.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: parentSolution.shortTitle, href: `/solutions/${parentSolution.slug}` },
          { label: subSolution.name },
        ]}
        image={heroImage}
      />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Main content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-2xl font-black text-[#1E2455] mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{subSolution.description}</p>
                <p className="text-gray-500 leading-relaxed mt-4">
                  As part of our {parentSolution.title}, this solution is designed and implemented by our team of certified professionals
                  using industry-leading technology from our 59+ global partners. We provide end-to-end service from consultation and
                  design through installation, commissioning, and ongoing maintenance support.
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#fd6909]/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-[#fd6909]" />
                  </div>
                  <h2 className="text-2xl font-black text-[#1E2455]">Key Features</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {subSolution.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-[#fd6909] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#1E2455] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#fd6909]/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#fd6909]" />
                  </div>
                  <h2 className="text-2xl font-black text-[#1E2455]">Benefits</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {subSolution.benefits.map((benefit, i) => (
                    <div key={i} className="bg-[#1E2455] rounded-xl p-5">
                      <div className="text-[#fd6909] font-black text-2xl mb-2">0{i + 1}</div>
                      <p className="text-white font-medium text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#fd6909]/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#fd6909]" />
                  </div>
                  <h2 className="text-2xl font-black text-[#1E2455]">Applications</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {subSolution.applications.map((app, i) => (
                    <span key={i} className="bg-[#fd6909]/5 border border-[#fd6909]/10 text-[#1E2455] px-4 py-2 rounded-xl text-sm font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#fd6909] to-[#ff8a3d] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Need {subSolution.name}?</h3>
                  <p className="text-white/80 mt-1">Get a free consultation and custom quote from our experts.</p>
                </div>
                <div className="flex gap-3">
                  <Link to="/request-quote" className="bg-white text-[#1E2455] px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-colors whitespace-nowrap">
                    Get a Quote
                  </Link>
                  <Link to="/contact" className="bg-[#1E2455] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1E2455]/80 transition-colors whitespace-nowrap">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Back to parent */}
              <Link
                to={`/solutions/${parentSolution.slug}`}
                className="flex items-center gap-2 text-[#fd6909] font-semibold text-sm hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {parentSolution.shortTitle}
              </Link>

              {/* Related Sub-Solutions */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1E2455] mb-4">Related Solutions</h3>
                <div className="space-y-2">
                  {siblings.map((sib) => (
                    <Link
                      key={sib.slug}
                      to={`/solutions/${parentSolution.slug}/${sib.slug}`}
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#fd6909] transition-colors flex-shrink-0" />
                      <span className="text-sm text-gray-600 group-hover:text-[#1E2455] font-medium transition-colors">{sib.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Solution Categories */}
              <div className="bg-[#1E2455] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Explore Other Solutions</h3>
                <div className="space-y-2">
                  {otherSolutions.map((sol) => (
                    <Link
                      key={sol.slug}
                      to={`/solutions/${sol.slug}`}
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all"
                    >
                      <ArrowRight className="w-4 h-4 text-[#fd6909] flex-shrink-0" />
                      <span className="text-sm text-white/70 group-hover:text-white font-medium transition-colors">{sol.shortTitle}</span>
                    </Link>
                  ))}
                  <Link to="/solutions" className="block text-center text-[#fd6909] text-sm font-semibold mt-3 hover:underline">
                    View All Solutions
                  </Link>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-[#fd6909] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">Quick Contact</h3>
                <p className="text-white/80 text-sm mb-4">Speak with our specialists about this solution.</p>
                <div className="space-y-3">
                  <a href="tel:+96522XXXXXX" className="flex items-center gap-2 text-white text-sm font-medium hover:text-white/80 transition-colors">
                    <Phone className="w-4 h-4" /> +965 22612501
                  </a>
                  <a href="mailto:info@imoukuwait.com" className="flex items-center gap-2 text-white text-sm font-medium hover:text-white/80 transition-colors">
                    <Mail className="w-4 h-4" /> info@imoukuwait.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}