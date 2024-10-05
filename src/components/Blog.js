import React from 'react';

// Import blog post images
import blogImage1 from '../images/Blog/blog-1.png'; 
import authorImage1 from '../images/Avatar/avatar-1.png';
import blogImage2 from '../images/Blog/blog-2.png'; 
import authorImage2 from '../images/Avatar/avatar-2.png';
import blogImage3 from '../images/Blog/blog-3.png'; 
import authorImage3 from '../images/Avatar/avatar-3.png'; 

const Blog = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0', margin: '0' }}>
      <div className="h-auto py-16">
        {/* First Container */}
        <div className="w-full max-w-[1280px] px-4">
          <div className="flex flex-col gap-8">
            {/* Blog Header */}
            <div className="w-full gap-5 relative">
              <p className="text-purple-600 pb-4 font-bold">Our Blog</p>
              <h1 className="text-36 font-semibold leading-[44px] text-left pb-6" style={{ fontSize: '40px' }}>Latest Blog Posts</h1>
              <p className="text-20 font-normal leading-[30px] text-left">
                Tools and strategies modern teams need to help their companies grow.
              </p>

              {/* View All Posts Button (Desktop Only) */}
              <div className="hidden md:block absolute top-0 right-0">
                <button className="bg-purple-600 text-white h-[48px] px-5 rounded-md" style={{ borderRadius: '10px' }}>
                  View All Posts
                </button>
              </div>
            </div>

            {/* Blog Posts Container */}
            <div className="flex flex-col md:flex-row md:gap-8 pt-10">
              {/* Blog Post 1 */}
              <div className="w-full max-w-[343px] h-auto gap-6 opacity-100 md:max-w-[384px] md:h-auto md:gap-6 pb-10">
                <img src={blogImage1} alt="Blog Post 1" className="w-full h-[240px] object-cover" />
                <div className="w-full h-auto">
                  <h2 className="text-lg font-semibold text-purple-600">Design</h2>
                  <h3 className="text-md font-semibold pb-2" style={{ fontSize: '30px' }}>UX Review Presentations</h3>
                  <p className="text-sm pb-4 text-gray-600">
                    How do you create compelling presentations that wow your colleagues and impress your managers?
                  </p>
                  <div className="flex items-center mt-2">
                    <img src={authorImage1} alt="Author" className="w-[40px] h-[40px] rounded-full mr-2" />
                    <div className="flex flex-col ml-2">
                      <span className="text-sm font-bold">Olivia Rhye</span>
                      <span className="text-sm font-normal">20 Jan 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="w-full max-w-[343px] h-auto gap-6 opacity-100 md:max-w-[384px] md:h-auto md:gap-6 pb-10">
                <img src={blogImage2} alt="Blog Post 2" className="w-full h-[240px] object-cover" />
                <div className="w-full h-auto">
                  <h2 className="text-lg font-semibold text-purple-600">Product</h2>
                  <h3 className="text-md font-semibold pb-2" style={{ fontSize: '30px' }}>Migrating to Linear 101</h3>
                  <p className="text-sm pb-4 text-gray-600">
                    Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
                  </p>
                  <div className="flex items-center mt-2">
                    <img src={authorImage2} alt="Author" className="w-[40px] h-[40px] rounded-full mr-2" />
                    <div className="flex flex-col ml-2">
                      <span className="text-sm font-bold">Phoenix Baker</span>
                      <span className="text-sm font-normal">19 Jan 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="w-full max-w-[343px] h-auto gap-6 opacity-100 md:max-w-[384px] md:h-auto md:gap-6">
                <img src={blogImage3} alt="Blog Post 3" className="w-full h-[240px] object-cover" />
                <div className="w-full h-auto">
                  <h2 className="text-lg font-semibold text-purple-600">Software Engineering</h2>
                  <h3 className="text-md font-semibold pb-2" style={{ fontSize: '30px' }}>Building your API stack</h3>
                  <p className="text-sm pb-4 text-gray-600">
                    The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
                  </p>
                  <div className="flex items-center mt-2">
                    <img src={authorImage3} alt="Author" className="w-[40px] h-[40px] rounded-full mr-2" />
                    <div className="flex flex-col ml-2">
                      <span className="text-sm font-bold">Lana Steiner</span>
                      <span className="text-sm font-normal">18 Jan 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Posts Button (Mobile only) */}
            <div className="flex justify-center pt-6 md:hidden">
              <button className="bg-purple-600 text-white h-[48px] px-5 rounded-md w-11/12" style={{ borderRadius: '10px' }}>
                View All Posts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
