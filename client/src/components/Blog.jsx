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
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">// INTELLIGENCE FEED</span>
          <h2 className="section-title">Latest from the <span className="gradient-text">Lab.</span></h2>
          <p className="section-subtitle">
            Expert perspectives, threat intelligence briefings, and architectural thought leadership from our engineers.
          </p>
        </div>

        <div className="blog-grid max-w-4xl mx-auto space-y-4">
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
                  <h2 className="blog-modal-title">{selectedBlog.title}</h2>
                  <div className="blog-modal-meta mono">
                    <span>{selectedBlog.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {selectedBlog.readTime || "5 min read"}</span>
                  </div>
                  <div className="blog-prose max-w-none">
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
