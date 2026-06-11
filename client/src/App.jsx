// import { Routes, Route, Outlet, useLocation } from "react-router-dom";
// import { useEffect } from "react";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// import FloatingContact from "./components/FloatingContact";
// import NewsletterPopup from "./components/NewsletterPopup";
// import WhatsAppButton from "./components/WhatsAppButton";
// import CookieConsent from "./components/CookieConsent";

// import HomePage from "./pages/HomePage";
// import ServicesPage from "./pages/ServicesPage";
// import ACISPage from "./pages/ACISPage";
// import AboutPage from "./pages/AboutPage";
// import BlogPage from "./pages/BlogPage";
// import BlogPostPage from "./pages/BlogPostPage";
// import ContactPage from "./pages/ContactPage";
// import CareersPage from "./pages/CareersPage";
// import ResourcesPage from "./pages/ResourcesPage";
// import NewsletterPage from "./pages/NewsletterPage";
// import PolicyPage from "./pages/PolicyPage";
// import TermsPage from "./pages/TermsPage";
// import DataProtectionPage from "./pages/DataProtectionPage";
// import CookiesPage from "./pages/CookiesPage";
// import ResponsibleDisclosurePage from "./pages/ResponsibleDisclosurePage";
// import PhasePage from "./pages/phasePage";
// import Partners from "./pages/Partners";
// import PartnerApply from "./pages/PartnerApply";

// import Platform from "./components/Platform";
// import { useReveal } from "./hooks/useReveal";

// function AppLayout() {
//   useReveal();

//   const location = useLocation();

//   useEffect(() => {
//     // Meta Pixel PageView
//     if (window.fbq) {
//       window.fbq("track", "PageView");
//     }

//     // Google Ads PageView
//     if (window.gtag) {
//       window.gtag("event", "page_view", {
//         page_path: location.pathname,
//       });
//     }
//   }, [location]);

//   return (
//     <div className="bg-background min-h-screen text-text-primary font-sans overflow-x-hidden pt-20 transition-colors duration-500 selection:bg-accent/30">

//       {/* Background effects */}
//       <div className="fixed inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none transition-opacity duration-1000"></div>

//       <div
//         className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
//         style={{
//           backgroundImage:
//             `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//         }}
//       ></div>

//       <Navbar />
//       <CookieConsent />
//       <FloatingContact />
//       <WhatsAppButton />
//       <NewsletterPopup />

//       <main className="relative z-10 w-full">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <ScrollToTop />

//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="platform" element={<Platform />} />
//           <Route path="services" element={<ServicesPage />} />
//           <Route path="acis" element={<ACISPage />} />
//           <Route path="about" element={<AboutPage />} />
//           <Route path="blog" element={<BlogPage />} />
//           <Route path="blog/:slug" element={<BlogPostPage />} />
//           <Route path="contact" element={<ContactPage />} />
//           <Route path="careers" element={<CareersPage />} />
//           <Route path="resources" element={<ResourcesPage />} />
//           <Route path="newsletter" element={<NewsletterPage />} />
//           <Route path="policy" element={<PolicyPage />} />
//           <Route path="terms" element={<TermsPage />} />
//           <Route path="data-protection" element={<DataProtectionPage />} />
//           <Route path="cookies" element={<CookiesPage />} />
//           <Route path="responsible-disclosure" element={<ResponsibleDisclosurePage />} />
//           <Route path="phase" element={<PhasePage />} />
//           <Route path="partners" element={<Partners />} />
//           <Route path="partners/apply" element={<PartnerApply />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;



import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { sendLog } from "./utils/logger";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingContact from "./components/FloatingContact";
import NewsletterPopup from "./components/NewsletterPopup";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieConsent from "./components/CookieConsent";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ACISPage from "./pages/ACISPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import ResourcesPage from "./pages/ResourcesPage";
import NewsletterPage from "./pages/NewsletterPage";
import PolicyPage from "./pages/PolicyPage";
import TermsPage from "./pages/TermsPage";
import DataProtectionPage from "./pages/DataProtectionPage";
import CookiesPage from "./pages/CookiesPage";
import ResponsibleDisclosurePage from "./pages/ResponsibleDisclosurePage";
import PhasePage from "./pages/phasePage";
import Partners from "./pages/Partners";
import PartnerApply from "./pages/PartnerApply";

import Platform from "./components/Platform";
import { useReveal } from "./hooks/useReveal";

function AppLayout() {
  useReveal();

  const location = useLocation();

  useEffect(() => {

  // Send log to Render logger
  sendLog(location.pathname);

  // Facebook Pixel
  if (window.fbq) {
    window.fbq("track", "PageView");
  }

  // Google Analytics
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: location.pathname,
    });
  }

}, [location]);

  return (
    <div className="bg-background min-h-screen text-text-primary font-sans overflow-x-hidden pt-20 transition-colors duration-500 selection:bg-accent/30">

      <div className="fixed inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none transition-opacity duration-1000"></div>

      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <Navbar />
      <CookieConsent />
      <FloatingContact />
      <WhatsAppButton />
      <NewsletterPopup />

      <main className="relative z-10 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="platform" element={<Platform />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="acis" element={<ACISPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="policy" element={<PolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="data-protection" element={<DataProtectionPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="responsible-disclosure" element={<ResponsibleDisclosurePage />} />
          <Route path="phase" element={<PhasePage />} />
          <Route path="partners" element={<Partners />} />
          <Route path="partners/apply" element={<PartnerApply />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
