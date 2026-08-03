import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Globe,
  BookOpen,
  Users,
  DollarSign,
  ArrowUpCircle,
  ShieldCheck,
  Bug,
  Cloud,
  Bot,
  Code2,
  ClipboardCheck,
  Briefcase,
  BarChart3,
  Blocks,
  Search,
  ArrowRight,
  Heart,
  Award,
  Zap,
  Star,
  MapPin,
  Linkedin,
  Mail,
  Sparkles,
  Coffee,
  Umbrella,
  GraduationCap,
  Cpu,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";
import JobApplyModal from "../components/careers/JobApplyModal";
import "./CareersPage.css";

// 1. WHY JOIN US DATA
const WHY_JOIN_US = [
  {
    title: "Career Growth",
    description: "Accelerate your career through certifications, mentorship, and challenging enterprise cybersecurity projects.",
    stat: "95%",
    statLabel: "Employees promoted internally",
    icon: ArrowUpCircle,
  },
  {
    title: "Work at the Frontier",
    description: "Contribute to ACIS — our flagship AI cybersecurity platform — and next-gen threat defense technologies.",
    stat: "100+",
    statLabel: "AI Security models deployed",
    icon: Rocket,
  },
  {
    title: "Global Exposure",
    description: "Work directly with enterprise clients across the UK, Europe, India, and North America gaining cross-border experience.",
    stat: "10+",
    statLabel: "Global regions served",
    icon: Globe,
  },
  {
    title: "Competitive Rewards",
    description: "Market-leading compensation packages, performance bonuses, equity incentives, and comprehensive family perks.",
    stat: "Top 5%",
    statLabel: "Industry compensation benchmarks",
    icon: DollarSign,
  },
  {
    title: "Continuous Learning",
    description: "100% company-sponsored certifications (CISSP, CEH, OSCP, AWS, Azure) with dedicated study hours and lab access.",
    stat: "₹2.5L",
    statLabel: "Annual learning budget / person",
    icon: BookOpen,
  },
  {
    title: "Empowered Culture",
    description: "Meritocratic, flat hierarchy where innovation is celebrated, ideas win, and individual impact is recognized.",
    stat: "4.9★",
    statLabel: "Glassdoor employee rating",
    icon: Users,
  },
];

