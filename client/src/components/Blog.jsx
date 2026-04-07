import React from "react";
import { Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogs";
import "./Blog.css";

const Blog = () => {
  return (
    <section id="blog" className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="reveal mb-16 text-center">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent md:text-[12px]">
            // INTELLIGENCE FEED
          </span>
          <h2 className="mb-6 text-4xl font-display font-black text-zinc-900 dark:text-white md:text-6xl">
            Latest from the <span className="text-accent italic">Lab.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-sans leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
            Expert perspectives, threat intelligence briefings, and architectural thought leadership from our engineers.
          </p>
        </div>

        <div className="blog-grid mx-auto max-w-6xl space-y-4">
          {BLOGS.map((blog, idx) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="blog-list-item reveal"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="flex-grow">
                <div className="blog-item-meta mono">
                  <span className="blog-item-cat">{blog.category}</span>
                  <div className="blog-item-time">
                    <Clock size={12} />
                    {blog.readTime || "5 min read"}
                  </div>
                </div>
                <h3 className="blog-item-title">{blog.title}</h3>
                <p className="blog-item-date mono">{blog.date}</p>
              </div>
              <div className="blog-item-arrow">
                <ChevronRight size={24} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
