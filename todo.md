# Arab Security Gulf - Enterprise Website

## Design References
- **Style**: 2026 Premium B2B Enterprise Security
- **Color Palette**: 
  - Primary Navy: #1E2455
  - CTA Orange: #fd6909
  - White: #ffffff
  - Dark Navy: #0f1535
  - Light Gray: #f8f9fc
  - Medium Gray: #e2e8f0
- **Typography**: Inter (headings bold/black), system sans-serif stack
- **Key Styles**: Glass cards, gradient overlays, technical grid patterns, cinematic hero sections, smooth scroll animations, mega menu navigation

## Images to Generate
1. hero-security-command-center.jpg - Cinematic dark command center with multiple screens showing security feeds, blue/orange lighting (1024x576)
2. about-team-office.jpg - Modern corporate office with professionals in a high-tech meeting room, navy tones (1024x576)
3. solutions-smart-building.jpg - Futuristic smart building exterior at twilight with glowing security elements (1024x576)
4. projects-showcase-tower.jpg - Modern commercial tower at night with integrated security lighting systems (1024x576)
5. industries-oil-gas.jpg - Oil refinery at dusk with security perimeter systems visible (1024x576)
6. partners-technology-hub.jpg - High-tech server room with networking equipment, blue lighting (1024x576)

## Architecture (8 files max)
1. `src/data/siteData.ts` - ALL website data (solutions, services, industries, projects, partners, FAQs, training, etc.)
2. `src/components/layout/Layout.tsx` - Header with mega menu + Footer + scroll animations
3. `src/pages/Index.tsx` - Homepage with all sections
4. `src/pages/Solutions.tsx` - Solutions listing + SolutionDetail (dynamic route)
5. `src/pages/Services.tsx` - Services page with all categories
6. `src/pages/About.tsx` - About, Industries, Projects, Partners, Clients, Media, Careers, Training, FAQs, Contact, PartnerWithUs, RequestQuote (multi-page file using route params)
7. `src/App.tsx` - Router with all routes
8. `src/index.css` - Global styles, animations, custom utilities

## Development Tasks
- [x] Create siteData.ts with all content data
- [x] Create Layout.tsx with mega menu header and footer
- [x] Create Index.tsx homepage
- [x] Create Solutions.tsx with listing and detail pages
- [x] Create Services.tsx
- [x] Create About.tsx (multi-page: about, industries, projects, partners, clients, media, careers, training, faqs, contact, partner-with-us, request-quote)
- [x] Update App.tsx with all routes
- [x] Update index.css with custom styles and animations
- [x] Generate all images
- [x] Install GSAP and run lint/build
- [x] Redesign hero section with animated slides and Kuwait skyline
- [x] Improve navigation menu with mega menu dropdowns
- [x] Create SubSolution.tsx - individual detail pages for every sub-solution with features, benefits, applications
- [x] Add sub-solution routes (/solutions/:solutionSlug/:subSlug)
- [x] Generate unique hero banner images for each page
- [x] Integrate uploaded company logo into header
- [x] Update siteData.ts with Kuwait location and HERO_IMAGES
- [x] Update Services.tsx to use new HERO_IMAGES
- [x] Update About.tsx with consistent PageHero component across all pages
- [x] Create individual service detail pages with routes `/services/:serviceSlug`
- [x] Add "Home" item to navigation menu (desktop and mobile)
- [x] Fix hero section image cropping across all pages (min-height + object-center)
- [x] Update footer service links to point to individual service pages
- [x] Add project gallery images to ProjectDetail page