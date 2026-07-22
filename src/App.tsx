import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import SolutionsPage from "@/pages/Solutions";
import SubSolutionPage from "@/pages/SubSolution";
import ServicesPage from "@/pages/Services";
import {
  AboutPage, IndustriesPage, IndustryDetail, ProjectsPage, ProjectDetail,
  PartnersPage, ClientsPage, MediaPage, FAQsPage, TrainingPage,
  CareersPage, ContactPage, PartnerWithUsPage, RequestQuotePage, EventDetail
} from "@/pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/:slug" element={<SolutionsPage />} />
        <Route path="/solutions/:solutionSlug/:subSlug" element={<SubSolutionPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/media/:slug" element={<EventDetail />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
        <Route path="/request-quote" element={<RequestQuotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
