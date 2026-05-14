import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { services, solutions, HERO_IMAGES, getServiceHeroImage } from "@/data/siteData";
import {
  ArrowRight, ChevronRight, CheckCircle2,
  PenTool, Layers, Wrench, LifeBuoy, GraduationCap, ClipboardList,
  FileCheck, RefreshCw, Send, CircleDot, Package
} from "lucide-react";

const svcIcons: Record<string, React.ReactNode> = {
  PenTool: <PenTool className="w-7 h-7" />,
  Layers: <Layers className="w-7 h-7" />,
  Wrench: <Wrench className="w-7 h-7" />,
  LifeBuoy: <LifeBuoy className="w-7 h-7" />,
  GraduationCap: <GraduationCap className="w-7 h-7" />,
  ClipboardList: <ClipboardList className="w-7 h-7" />,
  FileCheck: <FileCheck className="w-7 h-7" />,
  RefreshCw: <RefreshCw className="w-7 h-7" />,
};

const svcIconsSmall: Record<string, React.ReactNode> = {
  PenTool: <PenTool className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  LifeBuoy: <LifeBuoy className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  ClipboardList: <ClipboardList className="w-6 h-6" />,
  FileCheck: <FileCheck className="w-6 h-6" />,
  RefreshCw: <RefreshCw className="w-6 h-6" />,
};

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
        <h1 className="text-3xl lg:text-4xl font-black text-white">{title}</h1>
        <p className="text-white/60 mt-2 max-w-2xl text-lg">{subtitle}</p>
      </div>
    </section>
  );
}

/* ===== SERVICE DETAIL PAGE ===== */
function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const heroImage = getServiceHeroImage(slug);
  const serviceIndex = services.findIndex((s) => s.slug === slug);
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <Layout>
      <PageHero
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        image={heroImage}
      />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#fd6909]/10 flex items-center justify-center text-[#fd6909]">
                  {svcIcons[service.icon]}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#fd6909] uppercase tracking-widest">Service 0{serviceIndex + 1}</span>
                  <h2 className="text-2xl font-black text-[#1E2455]">{service.title}</h2>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{service.longDescription}</p>

              {/* Key Features */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-[#1E2455] mb-5">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-[#fd6909] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#1E2455]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Process */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-[#1E2455] mb-5">Our Process</h3>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#1E2455] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#fd6909] font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-[#1E2455] font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-[#1E2455] mb-5">Deliverables</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-3 text-sm text-gray-600">
                      <Package className="w-4 h-4 text-[#fd6909] flex-shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Other Services */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1E2455] mb-4">Our Services</h3>
                <div className="space-y-2">
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                        s.slug === slug
                          ? "bg-[#fd6909]/10 border border-[#fd6909]/20"
                          : "hover:bg-white border border-transparent"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        s.slug === slug ? "bg-[#fd6909] text-white" : "bg-gray-200 text-[#1E2455]"
                      }`}>
                        <CircleDot className="w-4 h-4" />
                      </div>
                      <span className={`text-sm font-medium ${
                        s.slug === slug ? "text-[#fd6909]" : "text-[#1E2455]"
                      }`}>{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-[#fd6909] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Need This Service?</h3>
                <p className="text-white/80 text-sm mb-4">Get a free consultation and quote for your project.</p>
                <Link to="/request-quote" className="block bg-white text-[#1E2455] text-center py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-colors">
                  Request a Quote
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-[#1E2455] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">Talk to an Expert</h3>
                <p className="text-white/60 text-sm mb-4">Our team is ready to help with your requirements.</p>
                <Link to="/contact" className="block bg-white/10 border border-white/20 text-white text-center py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-[#1E2455] mb-8">Solutions We Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.slice(0, 6).map((sol) => (
              <Link
                key={sol.id}
                to={`/solutions/${sol.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#fd6909]/20 hover:shadow-lg transition-all"
              >
                <h3 className="text-base font-bold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{sol.title}</h3>
                <p className="text-gray-500 text-xs mt-1 line-clamp-2">{sol.description}</p>
                <div className="mt-3 flex items-center gap-1 text-[#fd6909] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Solutions <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-[#1E2455] mb-8">Explore Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.slice(0, 4).map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#fd6909]/20 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#fd6909]/10 flex items-center justify-center text-[#fd6909] group-hover:bg-[#fd6909] group-hover:text-white transition-all">
                  {svcIconsSmall[s.icon]}
                </div>
                <h3 className="text-sm font-bold text-[#1E2455] mt-3 group-hover:text-[#fd6909] transition-colors">{s.title}</h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ===== SERVICES LISTING PAGE ===== */
function ServicesListing() {
  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="End-to-end service delivery from initial consultation through ongoing maintenance and support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        image={HERO_IMAGES.services}
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <Link
                key={svc.id}
                to={`/services/${svc.slug}`}
                className="group rounded-2xl p-8 border border-gray-100 bg-white hover:shadow-xl hover:border-[#fd6909]/20 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#1E2455] flex items-center justify-center text-[#fd6909] group-hover:bg-[#fd6909] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {svcIcons[svc.icon]}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#fd6909]/40 mb-1">0{i + 1}</div>
                    <h3 className="text-xl font-bold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{svc.title}</h3>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed">{svc.description}</p>
                    <div className="mt-4 space-y-2">
                      {svc.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle2 className="w-4 h-4 text-[#fd6909] flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-1 text-[#fd6909] text-sm font-semibold">
                      View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl font-black text-[#1E2455] mt-3">How We Deliver</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A proven methodology ensuring successful project delivery every time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements, risks, and objectives." },
              { step: "02", title: "Design", desc: "Creating detailed system architecture and specifications." },
              { step: "03", title: "Installation", desc: "Professional installation by certified technicians." },
              { step: "04", title: "Commissioning", desc: "Testing, validation, and system handover." },
              { step: "05", title: "Support", desc: "Ongoing maintenance and 24/7 technical support." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#1E2455] flex items-center justify-center mx-auto">
                  <span className="text-[#fd6909] font-black text-lg">{p.step}</span>
                </div>
                <h3 className="text-base font-bold text-[#1E2455] mt-4">{p.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#fd6909] text-sm font-bold uppercase tracking-widest">Our Solutions</span>
            <h2 className="text-3xl font-black text-[#1E2455] mt-3">Solutions We Service</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol) => (
              <Link
                key={sol.id}
                to={`/solutions/${sol.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#fd6909]/20 hover:shadow-lg transition-all"
              >
                <h3 className="text-base font-bold text-[#1E2455] group-hover:text-[#fd6909] transition-colors">{sol.title}</h3>
                <p className="text-gray-500 text-xs mt-1 line-clamp-2">{sol.description}</p>
                <div className="mt-3 flex items-center gap-1 text-[#fd6909] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Solutions <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#fd6909] to-[#ff8a3d] rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-black text-white">Need Our Services?</h2>
              <p className="text-white/80 mt-3 max-w-xl">From consultation to ongoing support, we're here to help with your security and technology needs.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/request-quote" className="bg-white text-[#1E2455] px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-colors whitespace-nowrap">
                Get a Quote
              </Link>
              <Link to="/contact" className="bg-[#1E2455] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1E2455]/80 transition-colors whitespace-nowrap flex items-center gap-2">
                Contact Us <Send className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default function ServicesPage() {
  const { slug } = useParams();

  if (slug) {
    return <ServiceDetail slug={slug} />;
  }

  return <ServicesListing />;
}