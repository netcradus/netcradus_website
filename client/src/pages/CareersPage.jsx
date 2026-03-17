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
        <div className="pt-16 md:pt-32 pb-20">
            {/* Hero Section */}
            <SectionWrapper>
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedReveal>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                            Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Netcradus</span>
                        </h1>
                    </AnimatedReveal>
                    <AnimatedReveal delay={0.1}>
                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 font-light">
                            Join the Team That Is Redefining Cybersecurity and Enterprise Technology.
                        </p>
                    </AnimatedReveal>
                    <AnimatedReveal delay={0.2}>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl mx-auto">
                            Netcradus is a rapidly growing technology company at an extraordinary point in its journey. With the development of ACIS, our expansion across international markets, and a growing client base, we are actively building a team of exceptional people who want to make a genuine difference — to their clients, to their profession, and to the security of the digital world.
                            <br /><br />
                            We do not offer generic IT jobs. We offer the opportunity to work on genuinely challenging problems, with access to cutting-edge technology, under the mentorship of experienced practitioners — in an environment that takes your development as seriously as you do.
                        </p>
                    </AnimatedReveal>
                </div>
            </SectionWrapper>

            {/* Why Work at Netcradus */}
            <SectionWrapper className="bg-surface-color/50 border-y border-[var(--border-color)]">
                <AnimatedReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Work at Netcradus?</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    </div>
                </AnimatedReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {BENEFITS.map((benefit, index) => (
                        <AnimatedReveal key={index} delay={index * 0.1} className="h-full">
                            <GlassCard className="h-full p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                                <div className="w-12 h-12 rounded-xl bg-surface-color border border-[var(--border-color)] flex items-center justify-center mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold mb-3">
                                    <span className="text-[var(--text-primary)]">{benefit.title}</span>
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed text-sm flex-grow">
                                    {benefit.description}
                                </p>
                            </GlassCard>
                        </AnimatedReveal>
                    ))}
                </div>
            </SectionWrapper>

            {/* Roles Section */}
            <SectionWrapper>
                <div className="max-w-7xl mx-auto">
                    <AnimatedReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Roles We Typically Recruit For</h2>
                            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                                We are always looking for exceptional talent across multiple disciplines.
                            </p>
                        </div>
                    </AnimatedReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ROLES.map((role, idx) => (
                            <AnimatedReveal key={idx} delay={idx * 0.05}>
                                <div className="group p-6 bg-surface-color/50 border border-[var(--border-color)] rounded-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="text-3xl">{role.icon}</div>
                                        <div>
                                            <h3 className="font-display font-bold text-lg text-[var(--text-primary)] group-hover:text-primary transition-colors">{role.title}</h3>
                                            <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{role.department}</span>
                                        </div>
                                    </div>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-grow">
                                        {role.description}
                                    </p>
                                </div>
                            </AnimatedReveal>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper className="pb-0">
                <GlassCard className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-surface-color/5 to-primary/10 border-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

                    <AnimatedReveal>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Join the Mission?</h2>
                        <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                            To apply or explore opportunities, send your CV to our talent team with the role title in the subject line. We review all applications within 5 business days and respond to every candidate.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="mailto:hr@netcradus.com">
                                <GradientButton className="text-lg px-10 py-4">Email hr@netcradus.com</GradientButton>
                            </a>
                        </div>
                    </AnimatedReveal>
                </GlassCard>
            </SectionWrapper>
        </div>
    );
}
