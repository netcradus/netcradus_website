import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOGS } from "../data/blogs";
import './Blog.css';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedBlog]);

  return (
    <section id="blog" className="py-24 bg-premium-radial relative overflow-hidden transition-colors duration-500">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="reveal mb-16 text-center">
          <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block">// INTELLIGENCE FEED</span>
          <h2 className="text-4xl md:text-6xl font-display font-black text-zinc-900 dark:text-white mb-6">Latest from the <span className="text-accent italic">Lab.</span></h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Expert perspectives, threat intelligence briefings, and architectural thought leadership from our engineers.
          </p>
        </div>

        <div className="blog-grid max-w-6xl mx-auto space-y-4">
          {BLOGS.map((blog, idx) => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
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
                <p className="blog-item-date mono">Published: {blog.date}</p>
              </div>
              <div className="blog-item-arrow">
                <ChevronRight size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Window (Modal) */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="blog-modal-overlay"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="blog-modal-backdrop"
              onClick={() => setSelectedBlog(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="blog-modal-content"
            >
              <div className="blog-modal-header">
                <span className="blog-modal-badge mono">{selectedBlog.category}</span>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="blog-modal-close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="blog-modal-body custom-scrollbar">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-5xl font-display font-black text-zinc-900 dark:text-white mb-6 tracking-tight leading-tight">{selectedBlog.title}</h2>
                  <div className="flex items-center gap-4 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-10 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                    <span>{selectedBlog.date}</span>
                    <span className="opacity-30">â€¢</span>
                    <span className="flex items-center gap-2"><Clock size={14} className="text-accent" /> {selectedBlog.readTime || "5 min read"}</span>
                  </div>
                  <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                    {selectedBlog.content}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;

