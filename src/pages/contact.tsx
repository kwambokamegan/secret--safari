import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend wired up yet — just confirm receipt to the user for now.
    setSubmitted(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="bg-white">
      <section className="bg-[#10261d] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question about your next safari? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact info */}
        <div>
          <h2 className="text-2xl font-semibold text-[#10261d] mb-6">
            Get in Touch
          </h2>

          <div className="space-y-4 text-gray-600">
            <p>📍 Nairobi, Kenya</p>
            <p>✉️ hello@secretsafari.co.ke</p>
            <p>📞 +254 700 000 000</p>
          </div>
        </div>

        {/* Contact form */}
        <div>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-1">Thank you!</h3>
              <p>
                Your message has been received. We'll be in touch shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-green-700 font-medium hover:text-green-900 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 transition-colors text-white font-medium px-6 py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </section>
    </div>
  );
}