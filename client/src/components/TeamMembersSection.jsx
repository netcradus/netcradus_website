import { useEffect, useMemo, useRef } from "react";

const team = [
  {
    name: "Mohit Sharma",
    role: "Founder & CEO",
    image: "/team/Mohit Sharma.png",
    bio: "Mohit Sharma founded Netcradus to build enterprise-grade cyber defense systems with stronger automation, clearer visibility, and practical business alignment. He leads the technical vision behind ACIS and the wider Netcradus security roadmap.",
    isOwner: true,
  },
  {
    name: "Mr. D. K. Sharma",
    role: "Director",
    image: "/team/Dinesh Sir.png",
    bio: "With over 30 years of cross-industry business experience, Mr. D. K. Sharma brings deep strategic insight and long-range leadership to Netcradus across operations, growth, and market development.",
  },
  {
    name: "Divya Gupta",
    role: "Co-Founder, COO & Business Head",
    image: "/team/Divya Gupta.jpeg",
    bio: "Divya Gupta leads operational execution, strategic planning, and client delivery discipline, helping scale Netcradus across cybersecurity and enterprise technology engagements.",
  },
  {
    name: "Dhruv",
    role: "Project Manager",
    image: "/team/Dhruv.png",
    bio: "Dhruv manages project delivery, cross-functional coordination, and execution cadence to keep cybersecurity and IT engagements on schedule and aligned to scope.",
  },
  {
    name: "Kashish Sharma",
    role: "Management Head",
    image: "/team/Kashish Sharma.png",
    bio: "Kashish Sharma oversees management operations, internal coordination, and workflow continuity to support efficient day-to-day execution across the company.",
  },
  {
    name: "Rahul Pratap Singh",
    role: "Digital Marketing Head",
    image: "/team/Rahul.jpg",
    bio: "Rahul leads digital growth, brand positioning, and market-facing communication to strengthen Netcradus visibility and enterprise engagement.",
  },
   {
    name: "Mr. Avesh Tyagi",
    role: "Sales Head",
    image: "/team/avesh.png",
    bio: "Mr. Avesh Tyagi leads sales operations, client relationship management, and business growth initiatives to strengthen Netcradus enterprise outreach and partnerships.",
  },
];

export default function TeamMembersSection() {
  const sectionRef = useRef(null);
  const owner = useMemo(() => team.find((member) => member.isOwner), []);
  const members = useMemo(() => team.filter((member) => !member.isOwner), []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const cards = section.querySelectorAll(".team-member-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="meet-the-team"
      ref={sectionRef}
      className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
            Leadership
          </span>
          <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            The Netcradus leadership team combines cybersecurity expertise, strategic
            direction, and operational execution to support enterprise clients globally.
          </p>
        </div>

        {owner ? (
          <article
            className="team-owner-card mb-12 overflow-hidden rounded-[32px]"
            data-animate-ignore="true"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
              <div className="aspect-[4/4.4] overflow-hidden bg-[var(--color-surface-raised)]">
                <img
                  src={owner.image}
                  alt={owner.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-8 lg:p-10" data-stagger-children>
                <span className="inline-flex rounded-full border border-accent/20 bg-accent/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-accent">
                  Owner Spotlight
                </span>
                <h3 className="mt-6 text-3xl font-black tracking-tight text-text-primary md:text-5xl">
                  {owner.name}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent md:text-base">
                  {owner.role}
                </p>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
                  {owner.bio}
                </p>
              </div>
            </div>
          </article>
        ) : null}

        <div className="space-y-8">
          {members.map((member, index) => (
            <article
              key={member.name}
              className={`team-member-card team-member-reveal overflow-hidden rounded-[28px] ${
                index % 2 === 0 ? "from-left" : "from-right"
              }`}
              data-animate-ignore="true"
            >
              <div className="grid items-center gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
                <div className="aspect-[4/4.2] overflow-hidden bg-[var(--color-surface-raised)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-7 lg:p-9" data-stagger-children>
                  <h3 className="text-2xl font-black tracking-tight text-text-primary md:text-4xl">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    {member.role}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-text-secondary md:text-base">
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
