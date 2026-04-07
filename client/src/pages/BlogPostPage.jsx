import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Clock, Download, ArrowLeft } from "lucide-react";
import { BLOGS } from "../data/blogs";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";

export default function BlogPostPage() {
  const { slug } = useParams();
  const blog = BLOGS.find((entry) => entry.id === slug);

  usePageMeta(
    blog ? `${blog.title} | Netcradus` : "Article | Netcradus",
    blog?.seoDescription || "Read Netcradus intelligence and cybersecurity insights."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <section className="bg-background py-32 text-center">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-black text-text-primary">Article not found</h1>
          <p className="mt-4 text-text-secondary">The requested intelligence brief could not be located.</p>
          <Link to="/blog" className="btn-primary mt-8 inline-flex px-6 py-3">
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-background transition-colors duration-500">
      <PageHero
        label={`// ${blog.category.toUpperCase()}`}
        title={blog.title}
        subtitle={blog.excerpt}
        media={
          <div className="overflow-hidden rounded-[30px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_42%),var(--color-surface)] p-4 shadow-[0_18px_60px_rgba(232,64,10,0.08)]">
            <img src={blog.heroImage} alt={blog.title} className="h-[320px] w-full rounded-[24px] object-cover" />
          </div>
        }
      />

      <section className="py-0">
        <div className="container mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-16">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition hover:text-accent">
              <ArrowLeft size={16} />
              Back to Intelligence Blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <span>{blog.date}</span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} />
                {blog.readTime}
              </span>
            </div>
          </div>

          <article className="premium-card rounded-[32px] border border-border bg-[var(--color-surface)]/88 p-8 backdrop-blur-md md:p-12">
            <div className="blog-prose prose prose-neutral max-w-none dark:prose-invert">
              {blog.content}
            </div>

            {blog.hasWhitePaperCta ? (
              <div className="mt-12 rounded-[28px] border border-accent/20 bg-[linear-gradient(135deg,rgba(232,64,10,0.1),transparent_50%),var(--color-surface-raised)] p-8 shadow-[0_0_40px_rgba(232,64,10,0.08)]">
                <h2 className="text-2xl font-black text-text-primary">Download ACIS White Paper</h2>
                <p className="mt-3 max-w-2xl text-text-secondary">
                  Access the ACIS overview document for platform architecture, automation model, and deployment direction.
                </p>
                <a
                  href="/assets/acis-whitepaper.pdf"
                  download
                  className="btn-primary mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em]"
                >
                  Download White Paper
                  <Download size={16} />
                </a>
              </div>
            ) : null}
          </article>
        </div>
      </section>
    </div>
  );
}
