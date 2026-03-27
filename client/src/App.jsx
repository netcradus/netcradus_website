import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ACISPage from "./pages/ACISPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import ScrollToTop from "./components/ScrollToTop";
// import WhatsAppButton from "./components/WhatsAppButton";

import { useReveal } from "./hooks/useReveal";
import Platform from "./components/Platform";
import FloatingContact from "./components/FloatingContact";
import PolicyPage from "./pages/PolicyPage";
import PhasePage from "./pages/phasePage";

function AppLayout() {
  useReveal();

  return (
    <div className="bg-background min-h-screen text-text-primary font-sans overflow-x-hidden pt-20 transition-colors duration-500 selection:bg-accent/30">
      {/* Global Background Grid & Grain - Premium luxury feel */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none transition-opacity duration-1000"></div>
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      <Navbar />
      <FloatingContact />
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
      {/* <WhatsAppButton /> */}
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="platform" element={<Platform />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="acis" element={<ACISPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="policy" element={<PolicyPage />} />
           <Route path="phase" element={<PhasePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
