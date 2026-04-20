import React, { useEffect } from 'react';
import SubHero from '../components/SubHero';
import Blog from "../components/Blog";
import { usePageMeta } from '../hooks/usePageMeta';
import { SEO_META } from '../data/seoMeta';

const BlogPage = () => {
    usePageMeta(SEO_META.blog.title, SEO_META.blog.description);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SubHero 
                label="// INTELLIGENCE FEED"
                title="Insights from the frontlines of cyber defense."
                subtitle="Stay ahead of emerging threats with our technical deep-dives, industry analysis, and security best practices."
            />
            <Blog />
        </>
    );
};

export default BlogPage;
