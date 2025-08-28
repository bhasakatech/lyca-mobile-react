import React from "react";
import "./BlogList.css";

const BlogList = (props) => {
  const { heading, blogs = [] } = props;

  return (
    <section className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h1>{heading}</h1>
        </div>

        <div className="blog-cards-container">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div className="blog-card" key={index}>
                <img loading="lazy" src={blog.blogImage} alt={blog.blogTitle} />
                <p>
                  <span>
                    <strong>{blog.blogTitle}</strong>
                  </span>
                </p>
                <p>
                  <span>
                    {blog.blogDate} | by {blog.blogAuthor}
                  </span>
                </p>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
