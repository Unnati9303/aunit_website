import React from "react";

const Blog = ({ mode }) => {
  const darkThemeClass = mode ? "dark" : "";

  return (
    <div className={darkThemeClass}>
      <div
        id="6e7ce755-726c-4bc4-b160-56b7824094ba"
        data-section-id="6e7ce755-726c-4bc4-b160-56b7824094ba"
      >
        <div className="dark:text-slate-100 text-neutral-900">
          <section
            id="Blog"
            className="py-20 bg-slate-100 dark:bg-neutral-900"
          >
            <div className="container mx-auto px-4">
              {/* content can go here */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;
