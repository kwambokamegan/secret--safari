import { useState } from "react";
import { initialBlogs } from "@/data/blogs";

export default function Blogs() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="bg-white">
      <section className="bg-[#10261d] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Travel Blog</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stories, adventures, and reflections from travelers exploring
            Kenya's hidden treasures.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialBlogs.map((blog) => {
            const isExpanded = expandedId === blog.id;
            const excerpt =
              blog.content.split("\n\n")[0].slice(0, 160) + "...";

            return (
              <article
                key={blog.id}
                className="border border-gray-200 rounded-xl overflow-hidden flex flex-col"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold mb-2 text-[#10261d]">
                    {blog.title}
                  </h2>

                  <p className="text-sm text-gray-500 mb-4">
                    By {blog.author} · {blog.date}
                  </p>

                  <p className="text-gray-600 leading-6 flex-1">
                    {isExpanded
                      ? blog.content.split("\n\n").map((para, i) => (
                          <span key={i} className="block mb-3">
                            {para}
                          </span>
                        ))
                      : excerpt}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedId(isExpanded ? null : blog.id)
                    }
                    className="mt-4 self-start text-green-700 font-medium hover:text-green-900 transition-colors"
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}