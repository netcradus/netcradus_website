import { crmSoftware2026 } from './blog-posts/crmSoftware2026';
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
import { aiAgentsVsHumanHackers } from './blog-posts/aiAgentsVsHumanHackers';
import {autonomousSocAiSecurityAnalysts} from './blog-posts/autonomousSocAiSecurityAnalysts';
import { rogueAiAgentsCyberThreat2026 } from './blog-posts/rogueAiAgentsCyberThreat2026';
import {promptInjectionAttacks} from './blog-posts/promptInjectionAttacks';

export const BLOGS = [
  promptInjectionAttacks,
  rogueAiAgentsCyberThreat2026,
  aiAgentsVsHumanHackers,
  autonomousSocAiSecurityAnalysts,
  visitorManagementSystem,
  hospitalManagementSystem,
  cyberResilienceStandard2026,
  quantumComputingCyberIntelligence,
  acisAutonomousCyberImmuneSystem,
  crmSoftware2026,
  ransomwareAttacks,
  blockchainTechnology,
  cybersecurityArchitecture,
  advancedPenetrationTesting,
  advancedActiveDirectoryAttacks,
].map((blog) => ({
  excerpt:
    "Read the latest Netcradus intelligence and technical analysis on evolving cyber threats, intelligent operations, and resilient enterprise systems.",
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