// 2. OPEN POSITIONS DATA
const ALL_JOBS = [
  {
    id: 1,
    title: "Senior SOC Analyst (L2/L3)",
    department: "Cybersecurity",
    location: "Delhi NCR (Hybrid)",
    workType: "Hybrid",
    experience: "3 - 6 Years",
    type: "Full-Time",
    salary: "₹14L - ₹24L LPA",
    skills: ["SIEM", "SOAR", "Splunk", "Threat Hunting", "Incident Response"],
    description: "Lead 24/7 Security Operations Centre incident triage, deep-dive forensic analysis, and automated playbook creation across enterprise feeds.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Lead Penetration Tester / Red Teamer",
    department: "Offensive Security",
    location: "Remote / Hybrid",
    workType: "Remote",
    experience: "4 - 8 Years",
    type: "Full-Time",
    salary: "₹18L - ₹30L LPA",
    skills: ["OSCP", "Burp Suite", "Red Teaming", "Web & API VAPT", "Active Directory"],
    description: "Conduct high-impact offensive security assessments, cloud penetration tests, and custom exploit development for international clients.",
    icon: Bug,
  },
  {
    id: 3,
    title: "Enterprise Cloud Security Architect",
    department: "Cloud & Infrastructure",
    location: "Delhi NCR (Hybrid)",
    workType: "Hybrid",
    experience: "5 - 10 Years",
    type: "Full-Time",
    salary: "₹25L - ₹42L LPA",
    skills: ["AWS", "Azure Security", "Terraform", "Kubernetes", "DevSecOps"],
    description: "Design multi-cloud zero-trust architectures, automated compliance blueprints, and ongoing CloudOps hardening across AWS/Azure.",
    icon: Cloud,
  },
  {
    id: 4,
    title: "AI / ML Engineer (ACIS Platform)",
    department: "AI & Data",
    location: "Delhi NCR (On-site)",
    workType: "On-site",
    experience: "2 - 5 Years",
    type: "Full-Time",
    salary: "₹16L - ₹28L LPA",
    skills: ["Python", "PyTorch", "LLM Fine-tuning", "Vector DBs", "Anomaly Detection"],
    description: "Develop autonomous AI security agents, anomaly detection algorithms, and LLM-driven SOC automation for our proprietary ACIS platform.",
    icon: Bot,
  },
  {
    id: 5,
    title: "Senior Full-Stack Engineer (React & Node)",
    department: "Software Engineering",
    location: "Delhi NCR / Remote",
    workType: "Remote",
    experience: "3 - 7 Years",
    type: "Full-Time",
    salary: "₹15L - ₹26L LPA",
    skills: ["React 18", "Node.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    description: "Build high-throughput, low-latency cybersecurity dashboards, real-time telemetry visualizers, and scalable backend microservices.",
    icon: Code2,
  },
  {
    id: 6,
    title: "GRC & ISO 27001 Lead Consultant",
    department: "Governance & Risk",
    location: "Delhi NCR / London",
    workType: "Hybrid",
    experience: "4 - 8 Years",
    type: "Full-Time",
    salary: "₹16L - ₹28L LPA",
    skills: ["ISO 27001:2022", "GDPR", "SOC 2 Type II", "Cyber Essentials", "Risk Assessment"],
    description: "Drive enterprise information security audits, regulatory compliance frameworks, and CISO advisory across UK & global accounts.",
    icon: ClipboardCheck,
  },
  {
    id: 7,
    title: "DevSecOps Security Pipeline Engineer",
    department: "DevSecOps",
    location: "Remote",
    workType: "Remote",
    experience: "3 - 6 Years",
    type: "Full-Time",
    salary: "₹16L - ₹27L LPA",
    skills: ["Docker", "GitHub Actions", "SAST/DAST", "SonarQube", "Trivy"],
    description: "Integrate security checks directly into CI/CD pipelines, container registries, and Infrastructure-as-Code workflows.",
    icon: Blocks,
  },
  {
    id: 8,
    title: "Cybersecurity Account Executive (UK Market)",
    department: "Sales & Client Success",
    location: "London / Hybrid",
    workType: "Hybrid",
    experience: "3 - 6 Years",
    type: "Full-Time",
    salary: "£55K - £85K OTE",
    skills: ["Enterprise B2B Sales", "SOC Managed Services", "SaaS Sales", "C-Level Pitching"],
    description: "Expand Netcradus enterprise security solutions and SOC managed services across UK and European enterprise markets.",
    icon: BarChart3,
  },
];

// 3. EMPLOYEE BENEFITS DATA
const BENEFITS_LIST = [
  {
    title: "Health & Wellness Insurance",
    description: "Comprehensive medical cover up to ₹10 Lakhs for employees and dependent family members with zero co-pay.",
    icon: Heart,
  },
  {
    title: "Learning & Certifications Budget",
    description: "100% reimbursed professional certs (CISSP, CEH, OSCP, AWS) plus ₹2.5L annual training allowance.",
    icon: GraduationCap,
  },
  {
    title: "Flexible & Hybrid Working",
    description: "Choose your ideal work setup with remote options, flexible hours, and ergonomic home-office stipends.",
    icon: Coffee,
  },
  {
    title: "Quarterly Performance Bonus",
    description: "Direct revenue and project milestone profit-sharing bonuses paid out every quarter.",
    icon: Zap,
  },
  {
    title: "Paid Global Conference Trips",
    description: "Fully sponsored delegate passes, flights, and stay for Black Hat, DEFCON, Nullcon, and AWS Summits.",
    icon: Globe,
  },
  {
    title: "Generous Paid Time Off",
    description: "28 days annual leave, statutory holidays, birthday off, plus dedicated mental health wellness days.",
    icon: Umbrella,
  },
];

// 4. HIRING PROCESS STEPS
const HIRING_STEPS = [
  { step: "01", title: "Apply", desc: "Submit your CV & profile", icon: Mail },
  { step: "02", title: "HR Screening", desc: "Introductory culture call", icon: Users },
  { step: "03", title: "Tech Assessment", desc: "Practical hands-on challenge", icon: Cpu },
  { step: "04", title: "Final Discussion", desc: "Leadership alignment & offer", icon: Award },
  { step: "05", title: "Onboarding", desc: "Welcome to the Netcradus team!", icon: Rocket },
];

// 5. TESTIMONIALS DATA
const TESTIMONIALS = [
  {
    name: "Rahul Prajapati",
    role: "Lead SOC Analyst",
    department: "Cybersecurity Ops",
    photo: "/careerteam7.png",
    quote: "Starting as an L1 Analyst 3 years ago, Netcradus sponsored my CEH & CISSP certs. Today I lead our 24/7 SOC team defending Fortune 500 networks.",
    rating: 5,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Poulomi Mondal",
    role: "Senior AI Engineer",
    department: "ACIS R&D Team",
    photo: "/careerteam6.png",
    quote: "Building autonomous AI security agents on the ACIS platform is the most challenging and rewarding software engineering work of my career.",
    rating: 5,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Divyanshu Kumar",
    role: "Offensive Security Lead",
    department: "Red Teaming",
    photo: "/careerteam5.png",
    quote: "The hackathon culture and zero-bureaucracy environment means your ideas get implemented immediately into our client defense playbooks.",
    rating: 5,
    linkedin: "https://linkedin.com",
  },
];

// 6. GALLERY ITEMS
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Netcradus Core Engineering & Operations Team",
    category: "Team Collaboration",
    image: "/careerteam.png",
    caption: "Our passionate engineers and SOC analysts collaborating on enterprise security playbooks in our Delhi office.",
  },
  {
    id: 2,
    title: "24/7 Global SOC Command Center",
    category: "Operations",
    image: "/careerteam2.png",
    caption: "Real-time threat monitoring and incident containment screens.",
  },
  {
    id: 3,
    title: "Annual Hackathon & AI Sprint",
    category: "Innovation",
    image: "/careerteam3.png",
    caption: "48-hour continuous coding and threat model development.",
  },
  {
    id: 4,
    title: "Certification Excellence Awards",
    category: "Celebration",
    image: "/careerteam4.png",
    caption: "Celebrating team members achieving CISSP & OSCP milestones.",
  },
];

