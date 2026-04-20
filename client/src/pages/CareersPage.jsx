import React, { useEffect } from "react";
import {
    Rocket,
    Globe,
    BookOpen,
    Users,
    DollarSign,
    ArrowUpCircle,
    Shield,
    Bug,
    Cloud,
    Bot,
    Code2,
    ClipboardCheck,
    Briefcase,
    BarChart3,
    Blocks,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const BENEFITS = [
    {
        title: "Work at the Frontier",
        description: "Contribute to ACIS - our AI cybersecurity platform - and other proprietary technology initiatives that are shaping the future of digital security.",
        icon: <Rocket className="h-6 w-6 text-primary" />
    },
    {
        title: "Global Exposure",
        description: "Work with clients across the UK, India, Europe, and beyond - gaining international experience and cross-cultural capability that accelerates careers.",
        icon: <Globe className="h-6 w-6 text-secondary" />
    },
    {
        title: "Investment in You",
        description: "Fully funded certification programmes (CISSP, CEH, AWS, Azure, GCP, and more), structured development plans, and a mentorship culture from day one.",
        icon: <BookOpen className="h-6 w-6 text-accent" />
    },
    {
        title: "Culture of Excellence",
        description: "A meritocratic, collaborative environment where your work is visible, your contributions are recognised, and your development is actively managed.",
        icon: <Users className="h-6 w-6 text-primary" />
    },
    {
        title: "Competitive Compensation",
        description: "Market-competitive salaries, performance bonuses, and equity participation for senior roles - structured to reward the people who build our success.",
        icon: <DollarSign className="h-6 w-6 text-secondary" />
    },
    {
        title: "Career Progression",
        description: "Clear, transparent career pathways with defined competency frameworks. We promote from within wherever possible and actively plan succession into senior roles.",
        icon: <ArrowUpCircle className="h-6 w-6 text-accent" />
    }
];

const ROLES = [
    {
        title: "SOC Analyst (L1/L2/L3)",
        department: "Cybersecurity",
        icon: Shield,
        description: "SIEM monitoring, threat investigation, and incident response across our 24/7 Security Operations Centre."
    },
    {
        title: "Penetration Tester",
        department: "Offensive Security",
        icon: Bug,
        description: "Web app, network, and mobile penetration testing. OSCP or CEH preferred. Remote with occasional client-site work."
    },
    {
        title: "Cloud Architect (AWS/Azure/GCP)",
        department: "Cloud & Infrastructure",
        icon: Cloud,
        description: "Multi-cloud architecture design, migration delivery, and ongoing CloudOps management for enterprise clients."
    },
    {
        title: "ML / AI Engineer",
        department: "AI & Data",
        icon: Bot,
        description: "Model development, MLOps, and AI integration projects - including ACIS platform development."
    },
    {
        title: "Full-Stack Developer",
        department: "Software Engineering",
        icon: Code2,
        description: "CRM, ERP, and custom application development across our software practice. React, Node.js, Python, and C#."
    },
    {
        title: "GRC / Compliance Consultant",
        department: "Governance & Risk",
        icon: ClipboardCheck,
        description: "ISO/IEC 27001:2022, Cyber Essentials, GDPR, and PCI DSS advisory for clients across multiple sectors."
    },
    {
        title: "Account Manager",
        department: "Client Engagement",
        icon: Briefcase,
        description: "Strategic client relationship management for our UK enterprise client base. Technology background preferred."
    },
    {
        title: "Business Development Manager",
        department: "Sales",
        icon: BarChart3,
        description: "New business development across our core service lines. Both UK and India-based positions available."
    },
    {
        title: "DevSecOps Engineer",
        department: "DevSecOps",
        icon: Blocks,
        description: "CI/CD security integration, IaC security, and container security across our cloud-native development practice."
    }
];

export default function CareersPage() {
    usePageMeta(SEO_META.careers.title, SEO_META.careers.description);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-hidden bg-white transition-colors duration-500 dark:bg-zinc-950">
            <section className="relative flex min-h-[50vh] items-center bg-premium-radial py-24">
                <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
                    <div className="reveal max-w-4xl">
                        <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent md:text-[12px]">// JOIN THE MISSION</span>
                        <h1 className="mb-8 text-4xl font-display font-black leading-none tracking-tighter text-zinc-900 dark:text-white md:text-7xl">
                            Careers at <span className="text-accent italic">Netcradus</span>
                        </h1>
                        <p className="mb-10 max-w-2xl text-lg font-sans leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-2xl">
                            Join the Team That Is Redefining Cybersecurity and Enterprise Technology.
                        </p>
                        <p className="max-w-3xl text-base font-sans leading-relaxed text-zinc-500 opacity-80 dark:text-zinc-500 md:text-lg">
                            Netcradus is a rapidly growing technology company at an extraordinary point in its journey. We are actively building a team of exceptional people who want to make a genuine difference.
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(232,64,10,0.05)_0%,transparent_50%)]"></div>
            </section>

            <section className="border-y border-zinc-200 bg-zinc-50 py-24 transition-colors duration-500 dark:border-zinc-800 dark:bg-zinc-900/30">
                <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
                    <div className="reveal mx-auto mb-20 max-w-3xl text-center">
                        <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent md:text-[12px]">// THE ADVANTAGE</span>
                        <h2 className="mb-6 text-4xl font-display font-black leading-none tracking-tighter text-zinc-900 dark:text-white md:text-6xl">Why Work <span className="text-accent italic">at Netcradus?</span></h2>
                        <p className="text-lg font-sans leading-relaxed text-zinc-600 dark:text-zinc-400">We offer the opportunity to work on genuinely challenging problems in an environment that takes your development seriously.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {BENEFITS.map((benefit, index) => (
                            <div key={index} className="premium-card flex flex-col p-10 transition-all duration-500 group hover:-translate-y-2">
                                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/5 text-accent shadow-sm transition-all group-hover:bg-accent group-hover:text-white">
                                    {benefit.icon}
                                </div>
                                <h3 className="mb-4 text-xl font-display font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                                    {benefit.title}
                                </h3>
                                <p className="flex-grow text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
                                    {benefit.description}
                                </p>
                                <div className="mt-8 h-[2px] w-12 bg-accent/30 transition-all duration-700 group-hover:w-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative bg-premium-radial py-24">
                <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
                    <div className="reveal mx-auto mb-20 max-w-3xl text-center">
                        <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent md:text-[12px]">// RECRUITMENT FEED</span>
                        <h2 className="mb-6 text-4xl font-display font-black leading-none tracking-tighter text-zinc-900 dark:text-white md:text-6xl">Active <span className="text-accent italic">Roles.</span></h2>
                        <p className="text-lg font-sans leading-relaxed text-zinc-600 dark:text-zinc-400">We are always looking for exceptional talent across multiple disciplines.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {ROLES.map((role, idx) => {
                            const Icon = role.icon;

                            return (
                                <div key={idx} className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent hover:shadow-premium dark:border-zinc-800 dark:bg-zinc-900/50">
                                    <div className="mb-6 flex items-center gap-5">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/15 bg-accent/5 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(232,64,10,0.12)]">
                                            <Icon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="leading-tight text-lg font-display font-black uppercase tracking-wider text-zinc-900 transition-colors group-hover:text-accent dark:text-white">{role.title}</h3>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{role.department}</span>
                                        </div>
                                    </div>
                                    <p className="flex-grow text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
                                        {role.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
                    <div className="premium-card group relative overflow-hidden p-12 text-center md:p-20">
                        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/10 blur-[100px] transition-all duration-1000 group-hover:bg-accent/20" />
                        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" />

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl font-display font-black uppercase leading-tight tracking-tight text-zinc-900 dark:text-white md:text-5xl">Ready to Join <span className="text-accent italic">the Mission?</span></h2>
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl">
                                To apply or explore opportunities, send your CV to our talent team with the role title in the subject line. We review all applications within 5 business days.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                                <a href="mailto:hr@netcradus.com" className="btn-primary rounded-2xl px-12 py-5 no-underline shadow-premium transition-all hover:-translate-y-1">
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
