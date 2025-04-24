import React from "react";
import { BLOGS } from "../constant/data";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  const handleContinueReading = (id) => {
    // Navigate to the detailed blog page using the blog ID
    navigate(`/blogs/${id}`);
  };

  return (
    <section className="max-padd-container">
      <div className="py-16 xl:py-28 rounded-3xl">
        <span className="medium-18">Stay Updated with the Latest News!</span>
        <h2 className="h2">Our Expert Blogs</h2>
        {/* Blog Cards Container */}
        <div
          className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24"
        >
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="rounded-3xl border border-gray-300 shadow-sm overflow-hidden relative"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-64 w-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute top-0 left-0 h-full w-full bg-black/30"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg leading-tight">{blog.title}</h3>
                <h4 className="medium-14 pb-3 pt-1">{blog.category}</h4>
                <button
                  className="bg-white rounded-lg font-medium text-sm text-tertiary px-4 py-2"
                  onClick={() => handleContinueReading(blog.id)}
                >
                  Continue Reading
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