export default function CareersPage() {
  usePageMeta(SEO_META.careers.title, SEO_META.careers.description);

  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedWorkType, setSelectedWorkType] = useState("All");
  const [savedJobs, setSavedJobs] = useState([]);
  const [activeModalJob, setActiveModalJob] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter Jobs
  const filteredJobs = ALL_JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesWorkType = selectedWorkType === "All" || job.workType === selectedWorkType;

    return matchesSearch && matchesDept && matchesWorkType;
  });

  const toggleSaveJob = (id) => {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter((item) => item !== id));
    } else {
      setSavedJobs([...savedJobs, id]);
    }
  };

  const scrollToOpenPositions = () => {
    const el = document.getElementById("open-positions");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCulture = () => {
    const el = document.getElementById("company-culture");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="careers-wrapper-white min-h-screen">
      {/* ------------------------------------------------------------------
         1. HERO SECTION (Modern White Enterprise Theme, 90vh Split Layout)
         ------------------------------------------------------------------ */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 hero-soft-glow">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 text-center lg:text-left space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B00]/30 bg-[#FFF4EC] text-[#FF6B00] text-xs font-extrabold uppercase tracking-widest">
                <Sparkles size={14} className="animate-spin text-[#FF6B00]" />
                <span>Careers at Netcradus</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-[#101828]">
                Build Your <span className="text-[#FF6B00]">Career.</span> <br />
                Protect The{" "}
                <span className="text-[#FF6B00]">
                  Digital World.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#667085] max-w-2xl mx-auto lg:mx-0">
                Join one of India's fastest-growing cybersecurity companies. Build cutting-edge security products, work alongside passionate innovators, and create technology that protects enterprises globally.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={scrollToOpenPositions}
                  className="btn-orange-gradient w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  Explore Open Positions
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={scrollToCulture}
                  className="btn-white-secondary w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  Life at Netcradus
                </button>
              </div>
            </motion.div>

            {/* RIGHT SIDE VISUAL (Clean, Unobstructed Team Photography) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative overflow-hidden rounded-[16px] border border-[#E9EDF2] bg-[#FFFFFF] p-2 shadow-[0_20px_50px_rgba(16,24,40,0.08)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(16,24,40,0.14)]">
                <img
                  src="/careerteam.png"
                  alt="Netcradus Cybersecurity Team Collaboration"
                  className="w-full h-auto max-h-[460px] object-cover object-center rounded-[12px] filter brightness-[1.04] contrast-[1.03] cursor-pointer transition-transform duration-700 hover:scale-[1.01]"
                  onClick={() => setLightboxImage({ src: "/careerteam.png", alt: "Netcradus Cybersecurity Team Collaboration" })}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
         2. WHY JOIN US SECTION (6 White Glass Cards)
         ------------------------------------------------------------------ */}
      <section className="careers-section-spacing relative bg-[#FFFFFF] border-t border-[#EEF2F6]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
              // WHY NETCRADUS?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Why Build Your Career <span className="text-[#FF6B00]">With Us?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              We offer extraordinary opportunities to solve enterprise security challenges in a high-growth, meritocratic culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_JOIN_US.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="careers-white-card p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="icon-badge-orange mb-6">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#101828] mb-3">{card.title}</h3>
                    <p className="text-sm text-[#667085] leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  {/* Statistic Badge */}
                  <div className="pt-4 border-t border-[#EEF2F6] flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-[#FF6B00]">
                        {card.stat}
                      </div>
                      <div className="text-[11px] text-[#98A2B3] font-medium">{card.statLabel}</div>
                    </div>
                    <Sparkles size={16} className="text-[#FF6B00]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
         3. COMPANY CULTURE & REAL MASONRY GALLERY
         ------------------------------------------------------------------ */}
      <section id="company-culture" className="careers-section-spacing relative bg-[#FFF8F3]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
              // OUR CULTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Life at <span className="text-[#FF6B00]">Netcradus</span>
            </h2>
            
            {/* Culture Value Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              {["Innovation", "Learning", "Ownership", "Respect", "Growth", "Diversity"].map((val) => (
                <span
                  key={val}
                  className="px-5 py-2 rounded-full border border-[#FF6B00]/20 bg-[#FFF4EC] text-xs font-bold uppercase tracking-wider text-[#FF6B00]"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          {/* Masonry Image Collage */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage({ src: item.image, alt: item.title })}
                className="group relative overflow-hidden rounded-3xl border border-[#E9EDF2] bg-[#FFFFFF] cursor-pointer shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/85 via-[#101828]/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B00]">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1 leading-snug">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
         4. OPEN POSITIONS & INTERACTIVE JOB BOARD
         ------------------------------------------------------------------ */}
      <section id="open-positions" className="careers-section-spacing relative bg-[#FFFFFF] border-t border-[#EEF2F6]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
              // ACTIVE OPPORTUNITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Open <span className="text-[#FF6B00]">Positions</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085]">
              Join our high-performing team across engineering, offensive security, SOC ops, and cloud architecture.
            </p>
          </div>

          {/* Search & Filters Controls */}
          <div className="mb-10 space-y-6">
            {/* Search Input Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]" size={20} />
              <input
                type="text"
                placeholder="Search by job title, skill (e.g. SIEM, OSCP, React, AWS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#FAFAFA] border border-[#E9EDF2] text-[#101828] placeholder-[#98A2B3] focus:outline-none focus:border-[#FF6B00] shadow-md text-sm sm:text-base"
              />
            </div>

            {/* Department Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-2 px-2 careers-filter-scroll justify-start lg:justify-center">
              {["All", "Cybersecurity", "Offensive Security", "Cloud & Infrastructure", "AI & Data", "Software Engineering", "Governance & Risk", "DevSecOps", "Sales & Client Success"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                    selectedDept === dept
                      ? "bg-[#FF6B00] border-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25"
                      : "bg-[#FFFFFF] border-[#E9EDF2] text-[#667085] hover:border-[#FF6B00] hover:text-[#FF6B00]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Work Type Filters */}
            <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#667085]">
              <span>Work Setup:</span>
              {["All", "Remote", "Hybrid", "On-site"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedWorkType(type)}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    selectedWorkType === type ? "text-[#FF6B00] bg-[#FFF4EC] font-bold" : "hover:text-[#101828]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings Grid */}
          {filteredJobs.length === 0 ? (
            <div className="py-16 text-center text-[#667085] space-y-3">
              <Search size={40} className="mx-auto text-[#98A2B3]" />
              <p className="text-lg font-semibold">No positions found matching your search query.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedDept("All"); setSelectedWorkType("All"); }}
                className="text-xs font-bold text-[#FF6B00] uppercase underline tracking-wider"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => {
                const Icon = job.icon;
                const isSaved = savedJobs.includes(job.id);

                return (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="careers-white-card p-6 sm:p-8 flex flex-col justify-between h-full border border-[#E9EDF2] relative"
                  >
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Top Meta: Dept Tag & Bookmark */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3.5 py-1 rounded-full bg-[#FFF4EC] border border-[#FF6B00]/30 text-[#FF6B00] text-[11px] font-extrabold uppercase tracking-widest">
                            {job.department}
                          </span>
                          <button
                            onClick={() => toggleSaveJob(job.id)}
                            className={`p-2 rounded-full border transition-all ${
                              isSaved ? "bg-[#FF6B00] border-[#FF6B00] text-white" : "border-[#E9EDF2] text-[#98A2B3] hover:text-[#FF6B00]"
                            }`}
                            title="Save Job"
                          >
                            <Heart size={16} fill={isSaved ? "#ffffff" : "none"} />
                          </button>
                        </div>

                        {/* Title & Icon */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="icon-badge-orange shrink-0">
                            <Icon size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#101828] leading-snug">{job.title}</h3>
                          </div>
                        </div>

                        <p className="text-sm text-[#667085] leading-relaxed mb-6">{job.description}</p>
                      </div>

                      {/* Skill Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-[#FAFAFA] border border-[#E9EDF2] text-[11px] font-semibold text-[#667085]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-[#EEF2F6] flex items-center justify-end">
                      <button
                        onClick={() => setActiveModalJob(job)}
                        className="btn-orange-gradient w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        Apply Now
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------
         5. EMPLOYEE BENEFITS SECTION
         ------------------------------------------------------------------ */}
      <section className="careers-section-spacing relative bg-[#FFF8F3] border-t border-[#EEF2F6]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
              // PERKS & BENEFITS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Designed For Your <span className="text-[#FF6B00]">Wellbeing</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085]">
              We invest holistically in your health, learning, financial growth, and career longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS_LIST.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="careers-white-card p-6 sm:p-8 flex items-start gap-4">
                  <div className="icon-badge-orange shrink-0">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#101828] mb-2">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
         6. HIRING PROCESS (Horizontal Timeline)
         ------------------------------------------------------------------ */}
      <section className="careers-section-spacing relative bg-[#FFFFFF] border-t border-[#EEF2F6]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
              // RECRUITMENT WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Our Hiring <span className="text-[#FF6B00]">Process</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085]">
              A transparent, candidate-first 5-step journey to joining the Netcradus team.
            </p>
          </div>

          <div className="hiring-process-track-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {HIRING_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="careers-white-card p-6 text-center flex flex-col items-center relative">
                  <div className="w-12 h-12 rounded-full bg-[#FFF4EC] border border-[#FF6B00]/30 text-[#FF6B00] flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                    {s.step}
                  </div>
                  <Icon size={22} className="text-[#FF6B00] mb-2" />
                  <h3 className="text-base font-bold text-[#101828] mb-1">{s.title}</h3>
                  <p className="text-xs text-[#667085]">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
         7. EMPLOYEE TESTIMONIALS
         ------------------------------------------------------------------ */}
      <section className="careers-section-spacing relative bg-[#FAFAFA]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
              // INSIDE NETCRADUS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Hear From Our <span className="text-[#FF6B00]">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="careers-white-card p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1 text-[#FF6B00] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FF6B00" />
                    ))}
                  </div>
                  <p className="text-sm italic text-[#667085] leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EEF2F6] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#FF6B00] shadow-sm filter brightness-[1.03] contrast-[1.02] shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-[#101828]">{t.name}</div>
                      <div className="text-xs text-[#667085]">{t.role}</div>
                    </div>
                  </div>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#FAFAFA] border border-[#E9EDF2] text-[#667085] hover:text-[#FF6B00] hover:border-[#FF6B00] transition-all"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
         8. COMPANY IMPACT STATISTICS
         ------------------------------------------------------------------ */}
      <section className="careers-section-spacing relative bg-[#FFFFFF] border-y border-[#EEF2F6]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { num: "100+", label: "Enterprise Clients" },
              { num: "10+", label: "Countries Served" },
              { num: "1,000+", label: "Vulnerabilities Fixed" },
              { num: "24×7", label: "SOC Monitoring" },
              { num: "500+", label: "Projects Delivered" },
              { num: "99.9%", label: "Satisfaction Rate" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FFF8F3] border border-[#FF6B00]/20">
                <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] mb-1">{stat.num}</div>
                <div className="text-xs font-bold text-[#101828]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
         9. CTA BANNER
         ------------------------------------------------------------------ */}
      <section className="py-20 relative">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="relative overflow-hidden rounded-3xl cta-warm-banner p-10 sm:p-16 text-center shadow-xl">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
                Ready to Secure the <span className="text-[#FF6B00]">Future With Us?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
                Join our mission to build the next generation of cybersecurity technology and enterprise defense.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToOpenPositions}
                  className="btn-orange-gradient w-full sm:w-auto px-10 py-4 text-xs font-bold uppercase tracking-wider"
                >
                  Explore Open Positions
                </button>
                <a
                  href="mailto:hr@netcradus.com"
                  className="btn-white-secondary w-full sm:w-auto px-10 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  Talk to HR (hr@netcradus.com)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <JobApplyModal
        job={activeModalJob}
        isOpen={Boolean(activeModalJob)}
        onClose={() => setActiveModalJob(null)}
      />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm cursor-pointer"
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <p className="mt-4 text-center text-sm font-semibold text-white">{lightboxImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
