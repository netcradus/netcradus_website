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

function AppLayout() {
  useReveal();

  return (
    <div className="bg-[var(--bg-color)] min-h-screen text-[var(--text-primary)] font-sans overflow-x-hidden pt-20 transition-colors duration-300">
      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.15] pointer-events-none"></div>
      
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
          {/* <Route path="pricing" element={<Pricing />} /> */}
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="careers" element={<CareersPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
