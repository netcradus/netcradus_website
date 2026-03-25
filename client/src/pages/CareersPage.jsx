import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";
import SectionWrapper from "../components/ui/SectionWrapper";
import AnimatedReveal from "../components/ui/AnimatedReveal";
import GlassCard from "../components/ui/GlassCard";
import GradientButton from "../components/ui/GradientButton";
import { Rocket, Globe, BookOpen, Users, DollarSign, ArrowUpCircle } from "lucide-react";

const BENEFITS = [
    {
        title: "Work at the Frontier",
        description: "Contribute to ACIS — our AI cybersecurity platform — and other proprietary technology initiatives that are shaping the future of digital security.",
        icon: <Rocket className="w-6 h-6 text-primary" />
    },
    {
        title: "Global Exposure",
        description: "Work with clients across the UK, India, Europe, and beyond — gaining international experience and cross-cultural capability that accelerates careers.",
        icon: <Globe className="w-6 h-6 text-secondary" />
    },
    {
        title: "Investment in You",
        description: "Fully funded certification programmes (CISSP, CEH, AWS, Azure, GCP, and more), structured development plans, and a mentorship culture from day one.",
        icon: <BookOpen className="w-6 h-6 text-accent" />
    },
    {
        title: "Culture of Excellence",
        description: "A meritocratic, collaborative environment where your work is visible, your contributions are recognised, and your development is actively managed.",
        icon: <Users className="w-6 h-6 text-primary" />
    },
    {
        title: "Competitive Compensation",
        description: "Market-competitive salaries, performance bonuses, and equity participation for senior roles — structured to reward the people who build our success.",
        icon: <DollarSign className="w-6 h-6 text-secondary" />
    },
    {
        title: "Career Progression",
        description: "Clear, transparent career pathways with defined competency frameworks. We promote from within wherever possible and actively plan succession into senior roles.",
        icon: <ArrowUpCircle className="w-6 h-6 text-accent" />
    }
];

const ROLES = [
    {
        title: "SOC Analyst (L1/L2/L3)",
        department: "Cybersecurity",
        icon: "🔐",
        description: "SIEM monitoring, threat investigation, and incident response across our 24/7 Security Operations Centre."
    },
    {
        title: "Penetration Tester",
        department: "Offensive Security",
        icon: "🧪",
        description: "Web app, network, and mobile penetration testing. OSCP or CEH preferred. Remote with occasional client-site work."
    },
    {
        title: "Cloud Architect (AWS/Azure/GCP)",
        department: "Cloud & Infrastructure",
        icon: "☁️",
        description: "Multi-cloud architecture design, migration delivery, and ongoing CloudOps management for enterprise clients."
    },
    {
        title: "ML / AI Engineer",
        department: "AI & Data",
        icon: "🤖",
        description: "Model development, MLOps, and AI integration projects — including ACIS platform development."
    },
    {
        title: "Full-Stack Developer",
        department: "Software Engineering",
        icon: "💻",
        description: "CRM, ERP, and custom application development across our software practice. React, Node.js, Python, and C#."
    },
    {
        title: "GRC / Compliance Consultant",
        department: "Governance & Risk",
        icon: "📋",
        description: "ISO 27001, Cyber Essentials, GDPR, and PCI DSS advisory for clients across multiple sectors."
    },
    {
        title: "Account Manager",
        department: "Client Engagement",
        icon: "🎯",
        description: "Strategic client relationship management for our UK enterprise client base. Technology background preferred."
    },
    {
        title: "Business Development Manager",
        department: "Sales",
        icon: "📊",
        description: "New business development across our core service lines. Both UK and India-based positions available."
    },
    {
        title: "DevSecOps Engineer",
        department: "DevSecOps",
        icon: "🏗️",
        description: "CI/CD security integration, IaC security, and container security across our cloud-native development practice."
    }
];

export default function CareersPage() {
    return (
        <div className="bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
            {/* Hero Section */}
            <section className="py-24 bg-premium-radial relative min-h-[50vh] flex items-center">
                <div className="container max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24">
                    <div className="max-w-4xl reveal">
                        <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">// JOIN THE MISSION</span>
                        <h1 className="text-4xl md:text-7xl font-display font-black text-zinc-900 dark:text-white mb-8 tracking-tighter leading-none">
                            Careers at <span className="text-accent italic">Netcradus</span>
                        </h1>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-2xl font-sans leading-relaxed mb-10 max-w-2xl">
                            Join the Team That Is Redefining Cybersecurity and Enterprise Technology.
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-500 text-base md:text-lg leading-relaxed max-w-3xl font-sans opacity-80">
                            Netcradus is a rapidly growing technology company at an extraordinary point in its journey. We are actively building a team of exceptional people who want to make a genuine difference.
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(232,64,10,0.05)_0%,transparent_50%)]"></div>
            </section>

            {/* Why Work at Netcradus */}
            <section className="py-24 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 transition-colors duration-500">
                <div className="container max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24">
                    <div className="reveal text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">// THE ADVANTAGE</span>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-zinc-900 dark:text-white tracking-tighter leading-none mb-6">Why Work <span className="text-accent italic">at Netcradus?</span></h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg font-sans leading-relaxed">We offer the opportunity to work on genuinely challenging problems in an environment that takes your development seriously.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BENEFITS.map((benefit, index) => (
                        <div key={index} className="premium-card p-10 group hover:-translate-y-2 transition-all duration-500 flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-display font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">
                                {benefit.title}
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed flex-grow">
                                {benefit.description}
                            </p>
                            <div className="w-12 h-[2px] bg-accent/30 mt-8 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Roles Section */}
            <section className="py-24 bg-premium-radial relative">
                <div className="container max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24">
                    <div className="reveal text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">// RECRUITMENT FEED</span>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-zinc-900 dark:text-white tracking-tighter leading-none mb-6">Active <span className="text-accent italic">Roles.</span></h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg font-sans leading-relaxed">We are always looking for exceptional talent across multiple disciplines.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ROLES.map((role, idx) => (
                            <div key={idx} className="group p-8 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-accent hover:shadow-premium transition-all duration-500 h-full flex flex-col backdrop-blur-sm">
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="text-4xl group-hover:scale-110 transition-transform duration-500">{role.icon}</div>
                                    <div>
                                        <h3 className="font-display font-black text-lg text-zinc-900 dark:text-white uppercase tracking-wider group-hover:text-accent transition-colors leading-tight">{role.title}</h3>
                                        <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{role.department}</span>
                                    </div>
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed flex-grow">
                                    {role.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container max-w-screen-2xl mx-auto px-8 lg:px-16 xl:px-24">
                    <div className="premium-card p-12 md:p-20 text-center relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none group-hover:bg-accent/20 transition-all duration-1000" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-display font-black text-zinc-900 dark:text-white tracking-tight leading-tight uppercase">Ready to Join <span className="text-accent italic">the Mission?</span></h2>
                            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                                To apply or explore opportunities, send your CV to our talent team with the role title in the subject line. We review all applications within 5 business days.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a href="mailto:hr@netcradus.com" className="btn-primary px-12 py-5 rounded-2xl no-underline shadow-premium transform hover:-translate-y-1 transition-all">
                                    Email hr@netcradus.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
