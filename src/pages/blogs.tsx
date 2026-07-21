import { useState, type FormEvent, type ChangeEvent } from "react";
import { initialBlogs } from "@/data/blogs";

interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newBlog: Blog = {
      id: `user-${Date.now()}`,
      title,
      author: author || "Anonymous Traveler",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      image: imagePreview || "/images/hero/hero-1.jpeg",
      content,
    };

    setBlogs((prev) => [newBlog, ...prev]);

    // Reset form
    setTitle("");
    setAuthor("");
    setContent("");
    setImagePreview("");
    setShowForm(false);
  };

  return (
    <div className="bg-white">
      <section className="bg-[#10261d] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Travel Blog</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Stories, adventures, and reflections from travelers exploring
            Kenya's hidden treasures.
          </p>
          <button
            type="button"
            onClick={() => setShowForm((prev) => !prev)}
            className="bg-green-500 hover:bg-green-600 transition-colors text-white font-medium px-6 py-3 rounded-lg"
          >
            {showForm ? "Cancel" : "Share Your Story"}
          </button>
        </div>
      </section>

      {showForm && (
        <section className="container mx-auto px-4 py-12 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="border border-gray-200 rounded-xl p-6 space-y-5"
          >
            <h2 className="text-xl font-semibold text-[#10261d]">
              Write Your Blog
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your adventure title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Optional — defaults to Anonymous Traveler"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-gray-600"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-3 w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Story
              </label>
              <textarea
                required
                rows={6}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tell us about your trip..."
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 transition-colors text-white font-medium px-6 py-3 rounded-lg"
            >
              Post Blog
            </button>
          </form>
        </section>
      )}

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
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