// // import React, { useEffect } from 'react';
// // import SubHero from '../components/SubHero';
// // import Blog from "../components/Blog";
// // import { usePageMeta } from '../hooks/usePageMeta';
// // import { SEO_META } from '../data/seoMeta';

// // const BlogPage = () => {
// //     usePageMeta(SEO_META.blog.title, SEO_META.blog.description);

// //     useEffect(() => {
// //         window.scrollTo(0, 0);
// //     }, []);

// //     return (
// //         <>
// //             <SubHero 
// //                 label=" "
// //                 title="Cybersecurity Blog: Threat Intelligence & Research"
// //                 subtitle="Stay ahead of emerging threats with technical deep-dives, security research, and practical cyber defense insights."
// //             />
// //             <Blog />
// //         </>
// //     );
// // };

// // export default BlogPage;
// import React, { useEffect } from 'react';
// import SubHero from '../components/SubHero';
// import Blog from "../components/Blog";
// import { usePageMeta } from '../hooks/usePageMeta';
// import { SEO_META } from '../data/seoMeta';

// const BlogPage = () => {
//     usePageMeta(SEO_META.blog.title, SEO_META.blog.description);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <>
//             <SubHero 
//                 label=""
//                 title="Cybersecurity Blog: Threat Intelligence & Research"
//                 subtitle="Stay ahead of emerging threats with technical deep-dives, security research, and practical cyber defense insights."
//             />
//             <Blog />
//         </>
//     );
// };

// export default BlogPage;

import React, { useEffect } from "react";
import SubHero from "../components/SubHero";
import Blog from "../components/Blog";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const BlogPage = () => {
  usePageMeta(SEO_META.blog.title, SEO_META.blog.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubHero
        label=""
        title="Cybersecurity Blog: Threat Intelligence & Research"
        subtitle="Stay ahead of emerging threats with technical deep-dives, security research, and practical cyber defense insights."
        typingTitle={true}
      />
      <Blog />
    </>
  );
};

export default BlogPage;