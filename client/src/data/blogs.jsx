import { zeroDayAttack } from './blog-posts/zeroDayAttack';
import { ransomwareAttacks } from './blog-posts/ransomwareAttacks';
import { blockchainTechnology } from './blog-posts/blockchainTechnology';
import { cybersecurityArchitecture } from './blog-posts/cybersecurityArchitecture';
import { advancedPenetrationTesting } from './blog-posts/advancedPenetrationTesting';
import { advancedActiveDirectoryAttacks } from './blog-posts/advancedActiveDirectoryAttacks';
import { acisAutonomousCyberImmuneSystem } from './blog-posts/acisAutonomousCyberImmuneSystem';
import { quantumComputingCyberIntelligence } from './blog-posts/quantumComputingCyberIntelligence';

export const BLOGS = [
    quantumComputingCyberIntelligence,
    acisAutonomousCyberImmuneSystem,
    zeroDayAttack,
    ransomwareAttacks,
    blockchainTechnology,
    cybersecurityArchitecture,
    advancedPenetrationTesting,
    advancedActiveDirectoryAttacks
].map((blog) => ({
    excerpt: "Read the latest Netcradus intelligence and technical analysis on evolving cyber threats and resilient security architecture.",
    heroImage: "/generated/secure_shield_concept_1773394778055.png",
    seoDescription: `Read ${blog.title} from the Netcradus intelligence team.`,
    hasWhitePaperCta: false,
    ...blog,
}));
