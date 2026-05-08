import { zeroDayAttack } from './blog-posts/zeroDayAttack';
import { ransomwareAttacks } from './blog-posts/ransomwareAttacks';
import { blockchainTechnology } from './blog-posts/blockchainTechnology';
import { cybersecurityArchitecture } from './blog-posts/cybersecurityArchitecture';
import { advancedPenetrationTesting } from './blog-posts/advancedPenetrationTesting';
import { advancedActiveDirectoryAttacks } from './blog-posts/advancedActiveDirectoryAttacks';
import { acisAutonomousCyberImmuneSystem } from './blog-posts/acisAutonomousCyberImmuneSystem';
import { quantumComputingCyberIntelligence } from './blog-posts/quantumComputingCyberIntelligence';
import { cyberResilienceStandard2026 } from './blog-posts/cyberResilienceStandard2026';
import { visitorManagementSystem } from './blog-posts/visitorManagementSystem';
import { hospitalManagementSystem } from './blog-posts/hospitalManagementSystem';

export const BLOGS = [
    visitorManagementSystem,
    hospitalManagementSystem,
    cyberResilienceStandard2026,
    quantumComputingCyberIntelligence,
    acisAutonomousCyberImmuneSystem,
    zeroDayAttack,
    ransomwareAttacks,
    blockchainTechnology,
    cybersecurityArchitecture,
    advancedPenetrationTesting,
    advancedActiveDirectoryAttacks
].map((blog) => ({
    excerpt: "Read the latest Netcradus intelligence and technical analysis on evolving cyber threats, intelligent operations, and resilient enterprise systems.",
    heroImage: "/generated/secure_shield_concept_1773394778055.png",
    seoDescription: `Read ${blog.title} from the Netcradus intelligence team.`,
    seoKeywords: [
        blog.title.toLowerCase(),
        `${blog.category.toLowerCase()} cybersecurity`,
        "cybersecurity blog",
        "threat intelligence",
        "enterprise cyber defense",
        "Netcradus insights",
    ],
    hasWhitePaperCta: false,
    ...blog,
}));
